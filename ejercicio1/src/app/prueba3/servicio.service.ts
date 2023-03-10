import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { Producto } from './producto';
@Injectable({
  providedIn: 'root'
})
export class ServicioService {


  constructor(private httpClient: HttpClient) {}
	leerProductos(): Observable<Producto[]>{
		return this.httpClient.get<Producto[]>('http://moralo.atwebpages.com/menuAjax/productos2/index.php');
	}
	createProduct(producto: Producto): Observable<Producto>{
    console.log("producto"+producto.id)
		return this.httpClient.post<Producto>('http://moralo.atwebpages.com/menuAjax/productos2/create_product.php', producto);
	}
	updateProduct(producto: Producto){
		return this.httpClient.put<Producto>('http://moralo.atwebpages.com/menuAjax/productos2/update_product.php', producto);
	}
	deleteProduct(id: string){
		return this.httpClient.delete<Producto>('http://moralo.atwebpages.com/menuAjax/productos2/delete_product.php/?id='+id);
	}
  private _refreshrequired = new Subject<void>();

  get refrescar() {
    return this._refreshrequired;
  }
}
