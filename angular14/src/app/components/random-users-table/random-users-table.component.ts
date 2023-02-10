import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatSort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HttpErrorResponse } from '@angular/common/http';
import { RandomApiService } from 'src/app/services/HttpRandom-api.service';
import { random_vehiculos } from 'src/app/models/random-vehiculos';
@Component({
  selector: 'app-random-users-table',
  templateUrl: './random-users-table.component.html',
  styleUrls: ['./random-users-table.component.css']
})
export class RandomUsersTableComponent implements OnInit {

  private subs = new Subscription();

  displayedColumns: string[] = [ 'make_and_model', 'color', 'transmission', 'fuel_type', 'doors', 'kilometrage'];

  public dataSource!: MatTableDataSource<random_vehiculos>;

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;

  private dataArray: any;

  constructor(private httpService: RandomApiService) { }
  ngOnInit() {

      console.log("entro en init")
      this.subs.add(this.httpService.getRandomVehiculos().subscribe((res) => {
          console.log(res);
          this.dataArray = res;
          this.dataSource = new MatTableDataSource<random_vehiculos>(this.dataArray);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
          (err: HttpErrorResponse) => {
            console.log("errror"+err);
          }));
    }



    aplicarFiltro(event: Event) {
      const filtro = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filtro.trim().toLowerCase();
  }



}
