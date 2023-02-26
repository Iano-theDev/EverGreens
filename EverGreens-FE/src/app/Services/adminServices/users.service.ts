import { Injectable } from '@angular/core';
import { Users } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  private users: Users[] = [
    { id: 1, name: 'John Doe', email: 'johndoe@example.com', password: '1234567&890' },
    { id: 2, name: 'Jane Doe', email: 'janedoe@example.com', password: '098765*dssd4321' }
  ];

  getUsers(): Users[] {
    return this.users;
  }

  addUser(user: Users) {
    this.users.push(user);
  }
}
