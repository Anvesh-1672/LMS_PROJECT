import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { ErrorComponent } from './error/error.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RouteGuardService } from './service/route-gaurd.service';
import { AdDashboardComponent } from './ad-dashboard/ad-dashboard.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'home', component:HomePageComponent},
  {path:'login',component:LoginComponent},
  {path:'about',component:AboutpageComponent},
  {path:'dashboard',component:AdDashboardComponent},
  {path:'logout',component:LogoutComponent,canActivate:[RouteGuardService]},
  {path:'register',component:RegisterComponent},
  {path:'profile',component:UserProfileComponent,canActivate:[RouteGuardService]},
  {path:'**',component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
