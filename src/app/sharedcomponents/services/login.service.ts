import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { environment } from '../../../environments/environment';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {}

  authentication(data) {
    return this.http.post(`${environment.API_URL}login`,{'userForm': data})
   
  }

  getAuthToken() {
    return localStorage.getItem('Authorization') == 'True' ? true : false;
  }
}
