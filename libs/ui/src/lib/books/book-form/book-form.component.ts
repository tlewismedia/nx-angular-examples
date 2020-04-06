import { Input, Output, Component, OnInit, EventEmitter } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from '@myorg5/data';


@Component({
  selector: 'myorg5-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  @Output() 
  bookSubmitted = new EventEmitter<Book>();

  @Input()
  currentBook: Book;

  bookForm: FormGroup;
  newBook: Book;

  constructor() { }

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      'title': new FormControl(),
      'author': new FormControl(),
      'rating': new FormControl(),
      'desc': new FormControl(),
      'price': new FormControl(),
    });
  }

  onSubmit() {
    this.newBook = this.bookForm.value;

    this.bookSubmitted.emit(this.newBook);
  }
}
