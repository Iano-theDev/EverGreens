import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,DoCheck {
[x: string]: any;
  title = 'evergreens-frontend';
  isAdmin: boolean 
  constructor(private userService: UserService) {
    this.isAdmin = this.userService.isAdmin;
   }


  ngOnInit(): void {
    this.isAdmin = this.userService.isAdmin;
  }

  ngDoCheck(): void {
    this.isAdmin = this.userService.isAdmin;
  }

  
}
