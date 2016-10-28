import {Component, OnInit} from '@angular/core';

import {PersonsService} from "../persons.service/persons.service";
import {Person} from './../models/person';
import {HelperService} from '../helpers/helper.service';

@Component({
  selector: 'standings',
  templateUrl: 'standings.component.html'
})

export class StandingsComponent implements OnInit {
  private persons:Person[];

  private isPersonsPrepared:boolean = false;

  constructor(private personsService:PersonsService, private helperService:HelperService) {};

  ngOnInit() {
    this.getPersons();
  }

  getPersons() {
    this.personsService.getPersons().then(persons => {
      this.persons = persons;
      this.sortPersons();
    });
  }

  //sort persons by general average
  sortPersons() {
    this.helperService.getSortedArrayOfPersons(this.persons);
    this.isPersonsPrepared = true;
  }
}
