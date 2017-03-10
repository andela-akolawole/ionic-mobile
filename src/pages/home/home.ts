import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PostPage } from '../post/postPage';
import { VideoPage } from '../video/video';
import { TestimonyPage } from '../testimony/testimony';
import { API } from '../../shared/api.service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [API]
})
export class HomePage {

  posts: any = [];

  constructor(public navCtrl: NavController, private Api: API) {

  }

  gotoPostPage(post) {
    this.navCtrl.push(PostPage, {post});
  }

  fetchPost() {
    return this.Api.getPastorPost(5)
        .subscribe(data => {
          return this.posts = data;
        });
  }

  ionViewDidLoad() {
    this.fetchPost();
  }
}
