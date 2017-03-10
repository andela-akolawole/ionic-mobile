import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
    selector: 'post-page',
    templateUrl: 'postPage.html'
})
export class PostPage {
    constructor(public navParam: NavParams) {
        
    }

    post: Object = {};

    ionViewDidLoad() {
        this.post = this.navParam.get('post');
    }
}

