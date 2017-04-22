import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { LazyLoadImageModule } from 'ng2-lazyload-image';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { PostPage } from '../pages/post/postPage';
import {TestimonyPage } from '../pages/testimony/testimony';
import { TabsPage } from '../pages/tabs/tabs';
import { VideoPage } from '../pages/video/video';
import { Store } from '../pages/store/store';
import { BookModal } from '../pages/bookModal/bookModal';
import { CreateTestimonyPage } from '../pages/create_testimony/createTestimony';
import { DailyDevotion } from '../pages/daily_devotion/dailyDev';
import { GalleryPage } from '../pages/gallery/gallery';
import { GalleryModal, ZoomableImage } from 'ionic-gallery-modal';

@NgModule({
  declarations: [
    GalleryModal,
    ZoomableImage,
    MyApp,
    HomePage,
    PostPage,
    TabsPage,
    VideoPage,
    TestimonyPage,
    CreateTestimonyPage,
    GalleryPage,
    BookModal,
    Store,
    DailyDevotion
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    LazyLoadImageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    GalleryModal,
    MyApp,
    PostPage,
    HomePage,
    TestimonyPage,
    VideoPage,
    TabsPage,
    BookModal,
    ZoomableImage,    
    CreateTestimonyPage,
    GalleryPage,
    Store,
    DailyDevotion
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
