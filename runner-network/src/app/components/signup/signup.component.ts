import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import {User} from '../../models/User';
//import {NgModel} from '';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  username: string;
  email: string;
  password: string;
  toConfirmPassword:string;

  constructor(private router: Router) {
      
  }

  ngOnInit() {
  }

  handleSignup(){
    //TODO -- Replace with API to signup for services.  
    console.log(this.username + ", " + this.email + ", " + this.password + ", " + this.toConfirmPassword)
  }
}
