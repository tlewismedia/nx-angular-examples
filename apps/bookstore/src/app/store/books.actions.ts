import { Action } from '@ngrx/store';

import { Book } from '@myorg5/data';

export const ADD_BOOK = 'ADD_BOOK';
export const UPDATE_BOOK = 'UPDATE_BOOK';


export class AddBook implements Action {
  readonly type = ADD_BOOK;

  constructor(public payload: Book) {}
}

export class UpdateBook implements Action {
  readonly type = UPDATE_BOOK;

  constructor(public payload: {book: Book, idx: number} ) {}
}

export type BooksActions =
  | AddBook
  | UpdateBook
  