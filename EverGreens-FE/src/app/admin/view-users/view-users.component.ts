import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  constructor(){ }

  ngOnInit(): void {
    
  }
  
  
}
