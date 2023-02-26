import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
})
export class AppModule { }
