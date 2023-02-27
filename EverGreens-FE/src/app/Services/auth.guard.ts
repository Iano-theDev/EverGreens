import { Injectable,OnDestroy } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable,Subscription } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate ,OnDestroy{
  private subscription!: Subscription;
  constructor(private AuthService:AuthService, private router:Router){ }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.subscription = this.AuthService.isLoggedIn.subscribe((isLoggedIn:boolean)=>{
        if(isLoggedIn){
          return true
        }else{
          this.router.navigate(['/login'])
          return false
        }
       }) as any
  }
   

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
