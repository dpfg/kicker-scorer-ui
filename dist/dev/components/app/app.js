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
var home_1 = require('../home/home');
var about_1 = require('../about/about');
var getstarted_1 = require('../getstarted/getstarted');
var new_game_1 = require('../new-game/new_game');
var menu_cmp_1 = require('../menu/menu.cmp');
var AppCmp = (function () {
    function AppCmp() {
    }
    AppCmp = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n    <menu></menu>\n\n    <div class=\"container\">\n      <router-outlet></router-outlet>\n    </div>\n  ",
            styles: ["\n    .ng-valid[required] {\n      border-left: 5px solid #42A948; /* green */\n    }\n    .ng-invalid {\n      border-left: 5px solid #a94442; /* red */\n    }\n\n    body {\n      padding-top: 60px;\n    }\n\n    .router-link-active {\n      color: magenta;\n    }\n  "],
            directives: [menu_cmp_1.MenuCmp, router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            { path: '/', as: 'Home', component: home_1.HomeCmp },
            { path: '/get-started', as: 'GetStarted', component: getstarted_1.GetStartedComponent },
            { path: '/new-game', as: 'NewGame', component: new_game_1.NewGameComponent },
            { path: '/about', component: about_1.AboutCmp, as: 'About' }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppCmp);
    return AppCmp;
})();
exports.AppCmp = AppCmp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXBwL2FwcC50cyJdLCJuYW1lcyI6WyJBcHBDbXAiLCJBcHBDbXAuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHFCQUEyQyxlQUFlLENBQUMsQ0FBQTtBQUMzRCx1QkFHTyxpQkFBaUIsQ0FBQyxDQUFBO0FBRXpCLHFCQUFzQixjQUFjLENBQUMsQ0FBQTtBQUNyQyxzQkFBdUIsZ0JBQWdCLENBQUMsQ0FBQTtBQUN4QywyQkFBa0MsMEJBQTBCLENBQUMsQ0FBQTtBQUM3RCx5QkFBK0Isc0JBQXNCLENBQUMsQ0FBQTtBQUV0RCx5QkFBc0Isa0JBQWtCLENBQUMsQ0FBQTtBQUV6QztJQUFBQTtJQWlDcUJDLENBQUNBO0lBakN0QkQ7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1RBLFFBQVFBLEVBQUVBLEtBQUtBO1lBQ2ZBLFFBQVFBLEVBQUVBLDZHQU1UQTtZQUNEQSxNQUFNQSxFQUFFQSxDQUFDQSxnUkFlUkEsQ0FBQ0E7WUFDRkEsVUFBVUEsRUFBRUEsQ0FBQ0Esa0JBQU9BLEVBQUVBLDBCQUFpQkEsQ0FBQ0E7U0FDekNBLENBQUNBO1FBQ0RBLG9CQUFXQSxDQUFDQTtZQUNYQSxFQUFFQSxJQUFJQSxFQUFFQSxHQUFHQSxFQUFpQkEsRUFBRUEsRUFBRUEsTUFBTUEsRUFBWUEsU0FBU0EsRUFBRUEsY0FBT0EsRUFBQ0E7WUFDckVBLEVBQUVBLElBQUlBLEVBQUVBLGNBQWNBLEVBQU1BLEVBQUVBLEVBQUVBLFlBQVlBLEVBQU1BLFNBQVNBLEVBQUVBLGdDQUFtQkEsRUFBRUE7WUFDbEZBLEVBQUVBLElBQUlBLEVBQUVBLFdBQVdBLEVBQVNBLEVBQUVBLEVBQUVBLFNBQVNBLEVBQVNBLFNBQVNBLEVBQUVBLDJCQUFnQkEsRUFBRUE7WUFDL0VBLEVBQUVBLElBQUlBLEVBQUVBLFFBQVFBLEVBQUVBLFNBQVNBLEVBQUVBLGdCQUFRQSxFQUFFQSxFQUFFQSxFQUFFQSxPQUFPQSxFQUFFQTtTQUNyREEsQ0FBQ0E7O2VBQ29CQTtJQUFEQSxhQUFDQTtBQUFEQSxDQWpDckIsQUFpQ3NCQSxJQUFBO0FBQVQsY0FBTSxTQUFHLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9hcHAvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7XG4gIFJvdXRlQ29uZmlnLFxuICBST1VURVJfRElSRUNUSVZFU1xufSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG5pbXBvcnQge0hvbWVDbXB9IGZyb20gJy4uL2hvbWUvaG9tZSc7XG5pbXBvcnQge0Fib3V0Q21wfSBmcm9tICcuLi9hYm91dC9hYm91dCc7XG5pbXBvcnQge0dldFN0YXJ0ZWRDb21wb25lbnR9IGZyb20gJy4uL2dldHN0YXJ0ZWQvZ2V0c3RhcnRlZCc7XG5pbXBvcnQge05ld0dhbWVDb21wb25lbnR9IGZyb20gJy4uL25ldy1nYW1lL25ld19nYW1lJztcblxuaW1wb3J0IHtNZW51Q21wfSBmcm9tICcuLi9tZW51L21lbnUuY21wJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bWVudT48L21lbnU+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW2BcbiAgICAubmctdmFsaWRbcmVxdWlyZWRdIHtcbiAgICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzQyQTk0ODsgLyogZ3JlZW4gKi9cbiAgICB9XG4gICAgLm5nLWludmFsaWQge1xuICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTk0NDQyOyAvKiByZWQgKi9cbiAgICB9XG5cbiAgICBib2R5IHtcbiAgICAgIHBhZGRpbmctdG9wOiA2MHB4O1xuICAgIH1cblxuICAgIC5yb3V0ZXItbGluay1hY3RpdmUge1xuICAgICAgY29sb3I6IG1hZ2VudGE7XG4gICAgfVxuICBgXSxcbiAgZGlyZWN0aXZlczogW01lbnVDbXAsIFJPVVRFUl9ESVJFQ1RJVkVTXVxufSlcbkBSb3V0ZUNvbmZpZyhbXG4gIHsgcGF0aDogJy8nLCAgICAgICAgICAgICAgICBhczogJ0hvbWUnLCAgICAgICAgICAgY29tcG9uZW50OiBIb21lQ21wfSxcbiAgeyBwYXRoOiAnL2dldC1zdGFydGVkJywgICAgIGFzOiAnR2V0U3RhcnRlZCcsICAgICBjb21wb25lbnQ6IEdldFN0YXJ0ZWRDb21wb25lbnQgfSxcbiAgeyBwYXRoOiAnL25ldy1nYW1lJywgICAgICAgIGFzOiAnTmV3R2FtZScsICAgICAgICBjb21wb25lbnQ6IE5ld0dhbWVDb21wb25lbnQgfSxcbiAgeyBwYXRoOiAnL2Fib3V0JywgY29tcG9uZW50OiBBYm91dENtcCwgYXM6ICdBYm91dCcgfVxuXSlcbmV4cG9ydCBjbGFzcyBBcHBDbXAge31cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==