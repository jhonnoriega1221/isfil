import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../controller/usuario.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

private readonly notifier:NotifierService;

  constructor(
    public usuarioService:UsuarioService,
    public router:Router,
    notifierService:NotifierService
  ) { 
    this.notifier = notifierService;
  }

  ngOnInit(): void {
  }

  cerrarSesion(){
    localStorage.removeItem('usuario');
    this.router.navigate(['signin']);
    this.notifier.notify('default', 'Sesión cerrada')
  }
  
}
