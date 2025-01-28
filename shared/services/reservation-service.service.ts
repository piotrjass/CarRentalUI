import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private apiUrl =
    'https://localhost:44334/api/VehicleReservation/reservations'; // Zmienna URL do API rezerwacji
  private reserveUrl = 'https://localhost:44334/api/VehicleReservation/reserve'; // URL do rezerwacji pojazdu
  private returnUrl = 'https://localhost:44334/api/VehicleReservation/return'; // URL do zwrotu pojazdu
  constructor(private http: HttpClient) {}

  getReservations(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl); // Zwracanie listy rezerwacji
  }

  reserveVehicle(
    vehicleId: string,
    startDate: string,
    endDate: string,
  ): Observable<any> {
    const body = {
      vehicleId: vehicleId,
      startDate: startDate,
      endDate: endDate,
    };
    return this.http.post<any>(this.reserveUrl, body);
  }

  returnVehicle(reservationId: string, returnDate: string): Observable<any> {
    const body = {
      reservationId: reservationId,
      returnDate: returnDate,
    };

    return this.http.post<any>(this.returnUrl, body);
  }
}
