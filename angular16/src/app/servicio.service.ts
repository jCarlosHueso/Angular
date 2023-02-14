import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  buscarPorMail(usuario: Usuario):Observable<Usuario> {
    return this.HttpCliente.get<Usuario>
    ("http://moralo.atwebpages.com/menuAjax/chat/SeleccionarUsuario.php/?pwd="
    +usuario.password+"&email="+usuario.email);
  }

  constructor(private HttpCliente:HttpClient) { }
  crearCuenta(us:Usuario){
return this.HttpCliente.post<Usuario>
("http://moralo.atwebpages.com/menuAjax/chat/AltaUsuario.php/",us);
  }

}
// http://moralo.atwebpages.com/menuAjax/chat/SeleccionarUsuario.php/
