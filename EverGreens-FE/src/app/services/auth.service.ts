import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router,private userService: UserService) { }

  login(email: string, password: string) {
    this.http.post('https://ridespark.ml/api/users/login', { email, password }).subscribe((res) => {
      let response = res as any;
      let token = response.token;
      let user = response.user;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      if (user.is_admin == true) {
        this.userService.setAdmin();
        this.router.navigate(['/admindash']);
      } else {
        this.router.navigate(['/']);
      }


    }
    );
  }

  register(email: string, password: string, phone: string) {

    this.http.post('https://ridespark.ml/api/users/register', { email, password, phone }).subscribe((res) => {

      let response = res as any;
      let token = response.token;
      localStorage.setItem('token', token);
      this.userService.setUser();
      this.router.navigate(['/']);



    }

    );
  }

}
