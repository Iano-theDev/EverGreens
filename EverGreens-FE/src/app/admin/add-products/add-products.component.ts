import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AddProductsService } from 'src/app/Services/adminServices/add-products.service';
import { AddProducts,Product } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-add-products',
  standalone: true,
  imports: [CommonModule,RouterModule,ReactiveFormsModule],
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit{
  

  constructor(private fb: FormBuilder, private ProductsService:AddProductsService){}
  
  addProduct!:FormGroup
  
  ngOnInit(): void {
    this.addProduct= this.fb.group({
      name:[null, Validators.required],
      description:[null, Validators.required],
      image:[null, Validators.required],
      price:[null, Validators.required],
      category:[null, Validators.required],
    })
  }

  AddProduct(){
     const newProduct:Product = {...this.addProduct.value, id:Math.floor(Math.random() *10000)}
     this.ProductsService.addProduct(newProduct).subscribe(response =>{
      console.log(response)
     })
    //  console.log(newProduct);
     
  }

}
