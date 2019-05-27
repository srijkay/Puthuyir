import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {User} from '../model/user';
import {AdminRoleCheckService} from '../services/admin-role-check.service';

@Component({
  selector: 'app-admin-role-check',
  templateUrl: './admin-role-check.component.html',
  styleUrls: ['./admin-role-check.component.css']
})
export class AdminRoleCheckComponent implements OnInit {

  user: User;
  constructor(private router: Router, private _route: ActivatedRoute, private tservice: AdminRoleCheckService ) { }

  ngOnInit() {
   // console.log(JSON.stringify(this._route.snapshot.params['user']));
      this._route.params.subscribe((params) => {
        console.log("params:"+params);
       // console.log("params:"+JSON.stringify(params));
        this.user = JSON.parse(params["user"]);
       // this.user.address = params["address"];
       // this.user = JSON.parse(JSON.stringify(params));

        //console.log("user:"+this.user);
        console.log("user:"+JSON.stringify(this.user));
        //console.log("address:"+this.user.address);
        //console.log("address:"+JSON.stringify(this.user.address));

 });

}
public approveUserRequest(user: User, status: string): void {
  console.log(JSON.stringify(user)+ "status:"+status);
  this
    .tservice
    .approveUserRequest(user, status)
    .subscribe((data: string[]) => {
      console.log(data);
  });
}
public calculateAge(birthdate: Date): number {
  console.log("birthdate:"+birthdate);
  //var timeDiff = Math.abs(Date.now() - birthdate.getTime());
  //var age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
 // console.log("age:"+age);
  return 24;//age;
  }
}
