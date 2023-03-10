import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Prueba1Component } from './prueba1/prueba1.component';
import { Prueba2Component } from './prueba2/prueba2.component';
import { Prueba3Component } from './prueba3/prueba3.component';

const routes: Routes = [{
  path: 'prueba1',
  component: Prueba1Component,
  loadChildren: () => import('./prueba1/prueba1.module').then(m => m.Prueba1Module)
},
{
  path: 'prueba2',
  component: Prueba2Component,
  loadChildren: () => import('./prueba2/prueba2.module').then(m => m.Prueba2Module)
},
{
  path: 'prueba3',
  component: Prueba3Component,
  loadChildren: () => import('./prueba3/prueba3.module').then(m => m.Prueba3Module)
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
