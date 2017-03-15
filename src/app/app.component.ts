import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { GalleryPage } from '../pages/gallery/gallery';
import { DailyDevotion } from '../pages/daily_devotion/dailyDev';
import { TestimonyPage } from '../pages/testimony/testimony';
import { VideoPage } from '../pages/video/video';


@Component({
  selector: 'app-page',
  templateUrl: 'app.html',
  providers: [Nav]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav
  rootPage = TabsPage;
  galleryPage = GalleryPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[5];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
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
    }
  }
}
