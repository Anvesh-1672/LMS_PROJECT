import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'home', component:HomePageComponent},
  {path:'login',component:LoginComponent},
  {path:'about',component:AboutpageComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
