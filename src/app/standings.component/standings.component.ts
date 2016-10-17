import {Component, OnInit} from '@angular/core';
import {PersonsService} from "../persons.service/persons.service";

@Component({
  selector: 'standings',
  templateUrl: 'standings.component.html'
})

export class StandingsComponent implements OnInit {
  private persons:string[];

  constructor(private personsService:PersonsService) {};

  ngOnInit() {
    this.getPersons();
  }

  getPersons() {
    this.persons = this.personsService.getPersons();
  }
}
