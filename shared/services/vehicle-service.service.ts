import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Vehicle {
  make: string;
  model: string;
  year: number;
  licensePlate: string;
  status: number;
}

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  private apiUrl = 'https://localhost:44334/api/Vehicle';

  constructor(private http: HttpClient) {}

  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.apiUrl);
  }
}
