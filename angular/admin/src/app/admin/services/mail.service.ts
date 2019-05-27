import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {School} from '../model/school';
import { environment } from './../../../environments/environment';
import { Email } from '../model/email';

@Injectable()
export class MailService {
  constructor(private http: HttpClient) { }
  sendMail(mail: Email) {
      console.log('mail:'+ JSON.stringify(mail));
    return this
            .http
            .post(environment.mailAPIURL, mail);
        }
}
