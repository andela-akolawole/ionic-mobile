import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, Events } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { GalleryPage } from '../pages/gallery/gallery';
import { DailyDevotion } from '../pages/daily_devotion/dailyDev';
import { TestimonyPage } from '../pages/testimony/testimony';
import { VideoPage } from '../pages/video/video';
import { Store } from '../pages/store/store';


@Component({
  selector: 'app-page',
  templateUrl: 'app.html',
  providers: [Nav]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav
  rootPage = TabsPage;
  galleryPage = GalleryPage;

  constructor(platform: Platform, events: Events) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      
      StatusBar.styleDefault();
      Splashscreen.hide();

      // document.addEventListener("pause", () => {
      //   this.toggleVideo("pauseVideo");
      // }, false);

      // document.addEventListener("resume", function () {
      //   this.toggleVideo("playVideo");
      // }, false);
    });
    platform.pause.subscribe(()=>{
      console.log('App Paused');
      events.publish('App:Paused');
    });

    platform.resume.subscribe(()=>{
      console.log('App Resume');
      events.publish('App:Resume');
    }); 
  }

  toggleVideo(state) {
    // if state == 'hide', hide. Else: show video
    var div = document.getElementById("current-play");
    var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
    div.style.display = state == 'hide' ? 'none' : '';
    var func = state == 'hide' ? 'pauseVideo' : 'playVideo';
    iframe.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
  }

  open(value) {
    switch(value) {
      case 'Home':
        this.nav.push(HomePage);
        break;
      case 'Gallery':
        this.nav.push(GalleryPage);
        break;
      case 'Videos':
        this.nav.push(VideoPage);
        break;
      case 'Testimony':
        this.nav.push(TestimonyPage);
        break;
      case 'Daily-dev':
        this.nav.push(DailyDevotion);
        break;
      case 'Store':
        this.nav.push(Store); 
    }
  }
}
