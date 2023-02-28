import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-single-popular',
  templateUrl: './single-popular.component.html',
  styleUrls: ['./single-popular.component.css']
})
export class SinglePopularComponent {
  @Output() cartItemsAdded = new EventEmitter<Product>();

  @Input() popular: any;

  constructor(private cartService: CartService) { }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.cartItemsAdded.emit(product);

    console.log(this.cartService.getCartItems());
    
  }

}
