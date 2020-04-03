import { Action } from '@ngrx/store';

import { Book } from '@myorg5/data';

export const ADD_BOOK = 'ADD_BOOK';


export class AddBook implements Action {
  readonly type = ADD_BOOK;

  constructor(public payload: Book) {}
}

export type BooksActions =
  | AddBook
  // | UpdateBook
  