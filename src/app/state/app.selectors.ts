import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MacaronState } from './app.reducer';
import { updateForm } from './app.actions';

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

export const selectedCartItems = createSelector(
  selectMacaronFeature,
  (state: MacaronState) => state.cart
);

export const selectedCartItemsLength = createSelector(
  selectMacaronFeature,
  (state: MacaronState) =>
    state.cart.reduce((sum, cartItem) => sum + cartItem.quantity, 0)
);

export const selectCheckoutForm = createSelector(
  selectMacaronFeature,
  (state: MacaronState) => state.checkoutForm
);
