(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row first\">\n      <div class=\"col-sm\">\n        <div  class=\"chatform\">\n          <message-list [messages]=\"messages\"></message-list>\n          <message-form [message]=\"message\" [messages]=\"messages\"></message-form>\n        </div>    \n      </div>\n      <div class=\"col-sm\">\n        <app-map></app-map>        \n      </div>\n    </div>\n    <div class=\"row second\">\n        <app-recommendation-bar></app-recommendation-bar>\n    </div>\n</div>\n<router-outlet></router-outlet>\n\n<!-- the below code is for table -->\n<!-- \n<table>\n  <tr class=\"firstRow\">\n    <td width=\"50\"><app-chatbot></app-chatbot></td>\n    <td><app-map></app-map></td>\n  </tr>\n  <tr class=\"secondRow\">\n    \n      <app-recommendation-bar></app-recommendation-bar>\n    \n  </tr>\n</table> -->"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".first {\n  min-height: 70%vh;\n  height: 70vh; }\n\n.second {\n  min-height: 30vh;\n  height: 30vh; }\n\n.container {\n  margin: 0;\n  padding: 0;\n  min-height: 100vh;\n  min-width: 100vw;\n  display: inline-block; }\n\n.row {\n  margin: 0;\n  padding: 0; }\n\n.col-sm {\n  margin: 0;\n  padding: 0; }\n\n.jumbotron {\n  margin: 0;\n  padding: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXGNoYXRib3QgZXhwZXJpbWVudGF0aW9uXFxpQ2FydFN5c3RlbUFuZ3VsYXIvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGlCQUFpQjtFQUNqQixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksU0FBUztFQUNULFVBQVUsRUFBQTs7QUFHZDtFQUNJLFNBQVM7RUFDVCxVQUFVLEVBQUE7O0FBR2Q7RUFDSSxTQUFTO0VBQ1QsVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5maXJzdCB7IFxyXG4gICAgbWluLWhlaWdodDogNzAldmg7XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbn1cclxuXHJcbi5zZWNvbmQgeyBcclxuICAgIG1pbi1oZWlnaHQ6IDMwdmg7XHJcbiAgICBoZWlnaHQ6IDMwdmg7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWluLXdpZHRoOiAxMDB2dztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uY29sLXNte1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmp1bWJvdHJvbntcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vdGFibGUgY3NzIFxyXG4vLyB0YWJsZSB7XHJcbi8vICAgICBtaW4td2lkdGg6IDEwMHZ3O1xyXG4vLyAgICAgbWluLWhlaWdodDogMTAwdmg7XHJcbi8vIH1cclxuXHJcbi8vIHRkIHtcclxuLy8gICAgIG1hcmdpbjogMDtcclxuLy8gICAgIHBhZGRpbmc6IDA7XHJcbi8vIH1cclxuXHJcbi8vIC5maXJzdFJvdyB7XHJcbi8vICAgICBoZWlnaHQ6IDUwJTtcclxuLy8gfVxyXG5cclxuLy8gLnNlY29uZFJvdyB7XHJcbi8vICAgICBoZWlnaHQ6IDUwJTtcclxuLy8gfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_chatbot_models_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/chatbot/models/message */ "./src/app/chatbot/models/message.ts");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products.service */ "./src/app/products.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(productservice) {
        this.productservice = productservice;
        this.title = 'iCartSystemAngular';
        this.repdata = { some: "data" };
        this.message = new _app_chatbot_models_message__WEBPACK_IMPORTED_MODULE_2__["Message"]('', 'assets/chatbotImages/user.png');
        this.messages = [
            new _app_chatbot_models_message__WEBPACK_IMPORTED_MODULE_2__["Message"]('Welcome to chatbot universe', 'assets/chatbotImages/bot.png', new Date())
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productservice.getProducts().subscribe(function (data) { return _this.repdata = data; });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            providers: [_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]],
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./products.service */ "./src/app/products.service.ts");
/* harmony import */ var _recommendation_bar_recommendation_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./recommendation-bar/recommendation-bar.component */ "./src/app/recommendation-bar/recommendation-bar.component.ts");
/* harmony import */ var _recommendation_bar_recommendation_item_recommendation_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./recommendation-bar/recommendation-item/recommendation-item.component */ "./src/app/recommendation-bar/recommendation-item/recommendation-item.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _app_chatbot_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../app/chatbot/services */ "./src/app/chatbot/services/index.ts");
/* harmony import */ var _app_chatbot_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../app/chatbot/components */ "./src/app/chatbot/components/index.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _recommendation_bar_recommendation_bar_component__WEBPACK_IMPORTED_MODULE_8__["RecommendationBarComponent"],
                _recommendation_bar_recommendation_item_recommendation_item_component__WEBPACK_IMPORTED_MODULE_9__["RecommendationItemComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_10__["MapComponent"],
                _app_chatbot_components__WEBPACK_IMPORTED_MODULE_12__["MessageListComponent"],
                _app_chatbot_components__WEBPACK_IMPORTED_MODULE_12__["MessageFormComponent"],
                _app_chatbot_components__WEBPACK_IMPORTED_MODULE_12__["MessageItemComponent"]
            ],
            imports: [
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [_products_service__WEBPACK_IMPORTED_MODULE_7__["ProductsService"], _app_chatbot_services__WEBPACK_IMPORTED_MODULE_11__["DialogflowService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chatbot/components/index.ts":
/*!*********************************************!*\
  !*** ./src/app/chatbot/components/index.ts ***!
  \*********************************************/
/*! exports provided: MessageFormComponent, MessageListComponent, MessageItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _message_form_message_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message-form/message-form.component */ "./src/app/chatbot/components/message-form/message-form.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageFormComponent", function() { return _message_form_message_form_component__WEBPACK_IMPORTED_MODULE_0__["MessageFormComponent"]; });

/* harmony import */ var _message_list_message_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message-list/message-list.component */ "./src/app/chatbot/components/message-list/message-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageListComponent", function() { return _message_list_message_list_component__WEBPACK_IMPORTED_MODULE_1__["MessageListComponent"]; });

/* harmony import */ var _message_item_message_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message-item/message-item.component */ "./src/app/chatbot/components/message-item/message-item.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageItemComponent", function() { return _message_item_message_item_component__WEBPACK_IMPORTED_MODULE_2__["MessageItemComponent"]; });






