import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {MatSelectChange} from '@angular/material';

@Component({
  selector: 'app-omni-bar',
  templateUrl: './omni-bar.component.html',
  styleUrls: ['./omni-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OmniBarComponent {

  @Input() count = 0;
  @Output() filterChange = new EventEmitter<string>();
  statuses = ['CANCELLED', 'NEW', 'PARTIALLY_FILLED'];

  selectedValue(selectChange: MatSelectChange) {
    this.filterChange.emit(selectChange.value);
  }
}
