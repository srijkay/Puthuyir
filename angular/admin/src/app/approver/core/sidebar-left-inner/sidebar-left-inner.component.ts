import { Component, OnInit } from '@angular/core';
import { SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-sidebar-left-inner',
  templateUrl: './sidebar-left-inner.component.html'
})
export class SidebarLeftInnerComponent  implements OnInit {
  role:string;
  user: SocialUser;
  ngOnInit() {
    this.role=localStorage.getItem('role');
    this.user=JSON.parse(localStorage.getItem("USER_SOCIAL_ATTR"));
    console.log("user"+JSON.stringify(this.user));
   }
}
