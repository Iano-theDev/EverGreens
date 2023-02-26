import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { EnticementComponent } from './enticement/enticement.component';
import { PopularPicksComponent } from './popular-picks/popular-picks.component';
import { SinglePopularComponent } from './single-popular/single-popular.component';
import { MatIconModule } from '@angular/material/icon';


const routes :Routes = [
  {
    path: '',
    component: HomePageComponent
  }
]



@NgModule({
  declarations: [
    HeroComponent,
    HomePageComponent,
    CategoryComponent,
    EnticementComponent,
    PopularPicksComponent,
    SinglePopularComponent,
    
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule
  ]
})
export class HomeModule { }
