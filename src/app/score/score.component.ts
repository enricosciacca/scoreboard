import { Component } from '@angular/core';

const SCORE_MAX = 100;
const SCORE_MIN = 0;


@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent {

  name:  string = "Punteggio";
  score: number = 0;

  increment() { 
    if (this.score<SCORE_MAX) this.score++;
  }

  decrement() { 
    if (this.score>SCORE_MIN) this.score--;
  }

  constructor() { }



}
