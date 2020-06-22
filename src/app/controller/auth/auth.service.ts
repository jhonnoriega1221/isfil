import { Injectable, NgZone } from '@angular/core';
import { User } from '../../model/user';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  userData: any; //Aqui se guarda la información del usuario

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) { 
    this.afAuth.authState.subscribe(user =>{
      if(user){
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      }
      else{
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));

      }
    })
  }

  //Ingresar con Correo y Contraseña
 /* SignIn(email,password){
    return this.afAuth.signInWithEmailAndPassword(email,password)
    .then((result) => {
      this.ngZone.run(() =>{
        this.router.navigate(['dashboard']);
      });
      this.SetUserData(result.user);
    }).catch((error) => {
      window.alert(error.messsage);
    })


    
  }
*/
}
