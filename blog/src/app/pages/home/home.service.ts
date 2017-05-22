import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';



@Injectable()
export class HomeService {
  constructor(private _http: Http) { }
  getArticle() {
    return this._http.get('assets/data/article.json')
    // return this._http.get('http://172.16.115.61:3000/api/v1/articles')
      .map((res: any) => { return res.json(); });
  }

  getCategory() {
    return this._http.get('assets/data/category.json')
      .map((res: any) => {
        return res.json();
      });
  }
}
