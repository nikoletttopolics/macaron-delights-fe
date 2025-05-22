import { createAction, props } from '@ngrx/store';
import { CheckoutForm, Recipe, WebshopItem } from '../app.models';

export const loadRecipesStart = createAction('[Recipes] Load recipes');

export const loadRecipesSuccess = createAction(
  '[Recipes] Recipes loaded',
  props<{ recipes: Recipe[] }>()
);

export const loadRecipesError = createAction(
  '[Recipes] Recipes loading failed',
  props<{ error: string }>()
);

export const loadWebshopItemsStart = createAction('[Webshop] Load WebshopItem');

export const loadWebshopItemsAlreadyLoaded = createAction(
  '[Webshop] Load Webshop Items Already Loaded'
);

export const loadWebshopItemsSuccess = createAction(
  '[Webshop] Webshop loaded',
  props<{ webshopItems: WebshopItem[] }>()
);

export const loadWebshopItemsError = createAction(
  '[Webshop] Webshop loading failed',
  props<{ error: string }>()
);

export const addToCart = createAction(
  '[Webshop] Add to cart',
  props<{ id: number }>()
);

export const removeFromCart = createAction(
  '[Webshop] Remove from cart',
  props<{ id: number }>()
);

export const updateForm = createAction(
  '[Cart] Update form',
  props<{ checkoutForm: CheckoutForm }>()
);

export const checkoutFinished = createAction('[Cart] Checkout finished');

export const appInitStart = createAction('[Home] App init start');

export const appInitSuccess = createAction('[Home] App init success');

export const appInitError = createAction(
  '[Home] App init error',
  props<{ error: string }>()
);
