import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  creating = false;
  newUser = {
    firstname: '',
    lastname: '',
    email: ''
  }
  constructor() { }

  ngOnInit() {
  }

}
