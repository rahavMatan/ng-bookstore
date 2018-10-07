import {Book} from './book.model'

export class CartItem extends Book{
    constructor(book:Book,public quantity:number=1){
        super(book.isbn, book.title, book.description, book.price,book.author)
    }
}