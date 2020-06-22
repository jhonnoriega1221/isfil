import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './view/dashboard/dashboard.component';
import { ListActivoComponent} from './view/list-activo/list-activo.component';
import { ListHistorialComponent} from './view/list-historial/list-historial.component';
import { Error404Component } from'./view/error404/error404.component';
import { SignInComponent } from './view/sign-in/sign-in.component';
//PENDIENTE IMPORTAR AUTHGUARD

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch:'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'activos', component: ListActivoComponent },
  { path: 'historial', component: ListHistorialComponent },
  { path: 'error404', component: Error404Component},
  { path: 'signin', component: SignInComponent},
  { path: '**', redirectTo: 'error404', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
