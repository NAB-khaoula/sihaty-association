import { Component } from '@angular/core';
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
  toggle() {
    this.isOpen = !this.isOpen;
  }
}
