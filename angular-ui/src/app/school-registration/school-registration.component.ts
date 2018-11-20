
import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder, FormArray} from '@angular/forms';
import {LookUpService} from '../services/look-up.service';
import {SchoolService} from '../services/school.service';
import {LookUps} from '../model/lookUps';
import {School} from '../model/school';
import {Router} from "@angular/router";


@Component({
  selector: 'app-school-registration',
  templateUrl: './school-registration.component.html',
  styleUrls: ['./school-registration.component.css']
})
export class SchoolRegistrationComponent implements OnInit {
  schoolRegForm: FormGroup;
  schoolInfo: FormGroup;
  contacts: FormGroup;
  address: FormGroup;
  requirements: FormArray;
  tmpRequirements: FormArray;
  requirement: FormGroup;
  proofOfId: FormGroup;

  schoolName: FormControl;
  schoolRegNo: FormControl;
  schoolType: FormControl;
  numberOfStudents: FormControl;
  numberOfTeachers: FormControl;

  priName: FormControl;
  priNum: FormControl;
  priEmail: FormControl;
  secName: FormControl;
  secNum: FormControl;
  secEmail: FormControl;

  addressLine1: FormControl;
  addressLine2: FormControl;
  city: FormControl;
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
  districtsLD: LookUps;
  reqTypesLD: LookUps;
  assetTypesLD: LookUps;
  assetNamesLD: LookUps;
  statesLD: LookUps;
  schoolTypesLD: LookUps;

  loading: boolean = false;
  //url = '';
  //@ViewChild('fileInput') fileInput: ElementRef;


  constructor(private lookUpService: LookUpService, private schoolService: SchoolService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.schoolService.currentSchoolRegForm.subscribe(schoolRegForm => this.schoolRegForm = schoolRegForm);

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
    if (!(typeof this.schoolRegForm === 'object')) {
      this.schoolName = new FormControl('', <any>Validators.required);
      this.schoolRegNo = new FormControl('', <any>Validators.required);
      this.schoolType = new FormControl('', Validators.required);
      this.numberOfStudents = new FormControl('', Validators.required);
      this.numberOfTeachers = new FormControl('', Validators.required);

      this.priName = new FormControl('', Validators.required);
      this.priNum = new FormControl('', Validators.required);
      this.priEmail = new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
      ]);
      this.secName = new FormControl();
      this.secNum = new FormControl();
      this.secEmail = new FormControl('', [
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
      ])

      this.addressLine1 = new FormControl('', Validators.required);
      this.addressLine2 = new FormControl('', Validators.required);
      this.city = new FormControl('', Validators.required);
      this.district = new FormControl('', Validators.required);
      this.state = new FormControl('', Validators.required);
      this.pinCode = new FormControl('', Validators.required);

      this.reqType = new FormControl('', Validators.required);
      this.assetType = new FormControl('', Validators.required);
      this.assetName = new FormControl('', Validators.required);
      this.quantity = new FormControl('', Validators.required);

      this.comments = new FormControl('', Validators.required);
      this.image = new FormControl('', Validators.required);
      //this.image = new FormArray([]);
      this.requirements = new FormArray([]);
    } else {
      this.schoolName = new FormControl(this.schoolRegForm.controls.schoolInfo.value.schoolName, <any>Validators.required);
      this.schoolRegNo = new FormControl(this.schoolRegForm.controls.schoolInfo.value.schoolRegNo, <any>Validators.required);
      this.schoolType = new FormControl(this.schoolRegForm.controls.schoolInfo.value.schoolType, Validators.required);
      this.numberOfStudents = new FormControl(this.schoolRegForm.controls.schoolInfo.value.numberOfStudents, Validators.required);
      this.numberOfTeachers = new FormControl(this.schoolRegForm.controls.schoolInfo.value.numberOfTeachers, Validators.required);

      this.priName = new FormControl(this.schoolRegForm.controls.contacts.value.priName, Validators.required);
      this.priNum = new FormControl(this.schoolRegForm.controls.contacts.value.priNum, Validators.required);
      this.priEmail = new FormControl(this.schoolRegForm.controls.contacts.value.priEmail, [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
      ]);
      this.secName = new FormControl(this.schoolRegForm.controls.contacts.value.secName);
      this.secNum = new FormControl(this.schoolRegForm.controls.contacts.value.secNum);
      this.secEmail = new FormControl(this.schoolRegForm.controls.contacts.value.secEmail, [
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
      ])

      this.addressLine1 = new FormControl(this.schoolRegForm.controls.address.value.addressLine1, Validators.required);
      this.addressLine2 = new FormControl(this.schoolRegForm.controls.address.value.addressLine2, Validators.required);
      this.city = new FormControl(this.schoolRegForm.controls.address.value.city, Validators.required);
      this.district = new FormControl(this.schoolRegForm.controls.address.value.district, Validators.required);
      this.state = new FormControl(this.schoolRegForm.controls.address.value.state, Validators.required);
      this.pinCode = new FormControl(this.schoolRegForm.controls.address.value.pinCode, Validators.required);

      this.reqType = new FormControl('', Validators.required);
      this.assetType = new FormControl('', Validators.required);
      this.assetName = new FormControl('', Validators.required);
      this.quantity = new FormControl('', Validators.required);

      this.comments = new FormControl(this.schoolRegForm.controls.proofOfId.value.comments, Validators.required);
      this.image = new FormControl('', Validators.required);
      this.requirements = this.schoolRegForm.controls.requirements as FormArray;

    }

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
        priEmail: this.priEmail,
        secName: this.secName,
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
        assetName: this.assetName,
        quantity: this.quantity
      }),
      requirements: this.requirements,
      proofOfId: new FormGroup({
        comments: this.comments,
        image: this.image
      })
    });

  }

  deleteReq(index) {
    (<FormArray>this.schoolRegForm.controls.requirements).removeAt(index);
  }


  clearFile() {
    this.schoolRegForm.controls.proofOfId.get('image').setValue(null);
    this.schoolRegForm.controls.image.setValue(null);
    //this.fileInput.nativeElement.value = '';
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      let file = event.target.files[0];
      this.schoolRegForm.controls.proofOfId.get('image').setValue(file);
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.schoolService.enterImageUrl(event.target.result);
      }
    }
  }

  addRequirement() {
    (<FormArray>this.schoolRegForm.controls.requirements).push(new FormGroup({
      reqType: new FormControl(this.schoolRegForm.controls.requirement.value.reqType),
      assetType: new FormControl(this.schoolRegForm.controls.requirement.value.assetType),
      assetName: new FormControl(this.schoolRegForm.controls.requirement.value.assetName),
      quantity: new FormControl(this.schoolRegForm.controls.requirement.value.quantity)
    }));
    this.schoolRegForm.controls.requirement.reset();
  }

  showSchoolRegViewPage() {
    this.schoolService.enterSchoolRegister(this.schoolRegForm);
    this.router.navigate(['viewSchoolReg']);
  }

  private prepareSave(): any {
    let input = new FormData();
    input.append('payload', JSON.stringify(this.schoolRegForm.value));
    input.append('files', this.schoolRegForm.controls.proofOfId.get('image').value);
    return input;
  }

  /*addSchoolRegForm() {
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
  }*/


  disableSubmitBtn() {
    if (!this.schoolRegForm.valid || this.loading) {
      return true;
    } else {
      return
    }
  }
}
