import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Users } from 'src/app/interfaces/interfaces';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit { 
  users!: Users[]
  subscription!: Subscription
  constructor(private userService: UserService){ }

  ngOnInit(): void {
    this.subscription = this.userService.getUsers().subscribe((res)=>{
      this.users = res as Users[]
      
    })
  }
  
  
}
