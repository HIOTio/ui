import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProfileService {
  id= 0;
  public user: BehaviorSubject<any>;
  constructor(private _http: HttpClient) {
    this.user = new BehaviorSubject <any>({
      firstname: '',
      lastname: '',
      photo: '',
      email: ''
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
    this._http.get('http://localhost:3000/api/profile/' + id)
    .subscribe(data => {
      this.user.next(data);
    });
  }
}
