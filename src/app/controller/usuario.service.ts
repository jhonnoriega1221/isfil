import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Usuario } from '../model/usuario.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private firestore: AngularFirestore, public router:Router) {  }

  crearUsuario(usuario:Usuario){
    return this.firestore.collection('usuario').add(usuario);
  }
  
  obtenerUsuarios(){
    return this.firestore.collection('usuario').snapshotChanges();
  }

  deleteUsuario(id_usuario:string){
    this.firestore.doc('usuario/' + id_usuario).delete();
    
  }

  get usuarioIngresado(){
    let datos = JSON.parse(localStorage.getItem('usuario'));
    return datos;
  }

  get estaLogueado(): Boolean{
      const user = JSON.parse(localStorage.getItem('usuario'));
      return (user !== null) ? true : false;
    }
  


}
