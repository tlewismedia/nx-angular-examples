import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Book, DataService } from '@myorg5/data';

@Component({
  selector: 'myorg5-single-book-page',
  templateUrl: './single-book-page.component.html',
  styleUrls: ['./single-book-page.component.scss']
})
export class SingleBookPageComponent implements OnInit {
  book:Book;
  id;
  
  constructor(private route: ActivatedRoute, private dataService: DataService) { 

  }

  ngOnInit(){
    let id = parseInt(this.route.snapshot.params.id);
    this.book = this.dataService.getBook(id);
    console.log(this.book);
  }

  // when we load, we want to get the book using the id

}
