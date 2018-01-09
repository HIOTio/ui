import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  showUserPanel = false;
  @Input()
  filter;
  @Output()
  user;
  constructor() { }

  ngOnInit() {
    console.log(this.filter);
  }



