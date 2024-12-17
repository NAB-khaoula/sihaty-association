import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'lib-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  isOpen = false;
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    console.log('scrollPosition', scrollPosition)
    this.isScrolled = scrollPosition > 150;
  }
  toggle() {
    this.isOpen = !this.isOpen;
  }
}
