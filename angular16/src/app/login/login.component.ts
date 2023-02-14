import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from '../servicio.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private enrutamiento:Router, private httpCliente:ServicioService){}
usuario:Usuario=new Usuario();

login() {
this.httpCliente.buscarPorMail(this.usuario).subscribe((us:Usuario)=>this.usuario=us);
if(this.usuario.idUsuario!=0){
  this.enrutamiento.navigate(["chat"]);
}

}

}
