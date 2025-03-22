import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatIconModule, MatButtonModule, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  router = inject(Router);

  onNavigateToRecipe(): void {
    this.router.navigate(['/recipes']);
  }

  onNavigateToHome(): void {
    this.router.navigate(['/']);
  }

  onNavigateToWebshop(): void {
    this.router.navigate(['/webshop']);
  }

  onNavigateToCart(): void {
    this.router.navigate(['/cart']);
  }
}
