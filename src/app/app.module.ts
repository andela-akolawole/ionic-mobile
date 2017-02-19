import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { LazyLoadImageModule } from 'ng2-lazyload-image';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { PostPage } from '../pages/post/postPage';
import { TabsPage } from '../pages/tabs/tabs';
import { VideoPage } from '../pages/video/video';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    PostPage,
    TabsPage,
    VideoPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    LazyLoadImageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    PostPage,
    HomePage,
    VideoPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
