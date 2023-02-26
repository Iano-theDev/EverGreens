import { Injectable } from '@angular/core';
import { AddProducts,Product } from 'src/app/interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class AddProductsService {
 
  constructor() { }

  

  private products:Product[] = [
    // {name:'mangoes',description:'in season Mangoes',image:'',price:'200',category: 'fresh Produce'},
    // {name:'chicken',description:'well bred chicken',image:'',price:'700',category: 'fresh Meat'},
  ]

  addProduct(product: Product):void {
    this.products.push(product)
  }
  getProduct(): Product[] {
    return this.products
  }
}
