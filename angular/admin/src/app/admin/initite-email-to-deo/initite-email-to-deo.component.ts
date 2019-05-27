import { Component, OnInit } from '@angular/core';
import { Email } from '../model/email';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { School } from '../model/school';
import { map } from 'rxjs/operators';
import { MailService } from '../services/mail.service';

@Component({
  selector: 'app-initite-email-to-deo',
  templateUrl: './initite-email-to-deo.component.html',
  styleUrls: ['./initite-email-to-deo.component.css']
})
export class InititeEmailToDeoComponent implements OnInit {
  email:Email;
  school: School;
  requirements: string;
  constructor( private _route: ActivatedRoute, private mailService: MailService) { }
  isInboxEnabled: boolean=true;
  isComposeEnabled: boolean=false;

  ngOnInit() {
    this._route
    .queryParamMap
    .pipe(map(params => params.get('school'))).subscribe(s => {
      this.school = JSON.parse(s);
      console.log(JSON.stringify(s));
    });
    let str="";
    this.school.projects.forEach(p => {
      p.requirements.forEach(r => {
        str=str+'requirementId'+r.requirementId+'\n';
        str=str+'assetName'+r.assetName+'\n';
        str=str+'assetType'+r.assetType+'\n';
        str=str+'reqType'+r.reqType+'\n';
        str=str+'quantity'+r.quantity+'\n \n'; 
      });
    });
    this.requirements=str;
  //   let file:File;
  //   this.email={
  //     to:"",
  //     subject:"",
  //     message:"",
  //     attachment:file
  //   }
   }
  emailForm = new FormGroup ({
    to: new FormControl(),
    subject: new FormControl(),
    message: new FormControl(),
    attachment:new FormControl()
  });
enableInbox(){
  this.isComposeEnabled=false;
  this.isInboxEnabled=true;
}
enabledcompose(){
  this.isComposeEnabled=true;
  this.isInboxEnabled=false;
}
sendMail(mail:NgForm){
  console.log('email:'+JSON.stringify(mail.value));
  console.log('to:'+mail.value.to);
  console.log('message:'+mail.value.message);

  const formData = new FormData();
  formData.append('to', mail.value.to);
  formData.append('subject', mail.value.subject);
  formData.append('message', mail.value.message);
  formData.append('attachment', this.emailForm.get('attachment').value);
  console.log('formData:'+formData.get('attachment'));
  this.mailService.sendMail(mail.value).subscribe(
    (res) => console.log(res),
    (err) => console.log(err)
  );

  }
  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.emailForm.get('attachment').setValue(file);
    }
  }
  getProjectDetails(){

  }
}
