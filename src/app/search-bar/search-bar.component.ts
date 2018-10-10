import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(private bookService:BooksService) { }

  ngOnInit() {
  }

  textEntered(){
    this.bookService.search(this.searchInput)
  }
}
