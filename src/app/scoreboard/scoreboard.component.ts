import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../score.service';
import { Score } from '../interfaces';
import { HttpResponse } from '@angular/common/http';



@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  scorelist: Array<Score> = []; // Anche Score[]

  constructor(private scoreService: ScoreService) {}

  loadData() {
    this.scoreService.get().subscribe( (data: Score[]) => {
      this.scorelist = data;
      console.log(data);
    });
  }

  ngOnInit() {
    this.loadData();
  }

  /*

  loadData2() {
    // response completa, non solo dati:
    // richiede {observe: "response"} nelle opzioni della get(),
    // v. servizio
    this.scoreService.get().subscribe( (res: HttpResponse<Score[]>) => {
      this.scorelist = res.body;
      console.warn(res)
      console.log(`RESPONSE STATUS: ${res.status}`);
    });
  }

  // non necessario per gli Observable di HttpClient
  ngOnDestroy() {
    this.observableFromLoadData.unsubscribe();
  }
  */

}
