import { Component, OnInit } from '@angular/core';
import {NavbarElement, BASICNAVELEMENTS} from '../../../models/NavBarElement';

@Component({
  selector: 'app-navbars',
  templateUrl: './navbars.component.html',
  styleUrls: ['./navbars.component.css']
})
export class NavbarsComponent implements OnInit {

  constructor() {}

  basicNave = BASICNAVELEMENTS;
  //TODO - Create method to get proper secondary elements
  userElement: NavbarElement[] = [
    new NavbarElement("Sign up / Login", "")
  ]

  ngOnInit() {}



}
