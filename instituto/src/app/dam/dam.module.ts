import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DamRoutingModule } from './dam-routing.module';
import { ClasesComponent } from './clases/clases.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { ProfesoresComponent } from './profesores/profesores.component';


@NgModule({
  declarations: [
    ClasesComponent,
    AlumnosComponent,
    ProfesoresComponent
  ],
  imports: [
    CommonModule,
    DamRoutingModule
  ]
})
export class DamModule { }
