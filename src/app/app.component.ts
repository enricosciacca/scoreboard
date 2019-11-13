import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-score [score]="41" xname="Punteggio" ></app-score>
  `,
  styles: []
})
export class AppComponent {
  title = 'project3';
}
