import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username='kishore';
  password='valliveti';
  invalidlogin=false;
  invalid="invalid credentials";

  constructor(private router:Router, 
    public hardcodedAuthenticationService:HardcodedAuthenticationService){} 

  handlelogin(){

    if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
      this.router.navigate(['home'])
      this.invalidlogin=false;
    }
    else{
      this.invalidlogin=true;
    }
  }

}
