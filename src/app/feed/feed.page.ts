import { NavController } from '@ionic/angular';
import { Component } from '@angular/core';
import { MovieProviderService } from '../movie-provider.service';

@Component ({
  selector: 'app-feed',
  templateUrl: 'feed.html',
  styleUrls: ['feed.scss'],
  providers: [MovieProviderService]


})
export class FeedPage {

  public lista_filmes:Array<any>;

  constructor(public navCtrl:NavController, public MovieProviderService:MovieProviderService){

  }
  ngOnInit() {
    this.MovieProviderService.getPopularMovie().subscribe(
      data=>{
    const obj=(data as any);
    const obj_json=JSON.parse(obj._body);
    // this.lista_filmes=new Array<any>();
    this.lista_filmes=obj_json.results;
    // console.log(this.lista_filmes);
    }, error =>{
      console.log(error);
    }
    )
  }


}
