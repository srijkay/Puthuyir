import { Component, OnInit } from '@angular/core';
import { AdminReviewQuotationService } from '../services/admin-review-quotation.service';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import {User} from '../model/user';
import {School} from '../model/School';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {FormGroup, FormControl, Validators, FormBuilder, FormArray} from '@angular/forms';
import { Quotation } from '../model/quotation';

@Component({
  selector: 'app-admin-review-quotation',
  templateUrl: './admin-review-quotation.component.html',
  styleUrls: ['./admin-review-quotation.component.css']
})
export class AdminReviewQuotationComponent implements OnInit {
  school: School;
  quotationList: Quotation[];
  constructor(private router: Router, private _route: ActivatedRoute, private tservice: AdminReviewQuotationService) {}

  ngOnInit() {
    this._route
    .queryParamMap
    .pipe(map(params => params.get('school'))).subscribe(s => {
      this.school = JSON.parse(s);
      console.log(JSON.stringify(this.school));
   });
   this
   .tservice
   .getQuotationList(this.school.id)
   .subscribe((data: Quotation[]) => {
     this.quotationList = data;
     console.log(data);
     console.log(JSON.stringify(this.quotationList));
 });

  }


}
