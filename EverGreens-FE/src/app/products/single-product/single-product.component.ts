import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from 'src/app/interfaces';
import { ProductsServiceService } from 'src/app/Services/products-service.service';
import { ActivatedRoute, Params } from '@angular/router';

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

  constructor (private productService:ProductsServiceService, private route: ActivatedRoute){}

  ngOnInit() {
  

    this.route.params.subscribe((param: Params) => {
      // const productId = this.productService['snapshot'].param.get('id')
      this.product = this.productService.getProductById(param['id'])
    })
  }
}


