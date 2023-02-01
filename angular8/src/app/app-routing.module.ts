import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MazdaComponent } from './mazda/mazda.component';
import { MitsubishiComponent } from './mitsubishi/mitsubishi.component';
import { NissanComponent } from './nissan/nissan.component';
import { ToyotaComponent } from './toyota/toyota.component';

const routes: Routes = [
  {
    path:'nissan',
    component:NissanComponent
  },
  {
    path:'mitsubishi',
    component:MitsubishiComponent
  },
  {
    path:'mazda',
    component:MazdaComponent
  },
  {
    path:'toyota',
    component:ToyotaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
