import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book.model';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book:Book
  constructor(private cartService:CartService,private router:Router) { }

  ngOnInit() {    
    
  }

  onBookClicked(){
    //this.router.navigate(['books',this.book.isbn])
  }

  onAdd(e){
    e.stopPropagation()    
    this.cartService.addItem(this.book)
  }

}
