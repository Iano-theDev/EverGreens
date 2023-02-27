import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-single-popular',
  templateUrl: './single-popular.component.html',
  styleUrls: ['./single-popular.component.css']
})
export class SinglePopularComponent {

  @Input() popular: any;

  constructor(public authService:AuthService) { }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

}
