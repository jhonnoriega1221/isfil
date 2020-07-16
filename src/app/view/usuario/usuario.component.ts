import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../controller/usuario.service';
import { Usuario } from '../../model/usuario.model';
import{ NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios: Usuario[];
  selID;
  private readonly notifier:NotifierService;

  constructor(
    public router:Router,
    public usuarioService:UsuarioService,
    public ruta:ActivatedRoute,
    NotifierService:NotifierService
  ) { 
    this.ruta.params.subscribe(params=>{
      this.selID=params['id'];
    })

    this.notifier = NotifierService;
  }

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

  eliminarUsuario (id_Usuario:string){
    this.usuarioService.deleteUsuario(id_Usuario);
    
    this.router.navigate(['/usuarios']);
    this.notifier.notify('default', 'El usuario ha sido eliminado exitosamente.')

  }

}