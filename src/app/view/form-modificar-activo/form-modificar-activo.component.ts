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

  public modActivoForm: FormGroup;

  @Input() refActivo:Activo; //Variable obtenida por el padre (list-activo)

  constructor(
    private activoService: ActivoService,
    public fb: FormBuilder,
  ) { 
  }

  ngOnInit(): void {
    this.activoService.readActivos();
    this.activosForm();
  }

  activosForm(){
    this.modActivoForm = this.fb.group({
      ID:['', [Validators.required], []],
      nombre:['', [Validators.required]],
      cantidad:['',[Validators.required]]
    })
  } 
  
  get ID(){
    return this.modActivoForm.get('ID');
  }

  get nombre(){
    return this.modActivoForm.get('nombre');
  }

  get cantActivo(){
    return this.modActivoForm.get('cantidad');
  }

  submitActivoForm(){
    if(this.ID.value==''){
      this.ID.setValue(this.refActivo.ID);
    }

    if(this.nombre.value==''){
      this.nombre.setValue(this.refActivo.nombre);
    }

    if(this.cantActivo.value==''){
      this.cantActivo.setValue(this.refActivo.cantidad);
    }

    this.activoService.updateActivo(this.refActivo.id, this.modActivoForm.value);
  
    this.modActivoForm.setValue({ID:'',nombre:'',cantidad:''});


  }
}
