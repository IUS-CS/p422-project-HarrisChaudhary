import { InMemoryDbService } from 'angular-in-memory-web-api';

export class Data implements InMemoryDbService {
  createDb()
  {
    const events =
      [
      { id: 1, title: 'Meeting', date: '2018-01-13' },
      { id: 2, title: 'Meeting 1', date: '2020-05-23' },
      { id: 3, title: 'Meeting 2', date: '2020-05-23' },
      { id: 4, title: 'Meeting 3', date: '2020-05-03' },
      { id: 5, title: 'Meeting 4', date: '2020-05-23' },
      { id: 6, title: 'Meeting 5', date: '2020-05-23' },
      { id: 7, title: 'Meeting 6', date: '2020-05-23' },
      { id: 8, title: 'Meeting 7', date: '2020-05-13' },
      { id: 9, title: 'Meeting 8', date: '2018-05-13' },
      { id: 10, title: 'Meeting 9', date: '2018-05-13' }
    ];

    return {events};
  }
}
