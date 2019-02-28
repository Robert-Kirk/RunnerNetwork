import { Component, OnInit } from '@angular/core';
import {NavbarElement} from '../../../models/NavBarElement';

@Component({
  selector: 'app-navbars',
  templateUrl: './navbars.component.html',
  styleUrls: ['./navbars.component.css']
})
export class NavbarsComponent implements OnInit {

  constructor() {}

  ngOnInit() {

    let basicElements: NavbarElement[] = [
      new NavbarElement("Home", "/"),
      new NavbarElement("About", "/about"),
      new NavbarElement("References", "/ref"),
      new NavbarElement("Contact", "/contact")
    ]

    //TODO get element
    let userElement: NavbarElement[] = [
      new NavbarElement("Sign up / Login", "")
    ]
  }

}
