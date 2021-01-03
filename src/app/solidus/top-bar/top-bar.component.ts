import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopBarComponent implements OnInit {
  @Input() isShowChart = true;
  @Input() title: string;
  @Output() isShowChartChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

}
