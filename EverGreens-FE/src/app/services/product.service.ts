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
//   {
//     "name": "Green Capsicum",
//     "description":"Capsicum green is used either chopped and raw in salads, or cooked in stir-fries or other mixed dishes. They are slightly bitter in taste and crunchy in texture.",
//     "price": 120,
//     "category_id": "5afac669-aa18-4c9d-90c9-265067b10450",
//     "product_image_url":"https://s3.eu-west-1.amazonaws.com/s.keekapu.com/keekapu-web-pics/capsicum-green-5B6387AC-CA0E-4AF2-9912-20182D376BCF.jpg",
//     "recently_added":"1",
//     "featured":"1",
//     "is_deleted":"0"

// }

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

  

}
