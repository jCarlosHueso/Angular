import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrutalRoutingModule } from './frutal-routing.module';
import { NaranjaComponent } from './naranja/naranja.component';
import { ManzanaComponent } from './manzana/manzana.component';
import { LimonComponent } from './limon/limon.component';


@NgModule({
  declarations: [
    NaranjaComponent,
    ManzanaComponent,
    LimonComponent
  ],
  imports: [
    CommonModule,
    FrutalRoutingModule
  ]
})
export class FrutalModule { }
