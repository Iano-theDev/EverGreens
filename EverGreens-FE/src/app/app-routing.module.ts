import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomeModule),
  },
  {path: 'register', 
    loadComponent:() => import('./auth/register/register/register.component').then(m => m.RegisterComponent)},
  {path: 'cart', 
    loadComponent:() => import('./products/cart/cart/cart.component').then(c => c.CartComponent)},
  {path: 'checkout', 
    loadComponent:() => import('./products/checkout/checkout.component').then(c => c.CheckoutComponent), canActivate:[AuthGuard]},
  {path: 'login', 
    loadComponent:() => import('./auth/login/login/login.component').then(e => e.LoginComponent)},
  {path: 'admindash', 
    loadComponent:() => import('./admin/dashboard/dashboard.component').then(f => f.DashboardComponent),
    children: [
      {path: 'orders', 
      loadComponent:() => import('./admin/administrator/administrator.component').then(f => f.AdministratorComponent)  
    },
      {path: 'users', 
      loadComponent:() => import('./admin/view-users/view-users.component').then(d => d.ViewUsersComponent)  
    },
      {path: 'products', 
      loadComponent:() => import('./admin/view-products/view-products.component').then(d => d.ViewProductsComponent),  
    },
      {path: 'addproducts', 
      loadComponent:() => import('./admin/add-products/add-products.component').then(d => d.AddProductsComponent),  
    },
    ]
  },
    
];
  



@NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    })

export class AppRoutingModule { }