/***/ }),

/***/ "./src/app/chatbot/components/message-form/message-form.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/chatbot/components/message-form/message-form.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chatcontrol\">\n  <input type=\"text\" class=\"form-control chatinput\" (keyup.enter)=\"sendMessage()\" [(ngModel)]=\"message.content\"/>\n  <button class=\"btn btn-success sendbtn\" (click)=\"sendMessage()\">Send</button>\n</div>\n"

/***/ }),

/***/ "./src/app/chatbot/components/message-form/message-form.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/chatbot/components/message-form/message-form.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chatcontrol {\n  float: left;\n  width: 100%; }\n  .chatcontrol .chatinput {\n    width: 80%;\n    float: left;\n    border-radius: 0; }\n  .chatcontrol .sendbtn {\n    width: 20%;\n    float: left;\n    border-radius: 0;\n    text-transform: uppercase; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdGJvdC9jb21wb25lbnRzL21lc3NhZ2UtZm9ybS9FOlxcY2hhdGJvdCBleHBlcmltZW50YXRpb25cXGlDYXJ0U3lzdGVtQW5ndWxhci9zcmNcXGFwcFxcY2hhdGJvdFxcY29tcG9uZW50c1xcbWVzc2FnZS1mb3JtXFxtZXNzYWdlLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsV0FBVyxFQUFBO0VBRmI7SUFLSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGdCQUFnQixFQUFBO0VBUHBCO0lBV0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jaGF0Ym90L2NvbXBvbmVudHMvbWVzc2FnZS1mb3JtL21lc3NhZ2UtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGF0Y29udHJvbHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIC5jaGF0aW5wdXR7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG5cbiAgLnNlbmRidG57XG4gICAgd2lkdGg6IDIwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/chatbot/components/message-form/message-form.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/chatbot/components/message-form/message-form.component.ts ***!
  \***************************************************************************/
/*! exports provided: MessageFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageFormComponent", function() { return MessageFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/message */ "./src/app/chatbot/models/message.ts");
/* harmony import */ var _services_dialogflow_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/dialogflow.service */ "./src/app/chatbot/services/dialogflow.service.ts");




