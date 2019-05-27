import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {School} from '../model/school';

@Injectable()
export class BenificiaryEditProjectService {
  constructor(private http: HttpClient) { }
  url = 'http://localhost:4000';
  activateEditLinkToBeneficiary(school: School, actionItems: String) {
    return this
            .http
            .post(`${this.url}/confirmRequirements`, {});
            
        }
}
