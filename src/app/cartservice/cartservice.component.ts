import { Component } from '@angular/core';

@Component({
  selector: 'app-cartservice',
  templateUrl: './cartservice.component.html',
  styleUrls: ['./cartservice.component.css']
})
export class CartserviceComponent {

}
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: any[] = [];

  constructor() {}

  // Method to add a book to the cart
  addToCart(book: any): void {
    this.cart.push(book);
    console.log('Book added to cart:', book);
  }

  // Method to retrieve items in the cart
  getCartItems(): any[] {
    return this.cart;
  }

  // Optional: Method to remove an item from the cart
  removeFromCart(book: any): void {
    this.cart = this.cart.filter(item => item.id !== book.id);
  }
}
