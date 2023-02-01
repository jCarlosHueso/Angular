import { Component } from '@angular/core';
import {DireccionesService} from './direcciones.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular10';
  direccion:any;
  constructor(private usuarioServicio:DireccionesService){}
ngOnInit():void{
this.usuarioServicio.obtener();
}
recargar(){
  this.recuperardatos();
}
recuperardatos(){
this.usuarioServicio.obtener().subscribe(result=>(this.direccion)=result);
}

}
