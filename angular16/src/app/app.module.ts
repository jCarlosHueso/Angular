import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'
import { RouterModule } from '@angular/router';
import { Chat2Component } from './chat2/chat2.component';
import { TablaMaterialComponent } from './tabla-material/tabla-material.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatFormField} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    LoginComponent,
    RegistroComponent,
    Chat2Component,
    TablaMaterialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
     BrowserAnimationsModule,
     MatTableModule,
     MatFormField
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
