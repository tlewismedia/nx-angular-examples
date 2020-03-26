import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookFeaturedComponent } from './book-featured/book-featured.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, BookListComponent, BookFeaturedComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
