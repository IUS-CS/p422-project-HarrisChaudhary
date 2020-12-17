import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../models/event';
import { EventService } from '../models/eventService';

@Component({
  selector: 'app-day-info',
  templateUrl: './day-info.component.html',
  styleUrls: ['./day-info.component.css']
})

export class DayInfoComponent implements OnInit {
  constructor(private eventService: EventService) { }

  ngOnInit() {
  }
  // tslint:disable-next-line:member-ordering
  @Input() date: Object;

  eventSubmitted(form): void
  {
    const title = form.value['newEvent'];
    // tslint:disable-next-line:max-line-length
    this.eventService.addingEvent({ title, date: this.date['fullDate'] } as Event).subscribe(event => Object.assign(this.date['events'].push(event)));
    form.reset();
  }
}
