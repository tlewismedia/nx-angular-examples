import { Component } from '@angular/core';
import { Book, DataService } from '@myorg5/data';

@Component({
  selector: 'myorg5-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookstore';
  books: Book[] = [];

  constructor(private dataService: DataService) {
 
  }

  ngOnInit() {
    this.refresh();
  }

  onBookSubmitted(book: Book){
    this.dataService
      .addBook(book)
      .subscribe(() => {
        this.refresh();
      });
  }

  refresh() {
    this.dataService
      .fetchBooks()
      .subscribe(( data ) => {
        this.books = data
        console.log('got data:')
        console.log(this.books)
      });
  }
}
