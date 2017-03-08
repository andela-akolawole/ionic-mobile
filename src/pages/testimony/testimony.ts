import { Component } from '@angular/core';
import { LoadingController, NavController, ToastController } from 'ionic-angular';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { CreateTestimonyPage } from '../create_testimony/createTestimony';
import { API } from '../../shared';

@Component({
  selector: 'page-testimony',
  templateUrl: 'testimony.html',
  providers: [API]
})

export class TestimonyPage {

  testimonies: any;
  checkTestimony: Boolean = false;
  constructor(public navCtrl: NavController,
    private testimonyApi: API,
    private loadingController: LoadingController,
    private toastController: ToastController) { }

  gotoCreateTestimonyPage() {
    this.navCtrl.push(CreateTestimonyPage);
  }


  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: 'Getting testimonies...',
    });
    loader.present().then(() => {
      this.testimonyApi.getTestimonies()
        .subscribe(data => {
          console.log(data, 'mydate');
          this.testimonies = data;
          this.checkTestimony = true;
          loader.dismiss();
        });
    })
  }

  getTestimonies(refresher) {
    setTimeout(() => {
      this.testimonyApi.getTestimonies()
        .subscribe(data => {
          console.log(data, 'mydate');
          this.testimonies = data;
        });
        refresher.complete();
    }, 3000)
  }
}