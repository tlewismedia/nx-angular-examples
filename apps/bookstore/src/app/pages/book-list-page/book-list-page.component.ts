import { Component, OnInit } from '@angular/core';
import { Book, DataService } from '@myorg5/data';

@Component({
  selector: 'myorg5-book-list-page',
  templateUrl: './book-list-page.component.html',
  styleUrls: ['./book-list-page.component.css']
})
export class BookListPageComponent implements OnInit {
  books: Book[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.refresh();
  }

  onBookSubmitted(book: Book){
    // this.dataService
    //   .addBook(book)
    //   .subscribe(() => {
    //     this.refresh();
    //   });
  }

  refresh() {
    // this.dataService
    //   .fetchBooks()
    //   .subscribe(( data ) => {
    //     this.books = data
    //     console.log('got data:')
    //     console.log(this.books)
    //   });

    this.books = this.dataService.getBooks();
  }

}
