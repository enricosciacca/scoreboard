import { Injectable } from '@angular/core';

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


@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  get() {
    console.log(JSON.parse(JSONSCORES))
    return JSON.parse(JSONSCORES);
  }

}
