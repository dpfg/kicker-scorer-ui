var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var browser_1 = require('angular2/platform/browser');
var router_1 = require('angular2/router');
var http_1 = require('angular2/http');
var app_1 = require('./components/app/app');
var match_service_1 = require('./services/match_service');
var player_service_1 = require('./services/player_service');
var APP_SERVICES = [
    match_service_1.MatchService,
    player_service_1.PlayerService
];
var JSONBaseRequest = (function (_super) {
    __extends(JSONBaseRequest, _super);
    function JSONBaseRequest() {
        _super.call(this);
        this.headers.append("Content-Type", "application/json");
    }
    JSONBaseRequest = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], JSONBaseRequest);
    return JSONBaseRequest;
})(http_1.BaseRequestOptions);
exports.JSONBaseRequest = JSONBaseRequest;
browser_1.bootstrap(app_1.AppCmp, [
    router_1.ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    APP_SERVICES,
    core_1.provide(http_1.RequestOptions, { useClass: JSONBaseRequest }),
    core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3RzdHJhcC50cyJdLCJuYW1lcyI6WyJKU09OQmFzZVJlcXVlc3QiLCJKU09OQmFzZVJlcXVlc3QuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHdCQUF3QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQ3BELHVCQUF1RSxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3pGLHFCQUFpRSxlQUFlLENBQUMsQ0FBQTtBQUVqRixvQkFBcUIsc0JBQXNCLENBQUMsQ0FBQTtBQUU1Qyw4QkFBMkIsMEJBQTBCLENBQUMsQ0FBQTtBQUN0RCwrQkFBNEIsMkJBQTJCLENBQUMsQ0FBQTtBQUV4RCxJQUFJLFlBQVksR0FBRztJQUNmLDRCQUFZO0lBQ1osOEJBQWE7Q0FDaEIsQ0FBQztBQUdGO0lBQ3FDQSxtQ0FBa0JBO0lBQ25EQTtRQUNJQyxpQkFBT0EsQ0FBQ0E7UUFDUkEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsY0FBY0EsRUFBRUEsa0JBQWtCQSxDQUFDQSxDQUFDQTtJQUM1REEsQ0FBQ0E7SUFMTEQ7UUFBQ0EsaUJBQVVBLEVBQUVBOzt3QkFNWkE7SUFBREEsc0JBQUNBO0FBQURBLENBTkEsQUFNQ0EsRUFMb0MseUJBQWtCLEVBS3REO0FBTFksdUJBQWUsa0JBSzNCLENBQUE7QUFFRCxtQkFBUyxDQUFDLFlBQU0sRUFBRTtJQUNkLHlCQUFnQjtJQUNoQixxQkFBYztJQUNkLFlBQVk7SUFDWixjQUFPLENBQUMscUJBQWMsRUFBRSxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsQ0FBQztJQUN0RCxjQUFPLENBQUMseUJBQWdCLEVBQUUsRUFBRSxRQUFRLEVBQUUsNkJBQW9CLEVBQUUsQ0FBQztDQUNoRSxDQUFDLENBQUMiLCJmaWxlIjoiYm9vdHN0cmFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtwcm92aWRlLCBJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJztcbmltcG9ydCB7Uk9VVEVSX1BST1ZJREVSUywgTG9jYXRpb25TdHJhdGVneSwgSGFzaExvY2F0aW9uU3RyYXRlZ3l9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0hUVFBfUFJPVklERVJTLCBSZXF1ZXN0T3B0aW9ucywgQmFzZVJlcXVlc3RPcHRpb25zfSBmcm9tICdhbmd1bGFyMi9odHRwJztcblxuaW1wb3J0IHtBcHBDbXB9IGZyb20gJy4vY29tcG9uZW50cy9hcHAvYXBwJztcblxuaW1wb3J0IHtNYXRjaFNlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvbWF0Y2hfc2VydmljZSc7XG5pbXBvcnQge1BsYXllclNlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvcGxheWVyX3NlcnZpY2UnO1xuXG5sZXQgQVBQX1NFUlZJQ0VTID0gW1xuICAgIE1hdGNoU2VydmljZSxcbiAgICBQbGF5ZXJTZXJ2aWNlXG5dO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBKU09OQmFzZVJlcXVlc3QgZXh0ZW5kcyBCYXNlUmVxdWVzdE9wdGlvbnMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgICB9XG59XG5cbmJvb3RzdHJhcChBcHBDbXAsIFtcbiAgICBST1VURVJfUFJPVklERVJTLFxuICAgIEhUVFBfUFJPVklERVJTLFxuICAgIEFQUF9TRVJWSUNFUyxcbiAgICBwcm92aWRlKFJlcXVlc3RPcHRpb25zLCB7IHVzZUNsYXNzOiBKU09OQmFzZVJlcXVlc3QgfSksXG4gICAgcHJvdmlkZShMb2NhdGlvblN0cmF0ZWd5LCB7IHVzZUNsYXNzOiBIYXNoTG9jYXRpb25TdHJhdGVneSB9KVxuXSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=