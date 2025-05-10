import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { WebshopCardComponent } from '../../components/webshop-card/webshop-card.component';
import { WebshopItem } from '../../app.models';
import { mockWebshopItems } from '../../mocks/webshop.mock';
import { Store } from '@ngrx/store';
import {
  addToCart,
  loadWebshopItemsStart,
  removeFromCart,
} from '../../state/app.actions';
import { selectLoading, selectWebshopItems } from '../../state/app.selectors';
import { LoaderComponent } from '../../components/loader/loader.component';
import { tap } from 'rxjs';

@Component({
  selector: 'app-webshop-container',
  imports: [WebshopCardComponent, LoaderComponent, AsyncPipe],
  templateUrl: './webshop-container.component.html',
  styleUrl: './webshop-container.component.scss',
})
export class WebshopContainerComponent implements OnInit {
  store = inject(Store);

  webshopItems$ = this.store.select(selectWebshopItems).pipe(
    tap((webshopItems) => {
      this.webshopItems = webshopItems;
    })
  );

  webshopItems: WebshopItem[] = mockWebshopItems;
  isLoading$ = this.store.select(selectLoading);

  ngOnInit(): void {
    this.store.dispatch(loadWebshopItemsStart());
  }

  onAddedCartItemId(id: number) {
    this.store.dispatch(addToCart({ id: id }));
  }

  onRemovedCartItemId(id: number) {
    this.store.dispatch(removeFromCart({ id: id }));
  }
}
