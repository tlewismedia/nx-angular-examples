import { Component } from '@angular/core';
import { Book } from '@myorg5/data';
import { Store } from '@ngrx/store';
import * as BooksActions from './store/books.actions';

@Component({
  selector: 'myorg5-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookstore';

  constructor(private store: Store) {}

  onInit() {
    this.store.dispatch(new BooksActions.FetchBooks());
  }
}
