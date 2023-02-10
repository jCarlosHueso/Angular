import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Producto } from '../producto';
import {ServicioService} from "../servicio.service";
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  productos!: Producto[];
  prod!:Producto;
  seleccionProducto:Producto={
    id: '',
    nombre: '',
    precio: 0,
    unidades: 0,
    imagen: ''
  }


  constructor(private httpCliente:ServicioService){
this.httpCliente.leerProductos().
subscribe((product:Producto[])=>this.productos=product);
  }

seleccionarProducto(p: Producto) {
this.seleccionProducto=p;
}
eliminarProducto(id: string) {
  this.httpCliente.eliminarProductos(this.prod.id).subscribe((product:Producto)=>this.prod=product);
}
actualizarProducto(form:{value:Producto}) {
  this.httpCliente.actualizarProductos(form.value).
  subscribe((product:Producto)=>this.prod=product);
}
crearProducto(form:{value:Producto}) {
  this.httpCliente.crearProductos(form.value).
  subscribe((product:Producto)=>this.prod=product);
  this.refrescar();
}
 refrescar(){
   this.httpCliente.leerProductos().
   subscribe((product:Producto[])=>this.productos=product);
 }

}
