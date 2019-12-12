import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
  name: string;
  email: string;
  pwd: string;

  constructor() { 
    this.name = '';
    this.email = '';
    this.pwd = '';
  }

  ngOnInit() {
  }

  signUp(){
    
  }
}
