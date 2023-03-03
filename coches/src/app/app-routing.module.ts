import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormuladriftComponent} from  './formuladrift/formuladrift.component';
import {Formula1Component}from './formula1/formula1.component';
import { NascarComponent } from './nascar/nascar.component';
import { ParisdakarComponent } from './parisdakar/parisdakar.component';
import { WrcComponent } from './wrc/wrc.component';
const routes: Routes = [{
    path: 'formuladrift',
    component: FormuladriftComponent,
    loadChildren: () => import('./formuladrift/formuladrift.module').then(m => m.FormuladriftModule)
  },{
    path: 'formula1',
    component: Formula1Component,
    loadChildren: () => import('./formula1/formula1.module').then(m => m.Formula1Module)
  },{
    path: 'nascar',
    component: NascarComponent,
    loadChildren: () => import('./nascar/nascar.module').then(m => m.NascarModule)
  },{
    path: 'parisdakar',
    component: ParisdakarComponent,
    loadChildren: () => import('./parisdakar/parisdakar.module').then(m => m.ParisdakarModule)
  },{
    path: 'wrc',
    component: WrcComponent,
    loadChildren: () => import('./wrc/wrc.module').then(m => m.WrcModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
