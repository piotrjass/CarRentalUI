import { Component } from '@angular/core';
import { ReservationService } from '../../../shared/services/reservation-service.service';
import { ReservationCardComponent } from '../reservation-card/reservation-card.component';

@Component({
  selector: 'app-reservations-list',
  standalone: true,
  imports: [ReservationCardComponent],
  templateUrl: './reservations-list.component.html',
  styleUrl: './reservations-list.component.css',
})
export class ReservationsListComponent {
  reservations: any[] = []; // Tablica rezerwacji

  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    // Ładowanie rezerwacji z API
    this.reservationService.getReservations().subscribe((data) => {
      this.reservations = data;
    });
  }

  // Możesz dodać logikę po kliknięciu przycisku rezerwacji, jeśli jest potrzebna
  onReserve(reservationId: string): void {
    console.log(`Rezerwacja ${reservationId} została zarezerwowana!`);
    // Tutaj możesz dodać logikę do rezerwacji, np. wysłać żądanie do API
  }
}
