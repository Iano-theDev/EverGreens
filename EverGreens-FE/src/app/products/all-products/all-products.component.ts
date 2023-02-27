import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsServiceService } from 'src/app/Services/products-service.service';
import { Product } from 'src/app/interfaces';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit{

  products: Product[] = [];

  constructor(private productsService:ProductsServiceService){}

  ngOnInit(): void {
      this.products = this.productsService.getProducts();
  }
}
