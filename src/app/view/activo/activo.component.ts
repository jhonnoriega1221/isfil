import { Component, OnInit, Input } from '@angular/core';
import { ActivoService } from '../../controller/activo.service';
import { ActivatedRoute } from '@angular/router';
import { Activo } from '../../model/activo.model';

@Component({
  selector: 'app-activo',
  templateUrl: './activo.component.html',
  styleUrls: ['./activo.component.css']
})
export class ActivoComponent implements OnInit {

activos:Activo[];
selActivo:Activo;
selID;

  constructor(
    private activoService:ActivoService,
    private ruta:ActivatedRoute,
  ) { 
    this.ruta.params.subscribe(params=>{
      this.selID=params['id'];
    })
    
    
  }

  ngOnInit(): void {
    this.activoService.obtenerActivos().subscribe(data => {
      this.activos = data.map(e => {
        return{
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Activo;
      })
    });

    }
    
    obtenerActivo (selActivo: Activo){
      this.selActivo=selActivo;
    }

    eliminarActivo (id_Activo:string){
      this.activoService.deleteActivo(id_Activo);
      
    }

    darDeBaja(selActivo:Activo){
      this.selActivo=selActivo;
      this.selActivo.dadoDeBaja=true;
      this.selActivo.fechadadoBaja=new Date();
      this.activoService.updateActivo(this.selActivo.id, this.selActivo);
    }

}
