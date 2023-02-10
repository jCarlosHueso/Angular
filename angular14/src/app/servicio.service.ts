import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http:HttpClient) { }
  leerProductos():Observable<Producto[]>{
      return this.http.get<Producto[]>('http://moralo.atwebpages.com/menuAjax/productos2/index.php');
  }
  crearProductos(producto:Producto):Observable<Producto>{
      return this.http.post<Producto>('http://moralo.atwebpages.com/menuAjax/productos2/create_product.php ',producto)
  }
  actualizarProductos(producto: Producto){
  return this.http.put<Producto>('http://moralo.atwebpages.com/menuAjax/productos2/update_product.php', producto);
  }
  eliminarProductos(id: string){
  return this.http.delete<Producto>('http://moralo.atwebpages.com/menuAjax/productos2/delete_product.php/?id='+id);
  }
}
