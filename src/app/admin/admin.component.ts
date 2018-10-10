import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';
import { Book } from '../book.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  selectedBook:Book = null
  editing:boolean
  constructor(
    private booksService:BooksService,
    private router:Router
    ) { }

  ngOnInit() {
    this.booksService.onBookSelceted.subscribe(
      (book)=>{
        //this.router.navigate(['admin/edit', book.isbn])
        this.editing=true
        this.selectedBook = {...book}
      }
    )
  }

  onEditDone(){
    this.selectedBook = null;
    this.editing = false
  }

  onCreateBook(){
    this.editing = true
  }

}
