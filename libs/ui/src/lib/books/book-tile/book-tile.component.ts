import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'myorg5-book-tile',
  templateUrl: './book-tile.component.html',
  styleUrls: ['./book-tile.component.scss']
})
export class BookTileComponent implements OnInit {
  @Input() book;
  @Input() link;
  
  constructor() { }

  ngOnInit(): void {
  }
}
