import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams /*, Refresher, RefresherContent*/ } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public objeto_feed = {
    titulo:"TJ Borges",
    data:"Sábado, 17 de Fevereiro de 2018",
    descricao:"Criando um App",
    qtd_likes:12,
    qtd_coments:12,
    time_comment:"11h atrás"
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDoisNumeros(n1:number, n2:number):void{
    alert("A soma dos número é: "+ (n1 + n2));
  }

  ionViewDidLoad() {
    //this.somaDoisNumeros(6,2);
  }

}
