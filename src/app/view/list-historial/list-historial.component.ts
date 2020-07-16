import { Component, OnInit } from '@angular/core';
import { ActivoService } from '../../controller/activo.service';
import { Activo } from '../../model/activo.model';

@Component({
  selector: 'app-list-historial',
  templateUrl: './list-historial.component.html',
  styleUrls: ['./list-historial.component.css']
})
export class ListHistorialComponent implements OnInit {

 
  activos: Activo[]; //Se crea un array de activos que se obtendran de la base de datos y se almacenarán en memoria.
  selActivo: Activo; //Activo seleccionado.

  constructor(private activoService: ActivoService) { 
   
  }

  ngOnInit(): void {
    this.activoService.obtenerActivos().subscribe(data => {
      this.activos = data.map(e => {
        return{
          id: e.payload.doc.id,
          //@ts-ignore
          ...e.payload.doc.data()
        } as Activo;
      })
    });
  }

  //Obtiene un activo y lo almacena en "selActivo"
  obtenerActivo (selActivo: Activo){
    this.selActivo=selActivo;
  }

  //Se comunica con el servicio para que se comunique con la base de datos y registre el activo.
  registrarActivo (activo:Activo){
    this.activoService.crearActivo(activo);
  }

  //Elimina el activo de la lista principal para pasarlo al historial.
  darDeBaja (id_Activo:string){
    this.activoService.deleteActivo(id_Activo);
  }



}
