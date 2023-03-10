import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DawRoutingModule } from './daw-routing.module';
import { ClasesComponent } from './clases/clases.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { AlumnosComponent } from './alumnos/alumnos.component';


@NgModule({
  declarations: [
    ClasesComponent,
    ProfesoresComponent,
    AlumnosComponent
  ],
  imports: [
    CommonModule,
    DawRoutingModule
  ]
})
export class DawModule { }
