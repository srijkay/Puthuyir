import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../services/school.service';
import { School } from '../models/school';
import { Address } from '../models/address';
import { State } from '../models/state';
import { District } from '../models/district';

@Component({
  selector: 'app-newly-added-schools',
  templateUrl: './newly-added-schools.component.html',
  styleUrls: ['./newly-added-schools.component.css'],
  providers: [SchoolService]
})
export class NewlyAddedSchoolsComponent implements OnInit {

  schools: School[] = [];

  constructor(
    private schoolService: SchoolService
  ) {
  }

  ngOnInit() {
    this.schoolService
      .getAllSchools()
      .subscribe(
        (schools) => {
          this.schools = schools;
          console.log(this.schools);
        }
      );
  }

}
