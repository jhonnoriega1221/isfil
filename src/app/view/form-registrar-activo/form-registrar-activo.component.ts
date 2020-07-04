import { Component, OnInit } from '@angular/core';
import { ActivoService } from '../../controller/activo.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Activo } from '../../model/activo.model';

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
    this.activoService.getActivo();
    this.activosForm();
  }

  activosForm(){
    this.activoForm = this.fb.group({
      ID:[''],
      nombre:[''],
      cantidad:['']
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
    this.activoService.crearActivo(this.activoForm.value);
  }


}
