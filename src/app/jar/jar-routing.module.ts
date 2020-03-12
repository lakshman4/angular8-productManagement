import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../sharedcomponents/material.module';
import { JarComponent } from './jar.component';
const jarRoutes: Routes = [
  {
    path: '',
    component: JarComponent,
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [

  ],
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(jarRoutes)
  ]
})

export class JarRoutingModule {}
