import { Component, inject } from '@angular/core';
import { mockRecipes } from '../../mocks/recipes.mock';
import { Recipe } from '../../app.models';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { RecipeDetailsDialogComponent } from '../../components/recipe-details-dialog/recipe-details-dialog.component';

@Component({
  selector: 'app-recipes-container',
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './recipes-container.component.html',
  styleUrl: './recipes-container.component.scss',
})
export class RecipesContainerComponent {
  dialog = inject(MatDialog);

  recipes: Recipe[] = mockRecipes;

  onViewRecipe(recipeId: number): void {
    const selectedRecipe = this.recipes.find(
      (recipe) => recipe.id === recipeId
    );

    this.dialog.open(RecipeDetailsDialogComponent, {
      autoFocus: 'first-header',
      data: selectedRecipe,
      width: '700px',
      maxWidth: '700px',
      maxHeight: '600px',
    });
  }
}
