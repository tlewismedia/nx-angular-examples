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
  idx: number;

  constructor(
    private route: ActivatedRoute, 
    private dataService: DataService,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(){
    // tslint:disable-next-line: radix
    const id = parseInt(this.route.snapshot.params.id);
    
    this.store.select('books').subscribe( d => {
      this.idx = d.books.findIndex(item => {
        return item.id === id;
      });
      
      this.oldBook = d.books.find(item => {
        return item.id === id;
      });
    })
  }

  onBookSubmitted(newBook: Book){
    // TODO: service should be handling this
    newBook.id = this.oldBook.id;

    this.store.dispatch(
      new BooksActions.UpdateBook({book: newBook, idx: this.idx})
    );

    this.router.navigate(['/books', newBook.id])
  }
}
