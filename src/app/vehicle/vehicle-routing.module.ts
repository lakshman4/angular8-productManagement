import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { VehicleComponent } from './vehicle.component';
import {QuestionsComponent} from '../questions/questions.component';
import { MaterialModule } from '../sharedcomponents/material.module';

const vehicleRoutes: Routes = [
  {
    path: '',
    component: VehicleComponent,
    pathMatch: 'full'
  }

];

@NgModule({
  declarations: [

    VehicleComponent,

  ],
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(vehicleRoutes)
  ]
})

export class VehicleRoutingModule {}
