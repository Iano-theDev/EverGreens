import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from 'src/app/interfaces';

import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  // products: Product[] = [];
  product?: Product;

  constructor ( private route: ActivatedRoute){}

  ngOnInit() {
  

    this.route.params.subscribe((param: Params) => {
    })
  }
}


