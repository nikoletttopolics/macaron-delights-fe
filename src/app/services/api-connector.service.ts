import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe, WebshopItem } from '../app.models';

@Injectable({
  providedIn: 'root',
})
export class ApiConnectorService {
  http = inject(HttpClient);

  recipesUrl = 'https://macaron-delights-be.onrender.com/recipes';
  webshopUrl = 'https://macaron-delights-be.onrender.com/webshop';

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipesUrl);
  }

  getWebshopItems(): Observable<WebshopItem[]> {
    return this.http.get<WebshopItem[]>(this.webshopUrl);
  }
}
