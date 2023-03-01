import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users=[]
  isAdmin: boolean = false;
  constructor(private http:HttpClient) { }

  setAdmin() {
    this.isAdmin = true;
  }
  setUser() {
    this.isAdmin = false;
  }
  getUsers(){
   return  this.http.get("https://ridespark.ml/api/users")
  }
}
