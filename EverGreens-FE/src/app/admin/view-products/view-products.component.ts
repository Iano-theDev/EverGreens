import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from 'src/app/interfaces/interfaces';
import { AddProductsService } from 'src/app/Services/adminServices/add-products.service';


@Component({
  selector: 'app-view-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit{
  products: Product[]=[]

  constructor (private productService:AddProductsService ){ }
  
  ngOnInit(): void {
    this.products = this.productService.getProduct()
    console.log(this.products);
    
  }
  
}
