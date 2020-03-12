import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {
  auth:boolean;
  constructor(private login:LoginService) { }
  myWorkRoutes;
  ngOnInit() {
    this.auth = this.login.getAuthToken();
    this.myWorkRoutes = [
      {
       icon: 'home',
       title: 'Dashboard',
       route: ''
      },
      {
        icon: 'add',
        title: 'Add Wamas',
        route: 'addcompany'
       },
       {
        icon: 'add',
        title: 'Product List',
        route: 'addjar'
       },
       {
        icon: 'add',
        title: 'Add Product',
        route: 'addvehicledetails'
       },
       {
        icon: 'add',
        title: 'Add trivia',
        route: 'addtrivia'
       },

    ];
  }

}
