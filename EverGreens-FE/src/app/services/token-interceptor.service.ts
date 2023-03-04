import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (req.url == 'https://ridespark.ml/api/users/login' || req.url == 'https://ridespark.ml/api/users/register') {
      return next.handle(req);
    }
    else {

      let token = localStorage.getItem('token');
      let tokenizedReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      })
      return next.handle(tokenizedReq);
    }
  }
}