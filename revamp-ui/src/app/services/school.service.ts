import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { State } from '../models/state';
import { District } from '../models/district';
import { City } from '../models/city';
import { Image } from '../models/image';

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

  public getAllStates(): Observable<State[]> {
    return this.http
      .get(API_URL + '/states')
      .map(response => {
        const states = response.json();
        return states.map((state) => new State(state));
      })

  }

  public getDistrictsByState(stateId: String): Observable<District[]> {
    return this.http
      .get(API_URL + '/districts/state/' + stateId)
      .map(response => {
        const states = response.json();
        return states.map((state) => new State(state));
      })

  }

  public getCitiesByDistrict(districtId : String): Observable<City[]> {
    return this.http
      .get(API_URL + '/cities/district/' + districtId)
      .map(response => {
        const cities = response.json();
        return cities.map((city) => new State(city));
      })

  }

  public saveImage(file: File): Observable<Image> {
    let formData: FormData = new FormData();
    formData.append('fileUpload', file, file.name);
    let reqHeaders = new Headers();

   // reqHeaders.append('Content-Type', 'multipart/form-data');
    reqHeaders.append('Accept', 'application/json');

    let options = new RequestOptions({ headers: reqHeaders });
    return this.http.post(API_URL + '/image', formData, options)
      .map(response => {
        const image = response.json();
        return new Image(image);
      })
  }

  public register(school: School) {
    return this.http.post(API_URL + '/school', school)
      .map(response => {
        console.log(response.headers);
      })
  }

}
