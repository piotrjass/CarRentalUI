import { Routes } from '@angular/router';
import { LandingPageComponent } from '../../shared/pages/landing-page/landing-page.component';
import { AvailableCarsListComponent } from '../../core/components/available-cars-list/available-cars-list.component';
import { ReservedCarsListComponent } from '../../core/components/reserved-cars-list/reserved-cars-list.component';
import { ReservationsListComponent } from '../../core/components/reservations-list/reservations-list.component';

export const routes: Routes = [
  {
    path: 'available-cars',
    component: LandingPageComponent,
    title: 'Home',
    children: [
      {
        path: 'available-cars',
        component: AvailableCarsListComponent,
        title: 'Dostępne auta',
      },
      {
        path: 'reserved-cars',
        component: ReservedCarsListComponent,
        title: 'Zarezerwowane auta ',
      },
      {
        path: 'reservations',
        component: ReservationsListComponent,
        title: 'Rezerwacje',
      },
    ],
  },
];
