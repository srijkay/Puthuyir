import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {LookUps} from '../model/lookUps';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class LookUpService {

  constructor(private _httpClient: HttpClient) { }

  public getDistricts() {
    return this._httpClient.get(environment["district.lookup.url"]);
  }

  public getReqTypes() {
    return this._httpClient.get(environment["reqtype.lookup.url"]);
  }

  public getAssetTypes() {
    return this._httpClient.get(environment["assettype.lookup.url"]);    
  }

  public getAssetNames() {
    return this._httpClient.get(environment["assetname.lookup.url"]);    
  }

  public getStates() {
    return this._httpClient.get(environment["state.lookup.url"]);    
  }

  public getSchoolTypes() {
    return this._httpClient.get(environment["schooltype.lookup.url"]);    
  }
}
