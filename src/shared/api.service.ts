import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class API {

    private baseUrl = 'http://dtim.herokuapp.com/api'
    constructor(private http: Http) {

    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    getTestimonies(): Observable<any> {
        return this.http.get(`${this.baseUrl}/testimony/approved`)
            .map((res: Response) => {
                return res.json()
            });
    }

    submitTestimony(data):Promise<any> {
        return this.http.post(`${this.baseUrl}/testimony/submit`, data)
        .toPromise()
        .then(res => {
            return res;
        })
        .catch(this.handleError);
    }

    getGalleryImages(limit): Observable<any> {
        return this.http.get(`${this.baseUrl}/gallery/images?limit=${limit}`)
            .map((res: Response) => {
                return res.json();
            })
    }

    getPastorPost(limit): Observable<any> {
        return this.http.get(`${this.baseUrl}/pastor-post/get?limit=${limit}`)
            .map((res: Response) => {
                return res.json();
            })
    }

}