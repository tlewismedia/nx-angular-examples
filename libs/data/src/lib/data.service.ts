import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '@myorg5/data';
import { logFunc } from '@myorg5/util';
import {of, from, Observable} from 'rxjs';
import { map, tap, take, exhaustMap } from 'rxjs/operators';

// temporarily switch to a mock local api
// will later resume http requests to external Nest api




@Injectable({
  providedIn: 'root'
})
export class DataService {

  books: Book[] = [
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
  ];

  // temp disable http requests
  // constructor(private http: HttpClient) {
  //   this.fetchBooks();
  // }

  // @logFunc('app addBook')
  // addBook(book: Book): Observable<any> {
  //   return this.http.post('/api/books', book)
  // }

  // fetchBooks(): Observable<any> {
  //   return this.http.get<Book[]>('/api/books')
  // }


  fetchBooks(): Observable<Book[]> {

    return of(this.books)

  }



  getBooks(): Book[] {
    console.log("in data service, getbooks");
    return this.books;
  }

  getBook(id: number) {
    const book = this.books.find(
      (b) => {
        return b.id === id;
      }
    );
    return book;
  }

  updateBook(editedBook: Book) {
    let book = this.books.find(
      (b) => {
        return b.id === editedBook.id;
      }
    );
    if (book) {
      book = editedBook;
    }
  }


}