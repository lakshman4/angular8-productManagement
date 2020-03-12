import { Injectable }       from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { LoginService } from './login.service';
 
@Injectable()
export class AuthGuardService implements CanLoad {
  
  constructor(private router: Router, private login:LoginService) {
  }
 
  canLoad(route: Route): boolean {
    if(!this.login.getAuthToken()) {
        this.router.navigate(['']) 
    }  
    return true;
  }
} 