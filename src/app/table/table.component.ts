import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatSort, MatTable, MatTableDataSource, Sort} from '@angular/material';

import {IEvent} from '../../core/interfaces/IEvent';
import {EventsService} from '../../core/services/events.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {
  @Input() allEvents: IEvent[];
  @Input() currIndex: number;
  @Output() rowClickEvent = new EventEmitter<number>();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;

  dataSource;
  displayedColumns: string[] = ['timestamp', 'price', 'status'];

  constructor(private eventsService: EventsService) {
  }

  onRowClicked(index: number) {
    this.eventsService.changeCurrentEvent(index);
  }

  ngOnInit(): void {
    this.dataSource  = new MatTableDataSource(this.allEvents);
    this.dataSource.sort = this.sort;
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
