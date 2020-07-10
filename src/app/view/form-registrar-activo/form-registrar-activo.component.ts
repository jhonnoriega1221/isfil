import { Component, OnInit } from '@angular/core';
import { ActivoService } from '../../controller/activo.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-registrar-activo',
  templateUrl: './form-registrar-activo.component.html',
  styleUrls: ['./form-registrar-activo.component.css']
})
export class FormRegistrarActivoComponent implements OnInit {

  public activoForm: FormGroup;

  constructor(
    private activoService: ActivoService,
    public fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.activoService.readActivos();
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
      this.activoService.crearActivo(this.activoForm.value);
    }
    else{
    }
  }
}
