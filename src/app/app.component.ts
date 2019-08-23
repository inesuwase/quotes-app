import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // quotes = 'Create your quote';
  quotes:string[];

  constructor(){
    this.quotes = ['Til your good is better and your better is best','Do not let yesterday take up too much of today.']
  } 
}
