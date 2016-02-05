
import {Component, View, Input} from 'angular2/core';

@Component({
  selector: "loading-progress"
})
@View({
  template:
    `
    <div [class.show]='isVisible()' class='overlay'>
      <span>Loading...</span>
    </div>
    `,
    styles: [`
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
        background-color: rgba(0,0,0,0.0);
        display:none;
      }

      .show {
        display: block;
      }
      `]
})
export class LoadingProgressComponent {
  @Input() visible: boolean;

  public isVisible() {
    return this.visible;
  }
}
