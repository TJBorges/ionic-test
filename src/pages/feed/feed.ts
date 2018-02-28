import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams /*, Refresher, RefresherContent*/ } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {
  public objeto_feed = {
    titulo:"TJ Borges",
    data:"Sábado, 17 de Fevereiro de 2018",
    descricao:"Criando um App",
    qtd_likes:12,
    qtd_coments:12,
    time_comment:"Vistos Agora"
  }

  public lista_filmes = new Array<any>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public movieProvaider: MovieProvider
  ) {
  }

  public somaDoisNumeros(n1:number, n2:number):void{
   // alert("A soma dos número é: "+ (n1 + n2));
  }

  ionViewDidLoad() {
    this.movieProvaider.getLatestMovies().subscribe(
      data=>{

        const response = (data as any);
        const objeto_retorno =JSON.parse(response._body);
        this.lista_filmes = objeto_retorno.results;
    
        console.log(objeto_retorno)
      }, error =>{
        console.log(error);
      }
    )
  }

}
