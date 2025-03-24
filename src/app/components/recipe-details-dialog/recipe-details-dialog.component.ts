import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Recipe } from '../../app.models';

@Component({
  selector: 'app-recipe-details-dialog',
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './recipe-details-dialog.component.html',
  styleUrl: './recipe-details-dialog.component.scss',
})
export class RecipeDetailsDialogComponent {
  recipeRef: Recipe = inject(MAT_DIALOG_DATA);
}
