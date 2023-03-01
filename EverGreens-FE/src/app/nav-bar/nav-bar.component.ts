import { Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, DoCheck {
  isOpen = false;
  cartItems = 0;

  @ViewChild('menu') menu: any;
  @ViewChild('links') links: any;
  @ViewChild('nav') nav: any;

  constructor(private cartService: CartService) { }

  toggleMenu() {
    if (this.isOpen) {
      
    this.links.nativeElement.style.display = 'none';
    this.isOpen = false;
    }else {
      this.links.nativeElement.style.display = 'flex';
      this.isOpen = true;
    }
    
  }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems().length;
  }

  ngDoCheck() {
    this.cartItems = this.cartService.getCartItems().length;
  }


  onScroll(event:Event) {
    if (window.pageYOffset > this.nav.nativeElement.offsetTop) {
      this.nav.nativeElement.classList.add('sticky');
    } else {
      this.nav.nativeElement.classList.remove('sticky');
    }
    console.log(this.nav.nativeElement.offsetTop);
  }



  
}
