import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from 'src/app/interfaces';

import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  // products: Product[] = [];
  product?: Product;

  constructor ( private route: ActivatedRoute,private productService: ProductService) { }

  ngOnInit() {
  

    this.route.params.subscribe((param: Params) => {
      console.log(param.id);
      this.product = this.productService.getProduct(param.id) as unknown as Product;
      console.log(this.product);
    })
  }
}


