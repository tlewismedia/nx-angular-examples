import { Book } from '@myorg5/data';
import * as BooksActions from './books.actions';

export interface State {
  books: Book[]
}

const initialState: State = {
  books:[
    { 
      title: 'Title1',
      author: 'Author1',
      rating: 5,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare lectus sit amet est. Sit amet tellus cras adipiscing enim eu. Cras tincidunt lobortis feugiat vivamus. ',
      price: 10.50,
      id: 0
    }, 
    { 
      title: 'Title2',
      author: 'Author2',
      rating: 4,
      desc: 'Eu sem integer vitae justo eget magna fermentum iaculis eu. Mauris rhoncus aenean vel elit scelerisque mauris. Amet nisl suscipit adipiscing bibendum est ultricies integer quis.',
      price: 12.50,
      id: 1
    },
    { 
      title: 'Title3',
      author: 'Author3',
      rating: 2,
      desc: 'Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Quis risus sed vulputate odio ut enim. ',
      price: 13.50,
      id: 2
    },
    { 
      title: 'Title4',
      author: 'Author4',
      rating: 1,
      desc: 'Nam aliquam sem et tortor. Aliquet lectus proin nibh nisl condimentum. Dui vivamus arcu felis bibendum ut tristique et. Est sit amet facilisis magna etiam.',
      price: 14.50,
      id: 3
    },
    { 
      title: 'Title5',
      author: 'Author5',
      rating: 4,
      desc: 'Elementum tempus egestas sed sed. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices. ',
      price: 15.50,
      id: 4
    }
  ]
}

export function booksReducer(
  state: State = initialState,
  action: BooksActions.BooksActions
) {
  switch (action.type) {
    case BooksActions.ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload]
      };
    default:
      return state;
  }
}
