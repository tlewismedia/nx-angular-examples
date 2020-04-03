import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Book, DataService } from '@myorg5/data';
// import * as BooksActions from '../store/books.actions';
import * as fromApp from '../../store/app.reducer';

@Component({
  selector: 'myorg5-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  books: Observable<{ books: Book[] }>;

  constructor(
    private dataService: DataService,
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    // this.refresh();
    this.books = this.store.select('books');
  }

  refresh() {
    // this.dataService
    //   .fetchBooks()
    //   .subscribe(( data ) => {
    //     this.books = data
    //     console.log('got data:')
    //     console.log(this.books)
    //   });
    // this.books = this.dataService.getBooks();
  }

}
