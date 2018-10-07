import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book.model';
import { BooksService } from '../books.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  isbn:string
  book:Book
  constructor(private route:ActivatedRoute, 
    private booksService:BooksService, 
    private cartService:CartService,
    private router:Router) { }

  ngOnInit() {   
    this.isbn = this.route.snapshot.params.isbn
    this.book = this.booksService.getBook(this.isbn)
    console.log(this.book);    
  }

  onAddToCart(){
    this.cartService.addItem(this.book)
    this.router.navigate(['/books'])
  }

}
