import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {

    return this.loggedIn.asObservable();
  }


  login() {
    
    this.loggedIn.next(true);
  }

  logout() {
    
    this.loggedIn.next(false);
  }
}
