import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { CuadroDialogoComponent} from './cuadro-dialogo/cuadro-dialogo.component';
import { Empleado } from './empleado';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

Eliminar(emp: Empleado) {
}
Modificar(emp: Empleado) {
}
abrirCuadroDialogo() {


  const dialogo1 = this.dialog.open(CuadroDialogoComponent, {
         data: new Empleado(0,'','', '', 0,'')
        });

 dialogo1.afterClosed().subscribe(emp => {
   if (emp != undefined)
     this.agregar(emp);
  });
}
agregar(emp: Empleado) {
      this.datos.push(new Empleado(emp.id, emp.nombre, emp.direccion,
                                            emp.cargo,   emp.edad,    emp.imagen));
      this.tabla1.renderRows();
}
borrarFila(id: number) {
   if (confirm("Realmente quiere borrarlo?")) {
          this.datos.splice(id, 1);
          this.tabla1.renderRows();
    }
}
modificarFila(emp:Empleado){
  const dialogo1 = this.dialog.open(CuadroDialogoComponent, {
  data: new Empleado(emp.id,emp.nombre,emp.direccion,emp.cargo, emp.edad,emp.imagen)
});
}
  title = 'angular9';
  displayedColumns: string[] = ['id', 'nombre', 'direccion', 'cargo' , 'edad', 'imagen', 'eliminar' , 'modificar'];
 // dataSource = Empleado[]=[];
 datos:Empleado[]=[];
 urlString:string="http://moralo.atwebpages.com/ajaxListar/getTodoPersonal.php"
 @ViewChild(MatTable) tabla1!: MatTable<Empleado>;
  ds=new MatTableDataSource<Empleado>();
  constructor(public dialog: MatDialog, private httpCliente: HttpClient){  }
  ngOnInit(): void {
   this.httpCliente.get<Empleado[]>(this.urlString).subscribe((res)=>{  this.ds.data = res; this.datos=res})


  }


}
