import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Person} from './../models/person';

@Injectable()
export class PersonsService {

  private personsUrl = './../../input/test.json';

  constructor(private http: Http) {}

  getPersons() {
    return this.http.get(this.personsUrl)
      .toPromise()
      .then(persons => persons.json() as Person[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
