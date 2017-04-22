import { Component } from '@angular/core';
import { LoadingController, Platform,
   NavController, ToastController, 
   ModalController, ViewController, NavParams   } from 'ionic-angular';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { GalleryModal } from 'ionic-gallery-modal';
import { API } from '../../shared/api.service';

declare var window: any;
declare var cordova: any

@Component({
  selector: 'page-book-modal',
  templateUrl: 'bookModal.html',
  providers: [API, InAppBrowser]
})


export class BookModal {
  constructor(public modalCtrl: ModalController, public viewCtrl: ViewController, 
    public navParam: NavParams, public platform: Platform,
    private iab: InAppBrowser) {
  }

  book = this.navParam.get("book");


  dismiss() {
    const nav = this.navParam.get("book");
    this.viewCtrl.dismiss(nav);
  }

  payNow(url) {
    this.platform.ready().then(() => {
      this.iab.create(url);
    });
  }

}