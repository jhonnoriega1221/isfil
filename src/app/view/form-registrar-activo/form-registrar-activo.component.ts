import { Component, OnInit } from '@angular/core';
import { ActivoService } from '../../controller/activo.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { Activo} from '../../model/activo.model';


@Component({
  selector: 'app-form-registrar-activo',
  templateUrl: './form-registrar-activo.component.html',
  styleUrls: ['./form-registrar-activo.component.css']
})
export class FormRegistrarActivoComponent implements OnInit {

  activoNuevo=new Activo();
  private readonly notifier: NotifierService; //Servicio de notificaciones
  public activoForm: FormGroup; //Form de activos

  //Se inyecta el servicio de notificaciones, el constructor de formularios y el servicio de activos
  constructor(
    private activoService: ActivoService,
    public fb: FormBuilder,
    notifierService: NotifierService
    ) {
      this.notifier = notifierService;
     }

  ngOnInit(): void {
    this.activoService.obtenerActivos();
    this.activosForm();
  }

  //Metodo que captura los datos de los campos del form
  activosForm(){
    this.activoForm = this.fb.group({
      nombre:['', [Validators.required]],
      cantidad:['',[Validators.required]],
      descripcion:['',[Validators.required]],
      inUse:[this.activoNuevo.inUse],
      estado:[this.activoNuevo.estado],
      fechaRegistro:[this.activoNuevo.fechaRegistro],
      dadoDeBaja:[this.activoNuevo.dadoDeBaja],
      fechaDadoDeBaja:[this.activoNuevo.fechadadoBaja]
    })
  } 

  //Getters
  get nombre(){
    return this.activoForm.get('nombre');
  }

  get cantidad(){
    return this.activoForm.get('cantidad');
  }

  get descripcion(){
    return this.activoForm.get('descripcion');
  }

  //Submit activo que envia los activos al service para almacenarlos en la base de datos
  submitActivoForm(){
    if(this.activoForm.valid){
     /* this.activoNuevo.nombre=this.activoForm.get('nombre').value;
      this.activoNuevo.cantidad=this.activoForm.get('cantidad').value;
      this.activoNuevo.descripcion=this.activoForm.get('descripcion').value;*/
      
      this.activoService.crearActivo(this.activoForm.value);
      this.activoForm.setValue({nombre:'',cantidad:'',descripcion:'',inUse:'',estado:'',fechaRegistro:'',dadoDeBaja:'',fechaDadoDeBaja:''});
      this.notifier.notify('success','El activo se agregó exitosamente.')
    }
    else{
    }
  }

}
