import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrutalComponent } from './frutal/frutal.component';
import { HortalizaComponent } from './hortaliza/hortaliza.component';
import { HuertoComponent } from './huerto/huerto.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    FrutalComponent,
    HortalizaComponent,
    HuertoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
