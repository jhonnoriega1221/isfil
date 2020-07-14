import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './view/dashboard/dashboard.component';
import { ListActivoComponent} from './view/list-activo/list-activo.component';
import { ListHistorialComponent} from './view/list-historial/list-historial.component';
import { Error404Component } from'./view/error404/error404.component';
import { SignInComponent } from './view/sign-in/sign-in.component';
import { ActivoComponent } from './view/activo/activo.component';
import { ListUsuariosComponent } from './view/list-usuarios/list-usuarios.component';
import { SignUpComponent } from './view/sign-up/sign-up.component';

import { AuthGuard } from './guard/auth.guard';
import { SecureInnerPagesGuard } from './guard/secure-inner-pages.guard';
//PENDIENTE IMPORTAR AUTHGUARD

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch:'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'activos', component: ListActivoComponent },
  { path: 'activos/:id', component: ActivoComponent},
  { path: 'historial', component: ListHistorialComponent, canActivate: [AuthGuard] },
  { path: 'usuarios', component: ListUsuariosComponent, canActivate: [AuthGuard] },
  { path: 'error404', component: Error404Component},
  { path: 'signin', component: SignInComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'signup', component: SignUpComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'error404', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
