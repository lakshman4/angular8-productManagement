import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

import { environment } from '../../../environments/environment';

@Injectable()
export class CompanyService {

  constructor(private http: HttpClient) { }

  saveCompanyDetails (details) {
    return this.http.post(`${environment.API_URL}create/company`,{'companyData': details});
  }

  getCompanyDetails (companyId) {
    return this.http.get(`${environment.API_URL}get/company/${companyId}`);
  } 
}
