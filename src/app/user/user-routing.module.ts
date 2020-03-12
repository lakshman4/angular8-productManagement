import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../sharedcomponents/material.module';
const userRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full' 
  }
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild(userRoutes)
  ]
})

export class UserRoutingModule {}