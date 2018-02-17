import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Refresher, RefresherContent } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public nomeUsuario:string = "TJ Borges";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDoisNumeros(n1:number, n2:number):void{
    alert("A soma dos número é: "+ (n1 + n2));
  }

  ionViewDidLoad() {
    //this.somaDoisNumeros(6,2);
  }

}
