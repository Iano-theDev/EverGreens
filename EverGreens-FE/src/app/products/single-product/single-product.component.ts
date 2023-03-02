import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/product.model';
import { SpinnerComponent } from "../../shared/spinner/spinner.component";

@Component({
    selector: 'app-single-product',
    standalone: true,
    templateUrl: './single-product.component.html',
    styleUrls: ['./single-product.component.css'],
    imports: [CommonModule, SpinnerComponent]
})
export class SingleProductComponent implements OnInit {
  products: Product[] = [];

  constructor ( private route: ActivatedRoute,private productService: ProductService,private cartService: CartService, private router:Router) { }
  isLoading=true
  ngOnInit() {
  
    this.route.params.subscribe((param: Params) => {
      this.productService.getProductById(param.id).subscribe((res) => {
        let response = res as any as Product[];
        this.products = response 
        this.isLoading = false





      }
      );
    });

  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.router.navigate(['/cart']);
  }

}


