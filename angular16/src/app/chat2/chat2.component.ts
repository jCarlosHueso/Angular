import { Component } from '@angular/core';
import { Mensaje } from '../mensaje';
import {ServicioService} from '../servicio.service'

@Component({
  selector: 'app-chat2',
  templateUrl: './chat2.component.html',
  styleUrls: ['./chat2.component.css']
})
export class Chat2Component {
  Mensajes!: Mensaje[];
  mensaje!: Mensaje;
seleccionMensaje:Mensaje={
  id: 0,
  fecha: '',
  usuario: '',
  mensaje: ''
}
constructor(private servicio:ServicioService){}
EnviarMensaje(msg: Mensaje){
 this.servicio.EnviarMensaje(msg).subscribe(
  (msg:Mensaje)=>this.mensaje=msg)

 this.seleccionMensaje.mensaje='';
 this.seleccionMensaje.usuario='';
}
LeerMensajes(){
  this.servicio.leerMensajes().subscribe(
    (msg:Mensaje[])=>
    {
      this.Mensajes=msg;

    }  )
}
}
