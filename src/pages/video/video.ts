import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, LoadingController } from 'ionic-angular';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { YoutubeService } from '../../providers/youtube-service/youtube-service';
import { PostPage } from '../post/postPage';

@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
  providers: [YoutubeService]
})

export class VideoPage {
  defaultYoutubePlaceholder = `${window.location.origin}/assets/img/youtube-video.jpg`
  defualtVideoThumbnail: any = `${window.location.origin}/assets/img/video-thumbnail-placeholder.jpg`;
  currentVideo: any = this.sanitizer.bypassSecurityTrustResourceUrl('');
  channelID: string = 'UCsemGiQ-B2Wh42kLI_4u6_g';
  
  maxResults: string = '10';
  pageToken: string;
  googleToken: string = 'AIzaSyC1GOmZxOIs4Bi7xfwfVh9MymeSLR6tufs';
  searchQuery: string = '';
  youtubeList: any;
  onPlaying: boolean = false;

  constructor(public navCtrl: NavController, private sanitizer: DomSanitizer,
    private http: Http, private loadingController: LoadingController, public ytPlayer: YoutubeService) {
      this.fetchData();
  }

  launchYTPlayer(id, title): void {
    this.ytPlayer.launchPlayer(id, title);
  }

  fetchData(): void {

    let url = 'https://www.googleapis.com/youtube/v3/search?part=id,snippet&channelId=' + this.channelID + '&q=' + this.searchQuery + '&type=video&order=viewCount&maxResults=' + this.maxResults + '&key=' + this.googleToken;

    if (this.pageToken) {
      url += '&pageToken=' + this.pageToken;
    }
    let loader = this.loadingController.create({
      content: 'Getting Videos',
    });

    loader.present().then(() => {
      this.http.get(url).map(res => res.json()).subscribe(data => {
        this.youtubeList = data.items;
        const videoId = this.youtubeList[0].id.videoId;
        let videoUrl = `https://youtube.com/embed/${videoId}`;
        this.currentVideo = this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
        console.log(this.youtubeList);
        loader.dismiss();
      });
    });
  }

  pickVideo(video: any) {
    let url = `https://youtube.com/embed/${video.id.videoId}`
    this.currentVideo = this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }
  gotoPostPage() {
    this.navCtrl.push(PostPage);
  }

}