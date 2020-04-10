import { Input, Component, OnInit } from '@angular/core';
import { Book } from '@myorg5/data';

@Component({
  selector: 'myorg5-book-tile',
  templateUrl: './book-tile.component.html',
  styleUrls: ['./book-tile.component.scss']
})
export class BookTileComponent implements OnInit {
  @Input() book: Book;
  @Input() link;

  constructor() { }

  ngOnInit(): void {
    console.log('book tile');
    console.log(this.book);
  }
}
