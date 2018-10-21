import { Component } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { UserService} from '../services/user.service';

@Component({
	selector   : 's-logout-pg',
	templateUrl: './logout.component.html',
    styleUrls  : [ './logout.scss'],
})

export class LogoutComponent {
  accessToken: string;
  isAdmin: boolean;
  constructor(private userService: UserService){
 localStorage.removeItem("access_token");
 localStorage.removeItem("role");
    
  }
}
