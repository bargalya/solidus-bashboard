import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {EventsService} from '../../core/services/events.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit, OnDestroy {
  title = 'Solidus dashboard';
  isShowChart = true;

  private sub: Subscription;
  constructor(private eventsService: EventsService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.sub = this.eventsService.getEvents()
      .subscribe(results => {
        this.eventsService.setEvents(results);
        this.cdr.detectChanges();
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
