import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AllProductsComponent } from "./products/all-products/all-products.component";
import { RouterModule } from '@angular/router';
import { SingleProductComponent } from './products/single-product/single-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { TokenInterceptorService } from './services/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    AppComponent,
    NavBarComponent,
    FooterComponent
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass :TokenInterceptorService, multi: true
    }

  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AllProductsComponent,
    RouterModule,
    SingleProductComponent,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule


  ],
})
export class AppModule { }
