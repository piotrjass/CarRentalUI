import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
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

  updateMenuState(width: number) {
    if (width > 640) {
      this.menuOpen = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const width = window.innerWidth;
    this.updateMenuState(width);
  }
}
