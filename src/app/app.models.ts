export interface Recipe {
  readonly id: number;
  readonly name: string;
  readonly ingredients: string[];
  readonly description: string;
  readonly imgSrc: string;
  readonly cardContent: string;
}
