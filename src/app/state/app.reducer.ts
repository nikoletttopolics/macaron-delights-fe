import { createReducer, on } from '@ngrx/store';
import { CartItem, CheckoutForm, Recipe, WebshopItem } from '../app.models';
import {
  loadRecipesError,
  loadRecipesStart,
  loadRecipesSuccess,
  loadWebshopItemsError,
  loadWebshopItemsStart,
  loadWebshopItemsSuccess,
  addToCart,
  removeFromCart,
  loadWebshopItemsAlreadyLoaded,
  updateForm,
  checkoutFinished,
} from './app.actions';

export interface MacaronState {
  recipes: Recipe[];
  webshopItems: WebshopItem[];
  cart: CartItem[];
  loading: boolean;
  checkoutForm: CheckoutForm;
}

const initialState: MacaronState = {
  recipes: [],
  webshopItems: [],
  cart: [],
  loading: false,
  checkoutForm: {
    firstName: '',
    lastName: '',
    address: '',
    phoneNumber: '',
    emailAddress: '',
  },
};

export const macaronReducer = createReducer(
  initialState,

  on(loadRecipesStart, (state) => ({
    ...state,
    loading: true,
  })),

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

  on(loadWebshopItemsError, loadWebshopItemsAlreadyLoaded, (state) => {
    return {
      ...state,
      loading: false,
    };
  }),

  on(addToCart, (state, action) => {
    let selectedWebshopItem!: WebshopItem;

    const updatedWebshopItems = state.webshopItems.map((webshopItem) => {
      if (webshopItem.id === action.id) {
        selectedWebshopItem = webshopItem;

        return {
          ...webshopItem,
          quantity: webshopItem.quantity - 1,
          isInStock: webshopItem.quantity - 1 ? true : false,
        };
      } else {
        return webshopItem;
      }
    });

    const existingCartItem = state.cart.find(
      (cartItem) => cartItem.id === action.id
    )!;

    let updatedCart;

    if (existingCartItem) {
      updatedCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
            isInStock: selectedWebshopItem.quantity - 1 ? true : false,
          };
        } else {
          return cartItem;
        }
      });
    } else {
      const newCartItem: CartItem = {
        id: selectedWebshopItem.id,
        name: selectedWebshopItem.name,
        quantity: 1,
        imageSrc: selectedWebshopItem.imageSrc,
        isInStock: selectedWebshopItem.quantity - 1 ? true : false,
      };

      updatedCart = [...state.cart, newCartItem];
    }

    return { ...state, cart: updatedCart, webshopItems: updatedWebshopItems };
  }),

  on(removeFromCart, (state, action) => {
    const existingCartItem = state.cart.find(
      (cartItem) => cartItem.id === action.id
    )!;

    let updateCart;

    if (existingCartItem.quantity > 1) {
      updateCart = state.cart.map((cartItem) =>
        cartItem.id === action.id
          ? {
              ...cartItem,
              quantity: cartItem.quantity - 1,
              isInStock: true,
            }
          : cartItem
      );
    } else {
      updateCart = state.cart.filter((cartItem) => cartItem.id !== action.id);
    }

    const updatedWebshopItems = state.webshopItems.map((webshopItem) => {
      if (webshopItem.id === action.id) {
        return {
          ...webshopItem,
          quantity: webshopItem.quantity + 1,
          isInStock: true,
        };
      } else {
        return webshopItem;
      }
    });

    return {
      ...state,
      cart: updateCart,
      webshopItems: updatedWebshopItems,
    };
  }),

  on(updateForm, (state, { checkoutForm }) => ({
    ...state,
    checkoutForm: checkoutForm,
  })),

  on(checkoutFinished, (state) => ({
    ...state,
    cart: [],
    checkoutForm: {
      firstName: '',
      lastName: '',
      address: '',
      phoneNumber: '',
      emailAddress: '',
    },
  }))
);
