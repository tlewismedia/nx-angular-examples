import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookListComponent } from './books/book-list/book-list.component';
import { BookFeaturedComponent } from './books/book-featured/book-featured.component';
import { BookTileComponent } from './books/book-tile/book-tile.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BookListComponent, BookFeaturedComponent, BookTileComponent],
  exports: [BookListComponent, BookFeaturedComponent, BookTileComponent]
})
export class UiModule {}
