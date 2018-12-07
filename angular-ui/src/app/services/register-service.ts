import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import {Router, ActivatedRoute} from '@angular/router';


@Injectable({
  providedIn: 'root'
})


export class RegisterService {

  constructor(private http: Http,
    private router: Router
    ) { }


  registerUser(payload: string) {
    console.log("Entering into model service ****");

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:6060/user', payload, { headers })
      .subscribe(data => {
       if(data){
        let response = data; 
        console.log("data from backend" ,data.json().roleId);
        if (data.json().roleId) {
          if(data.json().roleId === "admin"){
            this.router.navigate(['admin']);
          }else if(data.json().roleId === "beneficiary"){
            this.router.navigate(['schoolregistration']);
          }else{
          }
       }
      }
      });



  }
}