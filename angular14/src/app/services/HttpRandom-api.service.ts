import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { random_vehiculos } from 'src/app/models/random-vehiculos';

@Injectable({
  providedIn: 'root'
})
export class RandomApiService {



   constructor(private http: HttpClient) { }

   getRandomVehiculos(): Observable<random_vehiculos> {
    const URL = 'https://random-data-api.com/api/vehicle/random_vehicle?size=100';
    return this.http.get<random_vehiculos>(URL);
   }
   }

