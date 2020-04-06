import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import * as fromApp from './store/app.reducer';
import { HeaderComponent } from './header/header.component';
import { UiModule } from '@myorg5/ui';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BookListPageComponent } from './pages/book-list-page/book-list-page.component';
import { NavComponent } from './nav/nav.component';
import { SingleBookPageComponent } from './pages/single-book-page/single-book-page.component';
import { EditSingleBookPageComponent } from './pages/edit-single-book-page/edit-single-book-page.component';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { AddressComponent } from './address/address.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { TreeComponent } from './tree/tree.component';
import { MatTreeModule } from '@angular/material/tree';
import { DragComponent } from './drag/drag.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MaterialPageComponent } from './pages/material-page/material-page.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },  
  { path: 'books', component: BookListPageComponent }, 
  { path: 'books/:id', component: SingleBookPageComponent }, 
  { path: 'books/:id/edit', component: EditSingleBookPageComponent },
  { path: 'material', component: MaterialPageComponent } 
];

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomePageComponent, BookListPageComponent, NavComponent, SingleBookPageComponent, EditSingleBookPageComponent, AddressComponent, NavigationComponent, TableComponent, DashboardComponent, TreeComponent, DragComponent, MaterialPageComponent],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    StoreModule.forRoot(fromApp.appReducer),
    StoreDevtoolsModule.instrument({logOnly: environment.production}),
    UiModule, 
    RouterModule.forRoot(appRoutes), 
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatMenuModule,
    MatTreeModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
