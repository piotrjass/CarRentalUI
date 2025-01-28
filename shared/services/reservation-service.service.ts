import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private apiUrl =
    'https://localhost:44334/api/VehicleReservation/reservations'; // Zmienna URL do API rezerwacji

  constructor(private http: HttpClient) {}

  getReservations(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl); // Zwracanie listy rezerwacji
  }
}
