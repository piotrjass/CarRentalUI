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

  formatDate(date: string | null): string {
    if (!date) return 'Brak daty';
    const formattedDate = new Date(date);
    return `${formattedDate.getDate().toString().padStart(2, '0')}-${(
      formattedDate.getMonth() + 1
    )
      .toString()
      .padStart(2, '0')}-${formattedDate.getFullYear()}`;
  }

  getStatusText(status: number): string {
    return status === 0 ? 'Aktywna' : 'Odwołana';
  }

  onReserve(): void {
    this.reserve.emit();
  }
}
