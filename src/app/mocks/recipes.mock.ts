import { Recipe } from '../app.models';

export const mockRecipes: Recipe[] = [
  {
    id: 1,
    name: 'Pistachio Macaron',
    ingredients: [
      'eggs',
      'almond flour',
      'sugar',
      'food coloring',
      'pistachio cream',
    ],
    description:
      'Integer id orci fermentum, egestas lacus at, hendrerit turpis. Quisque in orci semper, aliquet neque vel, aliquam velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam accumsan eleifend nisl ac pulvinar. Nam posuere eu ipsum quis porttitor. Donec imperdiet libero quis turpis tincidunt, aliquet mattis ante semper. Vestibulum commodo velit at tempor condimentum. Pellentesque dapibus arcu dolor, convallis pellentesque lorem luctus ut. Vestibulum magna urna, luctus quis dolor mollis, varius varius justo. Quisque congue, sapien et ornare fermentum, neque risus volutpat libero, ut maximus mauris urna in leo. Sed nisi dui, blandit et aliquet sit amet, mattis porttitor ipsum. Phasellus feugiat interdum urna et tempus.',
    imgSrc: 'images/macaron-card-images/pistachio-macaron.png',
    cardContent:
      'Delicate pistachio macarons with a crisp shell, chewy center, and luscious pistachio buttercream filling—perfectly nutty and irresistibly sweet!',
  },
  {
    id: 2,
    name: 'Chocolate Macaron',
    ingredients: [
      'eggs',
      'almond flour',
      'sugar',
      'food coloring',
      'chocolate',
    ],
    description:
      'Integer id orci fermentum, egestas lacus at, hendrerit turpis. Quisque in orci semper, aliquet neque vel, aliquam velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam accumsan eleifend nisl ac pulvinar. Nam posuere eu ipsum quis porttitor. Donec imperdiet libero quis turpis tincidunt, aliquet mattis ante semper. Vestibulum commodo velit at tempor condimentum. Pellentesque dapibus arcu dolor, convallis pellentesque lorem luctus ut. Vestibulum magna urna, luctus quis dolor mollis, varius varius justo. Quisque congue, sapien et ornare fermentum, neque risus volutpat libero, ut maximus mauris urna in leo. Sed nisi dui, blandit et aliquet sit amet, mattis porttitor ipsum. Phasellus feugiat interdum urna et tempus.',
    imgSrc: 'images/macaron-card-images/chocolate-macaron.png',
    cardContent:
      'Rich, chocolatey macarons with a crisp shell and velvety ganache filling, offering an indulgent cocoa experience.',
  },
  {
    id: 3,
    name: 'Raspberry Macaron',
    ingredients: [
      'eggs',
      'almond flour',
      'sugar',
      'food coloring',
      'raspberry',
    ],
    description:
      'Integer id orci fermentum, egestas lacus at, hendrerit turpis. Quisque in orci semper, aliquet neque vel, aliquam velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam accumsan eleifend nisl ac pulvinar. Nam posuere eu ipsum quis porttitor. Donec imperdiet libero quis turpis tincidunt, aliquet mattis ante semper. Vestibulum commodo velit at tempor condimentum. Pellentesque dapibus arcu dolor, convallis pellentesque lorem luctus ut. Vestibulum magna urna, luctus quis dolor mollis, varius varius justo. Quisque congue, sapien et ornare fermentum, neque risus volutpat libero, ut maximus mauris urna in leo. Sed nisi dui, blandit et aliquet sit amet, mattis porttitor ipsum. Phasellus feugiat interdum urna et tempus.',
    imgSrc: 'images/macaron-card-images/raspberry-macaron.png',
    cardContent:
      'Tart raspberry macarons with a delicate crunch and smooth, fruity filling, bursting with bright berry flavor.',
  },
  {
    id: 4,
    name: 'Lemon Macaron',
    ingredients: ['eggs', 'almond flour', 'sugar', 'food coloring', 'lemon'],
    description:
      'Integer id orci fermentum, egestas lacus at, hendrerit turpis. Quisque in orci semper, aliquet neque vel, aliquam velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam accumsan eleifend nisl ac pulvinar. Nam posuere eu ipsum quis porttitor. Donec imperdiet libero quis turpis tincidunt, aliquet mattis ante semper. Vestibulum commodo velit at tempor condimentum. Pellentesque dapibus arcu dolor, convallis pellentesque lorem luctus ut. Vestibulum magna urna, luctus quis dolor mollis, varius varius justo. Quisque congue, sapien et ornare fermentum, neque risus volutpat libero, ut maximus mauris urna in leo. Sed nisi dui, blandit et aliquet sit amet, mattis porttitor ipsum. Phasellus feugiat interdum urna et tempus.',
    imgSrc: 'images/macaron-card-images/lemon-macaron.png',
    cardContent:
      'Zesty lemon macarons with a crisp exterior and tangy-sweet citrus buttercream, refreshing and light.',
  },
  {
    id: 5,
    name: 'Vanilla Macaron',
    ingredients: ['eggs', 'almond flour', 'sugar', 'food coloring'],
    description:
      'Integer id orci fermentum, egestas lacus at, hendrerit turpis. Quisque in orci semper, aliquet neque vel, aliquam velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam accumsan eleifend nisl ac pulvinar. Nam posuere eu ipsum quis porttitor. Donec imperdiet libero quis turpis tincidunt, aliquet mattis ante semper. Vestibulum commodo velit at tempor condimentum. Pellentesque dapibus arcu dolor, convallis pellentesque lorem luctus ut. Vestibulum magna urna, luctus quis dolor mollis, varius varius justo. Quisque congue, sapien et ornare fermentum, neque risus volutpat libero, ut maximus mauris urna in leo. Sed nisi dui, blandit et aliquet sit amet, mattis porttitor ipsum. Phasellus feugiat interdum urna et tempus.',
    imgSrc: 'images/macaron-card-images/vanilla-macaron.png',
    cardContent:
      'Classic vanilla macarons with a crisp shell and creamy, aromatic vanilla bean filling for an elegant treat.',
  },
  {
    id: 6,
    name: 'Strawberry Macaron',
    ingredients: ['eggs', 'almond flour', 'sugar', 'food coloring'],
    description:
      'Integer id orci fermentum, egestas lacus at, hendrerit turpis. Quisque in orci semper, aliquet neque vel, aliquam velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam accumsan eleifend nisl ac pulvinar. Nam posuere eu ipsum quis porttitor. Donec imperdiet libero quis turpis tincidunt, aliquet mattis ante semper. Vestibulum commodo velit at tempor condimentum. Pellentesque dapibus arcu dolor, convallis pellentesque lorem luctus ut. Vestibulum magna urna, luctus quis dolor mollis, varius varius justo. Quisque congue, sapien et ornare fermentum, neque risus volutpat libero, ut maximus mauris urna in leo. Sed nisi dui, blandit et aliquet sit amet, mattis porttitor ipsum. Phasellus feugiat interdum urna et tempus.',
    imgSrc: 'images/macaron-card-images/strawberry-macaron.png',
    cardContent:
      'Sweet strawberry macarons with a crunchy shell and luscious berry filling, delivering fresh, fruity goodness.',
  },
];
