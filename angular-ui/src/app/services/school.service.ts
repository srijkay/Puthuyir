import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Http,Headers } from '@angular/http';
import {FormGroup} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { School } from '../model/school';
import { BehaviorSubject } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  schoolRegForm:FormGroup;
  private schoolRegFormBS = new BehaviorSubject(this.schoolRegForm);
  currentSchoolRegForm = this.schoolRegFormBS.asObservable();

  url:string;
  private imageUrlBS = new BehaviorSubject(this.url);
  currentImageUrlBS = this.imageUrlBS.asObservable();

  constructor(private http: Http) { }

  enterSchoolRegister(schoolRegForm: FormGroup) {
    this.schoolRegFormBS.next(schoolRegForm);
  }

  enterImageUrl(url: string) {
    this.imageUrlBS.next(url);
  }

  registerSchool(school: any) {
    return this.http.post(environment["school.register.url"], school);
  }

  getSchoolList() {
    return this.http.get(environment["school.register.url"]);
  }

  /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log("Error happening for post call");
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
