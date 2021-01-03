import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {MatTable, Sort} from '@angular/material';

import {IEvent} from '../../core/interfaces/IEvent';
import {EventsService} from '../../core/services/events.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent {
  @Input() allEvents: IEvent[];
  @Input() currIndex: number;
  @Output() rowClickEvent = new EventEmitter<number>();
  @ViewChild(MatTable) table: MatTable<any>;

  displayedColumns: string[] = ['timestamp', 'price', 'status'];

  constructor(private eventsService: EventsService) {
  }

  onRowClicked(index: number) {
    this.eventsService.changeCurrentEvent(index);
  }

  applyFilter(filterValue: string) {
    this.eventsService.filterEvents(filterValue.trim());
    this.table.renderRows();
  }

  applySort(sort: Sort) {
    this.eventsService.sortEvents(sort);
    this.table.renderRows();
  }
}
