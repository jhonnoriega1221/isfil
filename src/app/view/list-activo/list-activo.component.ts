import { Component, OnInit } from '@angular/core';
import { ActivoService } from '../../controller/activo.service';
import { Activo } from '../../model/activo.model';

@Component({
  selector: 'app-list-activo',
  templateUrl: './list-activo.component.html',
  styleUrls: ['./list-activo.component.css']
})
export class ListActivoComponent implements OnInit {

  activos: Activo[];
  refActivo: Activo;

  constructor(private activoService: ActivoService) { 
   
  }

  ngOnInit(): void {
    this.activoService.readActivos().subscribe(data => {
      this.activos = data.map(e => {
        return{
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Activo;
      })
    });
  }

  setSelectedID (refActivo: Activo){
    this.refActivo=refActivo;
  }

  create (activo:Activo){
    this.activoService.crearActivo(activo);
  }

  delete (id:number){
    this.activoService.deleteActivo(id);
  }



}
