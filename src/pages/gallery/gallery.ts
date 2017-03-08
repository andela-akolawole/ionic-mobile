import { Component } from '@angular/core';
import { LoadingController, NavController, ToastController, ModalController } from 'ionic-angular';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { GalleryModal } from 'ionic-gallery-modal';
import { API } from '../../shared/api.service';

@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
  providers: [API]
})

export class GalleryPage {
  constructor(public modalCtrl: ModalController,
    public Api: API,
    public loadingController: LoadingController) {

  }

  photos: any;
  limit: any;

  presentGalleryModal(index) {
    let profileModal = this.modalCtrl.create(GalleryModal, {
      photos: this.photos,
      initialSlide: index
    });
    profileModal.present();
  }

  ionViewDidLoad() {
    this.Api.getGalleryImages(5)
      .subscribe(res => {
        console.log(res, 'res');
        this.photos = res;
      });
  }

  getGalleryImages(refresher) {
    setTimeout(() => {
      this.Api.getGalleryImages(5)
        .subscribe(data => {
          this.limit = data.length;
          this.photos = data;
        });
      refresher.complete();
    }, 3000)
  }

  loadMore() {
    const newLimit = 5
    this.limit = this.limit + newLimit;
    this.Api.getGalleryImages(this.limit)
      .subscribe(data => {
        this.limit = data.length;
        this.photos = data;
      });
  }


}