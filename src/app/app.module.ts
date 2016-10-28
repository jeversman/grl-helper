import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TestComponent } from './test.component';
import { MainPageComponent } from './main-page.component/main-page.component';
import { StandingsComponent } from './standings.component/standings.component';
import { PersonsComponent } from './persons.component/persons.component';
import { PersonsService } from './persons.service/persons.service';
import { HelperService } from './helpers/helper.service';

import { AppRoutingModule } from './app-routing.module';

import {InMemoryWebApiModule} from 'angular-in-memory-web-api/in-memory-web-api.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    MainPageComponent,
    StandingsComponent,
    PersonsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule
  ],
  providers: [PersonsService, HelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }




/*
* реализовать в ноде ввод критериев
* все критерии хранить массиве
* 
* первое, что сделать ---- вывести все персоны с их средним баллом
* для этого: в том же массиве хранить переменную "средний балл"
* 
* 
* 
* */
