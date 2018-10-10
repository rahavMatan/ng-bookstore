import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy, OnChanges, on {

  constructor(private booksService:BooksService, private router:Router) { }
  subscription :Subscription
  ngOnInit() {
    console.log('init');
    
    this.subscription = this.booksService.onBookSelceted.subscribe(
      (book)=>{
        console.log('user book selected', book);
        this.router.navigate(['books',book.isbn])
      }
    )
  }

  // ngOnChanges(){
  //   console.log('change');
    
  //   this.subscription = this.booksService.onBookSelceted.subscribe(
  //     (book)=>{
  //       console.log('user book selected', book);
  //       this.router.navigate(['books',book.isbn])
  //     }
  //   )
  // }

  ngOnDestroy(){
    console.log('destroy');
    this.subscription.unsubscribe()
    
  }

}
