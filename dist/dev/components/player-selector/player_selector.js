var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var player_service_1 = require('../../services/player_service');
var PlayerSelectorComponent = (function () {
    function PlayerSelectorComponent(playerService, elementRef) {
        var _this = this;
        this.playerService = playerService;
        this.elementRef = elementRef;
        this.elementId = 'playerSelector';
        this.selected = new core_1.EventEmitter();
        playerService
            .getAllPlayers()
            .subscribe(function (players) { return _this.players = players; });
    }
    PlayerSelectorComponent.prototype.selectPlayer = function (player) {
        console.log("selected in popup");
        jQuery(this.elementRef.nativeElement).find('.modal').modal('hide');
        this.selected.next(player);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PlayerSelectorComponent.prototype, "elementId", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], PlayerSelectorComponent.prototype, "selected", void 0);
    PlayerSelectorComponent = __decorate([
        core_1.Component({
            selector: 'player-selector',
            template: "\n    <!-- Modal -->\n    <div class=\"modal fade\" id=\"{{ elementId }}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"playerSelectorLabel\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n            <h4 class=\"modal-title\" id=\"playerSelectorLabel\">Select player</h4>\n          </div>\n          <div class=\"modal-body\">\n            <div class=\"list-group\">\n              <button type='button' *ngFor=\"#player of players\" class=\"list-group-item\" (click)='selectPlayer(player)'>\n                {{player.username}}\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [player_service_1.PlayerService, core_1.ElementRef])
    ], PlayerSelectorComponent);
    return PlayerSelectorComponent;
})();
exports.PlayerSelectorComponent = PlayerSelectorComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGxheWVyLXNlbGVjdG9yL3BsYXllcl9zZWxlY3Rvci50cyJdLCJuYW1lcyI6WyJQbGF5ZXJTZWxlY3RvckNvbXBvbmVudCIsIlBsYXllclNlbGVjdG9yQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiUGxheWVyU2VsZWN0b3JDb21wb25lbnQuc2VsZWN0UGxheWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBaUUsZUFBZSxDQUFDLENBQUE7QUFHakYsK0JBQTRCLCtCQUErQixDQUFDLENBQUE7QUFJNUQ7SUE0QkVBLGlDQUFvQkEsYUFBNEJBLEVBQVVBLFVBQXNCQTtRQTVCbEZDLGlCQXVDQ0E7UUFYcUJBLGtCQUFhQSxHQUFiQSxhQUFhQSxDQUFlQTtRQUFVQSxlQUFVQSxHQUFWQSxVQUFVQSxDQUFZQTtRQUp2RUEsY0FBU0EsR0FBR0EsZ0JBQWdCQSxDQUFDQTtRQUM1QkEsYUFBUUEsR0FBR0EsSUFBSUEsbUJBQVlBLEVBQUVBLENBQUNBO1FBSXRDQSxhQUFhQTthQUNWQSxhQUFhQSxFQUFFQTthQUNmQSxTQUFTQSxDQUFDQSxVQUFBQSxPQUFPQSxJQUFJQSxPQUFBQSxLQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxPQUFPQSxFQUF0QkEsQ0FBc0JBLENBQUNBLENBQUNBO0lBQ2xEQSxDQUFDQTtJQUVERCw4Q0FBWUEsR0FBWkEsVUFBYUEsTUFBY0E7UUFDekJFLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLG1CQUFtQkEsQ0FBQ0EsQ0FBQ0E7UUFDakNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLGFBQWFBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO1FBQ25FQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtJQUM3QkEsQ0FBQ0E7SUFkREY7UUFBQ0EsWUFBS0EsRUFBRUE7O09BQUNBLDhDQUFTQSxVQUFvQkE7SUFDdENBO1FBQUNBLGFBQU1BLEVBQUVBOztPQUFDQSw2Q0FBUUEsVUFBc0JBO0lBekIxQ0E7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1RBLFFBQVFBLEVBQUVBLGlCQUFpQkE7WUFDM0JBLFFBQVFBLEVBQUVBLGszQkFtQlRBO1NBQ0ZBLENBQUNBOztnQ0FpQkRBO0lBQURBLDhCQUFDQTtBQUFEQSxDQXZDQSxBQXVDQ0EsSUFBQTtBQWhCWSwrQkFBdUIsMEJBZ0JuQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvcGxheWVyLXNlbGVjdG9yL3BsYXllcl9zZWxlY3Rvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWZ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5pbXBvcnQge1BsYXllcn0gZnJvbSAnLi4vLi4vbW9kZWxzL3BsYXllcic7XG5pbXBvcnQge1BsYXllclNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3BsYXllcl9zZXJ2aWNlJztcblxuZGVjbGFyZSB2YXIgalF1ZXJ5OmFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGxheWVyLXNlbGVjdG9yJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8IS0tIE1vZGFsIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbCBmYWRlXCIgaWQ9XCJ7eyBlbGVtZW50SWQgfX1cIiB0YWJpbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbGFiZWxsZWRieT1cInBsYXllclNlbGVjdG9yTGFiZWxcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj48c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPjwvYnV0dG9uPlxuICAgICAgICAgICAgPGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIiBpZD1cInBsYXllclNlbGVjdG9yTGFiZWxcIj5TZWxlY3QgcGxheWVyPC9oND5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3QtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nICpuZ0Zvcj1cIiNwbGF5ZXIgb2YgcGxheWVyc1wiIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCIgKGNsaWNrKT0nc2VsZWN0UGxheWVyKHBsYXllciknPlxuICAgICAgICAgICAgICAgIHt7cGxheWVyLnVzZXJuYW1lfX1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBQbGF5ZXJTZWxlY3RvckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGVsZW1lbnRJZCA9ICdwbGF5ZXJTZWxlY3Rvcic7XG4gIEBPdXRwdXQoKSBzZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcGxheWVyczogQXJyYXk8UGxheWVyPjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBsYXllclNlcnZpY2U6IFBsYXllclNlcnZpY2UsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHBsYXllclNlcnZpY2VcbiAgICAgIC5nZXRBbGxQbGF5ZXJzKClcbiAgICAgIC5zdWJzY3JpYmUocGxheWVycyA9PiB0aGlzLnBsYXllcnMgPSBwbGF5ZXJzKTtcbiAgfVxuXG4gIHNlbGVjdFBsYXllcihwbGF5ZXI6IFBsYXllcikge1xuICAgIGNvbnNvbGUubG9nKFwic2VsZWN0ZWQgaW4gcG9wdXBcIik7XG4gICAgalF1ZXJ5KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5maW5kKCcubW9kYWwnKS5tb2RhbCgnaGlkZScpO1xuICAgIHRoaXMuc2VsZWN0ZWQubmV4dChwbGF5ZXIpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=