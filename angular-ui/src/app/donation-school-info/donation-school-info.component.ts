import { Component, OnInit } from '@angular/core';
import {SchoolService} from '../services/school.service';
import { environment } from '../../environments/environment';
import {School} from '../model/school';
import {FormGroup, FormArray} from '@angular/forms';
import {Router} from "@angular/router";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-donation-school-info',
  templateUrl: './donation-school-info.component.html',
  styleUrls: ['./donation-school-info.component.css']
})
export class DonationSchoolInfoComponent implements OnInit {

donationSchoolInfo: School;

progressWidth:string;
imageUrl:string;

  constructor( private schoolService: SchoolService,private router: Router, private sanitizer: DomSanitizer ) { }

  ngOnInit() {
    this.imageUrl = environment["school.image.dir"];
    this.getDonationSchoolInfo();
    this.progressWidth = (this.donationSchoolInfo.projects[0].collectedAmount/this.donationSchoolInfo.projects[0].estimate*100).toString();
  }

  getDonationSchoolInfo() {
    this.schoolService.currentDonationSchoolInfo.subscribe(donationSchoolInfo => this.donationSchoolInfo = donationSchoolInfo);
  }

goToSearchResult() {
  this.router.navigate(['schoolsForDonations']);
}

goToDonatePage() {
  this.router.navigate(['donateScreen']);
}
}
