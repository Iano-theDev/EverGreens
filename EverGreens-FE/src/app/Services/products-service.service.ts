import { Injectable } from '@angular/core';
import { Product } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
  [x: string]: any;

  products: Product[] = [
    {
      productId: "12",
      name: "Water Mellon",
      description: "Sweet watermelon from elon",
      price: 70,
      category: "fruit",
      imgUrl: "https://s3.eu-west-1.amazonaws.com/s.keekapu.com/keekapu-web-pics/zebra-watermelon-CB9DA044-5EE2-4002-919C-39F3B7FEA38A.jpg"
    },
    {
      productId: "14",
      name: "Capsicum",
      description: "some capsicum exaple",
      price: 100,
      category: "veggies",
      imgUrl: "https://s3.eu-west-1.amazonaws.com/s.keekapu.com/keekapu-web-pics/colored-capsicum-486BF330-4529-495F-B3D8-C264CEBE16E5.jpg"
    },
    {
      productId: "17",
      name: "Cabbage",
      description: "Cabbage from india",
      price: 30,
      category: "veggies",
      imgUrl: "https://s3.eu-west-1.amazonaws.com/s.keekapu.com/keekapu-web-pics/cabbage-EDB9E2E8-3A3A-43E1-B348-3D07ECF9B6A7.jpg"
    },
    {
      productId: "23",
      name: "Carrots",
      description: "Grade A carrots from kenya",
      price: 50,
      category: "veggies",
      imgUrl: "https://s3.eu-west-1.amazonaws.com/s.keekapu.com/keekapu-web-pics/carrots-BF5EC456-2E83-4F87-BC39-15BFA410026F.jpg"
    }

  ]

  constructor() { }

  getProducts() {
    return this.products;
  }

  getProductById(id: string) {
    return this.products.find(product => product.productId === id)
  }

  getProductByCategory(category: string){
    return this.products.filter(product => product.category === category)
  }
}
