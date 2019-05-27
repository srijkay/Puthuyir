import { Component, OnInit } from '@angular/core';
import {School, Requirement} from '../model/school';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import {BenificiaryEditProjectService} from '../services/beneficiary-edit-project.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {FormGroup, FormControl, Validators, FormBuilder, FormArray} from '@angular/forms';


@Component({
  selector: 'app-benificiary-edit-project',
  templateUrl: './benificiary-edit-project.component.html',
  styleUrls: ['./benificiary-edit-project.component.css']
})
export class BenificiaryEditProjectComponent implements OnInit {

  school: School;
  requirements: Requirement[];
  beneficiaryLinkActivateForm: FormGroup;
  actionItems: FormControl;
  constructor(private router: Router, private _route: ActivatedRoute, private tservice: BenificiaryEditProjectService ) { }
  ngOnInit() {
  this._route
      .queryParamMap
      .pipe(map(params => params.get('school'))).subscribe(s => {
        this.school = JSON.parse(s);
        this.requirements = this.school.requirements;
        console.log(JSON.stringify(this.school));
        console.log(JSON.stringify( this.requirements));
      });

      this.createFormControls();
      this.createForm();
  }
  activateEditLinkToBeneficiary() {
    var actionItem = this.beneficiaryLinkActivateForm.value.actionItems;
    console.log("actionItem:"+actionItem);
  this
  .tservice
  .activateEditLinkToBeneficiary(this.school, actionItem)
  .subscribe((data: School[]) => {
    console.log("zdfg");
});
}
createFormControls() {
  if (!(typeof this.beneficiaryLinkActivateForm === 'object')) {
    this.actionItems = new FormControl('', <any>Validators.required);
  }else{
    //this.actionItems = new FormControl(this.beneficiaryLinkActivateForm.controls.value.actionItems, Validators.required);
  }
}
createForm() {
  this.beneficiaryLinkActivateForm = new FormGroup({
      actionItems: this.actionItems
  })
}
}
