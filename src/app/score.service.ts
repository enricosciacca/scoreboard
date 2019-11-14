import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const ENDPOINT = "http://localhost:3000/scores/";


@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor(private http: HttpClient) {}
  /* SCORCIATOIA per scrivere questo:
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }
  */


  getIMieiGiocatori() {

    return this.http.get(ENDPOINT);


  }

}
