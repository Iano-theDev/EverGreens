import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-popular-picks',
  templateUrl: './popular-picks.component.html',
  styleUrls: ['./popular-picks.component.css']
})
export class PopularPicksComponent {
  isLoading = true;
  
  popularPicks= []

  constructor(private productService: ProductService) { 
    this.productService.getProducts().subscribe((data: any) => {
      this.popularPicks = data.slice(0,3);
      this.isLoading = false;
    })
  }

}
