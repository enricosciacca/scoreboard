import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../score.service';



interface Score {
  name: string;
  score: number;
}


@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  scorelist: Array<Score>;

  constructor(private scoreService: ScoreService) {
    //this.scorelist = scoreService.get().scores; VECCHIO!
    // non va bene con quanto visto prima, all'esecuzione del
    // costruttore non ho ancora inizializzato "bene" l'app
  }

  loadData() {
    this.scoreService.getIMieiGiocatori().subscribe(
      (data: Array<Score>) => {
        this.scorelist = data;
        console.log(data);
      }
    );
  }



  ngOnInit() {
    this.loadData();
  }

}
