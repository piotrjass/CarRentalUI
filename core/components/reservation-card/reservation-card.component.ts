import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-reservation-card',
  standalone: true,
  imports: [],
  templateUrl: './reservation-card.component.html',
  styleUrl: './reservation-card.component.css',
})
export class ReservationCardComponent {
  @Input() id!: string;
  @Input() vehicleId!: string;
  @Input() startDate!: string;
  @Input() endDate!: string;
  @Input() returnDate!: string | null;
  @Input() status!: number;
  @Output() reserve = new EventEmitter<void>();

  // Formatowanie daty (np. dd-mm-yyyy)
  formatDate(date: string | null): string {
    if (!date) return 'Brak daty';
    const formattedDate = new Date(date);
    return `${formattedDate.getDate().toString().padStart(2, '0')}-${(
      formattedDate.getMonth() + 1
    )
      .toString()
      .padStart(2, '0')}-${formattedDate.getFullYear()}`;
  }

  // Metoda do sprawdzania statusu rezerwacji
  getStatusText(status: number): string {
    return status === 1 ? 'Zarezerwowane' : 'Nieaktywne';
  }

  // Wywołanie zdarzenia rezerwacji
  onReserve(): void {
    this.reserve.emit();
  }
}
