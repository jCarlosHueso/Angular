import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableDataSourcePaginator } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Vehiculos } from '../modelo/vehiculos';
import {HttpRandomServicioService} from '../servicios/http-random-servicio.service'

@Component({
  selector: 'app-tabla-vehiculos',
  templateUrl: './tabla-vehiculos.component.html',
  styleUrls: ['./tabla-vehiculos.component.css']
})
export class TablaVehiculosComponent implements OnInit{
displayedColumns: string[] = [ 'make_and_model', 'color', 'transmission', 'fuel_type', 'doors', 'kilometrage'];
private subs = new Subscription();

public dataSource!: MatTableDataSource<Vehiculos>;

@ViewChild(MatPaginator, { static: true })
   paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;
  private dataArray: any;

  constructor(private httpService: HttpRandomServicioService) { }
  ngOnInit(): void {
    this.subs.add(this.httpService.getRandomVehiculos().subscribe((res) => {
      console.log(res);
      this.dataArray = res; //volcado línea a línea
      this.dataSource = new MatTableDataSource<Vehiculos>(this.dataArray); //volcado completo sobre el dataSource
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
}))
}



aplicarFiltro(event: KeyboardEvent) {
this.dataSource.filter=((event.target) as HTMLInputElement).value;
}

}
