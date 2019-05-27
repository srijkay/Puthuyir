import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AdminReviewQuotationService {
  constructor(private http: HttpClient) { }
  url = 'http://localhost:4000';
  getQuotationList(schoolId: number) {
    return this
            .http
            .get(`${this.url}/quotationList`);
        }
        getQuotation() {
          return this
                  .http
                  .get(`${this.url}/quotation`);
              }
}
