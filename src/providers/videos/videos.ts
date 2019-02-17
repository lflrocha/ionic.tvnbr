import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the VideosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VideosProvider {

  constructor(public http: HttpClient) {
    console.log('Hello VideosProvider Provider');
  }

  getRemoteData(){
    var json;
      this.http.get('http://nbr.gov.br/@@youtubejson_view').map(res => res ).subscribe(data => {
          json = data;
      })
  }

}
