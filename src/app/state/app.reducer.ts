import { createReducer, on } from '@ngrx/store';
import { CartItem, Recipe, WebshopItem } from '../app.models';
import {
  loadRecipesError,
  loadRecipesStart,
  loadRecipesSuccess,
  loadWebshopItemsError,
  loadWebshopItemsStart,
  loadWebshopItemsSuccess,
} from './app.actions';

export interface MacaronState {
  recipes: Recipe[];
  webshopItems: WebshopItem[];
  cart: CartItem[];
  loading: boolean;
}

const initialState: MacaronState = {
  recipes: [],
  webshopItems: [],
  cart: [],
  loading: false,
};

export const macaronReducer = createReducer(
  initialState,

  on(loadRecipesStart, (state) => {
    // az on olyan, mint az ofType az effectsben
    const modifiedState = {
      ...state,
      loading: true,
    };

    return modifiedState;
  }),

  on(loadRecipesSuccess, (state, action) => {
    const modifiedState = {
      ...state,
      loading: false,
      recipes: action.recipes,
    };

    return modifiedState;
  }),

  on(loadRecipesError, (state) => {
    return state;
  }),

  on(loadWebshopItemsStart, (state) => {
    const modifiedState = {
      ...state,
      loading: true,
    };

    return modifiedState;
  }),

  on(loadWebshopItemsSuccess, (state, action) => {
    const modifiedState = {
      ...state,
      loading: false,
      webshopItems: action.webshopItems,
    };
    return modifiedState;
  }),

  on(loadWebshopItemsError, (state) => {
    return state;
  })
);
