import { Component, OnInit } from '@angular/core';

import { Articulo } from '../modelos/articulo';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {
  
  articuloArray:Articulo[] =[
    {id:0, nombre: 'Pie de rey', laboratorio:'Fisica I', cantidad:14 },
    {id:1, nombre: 'Multimetro', laboratorio:'Electronica', cantidad:5 },
    {id:1, nombre: 'Multimetro', laboratorio:'Electronica', cantidad:5 },
    {id:1, nombre: 'Multimetro', laboratorio:'Electronica', cantidad:5 },
    {id:1, nombre: 'Multimetro', laboratorio:'Electronica', cantidad:5 },
    {id:1, nombre: 'Multimetro', laboratorio:'Electronica', cantidad:5 },
    {id:1, nombre: 'Multimetro', laboratorio:'Electronica', cantidad:5 },
    {id:1, nombre: 'Multimetro', laboratorio:'Electronica', cantidad:5 },
    {id:1, nombre: 'Multimetro', laboratorio:'Electronica', cantidad:5 },
    {id:1, nombre: 'Multimetro', laboratorio:'Electronica', cantidad:5 },
    {id:1, nombre: 'Multimetro', laboratorio:'Electronica', cantidad:5 },
    {id:1, nombre: 'Multimetro', laboratorio:'Electronica', cantidad:5 },
    {id:1, nombre: 'Multimetro', laboratorio:'Electronica', cantidad:5 },
    {id:1, nombre: 'Multimetro', laboratorio:'Electronica', cantidad:5 },
    {id:1, nombre: 'Multimetro', laboratorio:'Electronica', cantidad:5 },
    {id:1, nombre: 'Multimetro', laboratorio:'Electronica', cantidad:5 },
    {id:1, nombre: 'Multimetro', laboratorio:'Electronica', cantidad:5 },
    {id:1, nombre: 'Multimetro', laboratorio:'Electronica', cantidad:5 },
    {id:1, nombre: 'Multimetro', laboratorio:'Electronica', cantidad:5 },
    {id:1, nombre: 'Multimetro', laboratorio:'Electronica', cantidad:5 },
    {id:1, nombre: 'Multimetro', laboratorio:'Electronica', cantidad:5 },
    {id:1, nombre: 'Multimetro', laboratorio:'Electronica', cantidad:5 },
    {id:1, nombre: 'Multimetro', laboratorio:'Electronica', cantidad:5 },
    {id:1, nombre: 'Multimetro', laboratorio:'Electronica', cantidad:5 },
    {id:2, nombre: 'Protoboard', laboratorio:'Electronica', cantidad:10 }
  ]



  constructor() { }

  ngOnInit(): void {
  }

}
