import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import * as fromApp from './store/app.reducer';
import { HeaderComponent } from './header/header.component';
import { UiModule } from '@myorg5/ui';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BookListPageComponent } from './pages/book-list-page/book-list-page.component';
import { NavComponent } from './nav/nav.component';
import { SingleBookPageComponent } from './pages/single-book-page/single-book-page.component';
import { EditSingleBookPageComponent } from './pages/edit-single-book-page/edit-single-book-page.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },  
  { path: 'books', component: BookListPageComponent }, 
  { path: 'books/:id', component: SingleBookPageComponent }, 
  { path: 'books/:id/edit', component: EditSingleBookPageComponent } 
];

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomePageComponent, BookListPageComponent, NavComponent, SingleBookPageComponent, EditSingleBookPageComponent],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    StoreModule.forRoot(fromApp.appReducer),
    UiModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
