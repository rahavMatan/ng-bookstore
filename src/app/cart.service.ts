import {Book} from './book.model'
import {CartItem} from './cart-item.model'
import { EventEmitter } from '@angular/core';

export class CartService {
    private _items:CartItem[] = [
       // {quantity:1,"isbn":"957791415-2","title":"Confessions of a Window Cleaner","description":"Revision of Synthetic Substitute in Left Wrist Joint, Percutaneous Endoscopic Approach","author":"Darwin Braban","price":99},
    ]

    get total(){
     return this._items.reduce((acc, item)=>{
         return acc + (item.price * item.quantity)
     },0)
    }

    get items(){
        return [...this._items]
    }
    itemsChanged = new EventEmitter<CartItem[]>()

    addItem(book:Book){
        var index = this.items.findIndex(item=>item.isbn === book.isbn)
        if(index >= 0) { //book exists
            this.items[index].quantity++
        } else {
            this._items.push(
                new CartItem(book)
            )            
         }
         this.itemsChanged.emit([...this._items])
    }

    removeItem(isbn){
        var index = this._items.findIndex(item=>item.isbn===isbn)
        if(index >= 0){
            this._items.splice(index,1)
        }
        this.itemsChanged.emit([...this._items])
    }
}

