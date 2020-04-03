import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Book, DataService } from '@myorg5/data';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import * as BooksActions from '../../store/books.actions';
import * as fromApp from '../../store/app.reducer';

@Component({
  selector: 'myorg5-edit-single-book-page',
  templateUrl: './edit-single-book-page.component.html',
  styleUrls: ['./edit-single-book-page.component.scss']
})
export class EditSingleBookPageComponent implements OnInit {
  oldBook: Book;

  constructor(
    private route: ActivatedRoute, 
    private dataService: DataService,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(){
    // tslint:disable-next-line: radix
    const id = parseInt(this.route.snapshot.params.id);
    this.oldBook = this.dataService.getBook(id);
  }

  onBookSubmitted(newBook: Book){
    // this.dataService
    //   .addBook(book)
    //   .subscribe(() => {
    //     this.refresh();
    //   });
    
    // TODO: service should be handling this
    newBook.id = this.oldBook.id;

    // this.dataService.updateBook(newBook);

    this.store.dispatch(
      new BooksActions.UpdateBook(newBook)
    );

    this.router.navigate(['/books', newBook.id])
  }

}
