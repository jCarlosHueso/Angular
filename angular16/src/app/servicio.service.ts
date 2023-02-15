import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mensaje } from './mensaje';
import { Usuario } from './usuario';
import { LOCALE_ID, Inject } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  buscarPorMail(usuario: Usuario):Observable<Usuario[]> {
  return this.httpCliente.get<Usuario[]>('http://moralo.atwebpages.com/menuAjax/chat/SeleccionarUsuario.php?pwd='+usuario.pwd+'&email='+usuario.email)
  }

  constructor(private httpCliente:HttpClient,@Inject(LOCALE_ID) private local:string) { }
  crearCuenta(us:Usuario){
    console.log("estoy en servicio"+us.email)
    return this.httpCliente.post<Usuario>('http://moralo.atwebpages.com/menuAjax/chat/AltaUsuario.php',us)
  }
  leerMensajes():Observable<Mensaje[]>{
    return this.httpCliente.get<Mensaje[]>('http://moralo.atwebpages.com/menuAjax/chat/ObtenerMensajes.php')

  }
  EnviarMensaje(msg: Mensaje):Observable<Mensaje>{
    msg.fecha=formatDate(Date.now(),"HH:mm:ss/dd-MM-yy",this.local);
    return this.httpCliente.post<Mensaje>('http://moralo.atwebpages.com/menuAjax/chat/AltaMensaje.php' ,msg)
  }
  locale(arg0: number, arg1: string, locale: any): string {
    throw new Error('Method not implemented.');
  }
}
//http://moralo.atwebpages.com/menuAjax/chat/SeleccionarUsuario.php
