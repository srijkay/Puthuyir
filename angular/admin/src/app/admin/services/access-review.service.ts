import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable()
export class AccessReviewService {
  constructor(private http: HttpClient) { }
 // url = 'http://localhost:4000';
  getAcessReviewList() {
    return this
            .http.get(environment.userAPIURL);
           // .get(`${this.url}/accessreview`);
        }
}
