import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Role } from '../models/role';
import { User } from '../models/user';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'


const API_URL = environment.apiUrl;

@Injectable()
export class UserService {

  constructor(
    private http: Http
  ) {
  }

  public getAllRoles(): Observable<Role[]> {
    return this.http
      .get(API_URL + '/roles')
      .map(response => {
        const states = response.json();
        return states.map((role) => new Role(role));
      })

  }

  public register(user: User) {
    return this.http.post(API_URL + '/user', user)
      .map(response => {
        console.log(response.headers);
      })
  }



}
