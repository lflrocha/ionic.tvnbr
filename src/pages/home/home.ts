import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { VideoPage } from '../video/video';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: Array<{titulo: string, dia: string, videoid: string, descricao: string}>;
  videos: Array<{titulo: string, dia: string, videoid: string, descricao: string}>;
  status: boolean;
  recentes: boolean;

  constructor(public navCtrl: NavController, public http: HttpClient) {

    this.items = [];
    this.videos = [];

    this.status = true;
    this.recentes = false;

    var json, aux, max;
    var titulo, dia, videoid, descricao;

    this.http.get('http://nbr.gov.br/@@youtubejson_view').map(res => res ).subscribe(data => {
        json = data;
        aux = json.videos;
        console.log(aux);
        for (let i = 0; i < aux.length; i++) {
          titulo = aux[i]['titulo'];
          dia = aux[i]['data'];
          dia = Date.parse(dia)
          videoid = aux[i]['videoid'];
          descricao = aux[i]['descricao'];
          this.videos.push({titulo: titulo, dia: dia, videoid: videoid, descricao: descricao})
        }
        max = 5;
        if (this.videos.length < max) {
          max = this.videos.length;
        }
        for (let i = 0; i < max; i++) {
          this.items.push(this.videos[i])
        }
        if (this.items.length > 0) {
          this.recentes = true;
        }
    })
    console.log(this.items);
  }

  doInfinite(infiniteScroll) {
    setTimeout(() => {
      for (let i = 0; i < 4; i++) {
        if (this.items.length < this.videos.length ) {
          let atual = this.items.length;
          this.items.push( this.videos[atual] );
        }
        else {
          infiniteScroll.enable(false);
        }
      }
      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

  itemTapped(event, item) {
    this.status = false;
    this.navCtrl.push(VideoPage, {
      item: item
    });
  }

  ionViewDidEnter() {
    this.status = true;
  }


}
