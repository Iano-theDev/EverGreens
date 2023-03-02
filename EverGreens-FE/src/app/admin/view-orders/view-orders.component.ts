import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from 'src/app/Services/order.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit{
 orders = [] as any
 orders_user = [] as any
 
  constructor(private orderService:OrderService,private http:HttpClient){ }


  getOrders(){
    this.orderService.getOrders().subscribe((res)=>{
      this.orders_user = []
      this.orders = res as any 
      this.orders.forEach((element: any) => {

        this.http.get("https://ridespark.ml/api/users/"+element.user_id).subscribe(res=>{
        let response = res as any  
        element.user = response.email
        this.orders_user.push(element)
        
        })
        
      });
      
    })
  }

  ngOnInit(): void {

    this.getOrders()
 
  }
  updateNotDelivered(order:any){

    let orderUpdated = {...order,is_delivered:'0',is_paid:'0',is_updated:'0',is_sent:'0',amount:order.amount.toString()}
    this.orderService.updateOrders(orderUpdated).subscribe(res=>{
      this.getOrders()
    })
    
  }
  updateToDelivered(order:any){

    let orderUpdated = {...order,is_delivered:'1',is_paid:'1',is_updated:'0',is_sent:'1',amount:order.amount.toString()}
    this.orderService.updateOrders(orderUpdated).subscribe(res=>{
      this.getOrders()
    })
    
    
  }
  

}
