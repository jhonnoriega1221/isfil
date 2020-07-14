import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule} from'@angular/forms';
import { NotifierModule } from 'angular-notifier';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from '../environments/environment';

import { AuthService } from './controller/auth.service';

import { NavbarComponent } from './view/navbar/navbar.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { Error404Component } from './view/error404/error404.component';
import { FormRegistrarActivoComponent } from './view/form-registrar-activo/form-registrar-activo.component';
import { ListActivoComponent } from './view/list-activo/list-activo.component';
import { ListHistorialComponent } from './view/list-historial/list-historial.component';
import { SignInComponent } from './view/sign-in/sign-in.component';
import { initializeApp } from 'firebase';
import { FormModificarActivoComponent } from './view/form-modificar-activo/form-modificar-activo.component';
import { ActivoComponent } from './view/activo/activo.component';
import { SignUpComponent } from './view/sign-up/sign-up.component';
import { ListUsuariosComponent } from './view/list-usuarios/list-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    Error404Component,
    ListActivoComponent,
    ListHistorialComponent,
    FormRegistrarActivoComponent,
    SignInComponent,
    FormModificarActivoComponent,
    ActivoComponent,
    SignUpComponent,
    ListUsuariosComponent
  ],
  imports: [
    BrowserModule,
    NotifierModule.withConfig(
      {
        position:{
            horizontal:{
              position:'left',
              distance: 12
            },
            vertical:{
              position:'bottom',
              distance:50
            }
        }
      }
    ),
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule  

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
