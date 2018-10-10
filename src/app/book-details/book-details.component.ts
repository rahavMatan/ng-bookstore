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
  message = 'Loading...'
  constructor(private route:ActivatedRoute, 
    private booksService:BooksService, 
    private cartService:CartService,
    private router:Router) { }

  ngOnInit() {   
    this.isbn = this.route.snapshot.params.isbn
    this.booksService.getBook(this.isbn).then((book:Book)=>{
      this.book=book
      if(!book){
        this.message = 'No such book.'
      }
    })
    
  }

  onAddToCart(){
    this.cartService.addItem(this.book)
    this.router.navigate(['/user'])
  }

}
