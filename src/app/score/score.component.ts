import { Component, Input } from '@angular/core';

const SCORE_MAX = 100;
const SCORE_MIN = 0;


@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent {

  @Input()
  score: number;
  // impostare con: [score]=""

  @Input("xname") // nome del parametro diverso da
  name: string;
  // impostare con: [name]="'Punteggio'" o semplicemente name="Punteggio"

  increment() {
    if (this.score<SCORE_MAX) this.score++;
  }

  decrement() {
    if (this.score>SCORE_MIN) this.score--;
  }

  constructor() { }

}
