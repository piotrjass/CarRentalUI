import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
// tablerMenu2
import { tablerMenu2 } from '@ng-icons/tabler-icons';
import { Router } from 'express';
@Component({
  selector: 'app-top-navbar',
  standalone: true,
  imports: [CommonModule, NgIconComponent, RouterLink, RouterModule],
  templateUrl: './top-navbar.component.html',
  styleUrl: './top-navbar.component.css',
  viewProviders: [
    provideIcons({
      tablerMenu2,
    }),
  ],
})
export class TopNavbarComponent {
  menuOpen: boolean = true;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  constructor() {}

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.updateMenuState(window.innerWidth);
    }
  }

  // Funkcja do aktualizacji stanu menu w zależności od szerokości ekranu
  updateMenuState(width: number) {
    // Jeśli szerokość jest większa niż 640px (sm breakpoint), ustawiamy menuOpen na false
    if (width > 640) {
      this.menuOpen = false;
    }
  }

  // Nasłuchiwanie na zmianę rozmiaru okna (zmienia się szerokość ekranu)
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const width = window.innerWidth;
    this.updateMenuState(width);
  }
}
