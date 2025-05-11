import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadRecipesError,
  loadRecipesStart,
  loadRecipesSuccess,
  loadWebshopItemsStart,
  loadWebshopItemsSuccess,
  loadWebshopItemsError,
  loadWebshopItemsAlreadyLoaded,
} from './app.actions';
import { of } from 'rxjs';
import {
  catchError,
  delay,
  filter,
  map,
  mergeMap,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import { mockRecipes } from '../mocks/recipes.mock';
import { Recipe, WebshopItem } from '../app.models';
import { mockWebshopItems } from '../mocks/webshop.mock';
import { Store } from '@ngrx/store';
import { selectWebshopItems } from './app.selectors';

@Injectable()
export class MacaronEffects {
  actions$ = inject(Actions);
  store = inject(Store);

  loadRecipes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadRecipesStart),
      mergeMap(() =>
        of(mockRecipes).pipe(
          delay(2000),
          map((recipes: Recipe[]) => {
            return loadRecipesSuccess({ recipes: recipes });
          }),
          catchError((error) => of(loadRecipesError({ error: error })))
        )
      )
    )
  );

  loadWebshopItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadWebshopItemsStart),
      withLatestFrom(this.store.select(selectWebshopItems)),
      mergeMap(([_, webshopItems]) => {
        if (webshopItems.length > 0) {
          return of(loadWebshopItemsAlreadyLoaded());
        } else {
          return of(mockWebshopItems).pipe(
            delay(2000),
            map((webshopItems: WebshopItem[]) => {
              return loadWebshopItemsSuccess({ webshopItems: webshopItems });
            }),
            catchError((error) => of(loadWebshopItemsError({ error: error })))
          );
        }
      })
    )
  );
}
