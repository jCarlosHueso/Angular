import { Component } from '@angular/core';
import { EmpleadosService } from './empleados.service';
import ClaseEmpleado from './clase-empleado/clase-empleado.module'


@Component({
  selector: 'app-prueba2',
  templateUrl: './prueba2.component.html',
  styleUrls: ['./prueba2.component.css']
})
export class Prueba2Component {
  empleados:any;

  identificador:number=0;
  nombre:string='';
  direccion:string=''
  cargo:string=''
  edad:number=0
  salario:number=0;
  imagen:string=''
  listaEmpleados:Array<ClaseEmpleado>=[]
  constructor(private empleadosService: EmpleadosService){}
  ngOnInit(): void {
    this.empleadosService.retornar().subscribe( result =>  this.empleados = result)

}
Aniadir(){
console.log(this.empleados);

this.empleados.push({id:this.identificador,nombre:this.nombre,direccion:this.direccion,cargo:this.cargo,edad:this.edad,imagen:this.imagen});

   if (this.buscarEmpleado(this.identificador)) {
     alert('ya existe, error.');
   return;
   }

  // alert('Ok.')

  //     let empleado: ClaseEmpleado=new ClaseEmpleado(this.identificador,this.nombre,this.imagen,this.salario,this.cargo);
  //     this.team2.push(empleado);

   this.identificador = 0;
  this.nombre = '';
  this.direccion='';
  this.edad=0;
  this.imagen='';
  this.cargo='';
}
buscarEmpleado(id: number) {
  console.log("buscar "+id)
  return this.empleados.find((e: { id: number; }) => e.id === id);
}


eliminar(identificador:number){
   const resultado=confirm("¿Dar de baja empleado?");
  if (resultado)
  this.empleados=this.empleados.filter((e: { id: number; })=>e.id!==identificador);
}
modificar(identificador: number) {
  let emp : any = this.buscarEmpleado(identificador);
  console.log("localizado "+emp)
  console.log("ide buscar "+emp.nombre)
  this.identificador = emp.id;
  this.nombre = emp.nombre;
  this.edad = emp.edad;
  this.imagen=emp.imagen;
  this.cargo=emp.cargo;
  this.direccion=emp.direccion

}
confirmarModificacion(identificador:number){
  this.empleados=this.empleados.filter((e: { id: number; })=>e.id!==identificador);

 this.empleados.push({id:this.identificador,nombre:this.nombre,direccion:this.direccion,cargo:this.cargo,edad:this.edad,imagen:this.imagen});
}
}
