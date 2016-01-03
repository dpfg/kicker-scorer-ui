import {Directive} from 'angular2/core';
import {ViewContainerRef, ProtoViewRef} from 'angular2/core';

@Directive({
    selector: '[player-selector]'
})
export class PlayerSelectorDirective {
  viewContainer: ViewContainerRef;
  protoViewRef: ProtoViewRef;

    constructor(viewContainer: ViewContainerRef, protoViewRef: ProtoViewRef) {
      this.viewContainer = viewContainer;
      this.protoViewRef = protoViewRef;
    }
}
