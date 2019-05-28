import { MovieProviderService } from './../movie-provider.service';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  providers: [MovieProviderService]

})
export class Tab3Page {

  public contatos: Array<Object>=[];
    

  constructor(public navCtrl:NavController, public MovieProviderService:MovieProviderService){
  this.contatos=[
  
    {
     "nome":"Lucas",
      "img":"https://icon-icons.com/icons2/582/PNG/48/superman_icon-icons.com_55033.png",
      "msg":"Olá!"
    },
    {
      "nome":"Tadeu",
      "img":"https://icon-icons.com/icons2/1736/PNG/48/4043232-avatar-batman-comics-hero_113278.png",
      "msg":"Boa Noite"
    },
    {
      "nome":"Ana",
      "img":"https://icon-icons.com/icons2/582/PNG/48/wonder-women_icon-icons.com_55030.png",
      "msg":"Tudo bem?"  
    
    },
  ]
  }
 
  public teste ():void{
    //alert('Funcionou')
  }
  ngOnInit(){
    this.teste();
    this.MovieProviderService.getPopularMovie()    
    .subscribe(
      data=>{
    const obj=(data as any);
    const obj_json=JSON.parse(obj._body);
    console.log(obj_json);
    }, error =>{
      console.log(error);
    }
    )

    this.MovieProviderService.getMovieLatest()    
    .subscribe(
      data=>{
    const obj=(data as any);
    const obj_json=JSON.parse(obj._body);
    console.log(obj_json);
    }, error =>{
      console.log(error);
    }
    )

  }
  
}
