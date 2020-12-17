import { Component, Input, OnInit } from '@angular/core';
import { Event } from '../models/event';
import { EventService } from '../models/eventService';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  // tslint:disable-next-line:object-literal-sort-keys
  styleUrls: ['./day.component.css'],
})

export class DayComponent implements OnInit
{
  constructor(private eventService: EventService) { }
  ngOnInit()
  {
    this.eventsByDate(this.date['fullDate']);
  }

  @Input() date: Object;
  events: Event[];

  private eventsByDate(date: string): void
  {
    this.eventService.eventsByDate(date).subscribe(events => this.date['events'] = events);
  }
}
