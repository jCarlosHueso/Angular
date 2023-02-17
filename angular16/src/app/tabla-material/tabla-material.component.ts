import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Mensaje } from '../mensaje';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-tabla-material',
  templateUrl: './tabla-material.component.html',
  styleUrls: ['./tabla-material.component.css']
})
export class TablaMaterialComponent implements AfterViewInit{

  displayedColumns: string[] = ['id', 'fecha', 'usuario', 'mensaje'];
  dataSource!: MatTableDataSource<Mensaje>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
constructor (private servicio:ServicioService){

this.servicio.leerMensajes().subscribe
((x:Mensaje[])=>{
  this.dataSource= new MatTableDataSource<Mensaje>(x),
  this.dataSource.paginator= this.paginator,
  this.dataSource.sort= this.sort
});

}
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}




