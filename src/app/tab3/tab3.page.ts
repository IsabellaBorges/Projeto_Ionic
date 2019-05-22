import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import {Http} from '@angular/http'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public contatos: Array<Object>=[];
  
  private baseURL: string="https://api.themoviedb.org/3";

  constructor(public navCtrl:NavController, public http:Http){
  this.contatos=[
  
    {
     "nome":"Joao",
      "img":"https://icon-icons.com/icons2/582/PNG/128/boy_icon-icons.com_55048.png",
      "msg":"Olá!"
    },
    {
      "nome":"Leo",
      "img":"https://icon-icons.com/icons2/582/PNG/128/man_icon-icons.com_55040.png",
      "msg":"Boa Noite"
    },
    {
      "nome":"Jubileia",
      "img":"https://icon-icons.com/icons2/582/PNG/128/girl_icon-icons.com_55043.png",
      "msg":"Tudo bem?"  
    
    },
  ]
  }
 
  public teste ():void{
    //alert('Funcionou')
  }
  ngOnInit(){
    this.teste();
    
      this.http.get(this.baseURL+"/movie/popular"+this.getApiKey()).subscribe(
        data=>{
      const obj=(data as any);
      const obj_json=JSON.parse(obj._body);
      console.log(obj_json);
      }, error =>{
        console.log(error);
      }
      )
    }
      private getApiKey():string{
        return"?api_key=5bc9cc03744edb2ecc7159f0264258df"
      }
 
    
  }



  

