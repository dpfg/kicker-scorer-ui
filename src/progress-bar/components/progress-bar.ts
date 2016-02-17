
import {Component, View} from 'angular2/core';

import {LoaderService} from '../../shared/services/loader';

@Component({
  selector: 'progress-bar'
})
@View({
  templateUrl: 'progress-bar/components/progress-bar.html',
  styleUrls: ['progress-bar/components/progress-bar.css']
})

export class ProgressBarComponent {

  constructor(private loader: LoaderService) { }

  public isActive(): boolean {
    return this.loader.isActive();
  }
}
