import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

interface CartItem {
  product: Product;
  quantity: number;
}
interface order {
  user_id: string,
  is_paid: string,
  is_delivered: string,
  amount: string,
  is_updated: string,
  is_sent: string

}
interface orderItem {
  order_id: string,
  product_id: string,
  quantity: string
}
@Injectable({
  providedIn: 'root'
})

export class CartService {
  cartItems: CartItem[] = [];
  isLoading = false;

  constructor(private http: HttpClient) { }

  addToCart(product: Product) {
    let item = this.cartItems.find(item => item.product.id === product.id);
    if (item) {
      item.quantity++;
    } else {
      this.cartItems.push({ product, quantity: 1 });
    }
  }

  getCartItems() {
    return this.cartItems;
  }

  getCartTotal() {
    return this.cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }

  removeCartItem(product: Product) {
    this.cartItems = this.cartItems.filter(item => item.product.id !== product.id);
  }

  emptyCart() {
    this.cartItems = [];
  }

  reduceCartItem(product: Product) {
    let item = this.cartItems.find(item => item.product.id === product.id);
    if (item) {
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        this.removeCartItem(product);
      }
    }
  }

  checkoutCart() {
    this.isLoading = true;
    let orderId = "";

    console.log(this.getCartTotal());

    this.http.post('https://ridespark.ml/api/orders', { user_id: '5abc6e23-9e9f-4ac4-bb7e-854c46b9a1ae', is_paid: "0", is_delivered: "0", amount: this.getCartTotal().toString(),is_sent:'0',is_updated:'0' }).subscribe((res) => {
      console.log(res);
      let response = res as any;
      orderId = response[0].id;
      console.log("order inside", orderId);
      this.cartItems.forEach(item => {
        this.http.post(' https://ridespark.ml/api/orderitems', { order_id: orderId, product_id: item.product.id, quantity: item.quantity.toString() }).subscribe((res) => {

          this.emptyCart();
          this.isLoading = false;
        });
      });

    });
    


  }
}