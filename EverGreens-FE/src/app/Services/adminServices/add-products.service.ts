import { Injectable } from '@angular/core';
import { AddProducts,Product,Message } from 'src/app/interfaces/interfaces';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class AddProductsService {
 
  constructor(private http: HttpClient) { }

  

  private products:Product[] = [
    // {name:'mangoes',description:'in season Mangoes',image:'',price:'200',category: 'fresh Produce'},
    // {name:'chicken',description:'well bred chicken',image:'',price:'700',category: 'fresh Meat'},
  ]

  addProduct(product: Product):Observable<Message> {
    // this.products.push(product)
    return this.http.post<Message>('http://ridespark.ml/api/products',product)
  }
  // getProduct():Product[] {
  //   return this.products
  //   return this.http.get('https://ridespark.ml/api/products')
  // }
}

