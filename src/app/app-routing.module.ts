import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksListComponent } from './books-list/books-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { EditBookComponent } from './admin/edit-book/edit-book.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'admin/edit/:isbn', component: EditBookComponent },
  { path: 'user', component: UserComponent },
  { path: 'books', component: BooksListComponent },
  { path: 'books/:isbn', component: BookDetailsComponent },
  { path:'', redirectTo:'books', pathMatch:'full'}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}