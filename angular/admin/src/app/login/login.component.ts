import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {AuthenticationService} from '../services/authentication.service';
import {UserService} from '../services/user.service';
import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider} from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  user: SocialUser;
  model: any = {};
  loading = false;
  error = '';
  redirectUrl: string;

  constructor(private router: Router,
    private authService: AuthService,
              private activatedRoute: ActivatedRoute,
              private authenticationService: AuthenticationService,
              private userService: UserService) {
    this.redirectUrl = this.activatedRoute.snapshot.queryParams['redirectTo'];
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      if (user) {
        localStorage.setItem('USER_SOCIAL_ATTR', JSON.stringify(user));
        console.log( JSON.stringify(user));
        this.login(this.user.email);
      }
    });
  }

  signInWithGoogle(): void {
    console.log('Entering into google');
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  signOut(): void {
    this.authService.signOut();
  }
  login(emailId: string) {
    this.loading = true;

    this.authenticationService.login(emailId)
      .subscribe(
        result => {
          this.loading = false;

          if (result) {
            console.log('this.userService.log', result);
            this.userService.login(result);
           // console.log("this.userService.log" ,result);
            this.navigateAfterSuccess(localStorage.getItem('role'));
           } else {
            this.error = 'Username or password is incorrect';
          }
        },
        error => {
          this.error = 'Username or password is incorrect';
          this.loading = false;
        }
      );
  }

  private navigateAfterSuccess(role: string) {
    if (role) {
      if (role === 'admin') {
        this.router.navigate(['admin']);
      } else if (role === 'beneficiary') {
        this.router.navigate(['schoolregistration']);
      } else if (role === 'sponsor') {
        this.router.navigate(['sponsor']);
      }
      // else if (role === 'volunteer') {
      //   this.router.navigate(['volunteer']);
      // } else if (role === 'approver') {
      //     this.router.navigate(['approver']);
      // }
      else {
        this.router.navigate(['/register']);
      }

    }
  }
}
