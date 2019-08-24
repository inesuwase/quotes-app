import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class GoalComponent implements OnInit {

  quotes: Quote = [
    {id:1, name:'Life is not about finding yourself.'},
    {id:2,name:'Do not let yesterday take up too much of today'},
  ];

  constructor() { }

  ngOnInit() {
  }

}