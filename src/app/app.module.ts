import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DayComponent } from './day/day.component';
import { EventService } from './models/eventService';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { Data } from './data/data';
import { DayInfoComponent } from './day-info/day-info.component';


@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    DayComponent,
    DayInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      Data, { dataEncapsulation: false }
    )
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
