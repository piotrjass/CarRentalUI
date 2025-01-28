import { Component } from '@angular/core';
import { VehicleService } from '../../../shared/services/vehicle-service.service';
import { AvailableCarCardComponent } from '../available-car-card/available-car-card.component';

@Component({
  selector: 'app-available-cars-list',
  standalone: true,
  imports: [AvailableCarCardComponent],
  templateUrl: './available-cars-list.component.html',
  styleUrl: './available-cars-list.component.css',
})
export class AvailableCarsListComponent {
  vehicles: any[] = [];
  isLoading: boolean = true;
  constructor(private vehicleService: VehicleService) {}

  ngOnInit() {
    this.loadVehicles();
  }

  loadVehicles() {
    setTimeout(() => {
      this.vehicleService.getVehicles().subscribe((data) => {
        this.vehicles = data;
        this.isLoading = false;
      });
    }, 1000);
  }
}
