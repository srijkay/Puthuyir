import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/User.service';
import { CommonService } from '../services/common.service';
import { State } from '../models/state';
import { District } from '../models/district';
import { Image } from '../models/image';
import { User } from '../models/user';
import { Role } from '../models/role';
import { Address } from '../models/address';
import { City } from '../models/city';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
  providers: [UserService,CommonService]
})
export class RegisterUserComponent implements OnInit {

  user: User;
  roles: Role[] = [];
  states: State[] = [];
  districts: District[] = [];
  cities: City[] = [];
  image: Image;

  constructor(
    private userService: UserService,private commonService: CommonService
  ) {
  }

  ngOnInit() {
    this.user = new User();
    let address: Address = new Address();
    this.user.address = address;
   


    this.commonService
      .getAllStates()
      .subscribe(
        (states) => {
          this.states = states;
          console.log(this.states);
        }
      );

      this.userService
      .getAllRoles()
      .subscribe(
        (roles) => {
          this.roles = roles;
          console.log(this.roles);
        }
      );
  }

  onStateChange(stateValue) {
    console.log(stateValue);
    this.commonService
      .getDistrictsByState(stateValue)
      .subscribe(
        (districts) => {
          this.districts = districts;
          console.log(this.districts);
        }
      );

  }

  saveImage(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];

      console.log(file);

      this.commonService
        .saveImage(file)
        .subscribe(
          (image) => {
            this.image = image;
            this.user.identityProof = this.image.imageId;
            console.log(this.image.imageId);
          }
        );

    }
  }

  register() {
    console.log(JSON.stringify(this.user));
    this.userService
    .register(this.user)
    .subscribe(
      (data) => {
        console.log("success");
      }
    );
    
  }


}
