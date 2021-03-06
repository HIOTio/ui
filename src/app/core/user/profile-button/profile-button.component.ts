import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../profile.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-profile-button',
  templateUrl: './profile-button.component.html',
  styleUrls: ['./profile-button.component.css']
})
export class ProfileButtonComponent implements OnInit {
  authenticated= {
    loggedIn : false
  };
  user= {
    firstname: null,
    lastname: null
  };
  constructor(private profileService: ProfileService, private _auth: AuthService) { }

  ngOnInit() {
    this.profileService.getUser().subscribe(data => this.user = data);
    this._auth.isAuthenticated().subscribe(
      data => this.authenticated.loggedIn = data.loggedIn
    );
  }
  logout(){
    this._auth.logout();
    
  }

}
