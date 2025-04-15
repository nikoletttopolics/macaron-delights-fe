import {
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { mockRecipes } from '../../mocks/recipes.mock';
import { Recipe } from '../../app.models';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { RecipeDetailsDialogComponent } from '../../components/recipe-details-dialog/recipe-details-dialog.component';
import { loadRecipesStart } from '../../state/app.actions';
import { Store } from '@ngrx/store';
import { selectLoading, selectRecipes } from '../../state/app.selectors';
import { tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { LoaderComponent } from '../../components/loader/loader.component';

@Component({
  selector: 'app-recipes-container',
  imports: [MatButtonModule, MatCardModule, LoaderComponent, AsyncPipe],
  templateUrl: './recipes-container.component.html',
  styleUrl: './recipes-container.component.scss',
})
export class RecipesContainerComponent implements OnInit {
  store = inject(Store);
  dialog = inject(MatDialog);

  recipes$ = this.store.select(selectRecipes).pipe(
    tap((recipes) => {
      this.recipes = recipes;
    })
  );

  recipes: Recipe[] = [];
  isLoading$ = this.store.select(selectLoading);

  ngOnInit(): void {
    this.store.dispatch(loadRecipesStart());
  }

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
