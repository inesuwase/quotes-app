import { Component } from '@angular/core';
import{Quote} from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote []= [
    {id:1, name:'Til your good is better and your better is best'},
    {id:2,name:'You learn more from failure than from success.'},
    {id:3,name:'The pessimist sees difficulty in every opportunity.'},
    {id:4,name:'Life is not about finding yourself.'},
  ];

}