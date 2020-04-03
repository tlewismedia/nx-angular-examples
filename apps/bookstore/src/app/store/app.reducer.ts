import { ActionReducerMap } from '@ngrx/store';

import * as fromBooks from './books.reducer';

export interface AppState {
  books: fromBooks.State
  // another: fromAnother.State // can add more sub state interfaces to app state interface
}

export const appReducer: ActionReducerMap<AppState> = {
  books: fromBooks.booksReducer
//   another: fromAnother.anotherReducer // can add more sub store to app store
};