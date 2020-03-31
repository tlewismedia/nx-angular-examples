import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '@myorg5/data';
import { logFunc } from '@myorg5/util';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data;

  constructor(private http: HttpClient) { 
    this.fetchBooks();
  }

  @logFunc('app addBook')
  addBook(book: Book): Observable<any> {
    return this.http.post('/api/books', book)
  }

  fetchBooks(): Observable<any> {
    return this.http.get<Book[]>('/api/books')
  }
}