import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements 
OnInit {

  loginId: string;
  password: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  handleLogin(){
    //TODO -- Replace with API to signup for services.  
    console.log(this.loginId + ", " + ", " + this.password + ", ")
  }

}
