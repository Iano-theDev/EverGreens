import { Injectable } from '@angular/core';
import { Users } from 'src/app/interfaces/interfaces';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  private users: Users[] = [
    // { id: 1, name: 'John Doe', email: 'johndoe@example.com', password: '1234567&890' },
    // { id: 2, name: 'Jane Doe', email: 'janedoe@example.com', password: '098765*dssd4321' }
  ];

  getUsers(token: string): Observable<Users[]> {
    // return this.users;
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    return this.http.get<Users[]>('https://ridespark.ml/api/users', { headers });
  }

  addUser(user: Users) {
    this.users.push(user);
  }
}
