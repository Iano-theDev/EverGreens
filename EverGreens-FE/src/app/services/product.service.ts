import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = []

  constructor(private http: HttpClient) { 
    this.products = []
  }

  getProducts(){
    return this.http.get('https://ridespark.ml/api/products');
  }
  getProduct(id: string){
    this.http.get('http://localhost:4000/api/products/'+id).subscribe((res) => {
      let response = res as any;
      let product = response[0]
      return product;
    }
    );


  }

  addProduct(product: Product): void {
    this.http.post('https://ridespark.ml/api/products',product).subscribe(res=>{
      console.log(res)
    })
  }

  updateProduct(product: Product): void {
    const index = this.products.findIndex((p) => p.id === product.id);
    this.products[index] = product;
  }

  deleteProduct(id: string): void {
    const index = this.products.findIndex((p) => p.id === id);
    this.products.splice(index, 1);
  }

  getProductById(id: string){
    return this.http.get('https://ridespark.ml/api/products/'+id);
  }

  

}
