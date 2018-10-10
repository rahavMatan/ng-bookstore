import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BookComponent } from './book/book.component';
import { CartService } from './cart.service';
import { BooksService } from './books.service';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { AppRoutingModule } from './app-routing.module';
import { BookDetailsComponent } from './book-details/book-details.component';
import { AdminComponent } from './admin/admin.component';
import { EditBookComponent } from './admin/edit-book/edit-book.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    BookComponent,
    CartComponent,
    CartItemComponent,
    BookDetailsComponent,
    AdminComponent,
    EditBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CartService,
    BooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
