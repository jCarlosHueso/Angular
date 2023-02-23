import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuario';
import {ServicioService} from '../servicio.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
iraChat() {
}
  usuario:Usuario=new Usuario();
logeoNoa() {
  let obtenido:Usuario=new Usuario();
  this.httpCliente.buscarPorMail(this.usuario).
  subscribe((us:any)=>{
    console.log(us);
    if (us!=null){
      obtenido.idUsuario=us[0].idUsuario;
      obtenido.email=us[0].email;
      obtenido.pwd=us[0].pwd;
      obtenido.nombre=us[0].nombre;
      // this.enrutamiento.navigate(["chat"],
      // {queryParams:{'nombreUsuario':obtenido.nombre}});
       this.enrutamiento.navigate(["chat/"+obtenido.nombre])
    }else
    {
      alert("Usuario no registrado")
    }
  })
}

  constructor(private enrutamiento:Router,
    private httpCliente:ServicioService){}

usuario2:Usuario[]=[];
logeo(user:Usuario) {
  this.httpCliente.buscarPorMail(user).
  subscribe((us:Usuario[])=>{
    this.usuario2=us;
    console.log(this.usuario2)
    try{
        if (us[0].email.length>0){
          console.log("entro en chat")
          this.enrutamiento.navigate(["chat"],
          {queryParams:{'name':us[0].nombre}});
          //this.enrutamiento.navigate("chat",)
        }
    }catch(e){
      alert ("usuario no registrado")
    }
  });

 console.log(this.usuario2)
  // if (this.usuario.idUsuario!=0)

  //   this.enrutamiento.navigate(["chat"])
}

}
