import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent {

  logos = [
    'https://via.placeholder.com/100x50?text=Logo1',
    'https://via.placeholder.com/100x50?text=Logo2',
    'https://via.placeholder.com/100x50?text=Logo3',
    'https://via.placeholder.com/100x50?text=Logo4',
    'https://via.placeholder.com/100x50?text=Logo5'
  ];
}
