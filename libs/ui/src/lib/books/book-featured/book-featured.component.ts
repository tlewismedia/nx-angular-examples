import { Input, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '@myorg5/data';

@Component({
  selector: 'myorg5-book-featured',
  templateUrl: './book-featured.component.html',
  styleUrls: ['./book-featured.component.scss']
})
export class BookFeaturedComponent{
  @Input() books: Book[];
}
