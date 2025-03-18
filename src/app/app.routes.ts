import { Routes } from '@angular/router';

import { HomeContainerComponent } from './containers/home-container/home-container.component';
import { RecipesContainerComponent } from './containers/recipes-container/recipes-container.component';
import { WebshopContainerComponent } from './containers/webshop-container/webshop-container.component';
import { CartContainerComponent } from './containers/cart-container/cart-container.component';
import { MacaronRecipeDetailsComponent } from './components/macaron-recipe-details/macaron-recipe-details.component';

export const routes: Routes = [
  { path: '', component: HomeContainerComponent },
  { path: 'recipes', component: RecipesContainerComponent },
  { path: 'recipes/:id', component: MacaronRecipeDetailsComponent },
  { path: 'webshop', component: WebshopContainerComponent },
  { path: 'cart', component: CartContainerComponent },
  { path: '**', component: HomeContainerComponent },
];
