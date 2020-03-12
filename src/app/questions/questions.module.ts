import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {QuestionsComponent} from './questions.component';
import { MaterialModule } from '../sharedcomponents/material.module';




@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModule
  ],
  declarations: [QuestionsComponent],
  exports: []
})

export class  QuestionsModule  { }
