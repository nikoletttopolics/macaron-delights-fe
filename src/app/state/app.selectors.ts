import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MacaronState } from './app.reducer';

export const selectMacaronFeature =
  createFeatureSelector<MacaronState>('macaron');

export const selectRecipes = createSelector(
  selectMacaronFeature,
  (state: MacaronState) => {
    return state.recipes;
  }
);

export const selectLoading = createSelector(
  selectMacaronFeature,
  (state: MacaronState) => {
    return state.loading;
  }
);

export const selectWebshopItems = createSelector(
  selectMacaronFeature,
  (state: MacaronState) => {
    return state.webshopItems;
  }
);
