import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-products',
  standalone: true,
  imports: [CommonModule,RouterModule,ReactiveFormsModule],
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit{
  addProduct!:FormGroup

  constructor(private fb: FormBuilder){}

  
  ngOnInit(): void {
    this.addProduct= this.fb.group({
      name:[null, Validators.required],
      description:[null, Validators.required],
      image:[null, Validators.required],
      price:[null, Validators.required]
    })
  }

  AddProduct(){

  }

}
