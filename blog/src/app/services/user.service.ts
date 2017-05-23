import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
 
// import { User } from '../_models/index';
import { AuthenticationService } from "app/services/authentication.service";
 
@Injectable()
export class UserService {
  constructor(
     private _http: Http,
     private _authenticationService: AuthenticationService) {
  }

  getUsers() {
    // add authorization header with jwt token
    const headers = new Headers({ 'Authorization': 'Bearer ' + this._authenticationService.token });
    const options = new RequestOptions({ headers: headers });

    // get users from api
    return this._http.get('/api/users', options)
      .map((response: Response) => response.json());
  }
}