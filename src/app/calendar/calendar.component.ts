import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Calendar } from '../models/calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {

  constructor() { }

  public ngOnInit() {
  }

  // tslint:disable-next-line:member-ordering
  weekDays: Array<string> = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Fri', 'Sat'];
  today = moment();
  calendar: Calendar = new Calendar(this.today);

  selectedDate: Object =
    {
      day: this.today.clone().format('DD'), fullDate: this.today.clone().format('YYYY-MM-DD'), weekDay: this.today.clone().format('dddd'),
    };

  public slide(direction: string): void
  {
    const date = this.calendar['currentMonth']['instant'][direction](1, 'month');
    this.calendar = new Calendar(moment(date));
  }
}
