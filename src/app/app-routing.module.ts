import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginService } from './sharedcomponents/services/login.service';
import { UserService } from './sharedcomponents/services/user.service';
import { AuthGuardService } from './sharedcomponents/services/authguard.service';
import {QuestionsComponent} from '../app/questions/questions.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: './user/user.module#UserModule',
    pathMatch: 'full',
  },
  {
    path:'editProduct',
    component:QuestionsComponent,
    pathMatch:'full'
   },
  {
    path: 'addcompany',
    loadChildren: './company/company.module#CompanyModule',
    // canLoad: [AuthGuardService],
  },
  {
    path: 'addjar',
    loadChildren: './jar/jar.module#JarModule',
    // canLoad: [AuthGuardService],
  },
  {
    path: 'addvehicledetails',
    loadChildren: './vehicle/vehicle.module#VehicleModule',
    // canLoad: [AuthGuardService],
  }
];

@NgModule({
  declarations: [
    HomeComponent,

  ],
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules}),
    BrowserModule,
    HttpClientModule,

  ],
  providers: [
    LoginService,
    AuthGuardService,
    UserService
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
