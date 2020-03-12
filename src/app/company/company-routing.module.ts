import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  

//custom modules
import { MaterialModule } from '../sharedcomponents/material.module';
//components
import { CompanyComponent } from './container/company/company.component';
import { CompanyaddressComponent } from './presentational/companyaddress/companyaddress.component';
import { CompanyownerComponent } from './presentational/companyowner/companyowner.component';
//services
import { CompanyService } from './services/company.service';


const companyRoutes: Routes = [
  {
    path: '',
    component: CompanyComponent,
    pathMatch: 'full' 
  },
  {
    path: ':id',
    component: CompanyComponent,
  },
  {
    path: 'edit/:id',
    component: CompanyComponent,
  }
];

@NgModule({
  declarations: [
    CompanyComponent,
    CompanyaddressComponent,
    CompanyownerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild(companyRoutes)
  ],
  providers: [
    CompanyService
  ]
  
})

export class CompanyRoutingModule {}