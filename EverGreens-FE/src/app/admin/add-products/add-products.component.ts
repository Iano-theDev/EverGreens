import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-add-products',
  standalone: true,
  imports: [CommonModule,RouterModule,ReactiveFormsModule],
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit{
  

  constructor(private fb: FormBuilder,private productService:ProductService){}
  
  addProduct!:FormGroup
  
  ngOnInit(): void {
    this.addProduct= this.fb.group({
      name:[null, Validators.required],
      description:[null, Validators.required],
      product_image_url:[null, Validators.required],
      price:[null, Validators.required],
      category_id:["5afac669-aa18-4c9d-90c9-265067b10450"],
    })
  }

    

  AddProduct(){
     const newProduct:Product = {...this.addProduct.value,"recently_added":"1","featured":"1","is_deleted":"0"}
     this.productService.addProduct(newProduct)
   
  }

}
