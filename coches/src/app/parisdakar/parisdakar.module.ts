import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParisdakarRoutingModule } from './parisdakar-routing.module';
import { PilotosComponent } from '../parisdakar/pilotos/pilotos.component';
import { CampeonesComponent } from '../parisdakar/campeones/campeones.component';
import { CategoriasComponent } from './categorias/categorias.component';


@NgModule({
  declarations: [
    PilotosComponent,
    CampeonesComponent,
    CategoriasComponent
  ],
  imports: [
    CommonModule,
    ParisdakarRoutingModule
  ]
})
export class ParisdakarModule { }
