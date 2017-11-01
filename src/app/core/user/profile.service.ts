import { Injectable } from '@angular/core';

@Injectable()
export class ProfileService {

  constructor() { }
  getUser() {
    return {
      firstname: 'John',
	  lastname:'Doe'
    };
  }
}
