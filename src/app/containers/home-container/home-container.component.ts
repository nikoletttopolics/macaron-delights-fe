import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-container',
  imports: [CommonModule],
  templateUrl: './home-container.component.html',
  styleUrl: './home-container.component.scss',
})
export class HomeContainerComponent {
  cityImagePath: string = 'images/paris-rome.webp';
  strawberryImagePath: string = 'images/strawberry-macarons.jpg';
  lemonImagePath: string = 'images/lemon-macarons.jpg';

  historyOfMacarons: string =
    'The first macaron was made in Italy and not in France, contrary to popular belief. It found its way from Italy to France in 1533 when a chef of Italian noblewomen Catherine De Medicis brought it over to France. Cute macarons were credited to Pierre Desfontaines because of his great idea to fill the cookies with creamy ganache.';

  howToMakeMacarons: string =
    'The first is the Italian method, which involves whisking egg whites with heated sugar syrup to achieve a meringue. Icing sugar and sited almond flour are added and mixed with the egg to form a paste. This forms the macaron mixture. The second method is the French method, which involves whisking egg whites until it forms a stiff-peaked meringue. Powdered sugar and almond flour are then added slowly and mixed to achieve the desired consistency. The Italian meringue is the most effective to make macarons, and gives consistent results.';

  nationalMacaronDay: string =
    'Are you surprised? Well, that is a fun fact. Macaron has its day and it is the biggest macaron event in the year. Grab some friends and head over to a bakery together, or bring some treats into the office to delight coworkers. Whatever ways the day is celebrated, it’s sure to be delicious.';
}
