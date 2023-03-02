import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-view-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit{
  products: Product[]=[];
  subscription!:Subscription

  constructor ( private productService:ProductService){ }
  
  ngOnInit(): void {
    this.subscription= this.productService.getProducts().subscribe((response)=>{
      console.log(response);
      this.products = response as Product[]
    })
    
    
  }
  
}
