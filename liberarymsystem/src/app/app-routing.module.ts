import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'home', component:HomePageComponent},
  {path:'login',component:LoginComponent},
  {path:'about',component:AboutpageComponent},
  {path:'logout',component:LogoutComponent},
  {path:'register',component:RegisterComponent},
  {path:'**',component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
