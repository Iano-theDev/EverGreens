import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-one-product',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.css']
})
export class OneProductComponent {


  @Input() product: any;

  constructor(private cartService: CartService) { }

  addToCart(event:Event,product: Product) {
    event.preventDefault();
    // prevent event bubbling
    event.stopPropagation();
    this.cartService.addToCart(product);
    console.log(this.cartService.getCartItems());
    
  }

}
