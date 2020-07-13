import { time } from 'console';

export class Activo {
    nombre: string;
    cantidad: number;
    descripcion: string;
    inUse = 0;
    estado= 0;
    fechaRegistro = new Date();
    dadoDeBaja = false;
    fechadadoBaja = new Date(0);

    //Aquí está el modelo de los atributos que deben contener los activos dentro de la aplicación.
}
