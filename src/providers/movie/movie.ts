import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class MovieProvider {

  private baseApiPath = "https://api.themoviedb.org/3";

  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

<<<<<<< HEAD
=======
  //Teste de commit excluido
>>>>>>> parent of cd4e653... Revert "teste de commit excluido"

  getLatestMovies(){
    return this.http.get(this.baseApiPath + "/movie/now_playing?api_key=7e40a7b47945894173a6957518ad79e1");
  }
}
