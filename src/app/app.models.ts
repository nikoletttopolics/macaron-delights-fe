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

export interface WebshopItem {
  readonly id: number;
  readonly name: string;
  readonly imageSrc: string;
  readonly quantity: number;
  readonly isInStock: boolean;
  readonly allergens: string[];
  readonly backgroundColor: string;
}

export interface CartItem {
  readonly id: number;
  readonly name: string;
  readonly quantity: number;
}
