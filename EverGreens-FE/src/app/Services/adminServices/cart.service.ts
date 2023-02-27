import { Injectable } from '@angular/core';
import { Product,Cart } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  items:Cart[] = [{id:Math.floor(Math.random() *10000),
    product: 'p.name',
    productId:234,
    userName: 'wahome',
    quantity: 1,
    price:220}];
  
  quantity!: number

  addToCart(p:Product, quantity: number) {
    
    let item = this.items.find(item => item.productId === p.id);
  if (item) {
    item.quantity += this.quantity;
  } else {
    let product = {id:Math.floor(Math.random() *10000),
      product: p.name,
      productId:p.id,
      userName: 'wahome',
      quantity: 1,
      price:220}
    this.items.push( product );
  }
  }

  getItems() {
    return this.items;
  }

  getTotal() {
    let total = 0;
  for (let item of this.items) {
    total += item.price * item.quantity;
  }
  return total;
  }
}
