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
  appInitStart,
  appInitSuccess,
  appInitError,
} from './app.actions';
import { of } from 'rxjs';
import {
  catchError,
  delay,
  map,
  mergeMap,
  withLatestFrom,
} from 'rxjs/operators';
import { Recipe, WebshopItem } from '../app.models';
import { Store } from '@ngrx/store';
import { selectWebshopItems } from './app.selectors';
import { ApiConnectorService } from '../services/api-connector.service';

@Injectable()
export class MacaronEffects {
  actions$ = inject(Actions);
  store = inject(Store);
  apiConnectorService = inject(ApiConnectorService);

  appInit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appInitStart),
      mergeMap(() =>
        this.apiConnectorService.getAppInit().pipe(
          map(() => appInitSuccess()),
          catchError((error) => of(appInitError({ error: error })))
        )
      )
    )
  );

  loadRecipes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadRecipesStart),
      mergeMap(() =>
        this.apiConnectorService.getRecipes().pipe(
          delay(1000),
          map((recipes: Recipe[]) => {
            const modifiedRecipes = recipes.map((recipe) => ({
              ...recipe,
              ingredients: JSON.parse(recipe.ingredients as any),
            }));

            return loadRecipesSuccess({ recipes: modifiedRecipes });
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
          return this.apiConnectorService.getWebshopItems().pipe(
            delay(1000),
            map((webshopItems: WebshopItem[]) => {
              const modifiedWebshopItems = webshopItems.map((webshopItem) => ({
                ...webshopItem,
                allergens: JSON.parse(webshopItem.allergens as any),
              }));
              return loadWebshopItemsSuccess({
                webshopItems: modifiedWebshopItems,
              });
            }),
            catchError((error) => of(loadWebshopItemsError({ error: error })))
          );
        }
      })
    )
  );
}
