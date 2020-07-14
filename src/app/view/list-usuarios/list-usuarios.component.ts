import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../controller/auth.service';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css']
})
export class ListUsuariosComponent implements OnInit {

  constructor(

    public authService:AuthService

  ) { }

  ngOnInit(): void {
  }

}
