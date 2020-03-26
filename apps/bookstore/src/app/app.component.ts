import { Component } from '@angular/core';

interface Book {
  title: string,
  author: string,
  rating: Number,
  desc: string
}

@Component({
  selector: 'myorg5-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookstore';
  
  books: Book[] = [
  { 
    title: 'Title1',
    author: 'Author1',
    rating: 5,
    desc: 'Lorem Ipsum'
  }, 
  { 
    title: 'Title2',
    author: 'Author2',
    rating: 4,
    desc: 'dolor sit amet'
  }
  ];
}
