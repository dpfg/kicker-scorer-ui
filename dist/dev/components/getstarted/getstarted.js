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
var router_1 = require('angular2/router');
var GetStartedComponent = (function () {
    function GetStartedComponent(router) {
        this.router = router;
    }
    GetStartedComponent.prototype.navigateToNewGame = function () {
        this.router.navigate(['/NewGame']);
    };
    GetStartedComponent = __decorate([
        core_1.Component({
            selector: "get-started",
            template: "\n    <div class=\"row\">\n      <div class=\"col-md-12 text-center\">\n        <h3>Start new game right now!</h3>\n        <button class=\"btn btn-primary btn-lg\" (click)='navigateToNewGame()'>Start</button>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], GetStartedComponent);
    return GetStartedComponent;
})();
exports.GetStartedComponent = GetStartedComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2V0c3RhcnRlZC9nZXRzdGFydGVkLnRzIl0sIm5hbWVzIjpbIkdldFN0YXJ0ZWRDb21wb25lbnQiLCJHZXRTdGFydGVkQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiR2V0U3RhcnRlZENvbXBvbmVudC5uYXZpZ2F0ZVRvTmV3R2FtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBRXZDO0lBWUVBLDZCQUFvQkEsTUFBY0E7UUFBZEMsV0FBTUEsR0FBTkEsTUFBTUEsQ0FBUUE7SUFFbENBLENBQUNBO0lBRURELCtDQUFpQkEsR0FBakJBO1FBQ0VFLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBLENBQUNBO0lBQ3JDQSxDQUFDQTtJQWxCSEY7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1RBLFFBQVFBLEVBQUVBLGFBQWFBO1lBQ3ZCQSxRQUFRQSxFQUFFQSxpUEFPVEE7U0FDRkEsQ0FBQ0E7OzRCQVNEQTtJQUFEQSwwQkFBQ0E7QUFBREEsQ0FuQkEsQUFtQkNBLElBQUE7QUFSWSwyQkFBbUIsc0JBUS9CLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9nZXRzdGFydGVkL2dldHN0YXJ0ZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImdldC1zdGFydGVkXCIsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICA8aDM+U3RhcnQgbmV3IGdhbWUgcmlnaHQgbm93ITwvaDM+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLWxnXCIgKGNsaWNrKT0nbmF2aWdhdGVUb05ld0dhbWUoKSc+U3RhcnQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEdldFN0YXJ0ZWRDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG5cbiAgfVxuXG4gIG5hdmlnYXRlVG9OZXdHYW1lKCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL05ld0dhbWUnXSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==