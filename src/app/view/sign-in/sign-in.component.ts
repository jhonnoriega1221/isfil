import { Component, OnInit } from '@angular/core';
import { UsuarioService} from '../../controller/usuario.service';
import { Usuario } from 'src/app/model/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {

  usuarios: Usuario[];

  constructor(
    public usuarioService:UsuarioService,
    public router:Router
  ) { }

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

  iniciarSesion(email:String, pwd:String){
    for(let i = 0; i<this.usuarios.length;i++){
      if(email == this.usuarios[i].email){
        if(pwd == this.usuarios[i].contraseña){
        console.log('Bienvenido :)');
        localStorage.setItem('usuario', JSON.stringify(this.usuarios[i]));
        this.router.navigate(['/dashboard']);
        return true;
        }
        
      }

    }
    console.log('Email o contraseña incorrecta');
    return false;
    
  }

}
