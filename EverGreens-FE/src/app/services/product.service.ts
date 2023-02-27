import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product('1', 'chinese cabbage', 'cabbage from china', 10.99, new Date(), '1', '../../../assets/chinese-cabbage.jpeg', true, true, false, []),
    new Product('2', 'Pepper', 'pepper from nakuru', 10.99, new Date(), '1', '../../../assets/pepper.jpeg', true, true, false, []),
    new Product('3', 'cabbage', 'cabbage from limiru kenya', 10.99, new Date(), '1', '../../../assets/cabbage.jpeg', true, true, false, []),
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
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
