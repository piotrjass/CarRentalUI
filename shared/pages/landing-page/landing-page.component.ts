import { Component } from '@angular/core';
import { TopNavbarComponent } from '../../../core/components/top-navbar/top-navbar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [TopNavbarComponent, RouterModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {}
