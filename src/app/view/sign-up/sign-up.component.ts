import { Component, OnInit } from '@angular/core';
import { UsuarioService} from '../../controller/usuario.service';
import { Usuario } from 'src/app/model/usuario.model';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

  usuarios: Usuario[];
  private readonly notifier:NotifierService


  constructor(
    public usuarioService:UsuarioService,
    public router:Router,
    notifierService:NotifierService


  ) { 
    this.notifier = notifierService;

  }

  ngOnInit(): void {
  }


  registrarUsuario(email:string,realName:string,surname:string,userName:string,pwd:string){
    let usuario:Usuario = {email:email, contraseña:pwd, username:userName,nombres:realName,apellidos:surname,admin:false}
    this.usuarioService.crearUsuario(usuario);
    this.router.navigate(['/usuarios']);
    this.notifier.notify('success', 'Usuario creado exitosamente.')

  }

}
