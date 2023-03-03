import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NascarRoutingModule } from './nascar-routing.module';
import { PilotosComponent } from './pilotos/pilotos.component';
import { CircuitosComponent } from './circuitos/circuitos.component';
import { CampeonesComponent } from './campeones/campeones.component';


@NgModule({
  declarations: [
    PilotosComponent,
    CircuitosComponent,
    CampeonesComponent
  ],
  imports: [
    CommonModule,
    NascarRoutingModule
  ]
})
export class NascarModule { }
