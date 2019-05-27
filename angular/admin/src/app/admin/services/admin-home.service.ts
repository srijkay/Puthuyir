import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
@Injectable()
export class AdminHomeService {
  constructor(private http: HttpClient) { }
 // url = 'http://localhost:6060/puthuyir';
  getSchoolList() {
    return this
            .http.get(environment.schoolAPIURL);
           // .get(`${this.url}/school`);
        }
}
