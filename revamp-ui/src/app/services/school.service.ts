import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'
import { School } from '../models/school';

const API_URL = environment.apiUrl;

@Injectable()
export class SchoolService {

  constructor(
    private http: Http
  ) {
  }

 
  public register(school: School) {
    return this.http.post(API_URL + '/school', school)
      .map(response => {
        console.log(response.headers);
      })
  }

  public getAllSchools(): Observable<School[]> {
    return this.http
      .get(API_URL + '/school')
      .map(response => {
        const schools = response.json();
        return schools.map((school) => new School(school));
      })

  }


}
