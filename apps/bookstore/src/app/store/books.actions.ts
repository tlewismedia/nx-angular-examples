import { Action } from '@ngrx/store';

import { Book } from '@myorg5/data';

export const ADD_BOOK = 'ADD_BOOK';
export const UPDATE_BOOK = 'UPDATE_BOOK';
export const FETCH_BOOKS = 'FETCH_BOOKS';
export const SET_BOOKS = 'SET_BOOKS';
// export const STORE_BOOKS = 'STORE_BOOKS';


export class AddBook implements Action {
  readonly type = ADD_BOOK;

  constructor(public payload: Book) {}
}

export class UpdateBook implements Action {
  readonly type = UPDATE_BOOK;

  constructor(public payload: {book: Book, idx: number} ) {}
}

export class FetchBooks implements Action {
  readonly type = FETCH_BOOKS;
}

export class SetBooks implements Action {
  readonly type = SET_BOOKS;

  constructor(public payload: Book[]) {}
}




// export class StoreBooks implements Action {
//   readonly type = STORE_BOOKS;
// }

export type BooksActions =
  | AddBook
  | UpdateBook
  | FetchBooks
  | SetBooks
  // | StoreBooks
  