import { Component, OnInit } from '@angular/core';
import { slideInOutAnimation } from '../core/animations/anim';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  contact={
    comment:'',
    email:'',
    name:''
    }
  constructor() { }

  ngOnInit() {
  }

}
