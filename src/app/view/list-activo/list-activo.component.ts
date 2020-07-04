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

  constructor(private activoService: ActivoService) { }

  ngOnInit(): void {
    this.activoService.getActivo().subscribe(data => {
      this.activos = data.map(e => {
        return{
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Activo;
      })
    });
  }

  create (activo:Activo){
    this.activoService.crearActivo(activo);
  }

  update (activo:Activo){
    this.activoService.updateActivo(activo);
  }

  delete (id:number){
    this.activoService.deleteActivo(id);
  }

}
