import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isAdmin: boolean = false;
  constructor() { }

  setAdmin() {
    this.isAdmin = true;
  }
  setUser() {
    this.isAdmin = false;
  }
}
