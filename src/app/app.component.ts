import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent, NavBarComponent } from '@association/home';

@Component({
  standalone: true,
  imports: [RouterModule, NavBarComponent, FooterComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'association';
}
