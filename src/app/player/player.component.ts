import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {EventsService} from '../../core/services/events.service';
import {interval, Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerComponent implements OnInit, OnDestroy {
  @Input() index;
  @Input() lastIndex;

  isPlaying: boolean;
  subscription: Subscription;
  playerInterval: Observable<number>;

  constructor(private eventsService: EventsService,  private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.playerInterval = interval(10000);
    this.onPlay();
  }

  change(index: number) {
    this.eventsService.changeCurrentEvent(index);
    this.cdr.markForCheck();
  }

  onPlay() {
    this.isPlaying = true;
    this.subscription = this.playerInterval.subscribe(val => this.change(this.index + 1));
  }

  onPause() {
    this.isPlaying = false;
    this.subscription.unsubscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
