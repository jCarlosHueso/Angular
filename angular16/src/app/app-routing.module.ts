import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { Chat2Component } from './chat2/chat2.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { TablaMaterialComponent } from './tabla-material/tabla-material.component';

const routes: Routes = [
  {path: '',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'registro',component:RegistroComponent},
  {path:'chat/:nombreUsuario',component:ChatComponent},
  {path: 'chat2', component:Chat2Component},
  {path: 'tablaMaterial', component:TablaMaterialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