var MessageFormComponent = /** @class */ (function () {
    function MessageFormComponent(dialogFlowService) {
        this.dialogFlowService = dialogFlowService;
    }
    MessageFormComponent.prototype.ngOnInit = function () {
    };
    MessageFormComponent.prototype.sendMessage = function () {
        var _this = this;
        this.message.timestamp = new Date();
        this.messages.push(this.message);
        this.dialogFlowService.getResponse(this.message.content).subscribe(function (res) {
            _this.messages.push(new _models_message__WEBPACK_IMPORTED_MODULE_2__["Message"](res.result.fulfillment.speech, 'assets/chatbotImages/bot.png', res.timestamp));
        });
        // this.dialogFlowService.getResponse(this.message.content).subscribe(res => {
        //   this.messages.push(
        //     new Message(res.result, 'assets/images/bot.png', res.timestamp)
        //   );
        // });
        this.message = new _models_message__WEBPACK_IMPORTED_MODULE_2__["Message"]('', 'assets/chatbotImages/user.png');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('message'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_message__WEBPACK_IMPORTED_MODULE_2__["Message"])
    ], MessageFormComponent.prototype, "message", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('messages'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], MessageFormComponent.prototype, "messages", void 0);
    MessageFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'message-form',
            template: __webpack_require__(/*! ./message-form.component.html */ "./src/app/chatbot/components/message-form/message-form.component.html"),
            styles: [__webpack_require__(/*! ./message-form.component.scss */ "./src/app/chatbot/components/message-form/message-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_dialogflow_service__WEBPACK_IMPORTED_MODULE_3__["DialogflowService"]])
    ], MessageFormComponent);
    return MessageFormComponent;
}());



/***/ }),

/***/ "./src/app/chatbot/components/message-item/message-item.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/chatbot/components/message-item/message-item.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li class=\"list-group-item\">\n  <img [src]=\"message.avatar\" class=\"avatar\"/>\n  <div class=\"message\">\n    {{message.content}}\n  </div>\n  <div class=\"timeform\">\n    <i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> <span class=\"timestamp\">at {{message.timestamp | date : 'dd/MM/yyyy' }}</span>\n  </div>\n</li>\n"

/***/ }),

/***/ "./src/app/chatbot/components/message-item/message-item.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/chatbot/components/message-item/message-item.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".message {\n  font-size: 1em;\n  font-style: italic;\n  font-weight: 400; }\n\n.timeform {\n  float: left;\n  width: 100%; }\n\n.timeform i {\n    margin-left: 20px; }\n\n.timeform .timestamp {\n    font-size: 0.6em; }\n\n.avatar {\n  width: 50px;\n  margin-right: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdGJvdC9jb21wb25lbnRzL21lc3NhZ2UtaXRlbS9FOlxcY2hhdGJvdCBleHBlcmltZW50YXRpb25cXGlDYXJ0U3lzdGVtQW5ndWxhci9zcmNcXGFwcFxcY2hhdGJvdFxcY29tcG9uZW50c1xcbWVzc2FnZS1pdGVtXFxtZXNzYWdlLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLFdBQVc7RUFDWCxXQUFXLEVBQUE7O0FBRmI7SUFLSSxpQkFBaUIsRUFBQTs7QUFMckI7SUFTSSxnQkFBZ0IsRUFBQTs7QUFJcEI7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jaGF0Ym90L2NvbXBvbmVudHMvbWVzc2FnZS1pdGVtL21lc3NhZ2UtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZXNzYWdlIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnRpbWVmb3JtIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIGkge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB9XG5cbiAgLnRpbWVzdGFtcHtcbiAgICBmb250LXNpemU6IDAuNmVtO1xuICB9XG59XG5cbi5hdmF0YXJ7XG4gIHdpZHRoOiA1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/chatbot/components/message-item/message-item.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/chatbot/components/message-item/message-item.component.ts ***!
  \***************************************************************************/
/*! exports provided: MessageItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageItemComponent", function() { return MessageItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/message */ "./src/app/chatbot/models/message.ts");



var MessageItemComponent = /** @class */ (function () {
    function MessageItemComponent() {
    }
    MessageItemComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('message'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_message__WEBPACK_IMPORTED_MODULE_2__["Message"])
    ], MessageItemComponent.prototype, "message", void 0);
    MessageItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'message-item',
            template: __webpack_require__(/*! ./message-item.component.html */ "./src/app/chatbot/components/message-item/message-item.component.html"),
            styles: [__webpack_require__(/*! ./message-item.component.scss */ "./src/app/chatbot/components/message-item/message-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MessageItemComponent);
    return MessageItemComponent;
}());



/***/ }),

