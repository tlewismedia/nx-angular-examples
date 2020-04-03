import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription, Observable } from 'rxjs';

import { Book, DataService } from '@myorg5/data';
import * as selectors from '../../store/books.selectors';
import * as fromApp from '../../store/app.reducer';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'myorg5-single-book-page',
  templateUrl: './single-book-page.component.html',
  styleUrls: ['./single-book-page.component.scss']
})
export class SingleBookPageComponent implements OnInit {
  book:Book;
  id;
  books: Observable<{ books: Book[] }>;
  
  constructor(
    private route: ActivatedRoute, 
    private dataService: DataService,
    private store: Store<fromApp.AppState>
  ) { 

  }

  ngOnInit(){
    // tslint:disable-next-line: radix
    const id = parseInt(this.route.snapshot.params.id);
    // TODO: come back to learning how to make ngrx selectors, will do 'get by id' locally for now
    // this.book = this.store.select(selectors.getBookById(id));

    this.store.select('books').subscribe( d => {
      console.log("BOOKS UPDATED");

      this.book = d.books.find(item => {
        return item.id === id;
      });

      // why does the state not stay fresh here? 
      // after it's updated, d.books is still the old state

      console.log('set this.book:');
      console.log(this.book);
    });
  }

}
