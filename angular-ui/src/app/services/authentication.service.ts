import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

import {TOKEN_AUTH_PASSWORD, TOKEN_AUTH_USERNAME} from '../services/auth.constant';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  static AUTH_TOKEN = 'http://localhost:6060/login';

  constructor(private http: Http) {
  }

  login(username: string, password: string) {
    const body = `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&grant_type=password`;
    var postData = {
      emailAddress: username,
      password: password
    }
    let token = localStorage.getItem("access_token");
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    if(token != null){
  headers.append('Authorization', token);
    }
    headers.append('Authorization', 'Basic ' + btoa(TOKEN_AUTH_USERNAME + ':' + TOKEN_AUTH_PASSWORD));

    return this.http.post(AuthenticationService.AUTH_TOKEN, postData, {headers})
      .map(res => res.json())
      .map((res: any) => {
        if (res.token) {
          return res.token;
        }
        return null;
      });
  }
}
