import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { PostPage } from '../post/postPage';

@Component({
  selector: 'page-video',
  templateUrl: 'video.html'
})

export class VideoPage {
  defaultYoutubePlaceholder = `${window.location.origin}/assets/img/youtube-video.jpg`
  defualtVideoThumbnail: any = `${window.location.origin}/assets/img/video-thumbnail-placeholder.jpg`;
  constructor(public navCtrl: NavController, private sanitizer: DomSanitizer) {

  }

  youtubeList: any =  [
    {
      name: 'First video',
      link: 'https://www.youtube.com/watch?v=Iys9IHmDJ1w',
      img: 'http://img.youtube.com/vi/pJIulyNcrnc/0.jpg'
    },
    {
      name: 'First video',
      link: 'https://www.youtube.com/watch?v=tEgwWtyXxN8',
      img: 'http://img.youtube.com/vi/pJIulyNcrnc/0.jpg'
    },
    {
      name: 'First video',
      link: 'https://www.youtube.com/watch?v=Iys9IHmDJ1w',
      img: 'http://img.youtube.com/vi/pJIulyNcrnc/0.jpg'
    }
  ]

  currentVideo: any = this.sanitizer.bypassSecurityTrustResourceUrl('http://www.youtube.com/embed/M7lc1UVf-VE');

  pickVideo(videoUrl: any) {
    let url = videoUrl.replace("watch?v=", "embed/");
    this.currentVideo = this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }
  gotoPostPage() {
    this.navCtrl.push(PostPage);
  }

}