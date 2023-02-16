import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Mensaje } from '../mensaje';
import { ServicioService } from '../servicio.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {


nombreUsuario:String='';
msg:Mensaje=new Mensaje();
Mensajes:Mensaje[]=[];

constructor (private ruta:ActivatedRoute,private servicios:ServicioService){
this.ruta.params.subscribe((x:Params)=>{this.nombreUsuario=x['name']});
}
EnviarMensaje() {
this.servicios.EnviarMensaje(this.msg).subscribe(
  (x:Mensaje)=>{(this.msg=x)}
);

}

LeerMensaje(){
  this.servicios.leerMensajes().subscribe(

    (x:Mensaje[])=>{(this.Mensajes=x)}

  );
}



}
