import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BookListComponent } from './books/book-list/book-list.component';
import { BookFeaturedComponent } from './books/book-featured/book-featured.component';
import { BookTileComponent } from './books/book-tile/book-tile.component';
import { BookFormComponent } from './books/book-form/book-form.component';
import { BestNPipe } from './filters/best-n.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule
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
