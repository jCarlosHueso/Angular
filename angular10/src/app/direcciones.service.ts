import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DireccionesService {

  constructor(private httpDirecciones:HttpClient) { }
    obtener(){

     return this.httpDirecciones.get('https://randomuser.me/api?result=100');

    }
  }
