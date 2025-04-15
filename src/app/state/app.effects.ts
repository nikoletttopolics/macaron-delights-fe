import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadRecipesError,
  loadRecipesStart,
  loadRecipesSuccess,
  loadWebshopItemsStart,
  loadWebshopItemsSuccess,
  loadWebshopItemsError,
} from './app.actions';
import { of } from 'rxjs';
import { catchError, delay, map, mergeMap, tap } from 'rxjs/operators';
import { mockRecipes } from '../mocks/recipes.mock';
import { Recipe, WebshopItem } from '../app.models';
import { mockWebshopItems } from '../mocks/webshop.mock';

@Injectable()
export class MacaronEffects {
  actions$ = inject(Actions);

  loadRecipes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadRecipesStart), // itt fülelünk a dispatchelt actionre
      mergeMap(() =>
        of(mockRecipes).pipe(
          // itt kamu apihívásokat végzünk, ami egy observable és így tudunk pipeolni rajta
          delay(3000),
          map((recipes: Recipe[]) => {
            // ez a success ág, ahol dispatcheljük a success actiont
            return loadRecipesSuccess({ recipes: recipes });
          }),
          catchError((error) => of(loadRecipesError({ error: error }))) // error ág, ahol -||-
        )
      )
    )
  );

  loadWebshopItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadWebshopItemsStart), // itt fülelünk a dispatchelt actionre
      mergeMap(() =>
        of(mockWebshopItems).pipe(
          // itt kamu apihívásokat végzünk, ami egy observable és így tudunk pipeolni rajta
          delay(3000),
          map((webshopItems: WebshopItem[]) => {
            // ez a success ág, ahol dispatcheljük a success actiont
            return loadWebshopItemsSuccess({ webshopItems: webshopItems });
          }),
          catchError((error) => of(loadWebshopItemsError({ error: error }))) // error ág, ahol -||-
        )
      )
    )
  );
}
