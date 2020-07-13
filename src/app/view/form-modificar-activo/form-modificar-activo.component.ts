import { Component, OnInit, Input, RendererFactory2 } from '@angular/core';
import { ActivoService } from '../../controller/activo.service';
import { Activo } from '../../model/activo.model';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-modificar-activo',
  templateUrl: './form-modificar-activo.component.html',
  styleUrls: ['./form-modificar-activo.component.css']
})
export class FormModificarActivoComponent implements OnInit {

  public modActivoForm: FormGroup; //Form de registrar activo

  @Input() selActivo:Activo; //Variable obtenida por el padre (list-activo)

  constructor(
    private activoService: ActivoService,
    public fb: FormBuilder,
  ) { 
  }

  ngOnInit(): void {
    this.activoService.obtenerActivos();
    this.activosForm();
  }

  activosForm(){
    this.modActivoForm = this.fb.group({
      nombre:['', [Validators.required]],
      cantidad:['',[Validators.required]],
      descripcion:['', [Validators.required]],
      inUse:['',[Validators.required]],
      estado:['', [Validators.required]]
    })
  } 


  get nombre(){
    return this.modActivoForm.get('nombre');
  }

  get cantidad(){
    return this.modActivoForm.get('cantidad');
  }

  get descripcion(){
    return this.modActivoForm.get('descripcion');
  }
  
  get inUse(){
    return this.modActivoForm.get('inUse');
  }
  
  get estado(){
    return this.modActivoForm.get('estado');
  }

  submitActivoForm(){
   if(this.nombre.value!=''){
      this.selActivo.nombre=this.nombre.value;
    }
    if(this.cantidad.value!=''){
      this.selActivo.cantidad=this.cantidad.value;
    }
    if(this.descripcion.value!=''){
      this.selActivo.descripcion=this.descripcion.value;
    }
    if(this.estado.value!=''){
      this.selActivo.estado=this.estado.value;
    }
    if(this.inUse.value!=''){
      this.selActivo.inUse=this.inUse.value;
    }
    this.activoService.updateActivo(this.selActivo.id, this.selActivo);
    this.modActivoForm.setValue({nombre:'',cantidad:'',descripcion:'',inUse:'',estado:''});
  }
}
