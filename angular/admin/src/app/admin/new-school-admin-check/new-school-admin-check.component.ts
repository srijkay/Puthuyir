import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {NewSchoolAdminCheckService} from '../services/new-school-admin-check.service';
import {School, Project} from '../model/school';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';
import { StatusResponse } from '../model/statusresponse';

@Component({
  selector: 'app-new-school-admin-check',
  templateUrl: './new-school-admin-check.component.html',
  styleUrls: ['./new-school-admin-check.component.css']
})
export class NewSchoolAdminCheckComponent implements OnInit {
  school: School;
  message: string;
  constructor(private router: Router, private _route: ActivatedRoute, private tservice: NewSchoolAdminCheckService ) { }

  ngOnInit() {
   this._route
      .queryParamMap
      .pipe(map(params => params.get('school'))).subscribe(s => {
        this.school = JSON.parse(s);
        console.log(JSON.stringify(s));
      });
  }
  submitRequirement(school: School) {
    let project:Project;
    let projectid: Number;
    school.projects.forEach(p => {
      if(p.status=='PROJECT_CREATED') {
        project=p;
        projectid=p.projectId;
        for(let i=0;i<project.requirements.length;i++) {
          project.requirements[i].status='REQ_CONFIRMED';
        }
      }
    });
   //project.school=school;
   console.log('project:'+JSON.stringify(project));

    this
    .tservice
    .confirmRequirements(projectid,'ReqConfirmed')
    .subscribe((data: StatusResponse) => {
       console.log('completed'+ JSON.stringify(data));
       if(data.status){
         this.showPopUp("Requirements confirmed successfully for the ProjectID "+projectid );
       }else{
        this.showPopUp("Update failed, Please try again later!");
       }
   });
}
showPopUp(message: string){
  var modal = document.getElementById('myModal');
  modal.style.display = "block";
  this.message=message;
}
disablePopUp(message: string){
  var modal = document.getElementById('myModal');
  modal.style.display = "none";
}
returnToBeneficiary(school: School) {
  const navigationExtras: NavigationExtras = {
    queryParams: { 'school': JSON.stringify(school) }
  };
  this.router.navigate(['/admin/beneficiary_edit_project_link'], navigationExtras);
}
}
