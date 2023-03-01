import { Component, DoCheck, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Cart } from 'src/app/interfaces/interfaces';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/product.model';
import { SpinnerComponent } from "../../../shared/spinner/spinner.component";

@Component({
    selector: 'app-cart',
    standalone: true,
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
    imports: [CommonModule, RouterModule, SpinnerComponent]
})
export class CartComponent implements OnInit , DoCheck {
  cartItems: any = [];
  cartTotal = 0;
  isLoading: boolean;
  constructor(private cartService: CartService) {
    this.isLoading = this.cartService.isLoading;
   }

  

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.cartTotal = this.cartService.getCartTotal();
    this.isLoading = this.cartService.isLoading;
  }
  ngDoCheck(): void {
    this.cartItems = this.cartService.getCartItems();
    this.cartTotal = this.cartService.getCartTotal();
    this.isLoading = this.cartService.isLoading;
  }

  removeCartItem(cartItem: Cart) {
    this.cartService.removeCartItem(cartItem.product as unknown as Product)
    this.cartTotal = this.cartService.getCartTotal();
    this.cartItems = this.cartService.getCartItems();
  }

  decreaseQuantity(cartItem: Cart) {
    if (cartItem.quantity > 1) {
      this.cartService.reduceCartItem(cartItem.product as unknown as Product)
      this.cartTotal = this.cartService.getCartTotal();
    }else{
      this.removeCartItem(cartItem);
    }
  }

  increaseQuantity(cartItem: Cart) {
    this.cartService.addToCart(cartItem.product as unknown as Product)
    this.cartTotal = this.cartService.getCartTotal();
  }

  checkout() {
    
    this.cartService.checkoutCart();
    this.cartTotal = this.cartService.getCartTotal();
    this.cartItems = this.cartService.getCartItems();
  
  }
}
