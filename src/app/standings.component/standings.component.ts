import {Component, OnInit} from '@angular/core';

import {PersonsService} from "../persons.service/persons.service";
import {Person} from './../models/person';

@Component({
  selector: 'standings',
  templateUrl: 'standings.component.html'
})

export class StandingsComponent implements OnInit {
  private persons:Person[];

  constructor(private personsService:PersonsService) {};

  ngOnInit() {
    this.getPersons();
  }

  getPersons() {
    this.personsService.getPersons().then(persons => this.persons = persons);
  }
}
