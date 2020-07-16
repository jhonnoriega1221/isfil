import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../controller/usuario.service';
import { Usuario } from '../../model/usuario.model';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css']
})
export class ListUsuariosComponent implements OnInit {
  usuarios: Usuario[];

  constructor(

    public router:Router,
    public usuarioService:UsuarioService

  ) { }

  ngOnInit(): void {
    this.usuarioService.obtenerUsuarios().subscribe(data => {
      this.usuarios = data.map(e => {
        return{
          id: e.payload.doc.id,
          //@ts-ignore
          ...e.payload.doc.data()
        } as Usuario;
      })
    });
  }



}
