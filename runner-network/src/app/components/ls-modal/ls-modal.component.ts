import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {SignupComponent} from "../signup/signup.component"
import {LoginComponent} from "../login/login.component"
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-ls-modal',
  templateUrl: './ls-modal.component.html',
  styleUrls: ['./ls-modal.component.css'],
})
export class LsModalComponent implements OnInit {

  user = new User("", "", "")
  
  constructor(private modalService: NgbModal) {}

  ngOnInit() {
  }

  

  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', centered: true });
  }

}
