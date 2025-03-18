import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-macaron-recipe-details',
  imports: [MatButtonModule],
  templateUrl: './macaron-recipe-details.component.html',
  styleUrl: './macaron-recipe-details.component.scss',
})
export class MacaronRecipeDetailsComponent {
  id = input.required<string>();

  onLog(): void {
    console.log(this.id());
  }
}
