import { Component } from '@angular/core';
import { LoadingController, NavController, ToastController } from 'ionic-angular';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { GalleryModal } from 'ionic-gallery-modal';
import { TestimonyApi } from '../../shared';

@Component({
  selector: 'page-createTestimony',
  templateUrl: 'createTestimony.html',
  providers: [TestimonyApi]
})

export class CreateTestimonyPage {
  form: Object = {};
  constructor(public navCtrl: NavController,
    private testimonyApi: TestimonyApi,
    private loadingController: LoadingController,
    private toastController: ToastController) { }

  submitTestimony() {
    this.testimonyApi.submitTestimony(this.form)
      .then(res => {
        if (res) {
          const toast = this.toastController.create({
            message: 'You have successfully submitted your testimony',
            duration: 3000,
            position: 'bottom'
          });
          this.form = {};
          return toast.present();
        }
      },
      err => {
        if (err) {
          const toast = this.toastController.create({
            message: 'Your testimony was not sent',
            duration: 3000
          });
          toast.present();
        }
      });
  }

}