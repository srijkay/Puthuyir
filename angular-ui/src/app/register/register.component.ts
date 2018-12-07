import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import {UserService} from '../services/user.service';
import {User} from '../model/user';
import {Address} from '../model/address';
import {RegisterService} from '../services/register-service';

@Component({
    selector: 'register',
    templateUrl: './register.component.html'
    //styleUrls: ['./school-registration.component.css']
  })
//@Component({templateUrl: 'register.component.html'})

export class RegisterComponent implements OnInit {
  user: User;
  address: Address;
  
  constructor(
    private registerService: RegisterService
  ) {
  }

  ngOnInit() {
    this.user = new User();
    let address: Address = new Address();
    let socialEmail = JSON.parse(localStorage.getItem("USER_SOCIAL_ATTR"));
    this.user.emailAddress=socialEmail.email;
    this.user.roleId="beneficiary";
    this.user.address = address;
  }

  
  register() {
    console.log(JSON.stringify(this.user));
    this.registerService.registerUser(JSON.stringify(this.user));
  }
    
    
  

}
