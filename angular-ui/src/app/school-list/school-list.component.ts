import { Component, OnInit } from '@angular/core';
import {SchoolService} from '../services/school.service';
import {School} from '../model/school';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.css']
})
export class SchoolListComponent implements OnInit {

  schoolList: School;
  imageUrl:string;
  constructor( private schoolService: SchoolService ) { }

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
    console.log(this.schoolList[0].proofOfIds.files[0]);
  }

}
