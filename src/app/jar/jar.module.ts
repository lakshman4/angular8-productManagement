import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { JarRoutingModule } from './jar-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import {JarComponent} from '../jar/jar.component';


@NgModule({
  imports: [
    JarRoutingModule,
    CommonModule

  ],
  declarations: [JarComponent],
  exports: []
})

export class JarModule {}
