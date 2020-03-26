import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookFeaturedComponent } from './book-featured/book-featured.component';
import { BookTileComponent } from './book-tile/book-tile.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, BookListComponent, BookFeaturedComponent, BookTileComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
