import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {

  item: any;
  videoUrl: string;
  trustedVideoUrl: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private sanitizer: DomSanitizer) {
    this.item = navParams.get('item');
    this.videoUrl = 'https://www.youtube.com/embed/' + this.item.videoid
    this.trustedVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoPage');
  }

}
