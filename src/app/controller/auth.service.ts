import { Injectable, NgZone } from '@angular/core';
import { Usuario } from '../model/usuario.model';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userData:any; //Almacena el login en datos del usuario

  constructor(
    public afs: AngularFirestore, //Servicios de Firestore
    public afAuth: AngularFireAuth, //Servicios de Firebase Auth
    public router:Router,
    public ngZone: NgZone //Servicio NgZone para remover fuera de la lupa
  ) {
    /*Almacenar la información en LocalStorage cuando se inicie la sesión
    y colocarla null cuando se cierre la sesión*/
    this.afAuth.authState.subscribe(user => {
      if(user){
        this.userData = user;
        localStorage.setItem('usuario', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('usuario'));
      }
    })
  }

  //Ingresar con email y contraseña
  SignIn(email, password){
    return this.afAuth.signInWithEmailAndPassword(email, password).then((result)=>{
      this.ngZone.run(() => {
        this.router.navigate(['dashboard']);
      });
      this.SetUserData(result.user);
    }).catch((error) => {
      window.alert(error.message)
    })
  }

  //Registrar con email y contraseña
  SignUp(email, password){
    return this.afAuth.createUserWithEmailAndPassword(email,password).then((result) => {
      this.SetUserData(result.user);
    }).catch((error) => {
      window.alert(error.message)
    })
  }

  // Retorna true cuando el usuario haya ingresado
  get isLoggedIn(): Boolean {
    const user = JSON.parse(localStorage.getItem('usuario'));
    return (user !== null) ? true : false;
  }

  //Autenticador de login para los servicios externos como Google o Facebook
  AuthLogin(provider){
    return this.afAuth.signInWithPopup(provider).then((result) => {
      this.ngZone.run(() => {
        this.router.navigate(['dashboard']);
      })
      this.SetUserData(result.user);
    }).catch((error) => {
      window.alert(error.message)
    })
  }

  /*Almacena la información de los usuarios registrados, y los que hayan ingresado
  por algun proveedor de autenticación externo como Google o Facebook en la base de datos
  de firestore*/
  SetUserData(user){
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`usuario/${user.uid}`);
    const userData: Usuario = {
      uid: user.uid,
      email: user.email,
      role: 1
    }
    return userRef.set(userData,{ 
      merge:true
    })
  }

  //Cerrar sesion
  SignOut(){
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('usuario');
      this.router.navigate(['signin']);
    })
  }
}
