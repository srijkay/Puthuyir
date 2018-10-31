import { Component, OnInit } from '@angular/core';
import {FormGroup, FormArray} from '@angular/forms';
import {SchoolService} from '../services/school.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-school-registration',
  templateUrl: './view-school-registration.component.html',
  styleUrls: ['./view-school-registration.component.css']
})
export class ViewSchoolRegistrationComponent implements OnInit {
  schoolRegForm:FormGroup;
  url = '';
  
  loading: boolean = false;
  
  constructor( private schoolService: SchoolService,private router: Router) { }

  ngOnInit() {
    this.schoolService.currentSchoolRegForm.subscribe(schoolRegForm => this.schoolRegForm = schoolRegForm);
    this.schoolService.currentImageUrlBS.subscribe(url => this.url = url);

        console.log('AAAAAAAAAAAAA'+((<FormArray>this.schoolRegForm.controls.requirements).length));
/*
    for (i = num; i < this.tmpRequirements.length; i++) {
      var requirement = this.tmpRequirements.at(i);
      console.log(requirement.value.reqType);
      (<FormArray>this.schoolRegForm.controls.requirements).push(new FormGroup({
        reqType: new FormControl(requirement.value.reqType),
        assetType: new FormControl(requirement.value.assetType),
        assetName: new FormControl(requirement.value.assetName),
        quantity: new FormControl(requirement.value.quantity)
      }));
    }*/
  }

  gotoSchoolRegPage() {
    console.log('asdf');
    this.router.navigate(['schoolregistration']);
  }

  
  private prepareSave(): any {
    let input = new FormData();
    input.append('payload', JSON.stringify(this.schoolRegForm.value));
    input.append('files', this.schoolRegForm.controls.proofOfId.get('image').value);
    return input;
  }

  addSchoolRegForm() {
    const formModel = this.prepareSave();
    this.loading = true;
    this.schoolService.registerSchool(formModel)
      .subscribe(
        (response) => {
          this.loading = false;
          console.log(response);
          this.router.navigate(['schoollist']);
        },
        (error) => console.log(error)
      );
  }
}
