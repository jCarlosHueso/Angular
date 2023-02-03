import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehiculos } from '../modelo/vehiculos';

@Injectable({
  providedIn: 'root'
})
export class HttpRandomServicioService {



    constructor(private http: HttpClient) { }
    getRandomVehiculos(): Observable<Vehiculos> {
    const URL = 'https://random-data-api.com/api/vehicle/random_vehicle?size=100';
     return this.http.get<Vehiculos>(URL);
}
}
/* random_vehiculos es la interfaz del punto anterior.
*/
