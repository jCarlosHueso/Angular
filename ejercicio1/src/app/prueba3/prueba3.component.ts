import { Component } from '@angular/core';
import { Producto } from './producto';
import { ServicioService } from './servicio.service';


@Component({
  selector: 'app-prueba3',
  templateUrl: './prueba3.component.html',
  styleUrls: ['./prueba3.component.css']
})
export class Prueba3Component{
  productos!: Producto[];
  prod!: Producto;
	selectedProduct: Producto = {
    id: '',
    nombre: '',
    precio: 0,
    unidades:0,
    imagen:''
}

constructor(private httCliente: ServicioService){
  this.httCliente.leerProductos().subscribe((product: Producto[])=>{this.productos = product;console.log(product)})
 }
ngOnInit(): void {
}
actualizarProducto(form: { value: Producto; }){
   form.value.id = this.selectedProduct.id;
   form.value.nombre = this.selectedProduct.nombre;
   form.value.precio = this.selectedProduct.precio;
  form.value.imagen=this.selectedProduct.imagen;
  form.value.unidades=this.selectedProduct.unidades
   if(this.selectedProduct && this.selectedProduct.id){

     this.httCliente.updateProduct(form.value).subscribe((producto:Producto)=>{console.log("entro en actualizar"+producto);this.prod = producto})
 }
 this.httCliente.refrescar;
}
crearProducto(form: { value: Producto; }){
 console.log("estoy en ts "+form.value.id)
  this.httCliente.createProduct(form.value).subscribe((producto:Producto)=>{console.log("entro en create"+producto);this.prod = producto});
   }





seleccionarProducto(product: Producto){
 this.selectedProduct = product;
}

eliminarProducto(id: string){
this.httCliente.deleteProduct(id).subscribe((product: Producto)=>{
  console.log("Product eliminado, ", product);
  this.httCliente.leerProductos().subscribe((products: Producto[])=>{
    this.productos = products;
  })
});
}

}
