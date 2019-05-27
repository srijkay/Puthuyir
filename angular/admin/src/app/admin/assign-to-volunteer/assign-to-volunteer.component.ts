import { Component, OnInit } from '@angular/core';
import { AssignToVolunteerService } from '../services/assign_to_volunteer_.service';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import {User} from '../model/user';
import {School} from '../model/School';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {FormGroup, FormControl, Validators, FormBuilder, FormArray} from '@angular/forms';

@Component({
  selector: 'app-assign-to-volunteer',
  templateUrl: './assign-to-volunteer.component.html',
  styleUrls: ['./assign-to-volunteer.component.css']
})
export class AssignToVolunteerComponent implements OnInit {

  assignToVolunteerForm: FormGroup;
  selectedVolunteerControl: FormControl;
  selectedVolunteer: String;
  confirmVolunteer: String;
  volunteerList: User[];
  school: School;

  constructor(private router: Router, private _route: ActivatedRoute, private tservice: AssignToVolunteerService) {}

  ngOnInit() {

    this._route
    .queryParamMap
    .pipe(map(params => params.get('school'))).subscribe(s => {
      this.school = JSON.parse(s);
      console.log(JSON.stringify(this.school));
   });

    this
      .tservice
      .getVolunteerList()
      .subscribe((data: User[]) => {
        this.volunteerList = data;
        console.log(data);
        console.log(JSON.stringify(this.volunteerList));
    });
  }
assignToVolunteer() {
  console.log('selcted volunteer' + this.selectedVolunteer);
  this.confirmVolunteer = this.selectedVolunteer;
  console.log('confirmVolunteer' + this.confirmVolunteer);
}
confirmVolunteerForSchool() {
  console.log('selcted volunteer' + this.selectedVolunteer);
  this.confirmVolunteer = this.selectedVolunteer;
  console.log('confirmVolunteer' + this.confirmVolunteer);
}
onChange($event: any) {
  let text = $event.target.options[$event.target.options.selectedIndex].text;
  console.log('selcted volunteer' + text);
  }
}

