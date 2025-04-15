import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { WebshopItem } from '../../app.models';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { WebshopCardDialogComponent } from './webshop-card-dialog/webshop-card-dialog.component';

@Component({
  selector: 'app-webshop-card',
  imports: [MatCardModule, MatButtonModule, MatIcon, MatTooltip],
  templateUrl: './webshop-card.component.html',
  styleUrl: './webshop-card.component.scss',
})
export class WebshopCardComponent {
  @Input() webshopItem!: WebshopItem;
  @Output() addedCartItemId = new EventEmitter<number>();
  @Output() removedCartItemId = new EventEmitter<number>();

  dialog = inject(MatDialog);

  onAddToCart(id: number): void {
    this.addedCartItemId.emit(id);
  }

  onRemoveFromCart(id: number): void {
    this.removedCartItemId.emit(id);
  }

  onViewAllergens(): void {
    this.dialog.open(WebshopCardDialogComponent, {
      autoFocus: 'first-header',
      data: this.webshopItem,
      width: '450px',
      maxWidth: '700px',
      maxHeight: '600px',
    });
  }
}
