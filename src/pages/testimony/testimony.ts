import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { CreateTestimonyPage } from '../create_testimony/createTestimony';

@Component({
  selector: 'page-testimony',
  templateUrl: 'testimony.html'
})

export class TestimonyPage {
  constructor(public navCtrl: NavController) {
    
  }

  gotoCreateTestimonyPage() {
    this.navCtrl.push(CreateTestimonyPage);
  }
}