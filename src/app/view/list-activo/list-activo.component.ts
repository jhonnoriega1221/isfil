import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

class activo {
  nombre: string;
  cantidad: BigInteger;
  desc: string;
  lab: string;
  funcion: string;
}

@Component({
  selector: 'app-list-activo',
  templateUrl: './list-activo.component.html',
  styleUrls: ['./list-activo.component.css']
})
export class ListActivoComponent implements OnInit {
  private collectionName = "activos";
  items: Observable<any[]>;

  constructor(private db: AngularFirestore) 
  {
    this.items = db.collection('activos').valueChanges();
  }

  ngOnInit(): void 
  {
    console.log(this.items);
  }
}
