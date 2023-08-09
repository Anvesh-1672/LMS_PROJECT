import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'home',component:HomePageComponent},
  {path:'about',component:AboutpageComponent},
  {path:'login',component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
