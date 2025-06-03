import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { selectedCartItemsLength } from './state/app.selectors';
import { Store } from '@ngrx/store';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [
    AsyncPipe,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  router = inject(Router);
  store = inject(Store);
  breakpointObserver = inject(BreakpointObserver);

  cartItemsLength$ = this.store.select(selectedCartItemsLength);

  isMobile$ = this.breakpointObserver.observe([Breakpoints.Handset]).pipe(
    map((result) => {
      console.log('result.matches', result.matches);
      return result.matches;
    }),
    shareReplay(1)
  );

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
