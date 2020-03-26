import { Input, Component, OnInit } from '@angular/core';

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
