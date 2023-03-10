import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlumnosComponent } from './alumnos/alumnos.component';
import { ClasesComponent } from './clases/clases.component';
import { ProfesoresComponent } from './profesores/profesores.component';

const routes: Routes = [{
  path: 'profesores',
  component: ProfesoresComponent
},{
  path: 'clases',
  component: ClasesComponent
},{
  path: 'alumnos',
  component: AlumnosComponent
},];;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DawRoutingModule { }
