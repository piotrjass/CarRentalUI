import { Component } from '@angular/core';
import { VehicleService } from '../../../shared/services/vehicle-service.service';
import { AvailableCarCardComponent } from '../available-car-card/available-car-card.component';
import { ReservationService } from '../../../shared/services/reservation-service.service';
import { ToastrService } from 'ngx-toastr';
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
  constructor(
    private vehicleService: VehicleService,
    private reservationService: ReservationService,
    private toastr: ToastrService,
  ) {}

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

  onReserve(id: any) {
    const startDate = new Date().toISOString();
    const endDate = new Date();
    endDate.setHours(endDate.getHours() + 1);
    const endDateISOString = endDate.toISOString();
    this.reservationService
      .reserveVehicle(id, startDate, endDateISOString)
      .subscribe(
        (response) => {
          console.log('Rezerwacja pomyślnie wykonana!', response);
          this.loadVehicles();
        },
        (error) => {
          console.error('Błąd przy rezerwacji:', error);
        },
      );
  }
}
