import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '@myorg5/data';
import * as fromApp from '../../store/app.reducer';

@Component({
  selector: 'myorg5-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  books$: Observable<{ books: Book[] }>;

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.books$ = this.store.select('books');
  }
}
