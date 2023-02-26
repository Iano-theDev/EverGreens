import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseComponent } from './homepage/browse/browse.component';
import { CouraselComponent } from './homepage/courasel/courasel.component';
import { FooterComponent } from './homepage/footer/footer.component';
import { HeaderComponent } from './homepage/header/header.component';

const routes: Routes = [
  // {path: '', component:FooterComponent},
  {path: '', component: HeaderComponent},
  // // {path: '', component:CouraselComponent}
  // {path:'', component: BrowseComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
