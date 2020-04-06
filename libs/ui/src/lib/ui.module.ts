import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BookListComponent } from './books/book-list/book-list.component';
import { BookFeaturedComponent } from './books/book-featured/book-featured.component';
import { BookTileComponent } from './books/book-tile/book-tile.component';
import { BookFormComponent } from './books/book-form/book-form.component';
import { BestNPipe } from './filters/best-n.pipe';

import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule,
    MatButtonModule
  ],
  declarations: [
    BookListComponent, 
    BookFeaturedComponent, 
    BookTileComponent, 
    BookFormComponent, BestNPipe
  ],
  exports: [
    BookListComponent, 
    BookFeaturedComponent, 
    BookTileComponent,
    BookFormComponent
  ]
})
export class UiModule {}
