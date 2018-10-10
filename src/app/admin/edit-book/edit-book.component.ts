import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/book.model';
import { BooksService } from 'src/app/books.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  @Input() book :Book = null
  isNewBook:boolean = false;

  @Output() onDone = new EventEmitter<void>()
  constructor(
    private bookService:BooksService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    this.isNewBook = !this.book
    this.book = this.book || {}
    // this.bookService.getBook(this.route.snapshot.params.isbn).then((book:Book)=>{
    //   this.book = book
    // })
  }

  onSubmit(){
    this.bookService.upsertBook(this.book)
    //this.router.navigate(['admin'])
    this.onDone.emit() 
  }

  onBack(){
    this.onDone.emit()
  }

  onRemoveBook(event){
    event.preventDefault()
    this.bookService.removeBook(this.book)
    this.onDone.emit()
  }

}
