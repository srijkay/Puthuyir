import { Component, OnInit } from '@angular/core';
import {SchoolService} from '../services/school.service';
import {LookUpService} from '../services/look-up.service';
import {School} from '../model/school';
import { environment } from '../../environments/environment';
import {FormGroup, FormArray} from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-schools-for-donations',
  templateUrl: './schools-for-donations.component.html',
  styleUrls: ['./schools-for-donations.component.css']
})
export class SchoolsForDonationsComponent implements OnInit {

  schoolList: School[];
  imageUrl:string;
  constructor( private schoolService: SchoolService,private lookUpService: LookUpService,private router: Router ) { }

  ngOnInit() {
    this.imageUrl = environment["school.image.dir"];
    this.getSchoolList();
  }

  getSchoolList() {
    this.schoolService.getSchoolList()
    .subscribe(
      (response) => {
       this.parseResponse(response);
      },
      (error) => console.log(error)
    );
  }

  parseResponse(response:any) {
    this.schoolList = JSON.parse(response.text());

    for (let school of this.schoolList) {
      console.log(school.proofOfIds.comments);
      console.log(school.proofOfIds.files[0]);
    }

    this.schoolService.saveSchoolList(this.schoolList);
  }

  gotoShoolInfo(schoolRegNo:string,schoolName:string) {
    this.schoolService.filterSchoolInfoFromSchoolList(schoolRegNo,schoolName);
    this.router.navigate(['donationSchoolInfo']);
    return false;
  }


}
