import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user={
    username: '',
        firstname: '',
        lastname: '',
        email:'',
        organisation:''
  }
  updatePass = false;
  constructor(private _ps: ProfileService) { }

  ngOnInit() {
    this._ps.getUser().subscribe(data => {
      this.user = data;
    });
  }

}
