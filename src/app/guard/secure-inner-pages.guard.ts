import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../controller/usuario.service';

@Injectable({
  providedIn: 'root'
})

export class SecureInnerPagesGuard implements CanActivate {

  constructor(
    public usuarioService:UsuarioService,
    public router:Router
  ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.usuarioService.estaLogueado){
        window.alert('No puede acceder aquí');
        this.router.navigate(['dashboard']);
      }
    return true;
  }
  
}
