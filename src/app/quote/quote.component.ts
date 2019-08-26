

import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
 selector: 'app-quote',
 templateUrl: './quote.component.html',
 styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
 title = 'Quotes';
 quotes: Quote[] = [
  //  new Quote('Life is not about finding yourself.', 'Uwase', new Date(2019, 9, 5)),
  //  new Quote('Do not let yesterday take up too much of today', 'Ines', new Date(2019, 15, 7)),
 ];
 toggleDetails(index) {
   this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
 }
 deleteQuote(isDelete, index) {
   if (isDelete) {
     let toDelete = confirm(`Do you want to delete ${this.quotes[index].quote}?`);
     if (toDelete) {
       this.quotes.splice(index, 1)
     }
   }
 }
 addNewQuote(quote) {
   let quoteLength = this.quotes.length;
   quote.id = quoteLength + 1;
   quote.completeDate = new Date(quote.completeDate)
   this.quotes.push(quote)
 }
 preNum:number
 lastNum:number
 counter:number
 upvote(i){
     this.quotes[i].upvotes +=1
 }
 downvote(i){
   this.quotes[i].downvotes+=1
 }
 delQuote(i){
   this.quotes.splice(i, 1)
 }
 highestUpvote(){
   this.preNum = 0
   this.lastNum = 0
   for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
     this.lastNum = this.quotes[this.counter].upvotes;
     if(this.lastNum > this.preNum){this.preNum = this.lastNum}
   }
   return  this.preNum
 }
 constructor() { }
 ngOnInit() {
 }
}