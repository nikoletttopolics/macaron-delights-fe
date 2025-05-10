import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-about-me-container',
  imports: [MatCardModule, MatChipsModule],
  templateUrl: './about-me-container.component.html',
  styleUrl: './about-me-container.component.scss',
})
export class AboutMeContainerComponent {}
