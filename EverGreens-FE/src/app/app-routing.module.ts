import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register/register.component';

const routes: Routes = [
<<<<<<< HEAD
  {path: 'register', 
    loadComponent:() => import('./auth/register/register/register.component').then(m => m.RegisterComponent)},
  {path: 'cart', 
    loadComponent:() => import('./products/cart/cart/cart.component').then(c => c.CartComponent)},
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
=======
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // Lazy load the home module
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomeModule),
  },

]
>>>>>>> f00b1f0a48736773aaea3a812683b6469a103307

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
