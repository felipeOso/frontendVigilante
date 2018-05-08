import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {RouterModule} from '@angular/router'
import {HttpClientModule} from '@angular/common/http' 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngresoComponent } from './ingreso/ingreso.component';

@NgModule({
  declarations: [
    AppComponent,
    IngresoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
