import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-toggle-data-display',
  templateUrl: './toggle-data-display.component.html',
  styleUrls: ['./toggle-data-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleDataDisplayComponent {

  @Input() isShowChart = false;
  @Output() isShowChartChange = new EventEmitter<boolean>();

  toggle() {
    this.isShowChart = !this.isShowChart;
    this.isShowChartChange.emit(this.isShowChart);
  }

}
