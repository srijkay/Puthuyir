import {Injectable} from '@angular/core';
import {JwtHelper} from 'angular2-jwt';

import {TOKEN_NAME} from '../constant/auth-constant';
import {ROLE} from '../constant/auth-constant';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  jwtHelper: JwtHelper = new JwtHelper();
  accessToken: string;
  isAdmin: boolean;
  role: string;

  constructor() {
  }

  login(accessToken: string) {
    const decodedToken = this.jwtHelper.decodeToken(accessToken);
    let jwtToken = accessToken.split('.')[1];
    let decodeJWTJSONData = window.atob(jwtToken);
    let decodedJWTData = JSON.parse(decodeJWTJSONData);
    let role = decodedJWTData.roles;

    
    if(role === "ADMIN"){
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
