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

  public activoForm: FormGroup;


  @Input() refActivo:Activo;

  constructor(
    private activoService: ActivoService,
    public fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.activoService.getActivos();
    this.activosForm();
  }

  activosForm(){
    this.activoForm = this.fb.group({
      ID:['', [Validators.required]],
      nombre:['', [Validators.required]],
      cantidad:['',[Validators.required]]
    })
  } 

  
  get id(){
    return this.activoForm.get('ID');
  }

  get nombre(){
    return this.activoForm.get('nombre');
  }

  get cantActivo(){
    return this.activoForm.get('cantidad');
  }

  submitActivoForm(){
    if(this.activoForm.valid){
      console.log("nada");
    }
    else{
    }
  }
}
