import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormuladriftComponent } from './formuladrift/formuladrift.component';
import { NascarComponent } from './nascar/nascar.component';
import { ParisdakarComponent } from './parisdakar/parisdakar.component';
import { WrcComponent } from './wrc/wrc.component';
import { Formula1Component } from './formula1/formula1.component';

@NgModule({
  declarations: [
    AppComponent,
    FormuladriftComponent,
        NascarComponent,
    ParisdakarComponent,
    WrcComponent,
    Formula1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
