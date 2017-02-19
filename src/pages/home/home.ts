import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PostPage } from '../post/postPage';
import { VideoPage } from '../video/video';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  gotoPostPage() {
    this.navCtrl.push(VideoPage);
  }

}
