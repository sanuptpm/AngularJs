
import { Component } from '@angular/core';
import { Hero } from './hero';
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero.name}}</h2>
    <p>Heros:</p>
    <ul>
      <li *ngFor="let hero of heroes">
        {{ hero.name }}
      </li>
    </ul>
    <p *ngIf="heroes.length > 3">There are many heroes!</p>
    <button (click)="onClickMe()">Click me!</button>
    {{ clickMessage }}
    `
})

export class AppComponent {
  title = 'Tour of Heroes';
  heroes = [
  new Hero(1, 'Windstorm'),
  new Hero(13, 'Bombasto'),
  new Hero(15, 'Magneta'),
  new Hero(20, 'Tornado')
];
  clickMessage = '';

    onClickMe() {
      this.clickMessage = 'You are my hero!';
    }
  myHero = this.heroes[0];
}