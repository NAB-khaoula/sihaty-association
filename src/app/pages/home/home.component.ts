import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent, ActivitiesComponent, FooterComponent, HeaderComponent, NavBarComponent } from '@association/ui';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavBarComponent, HeaderComponent, AboutComponent, ActivitiesComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
