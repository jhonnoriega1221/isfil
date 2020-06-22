import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from '../environments/environment';

import { NavbarComponent } from './view/navbar/navbar.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { Error404Component } from './view/error404/error404.component';
import { FormRegistrarActivoComponent } from './view/form-registrar-activo/form-registrar-activo.component';
import { ListActivoComponent } from './view/list-activo/list-activo.component';
import { ListHistorialComponent } from './view/list-historial/list-historial.component';
import { SignInComponent } from './view/sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    Error404Component,
    ListActivoComponent,
    ListHistorialComponent,
    FormRegistrarActivoComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
