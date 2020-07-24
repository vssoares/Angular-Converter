import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import axios from 'axios';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/global/navbar/navbar.component';
import { CardsComponent } from './components/global/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
