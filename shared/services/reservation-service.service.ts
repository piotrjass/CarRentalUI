import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private baseUrl = 'https://localhost:44334/api/VehicleReservation';

  constructor(private http: HttpClient) {}

  getReservations(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/reservations`);
  }

  reserveVehicle(
    vehicleId: string,
    startDate: string,
    endDate: string,
  ): Observable<any> {
    const body = { vehicleId, startDate, endDate };
    return this.http.post<any>(`${this.baseUrl}/reserve`, body);
  }

  returnVehicle(reservationId: string, returnDate: string): Observable<any> {
    const body = { reservationId, returnDate };
    return this.http.post<any>(`${this.baseUrl}/return`, body);
  }
}
