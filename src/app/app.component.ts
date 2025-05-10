import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { Store } from '@ngrx/store';
import { selectedCartItemsLength } from './state/app.selectors';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    RouterLink,
    RouterLinkActive,
    MatBadgeModule,
    AsyncPipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  router = inject(Router);
  store = inject(Store);

  cartItemsLength$ = this.store.select(selectedCartItemsLength);

  onNavigateToRecipe(): void {
    this.router.navigate(['/recipes']);
  }

  onNavigateToHome(): void {
    this.router.navigate(['/']);
  }

  onNavigateToWebshop(): void {
    this.router.navigate(['/webshop']);
  }

  onNavigateToAboutMe(): void {
    this.router.navigate(['/aboutMe']);
  }

  onNavigateToCart(): void {
    this.router.navigate(['/cart']);
  }
}
