import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MovieProviderService {

  private baseURL: string="https://api.themoviedb.org/3/movie/";
  constructor(public http:Http) {
  console.log ('Olá MovieProvider');
  }
  public getMovieLatest(){
    return this.getMovie("latest");
  }

  public getPopularMovie() {
  return this.getMovie("popular");
    
  }
  
  public getMovie(url:string){

  return this.http.get(this.baseURL+url+this.getApiKey());
  
  
  }
    private getApiKey():string{
      return"?api_key=5bc9cc03744edb2ecc7159f0264258df"
    }

 



  }


