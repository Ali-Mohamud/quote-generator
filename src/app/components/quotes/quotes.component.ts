import { Component, OnInit } from '@angular/core';

import { quote } from '../../models/quote';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:quote []

  inputQuote:string = ""

  constructor() { }

  ngOnInit(): void {

    this.quotes = [
      {
        content: '“Get busy living or get busy dying.” — Stephen King',
        completed:false
      },

      // {
        
      //     content: '“The purpose of our lives is to be happy.” — Dalai Lama',
      //     completed:true
      //   },

      //   {
      //     content: '“You only live once, but if you do it right, once is enough.” — Mae West',
      //     completed:true
      //   }

        

        
      
    ]
  }


deleteQuote (id:number) {
  this.quotes = this.quotes.filter((v, i) => i !== id);
}

addQuote () {
  this.quotes.push({
    content: this.inputQuote,
    completed: false

  })
}

}
