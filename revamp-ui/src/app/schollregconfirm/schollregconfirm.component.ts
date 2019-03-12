import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {SchoolService} from '../services/school.service';


@Component({
  selector: 'app-schollregconfirm',
  templateUrl: './schollregconfirm.component.html',
  styleUrls: ['./schollregconfirm.component.css']
})
export class SchollregconfirmComponent implements OnInit {

  schoolInfo:string;
  constructor( private schoolService: SchoolService) { }

  ngOnInit() {
      this.schoolService.currentSchoolInfo.subscribe(schoolInfo => this.schoolInfo = schoolInfo);
      console.log(this.schoolInfo);
  }

}
