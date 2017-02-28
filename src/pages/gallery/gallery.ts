import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { GalleryModal } from 'ionic-gallery-modal';

@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html'
})

export class GalleryPage {
  constructor(public modalCtrl: ModalController) {
    
  }

  photos: any = [
     {
       url: 'http://demandware.edgesuite.net/sits_pod14-adidas/dw/image/v2/aagl_prd/on/demandware.static/-/Sites-adidas-products/default/dwb3c91397/zoom/BA7325_01_standard.jpg?sw=500&sfrm=jpg'
     },
     {
       url: 'http://demandware.edgesuite.net/sits_pod14-adidas/dw/image/v2/aagl_prd/on/demandware.static/-/Sites-adidas-products/default/dw0a682ca9/zoom/BA7326_01_standard.jpg?sw=2000&sfrm=jpg'
     },
     {
       url: 'http://demandware.edgesuite.net/sits_pod14-adidas/dw/image/v2/aagl_prd/on/demandware.static/-/Sites-adidas-products/default/dw0a682ca9/zoom/BA7326_01_standard.jpg?sw=2000&sfrm=jpg'
     },
     {
       url: 'http://demandware.edgesuite.net/sits_pod14-adidas/dw/image/v2/aagl_prd/on/demandware.static/-/Sites-adidas-products/default/dw0a682ca9/zoom/BA7326_01_standard.jpg?sw=2000&sfrm=jpg'
     }
  ];

presentGalleryModal(index) {
   let profileModal = this.modalCtrl.create(GalleryModal, {
        photos: this.photos,
        initialSlide: index
    });
    profileModal.present();
 }

  
}