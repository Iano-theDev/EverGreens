import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
orders=[]
  constructor(private http:HttpClient) { }

  getOrders(){
    return this.http.get("https://ridespark.ml/api/orders")
  }

  updateOrders(order:any){

    return this.http.put('https://ridespark.ml/api/orders/'+order.id,order)
    
  }

 
}
