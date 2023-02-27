import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


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

@NgModule({
  declarations: [
    AppComponent,
    AppComponent,
    NavBarComponent,
    FooterComponent
  ],
  providers: [],
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
