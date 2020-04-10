import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

import { Book } from '@myorg5/data';
import * as BooksActions from '../../store/books.actions';
import * as fromApp from '../../store/app.reducer';

@Component({
  selector: 'myorg5-book-list-page',
  templateUrl: './book-list-page.component.html',
  styleUrls: ['./book-list-page.component.css']
})
export class BookListPageComponent implements OnInit {
  books$: Observable<{ books: Book[] }>;

  // TODO: temp, id will be generated in service
  genId: number;

  newBook: Book = {
    title: '',
    author: '',
    rating: null,
    desc: '',
    price: null,
    id: null
  }

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.books$ = this.store.select('books');
  }

  onBookSubmitted(book: Book){
    this.books$.subscribe( d => { this.genId = d.books.length } )

    book.id = this.genId;

    this.store.dispatch(new BooksActions.AddBook(book));
  }
}
