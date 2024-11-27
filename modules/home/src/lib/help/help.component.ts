import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'lib-help',
  standalone: true,
  imports: [CommonModule, SvgIconComponent],
  templateUrl: './help.component.html',
  styleUrl: './help.component.css',
})
export class HelpComponent {}
