import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../profile.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-profile-button',
  templateUrl: './profile-button.component.html',
  styleUrls: ['./profile-button.component.css']
})
export class ProfileButtonComponent implements OnInit {
  authenticated= {};
  user= {
    firstname: null,
    lastname: null
  };
  constructor(private profileService: ProfileService, private _auth: AuthService) { }

  ngOnInit() {
    this.profileService.getUser().subscribe(data => this.user = data);
    this.authenticated = this._auth.isAuthenticated();
  }

}
