import { Component } from '@angular/core';
import { Usuario } from '../usuario';
import {ServicioService} from'../servicio.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  usuario:Usuario=new Usuario();
constructor(private servicio:ServicioService){}
registrar(ususario:Usuario) {
this.servicio.crearCuenta(this.usuario)
.subscribe((us:Usuario)=>{this.usuario=us});

}
}
