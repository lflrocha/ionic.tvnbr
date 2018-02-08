import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NetPage } from '../net/net';

/**
 * Generated class for the SintonizarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sintonizar',
  templateUrl: 'sintonizar.html',
  entryComponents:[ NetPage ]
})
export class SintonizarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SintonizarPage');
  }

  public gotoNet(){
    this.navCtrl.push(NetPage);
  }


}
