import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Formula1RoutingModule } from './formula1-routing.module';
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
    Formula1RoutingModule
  ]
})
export class Formula1Module { }
