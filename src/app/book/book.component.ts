import { Component, OnInit, Input, Output } from '@angular/core';
import { Book } from '../book.model';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book:Book

  constructor(
    private cartService:CartService,
    private router:Router,
    private bookService:BooksService) { }

  ngOnInit() {    
    
  }

  onBookClicked(){
    //this.router.navigate(['books',this.book.isbn])
    this.bookService.onBookSelceted.emit(this.book)
  }

  onAdd(e){
    e.stopPropagation()    
    this.cartService.addItem(this.book)
  }

}
