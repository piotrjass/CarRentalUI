import { Component } from '@angular/core';
import { VehicleService } from '../../../shared/services/vehicle-service.service';
import { AvailableCarCardComponent } from '../available-car-card/available-car-card.component';

@Component({
  selector: 'app-reserved-cars-list',
  standalone: true,
  imports: [AvailableCarCardComponent],
  templateUrl: './reserved-cars-list.component.html',
  styleUrl: './reserved-cars-list.component.css',
})
export class ReservedCarsListComponent {
  vehicles: any[] = [];
  reservedVehicles: any[] = [];

  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.vehicleService.getVehicles().subscribe((data) => {
      this.vehicles = data;
      this.reservedVehicles = this.vehicles.filter(
        (vehicle) => vehicle.status === 1,
      );
    });
  }
}
