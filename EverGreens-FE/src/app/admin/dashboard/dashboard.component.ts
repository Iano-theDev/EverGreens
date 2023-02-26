import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,RouterLink, RouterLinkActive } from '@angular/router';
// import GroupIcon from '@material-ui/icons/Group';
// import SearchIcon from '@material-ui/icons/Search';
// import WorkIcon from '@material-ui/icons/Work';
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
}
