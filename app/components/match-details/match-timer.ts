
import {Component, Input} from 'angular2/core';

import {DurationFormatPipe} from '../../pipes/duration';

@Component({
  selector: 'match-timer',
  pipes: [DurationFormatPipe],
  template: `<span>{{ time | duration }}</span>`,
  styles: [`
    span {
      font-weight: bolder;
      font-size: 24px;
      display: block;
    }`]
})
export class MatchTimerCmp {
    @Input() started: Date;
    localStarted: Date = new Date();
    public time = 0;

    constructor() {
      setInterval(this.updateTimer, 1000, this);
    }

    updateTimer(cmp: MatchTimerCmp) {
      var countFrom = cmp.started;
      if (cmp.started.getTime() < (new Date()).getTime()) {
        countFrom = cmp.localStarted;
      }
      cmp.time = (new Date()).getTime() - countFrom.getTime();
    }
}
