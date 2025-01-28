import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-available-car-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './available-car-card.component.html',
  styleUrl: './available-car-card.component.css',
})
export class AvailableCarCardComponent {
  @Input() make!: string;
  @Input() model!: string;
  @Input() year!: number;
  @Input() licensePlate!: string;
  @Input() status!: number;
  @Output() reserve = new EventEmitter<void>();

  onReserve() {
    this.reserve.emit();
  }
}
