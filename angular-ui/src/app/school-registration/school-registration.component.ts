import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder, FormArray} from '@angular/forms';
import {LookUpService} from '../look-up.service';
import {SchoolService} from '../school.service';
import {LookUps} from '../model/lookUps';
import {School} from '../model/school';
import {Router} from "@angular/router";

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
  proofOfId: FormGroup;

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

  comments: FormControl;
  //image: FormArray;
  image: FormControl;
  districtsLD:LookUps;
  reqTypesLD:LookUps;
  assetTypesLD:LookUps;
  assetNamesLD:LookUps;
  statesLD:LookUps;
  schoolTypesLD:LookUps;

  loading: boolean = false;

  @ViewChild('fileInput') fileInput: ElementRef;


  constructor(private lookUpService: LookUpService, private schoolService: SchoolService, private formBuilder: FormBuilder, private router: Router) { }

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
    this.schoolName = new FormControl('asdf',<any>Validators.required);
    this.schoolRegNo = new FormControl('123123',<any>Validators.required);
    this.schoolType = new FormControl('primary',Validators.required);
    this.numberOfStudents = new FormControl('123',Validators.required);
    this.numberOfTeachers = new FormControl('123',Validators.required);

    this.priName = new FormControl('tms',Validators.required);
    this.priNum = new FormControl('123123',Validators.required);
    this.priEmail = new FormControl('tms@yahoo.com',[
          Validators.required,
          Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
        ]);
    this.secName = new FormControl();
    this.secNum =  new FormControl();
    this.secEmail = new FormControl('',[
      Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
    ]) 

    this.addressLine1 =  new FormControl('asdf',Validators.required);
    this.addressLine2 = new FormControl('asdf',Validators.required);
    this.city = new FormControl('trichy',Validators.required);
    this.district = new FormControl('kanchipuram',Validators.required);
    this.state = new FormControl('TN',Validators.required);
    this.pinCode = new FormControl('213123',Validators.required);

    this.reqType =  new FormControl('maintenance',Validators.required);
    this.assetType = new FormControl('infrastructure',Validators.required);
    this.assetName = new FormControl('football',Validators.required);
    this.quantity = new FormControl('1',Validators.required);

    this.comments = new FormControl('Hello...hru',Validators.required);
    this.image = new FormControl('',Validators.required);
  //this.image = new FormArray([]);
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
        comments: this.comments,
        //image: new FormArray([])
        image: this.image
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
  clearFile() {
    this.schoolRegForm.controls.proofOfId.get('image').setValue(null);
    this.schoolRegForm.controls.image.setValue(null);
    this.fileInput.nativeElement.value = '';
  }
  onFileChange(event) {
    console.log('..onFileChange..'+event.target.files.length);
    if(event.target.files.length > 0) {
      let file = event.target.files[0];
      this.schoolRegForm.controls.proofOfId.get('image').setValue(file);
    }
  }


/*clearFile() {
  (<FormArray>this.schoolRegForm.controls.proofOfId.get('image')).reset();
  this.fileInput.nativeElement.value = '';
}
onFileChange(event) {
  console.log('..onFileChange..'+event.target.files.length);
  for(let i=0; i < event.target.files.length; i++) {
    let file = event.target.files[i];
    (<FormArray>this.schoolRegForm.controls.proofOfId.get('image')).push(new FormGroup({image:new FormControl(file)}));
    console.log((<FormArray>this.schoolRegForm.controls.proofOfId.get('image')).length);  
  }
  
}*/


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

  private prepareSave(): any {
    let input = new FormData();
    input.append('payload', JSON.stringify(this.schoolRegForm.value));
    input.append('files', this.schoolRegForm.controls.proofOfId.get('image').value);
    return input;
  }

  addSchoolRegForm() {
    const formModel = this.prepareSave();
    this.loading = true;
    this.schoolService.registerSchool(formModel)
    .subscribe(
      (response) => {
        this.loading = false;
        console.log(response);
        this.router.navigate(['schoollist']);
      },
      (error) => console.log(error)
    );
  }
}
