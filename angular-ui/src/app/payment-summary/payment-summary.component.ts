import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {SchoolService} from '../services/school.service';
import {Router} from "@angular/router";
import {School} from '../model/school';

@Component({
  selector: 'app-payment-summary',
  templateUrl: './payment-summary.component.html',
  styleUrls: ['./payment-summary.component.css']
})
export class PaymentSummaryComponent implements OnInit {

paymentSummaryForm:FormGroup;
donarFirtName : FormControl;
donarLastName : FormControl;
donarEmailId : FormControl;
donarPhoneNo : FormControl;

donor:FormGroup;
userid : FormControl;

schoolName : FormControl;
amount : FormControl;
requirementDesc : FormControl;
paymentMode : FormControl;

project:FormGroup;
projectId : FormControl;

donationSchoolInfo: School;
donateScreenForm:FormGroup;

constructor(private schoolService: SchoolService, private router: Router) { }

  ngOnInit() {
    this.schoolService.currentDonateScreenForm.subscribe(donateScreenForm => this.donateScreenForm = donateScreenForm);
    this.getDonationSchoolInfo();
    this.getDonateScreenForm();
    this.getPaymenSummaryInfo();
    this.createForm();
  }


    getDonationSchoolInfo() {
      this.schoolService.currentDonationSchoolInfo.subscribe(donationSchoolInfo => this.donationSchoolInfo = donationSchoolInfo);
    }

  getPaymenSummaryInfo() {
    this.donarFirtName = new FormControl('Kamal', <any>Validators.required);
    this.donarLastName = new FormControl('Durairaj', <any>Validators.required);
    this.donarEmailId = new FormControl('kamal@gmail.com', <any>Validators.required);
    this.donarPhoneNo = new FormControl('1231231233', <any>Validators.required);
    this.schoolName = new FormControl(this.donationSchoolInfo.schoolInfo.schoolName, <any>Validators.required);
    this.amount = new FormControl(this.donateScreenForm.controls.contributeAmt.value, <any>Validators.required);
    this.userid = new FormControl(2, <any>Validators.required);
    this.projectId = new FormControl(1, <any>Validators.required);

    let requs = this.donationSchoolInfo.requirements
    let length = requs.length;
    var reqDes = new String("");
    console.log(length);
    for(var i=0;i<length;i++) {
      var req = requs[i];
      var rType = new String(req.reqType);
      console.log(rType);
      var aType = new String(req.assetType);
      var aName = new String(req.assetName);
      var qty = new String(req.quantity);

    }
    console.log(reqDes);

    this.requirementDesc = new FormControl(reqDes, <any>Validators.required);
    this.paymentMode = new FormControl('cash', <any>Validators.required);

  }

  createForm() {
      this.paymentSummaryForm = new FormGroup({
        donarFirtName: this.donarFirtName,
        donarLastName: this.donarLastName,
        donarEmailId: this.donarEmailId,
        donarPhoneNo: this.donarPhoneNo,
        schoolName: this.schoolName,
        amount: this.amount,
        donor: new FormGroup({
          userid: this.userid
        }),
        project: new FormGroup({
          projectId: this.projectId
        }),
        requirementDesc: this.requirementDesc,
        paymentMode: this.paymentMode
      });
  }

  getDonateScreenForm() {
    this.schoolService.currentDonateScreenForm.subscribe(donateScreenForm => this.donateScreenForm = donateScreenForm);
  }

  private prepareSave(): any {
    let input = new FormData();
    input.append('payload', JSON.stringify(this.paymentSummaryForm.value));
    return input;
  }

  makePayment(event:any) {
    event.preventDefault();

    //const formModel = this.prepareSave();

    this.schoolService.makePayment(JSON.stringify(this.paymentSummaryForm.value))
      .subscribe(
        (response) => {
          console.log(response);
          this.router.navigate(['paymentConfirmation']);
        },
        (error) => console.log(error)
      );
  }

}
