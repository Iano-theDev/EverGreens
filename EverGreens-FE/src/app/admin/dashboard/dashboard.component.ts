import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,RouterLink, RouterLinkActive, ActivatedRoute } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, RouterLinkActive,MatIconModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  // icon: string;

  // constructor(private iconService: IconService) {
  //   this.iconService.addIcon(dashiconsProducts);
  //   this.icon = 'dashicons:products';
  // }  

  // constructor(private activatedRoute: ActivatedRoute) {
  //   //   this.iconService.addIcon(dashiconsProducts);
  //   //   this.icon = 'dashicons:products';
  //   } 

}
