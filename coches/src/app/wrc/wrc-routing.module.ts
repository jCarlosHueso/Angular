import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampeonesComponent } from './campeones/campeones.component';
import { CircuitosComponent } from './circuitos/circuitos.component';
import { PilotosComponent } from './pilotos/pilotos.component';

const routes: Routes = [{
  path: 'campeones',
  component: CampeonesComponent
},
{
  path: 'pilotos',
  component: PilotosComponent
},
{
  path: 'circuitos',
  component: CircuitosComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WrcRoutingModule { }
