import { Component } from '@angular/core';
import { fadeAnimation } from './animations/fade.animation';

import { Articulo } from './modelos/articulo'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation]
})
export class AppComponent {  

}
