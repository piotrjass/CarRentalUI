import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-reserved-car-card',
  standalone: true,
  imports: [],
  templateUrl: './reserved-car-card.component.html',
  styleUrl: './reserved-car-card.component.css',
})
export class ReservedCarCardComponent {
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
    return status === 1 ? 'Zarezerwowane' : 'Nieaktywne';
  }

  onReserve(): void {
    this.reserve.emit();
  }
}
