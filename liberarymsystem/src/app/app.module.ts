import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { LoginComponent } from './login/login.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderNavbarComponent,
    SideNavbarComponent,
    LoginComponent,
    AboutpageComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
