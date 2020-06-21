import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './view/navbar/navbar.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { Error404Component } from './view/error404/error404.component';
import { FormRegistrarActivoComponent } from './view/form-registrar-activo/form-registrar-activo.component';
import { ListActivoComponent } from './view/list-activo/list-activo.component';
import { ListHistorialComponent } from './view/list-historial/list-historial.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    Error404Component,
    ListActivoComponent,
    ListHistorialComponent,
    FormRegistrarActivoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
