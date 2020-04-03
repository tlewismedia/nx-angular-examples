import { createSelector } from '@ngrx/store';

import * as fromBooks from './books.reducer';

export const selectBooks = (state: fromBooks.State) => state.books;

export const getBookById = (id: number) => createSelector(selectBooks, (books) => {
  if (books) {
    return books.find(item => {
      return item.id === id;
    });
  } else {
    return {};
  }
});