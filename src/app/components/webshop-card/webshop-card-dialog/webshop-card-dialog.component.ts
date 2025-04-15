import { Component, inject } from '@angular/core';
import { WebshopItem } from '../../../app.models';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-webshop-card-dialog',
  imports: [MatButtonModule, MatDialogModule, CommonModule],
  templateUrl: './webshop-card-dialog.component.html',
  styleUrl: './webshop-card-dialog.component.scss',
})
export class WebshopCardDialogComponent {
  allergensRef: WebshopItem = inject(MAT_DIALOG_DATA);
}
