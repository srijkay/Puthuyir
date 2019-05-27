import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {School} from '../model/school';
import { Project} from '../model/school';
import { environment } from './../../../environments/environment';
import { StatusResponse } from '../model/statusresponse';
import { Observable } from 'rx';

@Injectable()
export class NewSchoolAdminCheckService {
  constructor(private http: HttpClient) { }
  //url = 'http://localhost:4000';
  confirmRequirements(projectid: Number,status: String)  {
    console.log('projrct:'+projectid);
    return this
            .http
            .put<StatusResponse>(environment.projectAPIURL+'/'+projectid+'/'+status,{});

}
getProjectDetails(id: Number) {
  return this
    .http
    .get(environment.projectAPIURL+'/'+id);
   }
}
