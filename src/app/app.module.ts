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
  providers: [PersonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
