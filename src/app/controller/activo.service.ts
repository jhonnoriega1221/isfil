import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Activo } from '../model/activo.model';

@Injectable({
  providedIn: 'root'
})
export class ActivoService {

  constructor(private firestore: AngularFirestore) {  }

  getActivos(){
    return this.firestore.collection('activo').snapshotChanges();
  }

  getActivo(activoID:number){
    this.firestore.doc('activo/' +activoID).get();
  }

  crearActivo(activo:Activo){
    return this.firestore.collection('activo').add(activo);
    
  }

  updateActivo(activoId:string,activo:Activo){
    this.firestore.doc('activo/' + activoId).update(activo);
  }

  deleteActivo(activoID:number){
    this.firestore.doc('activo/' + activoID).delete();
  }

}
