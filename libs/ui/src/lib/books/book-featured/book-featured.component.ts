import { Input, Component, OnInit } from '@angular/core';
import { Book } from '@myorg5/data';

@Component({
  selector: 'myorg5-book-featured',
  templateUrl: './book-featured.component.html',
  styleUrls: ['./book-featured.component.scss']
})
export class BookFeaturedComponent implements OnInit {

  @Input() books;
  
  constructor() { }

  ngOnInit(): void {
    this.books.subscribe( b => console.log(b) );
  }

}
