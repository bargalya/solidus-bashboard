import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {IEvent} from '../interfaces/IEvent';
import {map, tap} from 'rxjs/operators';
import {Sort} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  events$: Observable<IEvent[]>;
  originalEvents: IEvent[];
  events: IEvent[];
  currentEvent: IEvent;
  currIndex: number;
  lastIndex: number;

  constructor(private http: HttpClient) {
  }

  getEvents() {
    this.events$ = this.http.get('mockApi/events').pipe(
      map((results: IEvent[]) => {
        results.map((item, index) => item.id = index);
        return results;
      }),
      tap((results: IEvent[]) => this.setEvents(results))
    );
  }

  setEvents(results: IEvent[]) {
    this.originalEvents = [...results];
    this.events = results;
    this.changeCurrentEvent(0);
    this.lastIndex = results.length - 1;
  }

  filterEvents(filter: string) {

    this.events = this.originalEvents.filter(item => item.status.includes(filter));
  }

  sortEvents(sort: Sort) {
    this.events.sort((a, b) => this.sortByDirection(a, b, sort));
  }

  changeCurrentEvent(index: number) {
    this.currIndex = index;
    this.currentEvent = this.events[this.currIndex];
  }

  private sortByDirection(a: IEvent, b: IEvent, sort: Sort) {
    switch (sort.direction) {
      case 'asc':
        return this.sort(a[sort.active], b[sort.active]);
      case 'desc':
        return this.sort(b[sort.active], a[sort.active]);
      default:
        return a.id - b.id;
    }
  }

  private sort(a, b) {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    }
    return 0;
  }
}
