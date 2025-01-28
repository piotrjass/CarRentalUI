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
  isLoading = true;
  constructor(private reservationService: ReservationService) {}

  ngOnInit() {
    this.loadVehicles();
  }

  loadVehicles() {
    setTimeout(() => {
      this.reservationService.getReservations().subscribe((data) => {
        this.reservations = data;
        this.isLoading = false;
      });
    }, 1000);
  }

  onReserve(id: any) {
    const returnDate = new Date().toISOString();
    this.reservationService.returnVehicle(id, returnDate).subscribe(
      (response) => {
        console.log('Pojazd został zwrócony!', response);
        this.loadVehicles();
      },
      (error) => {
        console.error('Błąd przy zwrocie pojazdu:', error);
      },
    );
  }
}
