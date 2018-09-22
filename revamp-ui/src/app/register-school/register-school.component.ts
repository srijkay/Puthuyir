import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../services/school.service';
import { CommonService } from '../services/common.service';
import { State } from '../models/state';
import { District } from '../models/district';
import { Image } from '../models/image';
import { School } from '../models/school';
import { Address } from '../models/address';
import { City } from '../models/city';


@Component({
  selector: 'app-register-school',
  templateUrl: './register-school.component.html',
  styleUrls: ['./register-school.component.css'],
  providers: [SchoolService,CommonService]
})
export class RegisterSchoolComponent implements OnInit {

  school: School;
  states: State[] = [];
  districts: District[] = [];
  cities: City[] = [];
  image: Image;


  constructor(
    private schoolService: SchoolService,private commonService: CommonService
  ) {
  }

  ngOnInit() {

    this.school = new School();
    let address: Address = new Address();
    this.school.address = address;
   


    this.commonService
      .getAllStates()
      .subscribe(
        (states) => {
          this.states = states;
          console.log(this.states);
        }
      );

  }

  onStateChange(stateValue) {
    console.log(stateValue);
    this.commonService
      .getDistrictsByState(stateValue)
      .subscribe(
        (districts) => {
          this.districts = districts;
          console.log(this.districts);
        }
      );

  }

  

  saveImage(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];

      console.log(file);

      this.commonService
        .saveImage(file)
        .subscribe(
          (image) => {
            this.image = image;
            this.school.proofOfIdentity = this.image.imageId;
            console.log(this.image.imageId);
          }
        );

    }
  }

  register() {
    console.log(JSON.stringify(this.school));
    this.school.schoolType = this.school.schoolTypeList.join();
    this.schoolService
    .register(this.school)
    .subscribe(
      (data) => {
        console.log("success");
      }
    );
    
  }

}
