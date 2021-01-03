import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {IEvent} from '../../core/interfaces/IEvent';
import * as moment_ from 'moment';

const moment = moment_;

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartComponent implements OnInit, OnChanges {
  @Input() events: IEvent[];
  @Input() currIndex: number;
  @Input() lastIndex: number;

  barChartData;
  barChartOptions;
  barChartLabels;
  barChartType;
  barChartLegend;
  chartColors;

  private minTicks: number;
  private maxTicks: number;

  ngOnInit() {
    this.maxTicks = 40000;
    this.minTicks = 34000;
    this.barChartType = 'bar';
    this.barChartLegend = true;
    this.chartColors = [{backgroundColor: '#74dc6e'}];
    this.barChartOptions = this.getChartOptions();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.currIndex) {
      this.updateDataInChart();
    }
  }

  private updateDataInChart() {
    const events = this.getEventsInRange(this.events, this.currIndex);
    this.barChartLabels = events.map(item => item.timestamp);
    this.barChartData = [
      {data: events.map(item => item.price), label: 'price'}
    ];
  }

  private getEventsInRange(events: IEvent[], index: number): IEvent[] {
    const from = index > 0 ? index - 1 : index;
    const to = index < events.length - 1 ? index + 1 : index;
    return this.events.slice(from, to + 1);
  }

  private getChartOptions(): any {
    return {
      scaleShowVerticalLines: false,
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        callbacks: {
          label(tooltipItem, data) {
            let label = data.datasets[tooltipItem.datasetIndex].label || '';

            if (label) {
              label += ': ';
            }

            label += tooltipItem.yLabel.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
            return label;
          }
        }
      },
      scales: {
        xAxes: [{
          ticks:
          {
            callback(value) {
              return moment(value).format('LLLL');
            }
          }
        }],
        yAxes: [{
          ticks: {
            min: this.minTicks,
            max: this.maxTicks,
            callback(value) {
              return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
            }
          }
        }]
      }
    };
  }
}
