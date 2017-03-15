import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { API } from '../../shared/api.service'

@Component({
    selector: 'post-page',
    templateUrl: 'postPage.html',
    providers: [API]
})
export class PostPage {
    constructor(public navParam: NavParams, public Api: API) {
        this.getPastorPicture();
    }

    post: Object = {};
    pastorPicture: any;
    ionViewDidLoad() {
        this.post = this.navParam.get('post');
    }

    getPastorPicture() {
        return this.Api.getPastorPicture()
            .subscribe(res => {
                return this.pastorPicture = res.url;
            });
    }
}

