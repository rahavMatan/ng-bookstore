import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BookComponent } from './book/book.component';
import { CartService } from './cart.service';
import { BooksService } from './books.service';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';

// const appRoutes:Routes = [
//   {path:'', component:BooksListComponent},
//   {path:'/:isbn', component:BookComponent}
// ]

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    BookComponent,
    CartComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CartService,
    BooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
