import * as moment from 'moment';

export class Month {
  constructor(instant: moment.Moment, kind: string)
  {
    this['instant'] = instant;
    this['day'] = instant.clone().date();
    this['month'] = instant.clone().format('MM');
    this['monthText'] = instant.clone().format('MMMM');
    this['year'] = instant.clone().format('YYYY');
    this['weekDay'] = instant.clone().format('dddd');
    this['daysInMonth'] = instant.clone().daysInMonth();
    this['kind'] = kind;
    this['events'] = [];
    this['days'] = [];
    const firstDay = kind === 'last' ? this['day'] : 1;
    const lastDay = kind === 'next' ? this['day'] : this['daysInMonth'];
    this['firstDay'] = firstDay;
    this['lastDay'] = lastDay;
    this.buildDays();
  }

  public buildDays = function()
  {
    for (let i = this['firstDay']; i <= this['lastDay']; i++)
    {
      const day = i < 10 ? '0' + i : i.toString();
      const fullDate = `${this['year']}-${this['month']}-${day}`;
      const weekDay = moment(fullDate).format('dddd');

      const date =
        {
          day: day,
          month: this['month'],
          year: this['year'],
          fullDate: fullDate,
          weekDay: weekDay,
          kind: this['kind']
        };

      this['days'].push(date);
    }
  };
}
