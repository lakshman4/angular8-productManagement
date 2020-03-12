import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { LoginService } from "../../sharedcomponents/services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;
  constructor(private fb: FormBuilder, private login: LoginService, private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('Authorization')=='True') {
      let id = localStorage.getItem('companyId');
      console.log(id);
      this.router.navigate(['addcompany', id]);
    }
     this.userForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
   
  }

  saveUser() {
    this.login.authentication(this.userForm.value).subscribe(
      (val) => {
        console.log(val);
        var companyId = "5cdf72d848aabbaab6670d2b";
        localStorage.setItem('Authorization', 'True');
        localStorage.setItem('companyId', companyId);
        this.router.navigate(['addcompany', companyId]);
      },
      (err) => console.log(err)
    );
  }

}
