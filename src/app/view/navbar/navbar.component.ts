import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../controller/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public usuarioService:UsuarioService,
    public router:Router
  ) { }

  ngOnInit(): void {
  }

  cerrarSesion(){
    localStorage.removeItem('usuario');
    this.router.navigate(['signin']);
  }
  
}
