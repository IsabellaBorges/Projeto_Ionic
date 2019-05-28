import { NavController} from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieProviderService } from '../movie-provider.service';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.scss'],
  providers: [MovieProviderService]
})
export class MovieDetailPage implements OnInit {

  public filme;
  public id:string;
  public title:string;
  

  constructor(public navCtrl:NavController, private params:ActivatedRoute, public MovieProviderService:MovieProviderService  ) { }

  ngOnInit() {
   
    
    this.params.queryParams.subscribe(params => {
      this.id = params["id"];
      this.title = params["title"];  
    });
  
    this.MovieProviderService.getMovieDetail(this.id).subscribe(
      data=>{
    const obj=(data as any);
    this.filme=JSON.parse(obj._body);
    console.log(this.filme);

    }, error =>{
      console.log(error);})
    }
  }
    
