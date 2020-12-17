import * as moment from 'moment';
import { Month } from '../models/month';

export class Calendar {
  public nextMonth: Month;
  public currentMonth: Month;
  public lastMonth: Month;
  public wholeMonth: any[];

  constructor(instant: moment.Moment) {
    const lastMonth = instant.clone().startOf('month').startOf('week');
    const nextMonth = instant.clone().endOf('month').endOf('week');

    this.currentMonth = new Month(instant, 'current');
    this.lastMonth = new Month(lastMonth, 'last');
    this.nextMonth = new Month(nextMonth, 'next');
    this.wholeMonth = [];

    this.buildingCalendar();
  }

  private buildingCalendar = function()
  {
    if (this.lastMonth.month === this.currentMonth.month)
    {
      this.lastMonth.days = [];
    }

    if (this.nextMonth.month === this.currentMonth.month)
    {
      this.nextMonth.days = [];
    }

    this.wholeMonth = this.lastMonth.days.concat(this.currentMonth.days.concat(this.nextMonth.days));
    //concat takes 2 strings and returns 1 string
  };
}
