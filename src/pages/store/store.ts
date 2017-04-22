import { Component } from '@angular/core';
import { LoadingController, NavController, ToastController, ModalController } from 'ionic-angular';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { GalleryModal } from 'ionic-gallery-modal';
import { BookModal } from '../bookModal/bookModal';
import { API } from '../../shared/api.service';

@Component({
  selector: 'page-store',
  templateUrl: 'store.html',
  providers: [API]
})

export class Store {
  constructor(public modalCtrl: ModalController, public Api: API) {
    this.getEbooks();
  }

  books = [];

  getEbooks() {
    return this.Api.getEbooks()
      .subscribe(res => {
        this.books = res;
      });
  }

  buyBook(book) {
    let bookModal = this.modalCtrl.create(BookModal, { book: book });
    return bookModal.present();
  }

}