export interface Recipe {
  readonly id: number;
  readonly name: string;
  readonly ingredients: Ingredient[];
  readonly instructions: string;
  readonly recipeCardImgSrc: string;
  readonly cardContent: string;
  readonly backgroundColor: string;
  readonly recipeDialogImgSrc: string;
}

export interface Ingredient {
  name: string;
  quantity: string;
}
