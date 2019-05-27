import {Injectable} from '@angular/core';
import {JwtHelper} from 'angular2-jwt';

import {TOKEN_NAME} from '../constant/auth-constant';
import {ROLE} from '../constant/auth-constant';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  jwtHelper: JwtHelper = new JwtHelper();
  accessToken: string;
  isAdmin: boolean;
  role: string;
  constructor(private http: HttpClient) { }


  login(accessToken: string) {
    const decodedToken = this.jwtHelper.decodeToken(accessToken);
    console.log('decodedToken' , decodedToken);
    const role = decodedToken.roles;
     console.log('role' , role);
    if (role === 'ADMIN') {
      this.isAdmin = true;

    }

    this.accessToken = accessToken;

    localStorage.setItem(TOKEN_NAME, accessToken);
    localStorage.setItem(ROLE, role);
  }


  isAdminUser(): boolean {
    return this.isAdmin;
  }

  isUser(): boolean {
    return this.accessToken && !this.isAdmin;
  }
}
