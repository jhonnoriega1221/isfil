import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../controller/usuario.service';
import { Usuario } from '../../model/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios: Usuario[];
  selID;

  constructor(
    public router:Router,
    public usuarioService:UsuarioService,
    public ruta:ActivatedRoute
  ) { 
    this.ruta.params.subscribe(params=>{
      this.selID=params['id'];
    })
  }

  ngOnInit(): void {
    this.usuarioService.obtenerUsuarios().subscribe(data => {
      this.usuarios = data.map(e => {
        return{
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Usuario;
      })
    });
  }

  eliminarUsuario (id_Usuario:string){
    this.usuarioService.deleteUsuario(id_Usuario);
    
    this.router.navigate(['/usuarios']);
  }

}