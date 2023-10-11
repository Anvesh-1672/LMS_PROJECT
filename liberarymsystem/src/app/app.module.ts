import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';
import { LoginComponent } from './login/login.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { LogoutComponent } from './logout/logout.component';
import { ErrorComponent } from './error/error.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AdminprofilepageComponent } from './adminprofilepage/adminprofilepage.component';
import { AdDashboardComponent } from './ad-dashboard/ad-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderNavbarComponent,
    LoginComponent,
    AboutpageComponent,
    LogoutComponent,
    ErrorComponent,
    RegisterComponent,
    UserProfileComponent,
    AdminprofilepageComponent,
    AdDashboardComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
