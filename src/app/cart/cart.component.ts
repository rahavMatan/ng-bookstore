import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CartItem } from '../cart-item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService:CartService) { }
  items:CartItem[] = []
  total:number = 0
  ngOnInit() {
    this.items = this.cartService.items
    this.total = this.cartService.total
    this.cartService.itemsChanged.subscribe(
      (items)=>{
        this.items = items
        this.total = this.cartService.total
      }
    )

  }

}
