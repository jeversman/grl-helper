import {Injectable} from '@angular/core';

@Injectable()
export class PersonsService {
  private persons: string[] = ["sdfs", "sdfsdfsdf", "sdfsdfdsf"];

  getPersons() {
    return this.persons;
  }
}
