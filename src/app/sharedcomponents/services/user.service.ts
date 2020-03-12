import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { environment } from '../../../environments/environment';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) {}
    
    getUserDetails (userId) {
        return this.http.get(`${environment.API_URL}get/user/${userId}`);
    } 
}
