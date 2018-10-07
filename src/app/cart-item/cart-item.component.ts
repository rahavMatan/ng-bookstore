import { Component, OnInit ,Input} from '@angular/core';
import { CartItem } from '../cart-item.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styles: [`
    .no-padding {
      padding:0
    }
  `]
})
export class CartItemComponent implements OnInit {
  @Input() item:CartItem
  constructor(private cartService:CartService) { }

  ngOnInit() {
  }

  onRemove(){
    this.cartService.removeItem(this.item.isbn)
  }

}
