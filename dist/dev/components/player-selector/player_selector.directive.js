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
var core_2 = require('angular2/core');
var PlayerSelectorDirective = (function () {
    function PlayerSelectorDirective(viewContainer, protoViewRef) {
        this.viewContainer = viewContainer;
        this.protoViewRef = protoViewRef;
    }
    PlayerSelectorDirective = __decorate([
        core_1.Directive({
            selector: '[player-selector]'
        }), 
        __metadata('design:paramtypes', [core_2.ViewContainerRef, core_2.ProtoViewRef])
    ], PlayerSelectorDirective);
    return PlayerSelectorDirective;
})();
exports.PlayerSelectorDirective = PlayerSelectorDirective;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGxheWVyLXNlbGVjdG9yL3BsYXllcl9zZWxlY3Rvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOlsiUGxheWVyU2VsZWN0b3JEaXJlY3RpdmUiLCJQbGF5ZXJTZWxlY3RvckRpcmVjdGl2ZS5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLHFCQUE2QyxlQUFlLENBQUMsQ0FBQTtBQUU3RDtJQU9JQSxpQ0FBWUEsYUFBK0JBLEVBQUVBLFlBQTBCQTtRQUNyRUMsSUFBSUEsQ0FBQ0EsYUFBYUEsR0FBR0EsYUFBYUEsQ0FBQ0E7UUFDbkNBLElBQUlBLENBQUNBLFlBQVlBLEdBQUdBLFlBQVlBLENBQUNBO0lBQ25DQSxDQUFDQTtJQVZMRDtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDUEEsUUFBUUEsRUFBRUEsbUJBQW1CQTtTQUNoQ0EsQ0FBQ0E7O2dDQVNEQTtJQUFEQSw4QkFBQ0E7QUFBREEsQ0FYQSxBQVdDQSxJQUFBO0FBUlksK0JBQXVCLDBCQVFuQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvcGxheWVyLXNlbGVjdG9yL3BsYXllcl9zZWxlY3Rvci5kaXJlY3RpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1ZpZXdDb250YWluZXJSZWYsIFByb3RvVmlld1JlZn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3BsYXllci1zZWxlY3Rvcl0nXG59KVxuZXhwb3J0IGNsYXNzIFBsYXllclNlbGVjdG9yRGlyZWN0aXZlIHtcbiAgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcbiAgcHJvdG9WaWV3UmVmOiBQcm90b1ZpZXdSZWY7XG5cbiAgICBjb25zdHJ1Y3Rvcih2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLCBwcm90b1ZpZXdSZWY6IFByb3RvVmlld1JlZikge1xuICAgICAgdGhpcy52aWV3Q29udGFpbmVyID0gdmlld0NvbnRhaW5lcjtcbiAgICAgIHRoaXMucHJvdG9WaWV3UmVmID0gcHJvdG9WaWV3UmVmO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==