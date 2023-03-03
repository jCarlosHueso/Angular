import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LimonComponent } from './limon/limon.component';
import { ManzanaComponent } from './manzana/manzana.component';
import { NaranjaComponent } from './naranja/naranja.component';

const routes: Routes = [{
  path: 'naranja',
  component: NaranjaComponent
},
{
  path: 'manzana',
  component: ManzanaComponent
},
{
  path: 'limon',
  component: LimonComponent
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrutalRoutingModule { }
