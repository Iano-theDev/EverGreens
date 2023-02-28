import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = []

  constructor(private http: HttpClient) { 
    this.products = [];
  }

  getProducts(){
    return this.http.get('https://ridespark.ml/api/products');
  }
  getProduct(id: string): Product {
    return this.products.find((p) => p.id === id) as Product;
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }

  updateProduct(product: Product): void {
    const index = this.products.findIndex((p) => p.id === product.id);
    this.products[index] = product;
  }

  deleteProduct(id: string): void {
    const index = this.products.findIndex((p) => p.id === id);
    this.products.splice(index, 1);
  }

  

}
