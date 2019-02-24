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

  schoolInfo:string;
  private schoolInfoBS = new BehaviorSubject(this.schoolInfo);
  currentSchoolInfo = this.schoolInfoBS.asObservable();

  url:string;
  private imageUrlBS = new BehaviorSubject(this.url);
  currentImageUrlBS = this.imageUrlBS.asObservable();

  schoolList: School[];
  private schoolListBS = new BehaviorSubject(this.schoolList);
  currentSchoolListBS = this.schoolListBS.asObservable();

donationSchoolInfo: School;
private donationSchoolInfoBS = new BehaviorSubject(this.donationSchoolInfo);
currentDonationSchoolInfo = this.donationSchoolInfoBS.asObservable();

donateScreenForm:FormGroup;
private donateScreenFormBS = new BehaviorSubject(this.donateScreenForm);
currentDonateScreenForm = this.donateScreenFormBS.asObservable();

  constructor(private http: Http) { }

  public enterSchoolRegister(schoolRegForm: FormGroup) {
    this.schoolRegFormBS.next(schoolRegForm);
    let schoolInfo = schoolRegForm.controls.schoolInfo.value.schoolName+" # "+schoolRegForm.controls.schoolInfo.value.schoolRegNo;
    this.schoolInfoBS.next(schoolInfo);
  }

  public enterDonateInfo(donateScreenForm: FormGroup) {
    this.donateScreenFormBS.next(donateScreenForm);
  }

  public enterImageUrl(url: string) {
    this.imageUrlBS.next(url);
  }

  public registerSchool(school: any) {
    return this.http.post(environment["school.register.url"], school);
  }

  public makePayment(paymentSummary: any) {
    let headers = new Headers();
  headers.append('Content-Type', 'application/json');
    return this.http.put(environment["make.payment.url"], paymentSummary,{headers: headers});
  }

  public getSchoolList() {
    return this.http.get(environment["school.register.url"]);
  }

  public saveSchoolList(schoolList: School[]) {
    this.schoolListBS.next(schoolList);
  }

  filterSchoolInfoFromSchoolList(schoolRegNo: string,schoolName:string) {
    this.currentSchoolListBS.subscribe(schoolList => this.schoolList = schoolList);
    let donationSchoolInfo;
    for (let school of this.schoolList) {
        if(school.schoolInfo.schoolName == schoolName &&
            school.schoolInfo.schoolRegNo == schoolRegNo) {
              donationSchoolInfo = school;
              break;
            }
    }
    this.donationSchoolInfoBS.next(donationSchoolInfo);
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
