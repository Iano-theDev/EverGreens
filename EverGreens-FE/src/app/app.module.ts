import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { AllProductsComponent } from "./products/all-products/all-products.component";
import { RouterModule } from '@angular/router';
import { SingleProductComponent } from './products/single-product/single-product.component';

@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AllProductsComponent,
        RouterModule,
        SingleProductComponent
    ]
=======
import { ReactiveFormsModule } from '@angular/forms';


import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';

import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
>>>>>>> 7e34716946164381b9354b78b5580f91aaa22038
})
export class AppModule { }
