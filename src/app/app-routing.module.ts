import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Pagina2Component } from './pagina2/pagina2.component';
import { Error404Component } from'./error404/error404.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch:'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'pagina2', component: Pagina2Component },
  { path: '**', redirectTo: 'error404', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
