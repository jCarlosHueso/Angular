import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Mensaje } from '../mensaje';
import { ServicioService } from '../servicio.service';
import { Usuario } from '../usuario';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  nombreUsuario:string='';
  msg: Mensaje=new Mensaje();
  Mensajes: Mensaje[]=[];
constructor(private  ruta: ActivatedRoute,private servicios:ServicioService )
{
  this.ruta.params.subscribe((params:Params)=>{this.nombreUsuario=params['nombreUsuario']})
}
EnviarMensaje(){
 this.servicios.EnviarMensaje(this.msg).subscribe(
  (Xmsg:Mensaje)=>(this.msg=Xmsg)

 )
 }
LeerMensajes(){
  this.servicios.leerMensajes().subscribe(
    (Xmsg:Mensaje[])=>(this.Mensajes=Xmsg)
  )
}
}
