import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from 'src/app/Services/adminServices/users.service';
import { Users } from 'src/app/interfaces/interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit { 
  users!: Users[]
  subscription!: Subscription;
  token!:string 
  
  constructor(private usersService:UsersService){ }

  ngOnInit(): void {
    this.subscription = this.usersService.getUsers(this.token).subscribe(response =>{
      console.log(response)
      this.users=response
     })
  }
  
  
}
