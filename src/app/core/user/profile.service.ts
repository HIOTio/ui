import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable()
export class ProfileService {
  id = '';
  public user: BehaviorSubject<any>;
  constructor(private _http: HttpClient) {
    this.user = new BehaviorSubject<any>({
      firstname: '',
      lastname: '',
      photo: '',
      email: ''
    });
  }
  register(firstname, lastname, password, email) {
    this._http.post(environment.services + '/register',
      {
        username: email,
        password,
        firstname,
        lastname,
        email
      }).subscribe((data) => {
        console.log('congrats');
      }, (err) => {
        console.log(err);
      });
  }
  getUser() {
    return this.user;
  }
  getUserId() {
    return this.id;
  }
  setUser(id) {
    this.id = id;
    this._http.get(environment.services + '/api/profile/' + id)
      .subscribe(data => {
        this.user.next(data);
      });
  }
}
