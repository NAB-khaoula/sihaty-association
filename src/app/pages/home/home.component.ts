import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent, HeaderComponent, NavBarComponent } from '@association/ui';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavBarComponent, HeaderComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
