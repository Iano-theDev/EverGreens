import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  isOpen = false;

  @ViewChild('menu') menu: any;
  @ViewChild('links') links: any;

  constructor() { }

  toggleMenu() {
    if (this.isOpen) {
      
    this.links.nativeElement.style.display = 'none';
    this.isOpen = false;
    }else {
      this.links.nativeElement.style.display = 'flex';
      this.isOpen = true;
    }
    
  }

}
