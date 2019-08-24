import { Component, OnInit } from '@angular/core';
import{Quote} from './quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote []= [
    {id:1, name:'Til your good is better and your better is best'},
    {id:2,name:'You learn more from failure than from success.'},
    {id:3,name:'The pessimist sees difficulty in every opportunity.'},
    {id:4,name:'Life is not about finding yourself.'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
