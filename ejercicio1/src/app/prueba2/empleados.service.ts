import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private http: HttpClient) {

  }
  retornar() {
    return this.http.get("http://moralo.atwebpages.com/ajaxListar/getTodoPersonal.php");
  }
}
