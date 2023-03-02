import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Params, RouterModule, Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import  { ViewProductsComponent } from '../view-products/view-products.component';
import { Product } from 'src/app/models/product.model';


@Component({
  selector: 'app-update-products',
  standalone: true,
  imports: [CommonModule,RouterModule,ReactiveFormsModule,ViewProductsComponent],
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.css']
})
export class UpdateProductsComponent implements OnInit{
  constructor(private fb: FormBuilder,private productService:ProductService,private router: Router, private route:ActivatedRoute){}
  
  updateProduct!:FormGroup
  product!:Product[]
  updated= false

  
  
  ngOnInit(): void {
    this.updateProduct= this.fb.group({
      name:[null, Validators.required],
      description:[null, Validators.required],
      product_image_url:[null, Validators.required],
      price:[null, Validators.required],
      category_id:["5afac669-aa18-4c9d-90c9-265067b10450"],
    })
   this.route.params.subscribe((params: Params) => {
      this.productService.getProduct(params['id']).subscribe(product => {
        this.product = product;
        console.log(product);
        
        this.updateProduct.patchValue({
          name: product[0].name,
          description: product[0].description,
          product_image_url: product[0].product_image_url,
          price: product[0].price,
          category_id: product[0].category_id
        });
      });
      console.log(params['id']);
      
    });
  }

    // this.updateProduct.setValue({
    //   name:this.product.name,
    //   description:this.product.description,
    //   product_image_url:this.product.product_image_url,
    //   price:this.product.price,
    //   category_id:this.product.category_id
    // })
  

    UpdateProduct(){
      let product: Product= { ...this.product[0], ...this.updateProduct.value,recently_added:"1",featured:"1",is_deleted:"1",created_at:"2021-08-10T12:00:00.000Z"}
     
      this.productService.updateProduct(product).subscribe((res) => {
        console.log(res);
        this.router.navigate(['/admindash/products']);
        this.updated = true;
      });
    }
    
}
