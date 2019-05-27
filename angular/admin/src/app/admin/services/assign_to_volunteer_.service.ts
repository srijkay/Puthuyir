import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AssignToVolunteerService {
  constructor(private http: HttpClient) { }
  url = 'http://localhost:4000';
  getVolunteerList() {
    return this
            .http
            .get(`${this.url}/volunteer`);
        }
}
