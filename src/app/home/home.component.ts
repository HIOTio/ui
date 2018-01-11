import { Component, OnInit } from '@angular/core';
import { slideInOutAnimation } from '../core/animations/anim';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import { AuthService } from '../core/user/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  errMsg = '';
  okMsg = '';
  contact = {
    comment: '',
    email: '',
    name: ''
  };
  constructor(private _http: Http, private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
    if (this._auth.amILoggedIn().loggedIn) {
      
      this._router.navigate(['/dashboard']);
    }
  }
  sendMail() {
    this.errMsg = this.okMsg = '';
    if (this.contact.comment.length < 1 || this.contact.email.length < 1 || this.contact.name.length < 1) {
      this.errMsg = 'Please fill out all the fields so we can address your query properly';
    } else {
      // sort this out later
      this._http.post(environment.services + '/contact/', this.contact)
        .subscribe(
        resp => { this.okMsg = 'Thanks for reaching out, we\'ll be in touch shortly'; },
        err => {
          this.errMsg = 'Sorry, we  were unable to save your details - please try again later';
        }
        );

    }
    console.log(this.contact);
  }
}
