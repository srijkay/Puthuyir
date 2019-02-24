import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

import {TOKEN_AUTH_PASSWORD, TOKEN_AUTH_USERNAME} from '../services/auth.constant';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  constructor(private http: Http) {
  }

  login(username: string) {
    //const body = `username=${encodeURIComponent(username)}`;
    console.log("email id passing for no data", username);
    var postData = {
      emailAddress: username,
     
    }
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
   console.log("environment url " , environment["user.login.url"]);
    return this.http.post("http://localhost:6060/puthuyir/login", postData, {headers})
      .map(res => res.json())
      .map((res: any) => {
        if (res.token) {
          return res.token;
        }
       
        return res;
      });
  }
}
