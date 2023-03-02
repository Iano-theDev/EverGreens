import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  submitted=false;
  constructor(private formBuilder:FormBuilder,private authService:AuthService,private userService:UserService) { }

  ngOnInit(){
    this.userService.setAdmin();
    
    this.loginForm = this.formBuilder.group({
      
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required  ]],
      
      
      
    });
  }

  onSubmit(){
    this.submitted=true;
    if(this.loginForm.invalid){
      return;
    }
    this.authService.login(this.loginForm.value.email,this.loginForm.value.password);
  }
}
