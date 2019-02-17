import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-programas',
  templateUrl: 'programas.html',
})

export class ProgramasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgramasPage');
  }

  openBrowser(link){
    const browser = this.iab.create(link,'_system');
  }

}
