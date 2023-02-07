import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http:HttpClient) {
  }
    obtenerUsuarios() {
      return this.http.get("http://moralo.atwebpages.com/menuAjax/usuarios/ObtenerUsuarios.php");
   }
   altaUsuario(usuario) {
   return this.http.post("http://moralo.atwebpages.com/menuAjax/usuarios/AltaUsuario.php",    JSON.stringify(usuario));
   }
   bajaUsuario(idUsuario: string) {
   return this.http.get("http://moralo.atwebpages.com/menuAjax/usuarios/BajaUsuario.php?idUsuario=" +idUsuario);
   }

   editarUsuario() {
   this.usuariosServicio.editarUsuario(this.usuario).subscribe(
   datos => {
   this.obtenerUsuarios();
   }
   )}

   }

