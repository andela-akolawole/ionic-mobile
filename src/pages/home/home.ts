import { Component } from '@angular/core';
import { LoadingController,NavController } from 'ionic-angular';
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
  limit: any = 5;
  noPost: Boolean = false;

  constructor(public navCtrl: NavController, private Api: API, private loadingController: LoadingController) {

  }

  gotoPostPage(post) {
    this.navCtrl.push(PostPage, { post });
  }

  fetchPost() {
    return this.Api.getPastorPost(this.limit)
      .subscribe(data => {
        if (data.length <= 0) {
          this.noPost = true;
          return data;
        }
        return this.posts = data;
      });
  }

  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: "Hold on, I'm looking for new posts."
    });

    loader.present().then(()=> {
      this.fetchPost();
      loader.dismiss();
    })
  }

  getPost(refresher) {
    setTimeout(() => {
      this.Api.getPastorPost(5)
        .subscribe(data => {
          if (data.length <= 0) {
            this.noPost = true;
            this.posts = data;
            return data;
          }
          return this.posts = data;
        });
      refresher.complete();
    }, 3000)
  }

  loadMore() {
    this.limit = this.limit + 5;
    this.Api.getPastorPost(this.limit)
      .subscribe(data => {
        
        return this.posts = data;
      });
  }
}
