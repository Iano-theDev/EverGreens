import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Cart } from 'src/app/interfaces/interfaces';
import { CartService } from 'src/app/Services/adminServices/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  carts:Cart[] = []

  constructor(private cartService:CartService){ }

  ngOnInit(): void {
    this.carts = this.cartService.getItems()
    console.log(this.carts);
    
  }
}
