import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from 'src/app/Services/adminServices/users.service';
import { Users } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-view-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit { 
  users!: Users[]
  constructor(private usersService:UsersService){ }

  ngOnInit(): void {
    this.users = this.usersService.getUsers()
  }
  
  
}
