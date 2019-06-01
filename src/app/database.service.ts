import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private sqlite:SQLite) { }

  public getDB(){
    return this.sqlite.create ({
     name:'moviedb',
     location: 'defaut'
   
   });
   }
   
   
   public createDatabase(){
    return this.getDB()
    .then((db: SQLiteObject) => {

        // Criando as tabelas
        this.createTables(db);

     

      })
      .catch(e => console.log(e));
  }

  private createTables(db: SQLiteObject) {

    return db.sqlBatch(
      [
        ['CREATE TABLE IF NOT EXISTS MOVIE (id integer primary key NOT NULL, backdrop_path VARCHAR(100), original_title VARCHAR(100) NOT NULL, overview VARCHAR(1000), poster_path VARCHAR(100), title VARCHAR(100) NOT NULL)'],
        ['CREATE TABLE IF NOT EXISTS genres(id integer primary key NOT NULL, name VARCHAR(60)NOT NULL) '],
        // ['...']
        [' CREATE TABLE IF NOT EXISTS movie_genres(id_movie integer NOT NULL, id_genres integer NOT NULL, FOREING KEY (id_movie) REFERENCES movie(id), FOREING KEY (id_genres) REFERENCES genres(id), PRIMARY KEY (id_movie, id_genres)']
      ])  
     
  
        .then(() =>{
          console.log('Deu certo a criação das tabelas')})
         
          .catch(e => console.error('Erro ao criar as tabelas', e));
        }
        
        }
            
   




   
  