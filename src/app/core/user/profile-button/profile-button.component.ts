import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../profile.service';
@Component({
  selector: 'app-profile-button',
  templateUrl: './profile-button.component.html',
  styleUrls: ['./profile-button.component.css']
})
export class ProfileButtonComponent implements OnInit {
  user= {
	  firstname:null,
	  lastname: null}
  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.user = this.profileService.getUser();
  }

}
