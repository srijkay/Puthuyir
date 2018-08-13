import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {LookUps} from './model/lookUps';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class LookUpService {

  constructor(private _httpClient: HttpClient) { }

  public getDistricts() {
    return this._httpClient.get("http://localhost:3000/lookUpData?field=district");
  }

  public getReqTypes() {
    return this._httpClient.get("http://localhost:3000/lookUpData?field=reqtype");
  }

  public getAssetTypes() {
    return this._httpClient.get("http://localhost:3000/lookUpData?field=assettype");    
  }

  public getAssetNames() {
    return this._httpClient.get("http://localhost:3000/lookUpData?field=asset");    
  }

  public getStates() {
    return this._httpClient.get("http://localhost:3000/lookUpData?field=state");    
  }

  public getSchoolTypes() {
    return this._httpClient.get("http://localhost:3000/lookUpData?field=schooltype");    
  }
}
