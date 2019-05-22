import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public bemvindo:string="Bem Vindo ao Ionic 4!";
  constructor (public navCtrl:NavController) {
  }

    public teste ():void{
      alert('Funcionou')
    }
    ngOnInit(){
      this.teste();
      
    }
  }
 


  