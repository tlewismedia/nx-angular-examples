import { Component, OnInit } from '@angular/core';
import { Book, DataService } from '@myorg5/data';

@Component({
  selector: 'myorg5-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  books: Book[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.refresh();
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
