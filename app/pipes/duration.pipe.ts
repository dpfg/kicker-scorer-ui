import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
  name: 'duration',
  pure: false
})
export class DurationFormatPipe implements PipeTransform {
  private placeholder = "-- : --";

  transform(value: any, args: string[]): any {
    let durationMS = Number(value);
    if (durationMS < 0) {
      return this.placeholder;
    }

    var seconds = Math.floor(durationMS / 1000);
    var minutes = 0;
    if (seconds >= 60) {
      minutes = Math.floor(seconds / 60);
      seconds = seconds % 60;
    }
    if (minutes >= 60) {
      return this.placeholder;
    }
    return ('0' + minutes).slice(-2) + ' : ' + ('0' + seconds).slice(-2);
  }
}
