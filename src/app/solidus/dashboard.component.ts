import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {EventsService} from '../../core/services/events.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  title = 'Solidus dashboard';
  isShowChart = true;

  constructor(private eventsService: EventsService) {
  }

  ngOnInit() {
    this.eventsService.getEvents();
  }
}
