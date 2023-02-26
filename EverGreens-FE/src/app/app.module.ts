import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ MatIconModule} from '@angular/material/icon'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
 export class AppModule {}