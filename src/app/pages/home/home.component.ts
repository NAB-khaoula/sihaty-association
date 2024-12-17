import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpComponent, ActivitiesComponent, HeaderComponent, NavBarComponent } from '@association/home';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, NavBarComponent, HelpComponent, ActivitiesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
