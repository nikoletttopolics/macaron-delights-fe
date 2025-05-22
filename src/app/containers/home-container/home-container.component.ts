import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { appInitStart } from '../../state/app.actions';

@Component({
  selector: 'app-home-container',
  imports: [CommonModule],
  templateUrl: './home-container.component.html',
  styleUrl: './home-container.component.scss',
})
export class HomeContainerComponent implements OnInit {
  store = inject(Store);

  cityImagePathSrc: string = 'images/paris-rome.webp';
  macaronsOnPlateSrc: string = 'images/macarons-on-plate2.png';
  macaronPyramidSrc: string = 'images/macaron-pyramid.png';

  ngOnInit(): void {
    this.store.dispatch(appInitStart());
  }
}
