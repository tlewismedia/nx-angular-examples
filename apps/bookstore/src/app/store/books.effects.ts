import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import * as BooksActions from './books.actions';
import { Book, DataService } from '@myorg5/data';

@Injectable()
export class BooksEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private dataService: DataService
  ) {}

  @Effect()
  fetchBooks = this.actions$.pipe(
    ofType(BooksActions.FETCH_BOOKS),
    switchMap(() => {
      return this.dataService.fetchBooks().pipe(
        map(books => new BooksActions.SetBooks(books))
      )
    })
  );
}