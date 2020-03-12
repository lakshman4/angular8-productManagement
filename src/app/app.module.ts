import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { HeadersComponent } from './sharedcomponents/headers/headers.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './sharedcomponents/material.module';
import {HttpClientModule} from '@angular/common/http';
import { QuestionsComponent } from './questions/questions.component';
import { NgxPaginationModule } from 'ngx-pagination';
import{JarModule} from '../app/jar/jar.module';
import { ProductsComponent } from './products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {QuestionsModule} from '../app/questions/questions.module';



@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,

    ProductsComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    UserModule,
    JarModule,
    NgxPaginationModule,
    QuestionsModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
