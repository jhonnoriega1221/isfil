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

  getActivo(activoId:number){
    this.firestore.doc('activo/' +activoId).get();
  }

  crearActivo(activo:Activo){
    return this.firestore.collection('activo').add(activo);
    
  }

  updateActivo(activo:Activo){
    delete activo.id;
    this.firestore.doc('activo/' + activo.id).update(activo);
  }

  deleteActivo(activoId:number){
    this.firestore.doc('activo/' + activoId).delete();
  }

}
