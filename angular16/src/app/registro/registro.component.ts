import { Component } from '@angular/core';
import { Usuario } from '../usuario';
import {ServicioService} from '../servicio.service'
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  usuario: Usuario=new Usuario();
  // usuarioSeleccion:Usuario={
  //   idUsuario: 0,
  //   nombre: '',
  //   pwd: '',
  //   email: ''
  // }
  constructor(private servicio:ServicioService){}
  Registrar(usuario: Usuario) {

    this.servicio.crearCuenta(usuario).
    subscribe((us:Usuario)=>{this.usuario=us;console.log(us)});
  }
}
