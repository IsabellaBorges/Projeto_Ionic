import { NavController, NavParams } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.scss'],
})
export class MovieDetailPage implements OnInit {

  public filme;
  public idFilme:string;

  constructor(public navCtrl:NavController, public navParams:NavParams, private params:ActivatedRoute) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.idFilme=this.navParams.get("id");
    console.log("ID do filme:",this.idFilme);
    // this.params.queryParams.subscribe(x=>{ id = x["id"]})
  }


}
