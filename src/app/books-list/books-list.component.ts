import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Book } from '../book.model';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  constructor(private booksService:BooksService) { }
  books:Book[] = []

  ngOnInit() {
    this.booksService.getBooks().then((books:Book[])=>{
      this.books = books
    })

    this.booksService.booksChanged.subscribe((books:Book[])=>{
      console.log('changed');
      
      this.books = books
    })
  }

}
