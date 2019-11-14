import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

// config
const ENDPOINT = "http://localhost:3000/scores/";


@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor(private http: HttpClient) {}
  // con private: dich di attributo implicita

  get() {
    return this.http.get(ENDPOINT) // restituisce l'Observable
    .pipe(
      retry(3), // 3 tentativi!
      catchError(this.handleError) // gestisce l'errore e chiude lo stream
      );

      // GET con querystring:
      // const options = { params: new HttpParams({fromString: "x=1&y=2"}) };
      // return this.http.get(ENDPOINT, options);

      // Per ottenere l'intera response HTTP invece dei soli dati:
      //return this.http.get(ENDPOINT, {observe: "response"})
  }


  handleError(err: HttpErrorResponse) {
    let msg = `Error: ${err.status}\n${err.message}`;
    window.alert(msg);
    console.error(msg);
    return throwError(msg);
  }

}
