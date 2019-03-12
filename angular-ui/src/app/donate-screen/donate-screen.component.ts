import { Component, OnInit } from '@angular/core';

import {SchoolService} from '../services/school.service';
import {School} from '../model/school';
import {FormGroup,FormControl,Validators} from '@angular/forms';

import {Router} from "@angular/router";

@Component({
  selector: 'app-donate-screen',
  templateUrl: './donate-screen.component.html',
  styleUrls: ['./donate-screen.component.css']
})
export class DonateScreenComponent implements OnInit {

  donateScreenForm: FormGroup;
  estTotAmt: FormControl;
  collectedAmt: FormControl;
  contributeUptoAmt: FormControl;
  contributeAmt: FormControl;
  schoolName: FormControl;

  donationSchoolInfo: School;

  constructor(private schoolService: SchoolService, private router: Router) { }

  ngOnInit() {
    this.getDonationSchoolInfo();
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.estTotAmt = new FormControl('10000', <any>Validators.required);
    this.collectedAmt = new FormControl('900', <any>Validators.required);
    this.contributeUptoAmt = new FormControl('1000', Validators.required);
    this.contributeAmt = new FormControl('', Validators.required);
    this.schoolName = new FormControl(this.donationSchoolInfo.schoolInfo.schoolName, Validators.required);
  }

  createForm() {
      this.donateScreenForm = new FormGroup({
        schoolName: this.schoolName,
        estTotAmt: this.estTotAmt,
        collectedAmt: this.collectedAmt,
        contributeUptoAmt: this.contributeUptoAmt,
        contributeAmt: this.contributeAmt
      });
  }

  getDonationSchoolInfo() {
    this.schoolService.currentDonationSchoolInfo.subscribe(donationSchoolInfo => this.donationSchoolInfo = donationSchoolInfo);
  }

  goToPaymentSummary() {
    this.schoolService.enterDonateInfo(this.donateScreenForm);
    this.router.navigate(['paymentSummary']);
  }


}
