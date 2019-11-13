import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../score.service';



@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  scorelist: { name: string, score: number };

  constructor(scoreService: ScoreService) {
    this.scorelist = scoreService.get().scores;
  }

  ngOnInit() {
  }

}
