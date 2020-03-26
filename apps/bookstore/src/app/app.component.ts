import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '@myorg5/data';


@Component({
  selector: 'myorg5-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookstore';
  books: Book[];

  constructor(private http: HttpClient) {
    this.fetch();
  }

  fetch() {
    this.http.get<Book[]>('/api/books').subscribe(b => (this.books = b));
  }
  
}
