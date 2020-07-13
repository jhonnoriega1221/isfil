import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Activo } from '../model/activo.model';

@Injectable({
  providedIn: 'root'
})
export class ActivoService {

  constructor(private firestore: AngularFirestore) {  }

  //Metodo que obtiene todos los activos de la base de datos.
  obtenerActivos(){
    return this.firestore.collection('activo').snapshotChanges();
  }

  //Metodo que obtiene datos de un activo en especifico que haya sido seleciconado.
  obtenerActivo(id_Activo:string){ //Se le pasa el id del activo
    this.firestore.doc('activo/' +id_Activo).get();
  }

  //Metodo que crea un activo
  crearActivo(activo:Activo){ //Se le pasa la información del nuevo activo
    return this.firestore.collection('activo').add(activo);
  }

  //Metodo que actualiza/modifica los datos de un activo.
  updateActivo(id_Activo:string,activo:Activo){ //Tiene como parametro el ID del activo seleccionado y los datos del nuevo activo
    this.firestore.doc('activo/' + id_Activo).update(activo);
  }

  //Metodo que sirve para eliminar un activo de la base de datos.
  deleteActivo(id_Activo:string){
    this.firestore.doc('activo/' + id_Activo).delete();
  }


}
