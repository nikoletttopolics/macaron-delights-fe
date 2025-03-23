import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-container',
  imports: [CommonModule],
  templateUrl: './home-container.component.html',
  styleUrl: './home-container.component.scss',
})
export class HomeContainerComponent {
  cityImagePathSrc: string = 'images/paris-rome.webp';
  macaronsOnPlateSrc: string = 'images/macarons-on-plate2.png';
  macaronPyramidSrc: string = 'images/macaron-pyramid.png';
}
