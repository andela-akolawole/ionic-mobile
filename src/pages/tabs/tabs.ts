import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { PostPage } from '../post/postPage';
import { DailyDevotion } from '../daily_devotion/dailyDev';
import { VideoPage } from '../video/video';
import { GalleryPage } from '../gallery/gallery';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = DailyDevotion;
  tab3Root: any = GalleryPage;
  tab4Root: any = VideoPage;

  constructor() {

  }
}
