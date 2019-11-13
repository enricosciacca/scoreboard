import { Component, OnInit } from '@angular/core';

const JSONSCORES = `
{
  "scores": [
      {"name": "Gino", "score": 55},
      {"name": "Lino", "score": 100},
      {"name": "Pino", "score":  3},
      {"name": "Nino", "score": 85}
  ]
}
`;

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  scorelist: { name: string, score: number };

  constructor() {
    this.scorelist = JSON.parse(JSONSCORES).scores;
  }

  ngOnInit() {
  }

}
