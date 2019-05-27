import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../model/user';
@Injectable()
export class AdminRoleCheckService {
  constructor(private http: HttpClient) { }
  url = 'http://localhost:4000';
  approveUserRequest(user: User, status: string) {
    return this
            .http
            .put(`${this.url}/user/${user.userid}/${status}`, {});
        }
}
