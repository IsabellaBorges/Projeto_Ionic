import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public contatos: Array<Object>=[];

  constructor(public navCtrl:NavController){
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




  
}
