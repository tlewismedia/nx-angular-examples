import { Input, Component, OnInit } from '@angular/core';
import { Book } from '@myorg5/data';

@Component({
    selector: 'myorg5-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

    @Input() books;

    constructor() { }

    ngOnInit(): void {
    }

}
