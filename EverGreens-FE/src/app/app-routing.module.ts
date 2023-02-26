import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/all-products/all-products.component';
import { SingleProductComponent } from './products/single-product/single-product.component';

const routes: Routes = [
  {path: 'products', component: AllProductsComponent},
  {path: 'products/:id', component: SingleProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