/***/ "./src/app/chatbot/components/message-list/message-list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/chatbot/components/message-list/message-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chatlist\" #chatlist>\n  <ul class=\"list-group\">\n    <message-item *ngFor=\"let msg of messages\" [message]=\"msg\"></message-item>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/chatbot/components/message-list/message-list.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/chatbot/components/message-list/message-list.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chatlist {\n  height: 600px;\n  overflow-y: scroll; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdGJvdC9jb21wb25lbnRzL21lc3NhZ2UtbGlzdC9FOlxcY2hhdGJvdCBleHBlcmltZW50YXRpb25cXGlDYXJ0U3lzdGVtQW5ndWxhci9zcmNcXGFwcFxcY2hhdGJvdFxcY29tcG9uZW50c1xcbWVzc2FnZS1saXN0XFxtZXNzYWdlLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jaGF0Ym90L2NvbXBvbmVudHMvbWVzc2FnZS1saXN0L21lc3NhZ2UtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGF0bGlzdHtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/chatbot/components/message-list/message-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/chatbot/components/message-list/message-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: MessageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageListComponent", function() { return MessageListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_item_message_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message-item/message-item.component */ "./src/app/chatbot/components/message-item/message-item.component.ts");



var MessageListComponent = /** @class */ (function () {
    function MessageListComponent() {
    }
    MessageListComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.chatItems.changes.subscribe(function (elements) {
            // console.log('messsage list changed: ' + this.messages.length);
            _this.scrollToBottom();
        });
    };
    MessageListComponent.prototype.scrollToBottom = function () {
        try {
            this.chatList.nativeElement.scrollTop = this.chatList.nativeElement.scrollHeight;
        }
        catch (err) {
            console.log('Could not find the "chatList" element.');
        }
    };
    MessageListComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('messages'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], MessageListComponent.prototype, "messages", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chatlist', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MessageListComponent.prototype, "chatList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_message_item_message_item_component__WEBPACK_IMPORTED_MODULE_2__["MessageItemComponent"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], MessageListComponent.prototype, "chatItems", void 0);
    MessageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'message-list',
            template: __webpack_require__(/*! ./message-list.component.html */ "./src/app/chatbot/components/message-list/message-list.component.html"),
            styles: [__webpack_require__(/*! ./message-list.component.scss */ "./src/app/chatbot/components/message-list/message-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MessageListComponent);
    return MessageListComponent;
}());



/***/ }),

/***/ "./src/app/chatbot/models/message.ts":
/*!*******************************************!*\
  !*** ./src/app/chatbot/models/message.ts ***!
  \*******************************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
var Message = /** @class */ (function () {
    function Message(content, avatar, timestamp) {
        this.content = content;
        this.timestamp = timestamp;
        this.avatar = avatar;
    }
    return Message;
}());



/***/ }),

/***/ "./src/app/chatbot/services/dialogflow.service.ts":
/*!********************************************************!*\
  !*** ./src/app/chatbot/services/dialogflow.service.ts ***!
  \********************************************************/
/*! exports provided: DialogflowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogflowService", function() { return DialogflowService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");





var DialogflowService = /** @class */ (function () {
    // private token: string = "sdf";
    function DialogflowService(http) {
        this.http = http;
        this.baseURL = "https://api.dialogflow.com/v1/query?v=20150910";
        this.token = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].token;
    }
    DialogflowService.prototype.getResponse = function (query) {
        var data = {
            query: query,
            lang: 'en',
            sessionId: '12345'
        };
        return this.http
            .post("" + this.baseURL, data, { headers: this.getHeaders() })
            .map(function (res) {
            return res.json();
        });
    };
    DialogflowService.prototype.getHeaders = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Authorization', "Bearer " + this.token);
        return headers;
    };
    DialogflowService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], DialogflowService);
    return DialogflowService;
}());



/***/ }),

/***/ "./src/app/chatbot/services/index.ts":
/*!*******************************************!*\
  !*** ./src/app/chatbot/services/index.ts ***!
  \*******************************************/
/*! exports provided: DialogflowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dialogflow_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dialogflow.service */ "./src/app/chatbot/services/dialogflow.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogflowService", function() { return _dialogflow_service__WEBPACK_IMPORTED_MODULE_0__["DialogflowService"]; });




/***/ }),

/***/ "./src/app/map/map.component.html":
/*!****************************************!*\
  !*** ./src/app/map/map.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  map works!\n</p>\n"

/***/ }),

/***/ "./src/app/map/map.component.scss":
/*!****************************************!*\
  !*** ./src/app/map/map.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcC9tYXAuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MapComponent = /** @class */ (function () {
    function MapComponent() {
    }
    MapComponent.prototype.ngOnInit = function () {
    };
    MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.scss */ "./src/app/map/map.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/products.service.ts":
/*!*************************************!*\
  !*** ./src/app/products.service.ts ***!
  \*************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");





var ProductsService = /** @class */ (function () {
    function ProductsService(http) {
        this.http = http;
    }
    ProductsService.prototype.getProducts = function () {
        return this.http.get('http://localhost:3000/products')
            .map(function (response) { return response.json(); });
    };
    ProductsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], ProductsService);
    return ProductsService;
}());



