import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = []
  params!: Observable<Params>;

  constructor(private http: HttpClient) { 
    this.products = []
  }

  getProducts(){
    return this.http.get('https://ridespark.ml/api/products');
  }
  getProduct(id: string): Observable<Product[]> {
    return this.http.get<Product[]>('https://ridespark.ml/api/products/' + id);
  }

  addProduct(product: Product): void {
    this.http.post('https://ridespark.ml/api/products',product).subscribe(res=>{
      console.log(res)
    })
  }

  updateProduct(product: Product) {
    const url = `https://ridespark.ml/api/products/${product.id}`;
    console.log("product",product);
    
    return this.http.put(url, product)
  }

  deleteProduct(id: string): void {
    const index = this.products.findIndex((p) => p.id === id);
    this.products.splice(index, 1);
  }

  getProductById(id: string){
    return this.http.get('https://ridespark.ml/api/products/'+id);
  }

  

}


