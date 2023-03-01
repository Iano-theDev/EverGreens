import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Product } from '../../models/product.model';
import { RouterModule } from '@angular/router';
import { SingleProductComponent } from "../single-product/single-product.component";
import { SinglePopularComponent } from 'src/app/home/single-popular/single-popular.component';
import { OneProductComponent } from "../one-product/one-product.component";
import { ProductService } from 'src/app/services/product.service';
import { SpinnerComponent } from "../../shared/spinner/spinner.component";

@Component({
    selector: 'app-all-products',
    standalone: true,
    templateUrl: './all-products.component.html',
    styleUrls: ['./all-products.component.css'],
    imports: [CommonModule, RouterModule, SingleProductComponent, OneProductComponent, SpinnerComponent]
})
export class AllProductsComponent implements OnInit{

  isLoading = true;

  products:any = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
      this.isLoading= false
    });
  }
}
