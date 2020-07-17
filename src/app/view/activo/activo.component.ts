import { Component, OnInit, Input } from '@angular/core';
import { ActivoService } from '../../controller/activo.service';
import { ActivatedRoute } from '@angular/router';
import { Activo } from '../../model/activo.model';
import { UsuarioService } from '../../controller/usuario.service';
import { NotifierService } from 'angular-notifier';
import { Usuario } from 'src/app/model/usuario.model';

@Component({
  selector: 'app-activo',
  templateUrl: './activo.component.html',
  styleUrls: ['./activo.component.css']
})
export class ActivoComponent implements OnInit {

private readonly notifier:NotifierService;
activos:Activo[];
selActivo:Activo;
selID;

  constructor(
    private activoService:ActivoService,
    private ruta:ActivatedRoute,
    public usuarioService:UsuarioService,
    notifierService:NotifierService
  ) { 
    this.ruta.params.subscribe(params=>{
      this.selID=params['id'];
    })
    this.notifier = notifierService;

    
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
    
    obtenerActivo (selActivo: Activo){
      this.selActivo=selActivo;
    }


    darDeBaja(selActivo:Activo){
      this.selActivo=selActivo;
      this.selActivo.dadoDeBaja=true;
      this.selActivo.fechadadoBaja=new Date();
      //@ts-ignore
      this.activoService.updateActivo(this.selActivo.id, this.selActivo);
      this.notifier.notify('default', 'Activo dado de baja.')
    }

}