/***/ }),

/***/ "./src/app/recommendation-bar/recommendation-bar.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/recommendation-bar/recommendation-bar.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"recomBar\">\n  <td *ngFor = \"let p of productsData\">\n      <app-recommendation-item [productData] = \"p\"></app-recommendation-item>\n  </td>\n</p>\n"

/***/ }),

/***/ "./src/app/recommendation-bar/recommendation-bar.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/recommendation-bar/recommendation-bar.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".recomBar {\n  margin: 0;\n  padding: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjb21tZW5kYXRpb24tYmFyL0U6XFxjaGF0Ym90IGV4cGVyaW1lbnRhdGlvblxcaUNhcnRTeXN0ZW1Bbmd1bGFyL3NyY1xcYXBwXFxyZWNvbW1lbmRhdGlvbi1iYXJcXHJlY29tbWVuZGF0aW9uLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQVU7RUFDVixVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZWNvbW1lbmRhdGlvbi1iYXIvcmVjb21tZW5kYXRpb24tYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlY29tQmFyIHtcclxuICAgIG1hcmdpbiA6IDA7XHJcbiAgICBwYWRkaW5nIDowO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/recommendation-bar/recommendation-bar.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/recommendation-bar/recommendation-bar.component.ts ***!
  \********************************************************************/
/*! exports provided: RecommendationBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendationBarComponent", function() { return RecommendationBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../products.service */ "./src/app/products.service.ts");



var RecommendationBarComponent = /** @class */ (function () {
    function RecommendationBarComponent(productservice) {
        this.productservice = productservice;
        this.productsData = [
            {
                _id: 1,
                name: "pepsi",
                price: 35,
                discount: 10,
                location: {
                    2: [3, 1],
                    3: [2, 4],
                    4: [3, 5],
                    5: [4, 6],
                    6: [1, 5]
                }
            },
            {
                _id: 2,
                name: "coca cola",
                price: 35,
                discount: 8,
                location: {
                    1: [2, 6],
                    3: [2, 4],
                    4: [3, 5],
                    5: [4, 6],
                    6: [1, 5]
                }
            }
        ];
    }
    RecommendationBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productservice.getProducts().subscribe(function (data) { return _this.productsData = data; });
    };
    RecommendationBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recommendation-bar',
            template: __webpack_require__(/*! ./recommendation-bar.component.html */ "./src/app/recommendation-bar/recommendation-bar.component.html"),
            providers: [_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]],
            styles: [__webpack_require__(/*! ./recommendation-bar.component.scss */ "./src/app/recommendation-bar/recommendation-bar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]])
    ], RecommendationBarComponent);
    return RecommendationBarComponent;
}());



/***/ }),

/***/ "./src/app/recommendation-bar/recommendation-item/recommendation-item.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/recommendation-bar/recommendation-item/recommendation-item.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"width: 18rem;\">\n  <img class=\"card-img-top\" src={{productImage}} alt=\"Card image cap\" style=\" height: 195px;\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">{{productData.name}}</h5>\n    <h6>{{productData.price}}</h6>\n    <p class=\"card-text\">Discount of {{productData.discount}}% going on</p>\n    <a href=\"#\" class=\"btn btn-primary\">Add to the cart</a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/recommendation-bar/recommendation-item/recommendation-item.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/recommendation-bar/recommendation-item/recommendation-item.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY29tbWVuZGF0aW9uLWJhci9yZWNvbW1lbmRhdGlvbi1pdGVtL3JlY29tbWVuZGF0aW9uLWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/recommendation-bar/recommendation-item/recommendation-item.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/recommendation-bar/recommendation-item/recommendation-item.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: RecommendationItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendationItemComponent", function() { return RecommendationItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RecommendationItemComponent = /** @class */ (function () {
    function RecommendationItemComponent() {
    }
    RecommendationItemComponent.prototype.ngOnInit = function () {
        console.log(this.productData);
        this.productImage = "../../../assets/ProductsImages/" + this.productData.name + ".png";
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RecommendationItemComponent.prototype, "productData", void 0);
    RecommendationItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recommendation-item',
            template: __webpack_require__(/*! ./recommendation-item.component.html */ "./src/app/recommendation-bar/recommendation-item/recommendation-item.component.html"),
            styles: [__webpack_require__(/*! ./recommendation-item.component.scss */ "./src/app/recommendation-bar/recommendation-item/recommendation-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RecommendationItemComponent);
    return RecommendationItemComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    token: ''
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\chatbot experimentation\iCartSystemAngular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map