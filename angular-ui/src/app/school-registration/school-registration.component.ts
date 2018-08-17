import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder, FormArray} from '@angular/forms';
import {LookUpService} from '../look-up.service';
import {SchoolService} from '../school.service';
import {LookUps} from '../model/lookUps';
import {School} from '../model/school';

@Component({
  selector: 'app-school-registration',
  templateUrl: './school-registration.component.html',
  styleUrls: ['./school-registration.component.css']
})
export class SchoolRegistrationComponent implements OnInit {
  schoolRegForm:FormGroup;
  schoolInfo:FormGroup;
  contacts:FormGroup;
  address:FormGroup;
  requirements: FormArray;
  requirement: FormGroup;

  schoolName: FormControl;
  schoolRegNo: FormControl;
  schoolType: FormControl;
  numberOfStudents:FormControl;
  numberOfTeachers:FormControl;

  priName: FormControl;
  priNum: FormControl;
  priEmail:FormControl;
  secName: FormControl;
  secNum: FormControl;
  secEmail: FormControl;

  addressLine1:  FormControl;
  addressLine2:  FormControl;
  city:  FormControl;
  state: FormControl;
  district: FormControl;
  pinCode: FormControl;

  reqType: FormControl;
  assetType: FormControl;
  assetName: FormControl;
  quantity: FormControl;
  proofOfId: FormGroup;
  comments: FormControl;

  districtsLD:LookUps;
  reqTypesLD:LookUps;
  assetTypesLD:LookUps;
  assetNamesLD:LookUps;
  statesLD:LookUps;
  schoolTypesLD:LookUps;

  

  constructor(private lookUpService: LookUpService, private schoolService: SchoolService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
    this.getDistricts();
    this.getReqTypes();
    this.getAssetTypes();
    this.getAssetNames();
    this.getStates();
    this.getSchoolTypes();
  }

  getDistricts() {
    this.lookUpService.getDistricts().subscribe(data => {
      this.districtsLD = <LookUps>data;
    });
  }

  getReqTypes() {
    this.lookUpService.getReqTypes().subscribe(data => {
      this.reqTypesLD = <LookUps>data;
    });
  }

  getAssetTypes() {
    this.lookUpService.getAssetTypes().subscribe(data => {
      this.assetTypesLD = <LookUps>data;
    });
  }

  getAssetNames() {
    this.lookUpService.getAssetNames().subscribe(data => {
      this.assetNamesLD = <LookUps>data;
    });
  }

  getStates() {
    this.lookUpService.getStates().subscribe(data => {
      this.statesLD = <LookUps>data;
    });
  }

  getSchoolTypes() {
    this.lookUpService.getSchoolTypes().subscribe(data => {
      this.schoolTypesLD = <LookUps>data;
    });
  }

  createFormControls() {
    this.schoolName = new FormControl('',<any>Validators.required);
    this.schoolRegNo = new FormControl('',<any>Validators.required);
    this.schoolType = new FormControl('-1',Validators.required);
    this.numberOfStudents = new FormControl('',Validators.required);
    this.numberOfTeachers = new FormControl('',Validators.required);

    this.priName = new FormControl('',Validators.required);
    this.priNum = new FormControl('',Validators.required);
    this.priEmail = new FormControl('',[
          Validators.required,
          Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
        ]);
    this.secName = new FormControl();
    this.secNum =  new FormControl();
    this.secEmail = new FormControl('',[
      Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
    ]) 

    this.addressLine1 =  new FormControl('',Validators.required);
    this.addressLine2 = new FormControl('',Validators.required);
    this.city = new FormControl('',Validators.required);
    this.district = new FormControl('-1',Validators.required);
    this.state = new FormControl('-1',Validators.required);
    this.pinCode = new FormControl('',Validators.required);

    this.reqType =  new FormControl('-1',Validators.required);
    this.assetType = new FormControl('-1',Validators.required);
    this.assetName = new FormControl('-1',Validators.required);
    this.quantity = new FormControl('',Validators.required);

    this.comments = new FormControl('',Validators.required);

    this.requirements = new FormArray([]);
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      name: '',
      description: '',
      price: ''
    });
  }
  
  createForm() {
   // this.requirements = new FormArray([]);
    this.schoolRegForm = new FormGroup({
      schoolInfo: new FormGroup({
        schoolName: this.schoolName,
        schoolRegNo: this.schoolRegNo,
        schoolType: this.schoolType,
        numberOfStudents: this.numberOfStudents,
        numberOfTeachers: this.numberOfTeachers
      }),
      contacts: new FormGroup({
        priName: this.priName,
        priNum: this.priNum,
        priEmail:this.priEmail,
        secName:this.secName,
        secNum: this.secNum,
        secEmail: this.secEmail 
      }),
      address: new FormGroup({
        addressLine1: this.addressLine1,
        addressLine2: this.addressLine2,
        city: this.city,
        district: this.district,
        state: this.state,
        pinCode: this.pinCode 
      }),
      requirement: new FormGroup({
        reqType: this.reqType,
        assetType: this.assetType,
        assetName:this.assetName,
        quantity:this.quantity 
      }),
      requirements : new FormArray([]),
      proofOfId: new FormGroup({
        comments: this.comments
       })     
    });
  }

  deleteReq(index) {
    (<FormArray>this.schoolRegForm.controls.requirements).removeAt(index); 
  }

  isReqBtnDisabled() {
    if(this.reqType.dirty && 
      this.assetType.dirty && 
      this.assetName.dirty && 
      this.quantity.dirty) {
        return false;
      } else {
        return true;
      }
  }

  addRequirement() {
    (<FormArray>this.schoolRegForm.controls.requirements).push(new FormGroup({
      reqType: new FormControl(this.schoolRegForm.controls.requirement.value.reqType),
      assetType: new FormControl(this.schoolRegForm.controls.requirement.value.assetType),
      assetName: new FormControl(this.schoolRegForm.controls.requirement.value.assetName),
      quantity:new FormControl(this.schoolRegForm.controls.requirement.value.quantity) 
    }));
    console.log(this.schoolRegForm.controls.requirements);
    this.schoolRegForm.controls.requirement.reset();
  }

  addSchoolRegForm() {
    this.schoolService.registerSchool(this.schoolRegForm)
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
}
