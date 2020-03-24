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
/* harmony import */ var _features_login_component_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/login/component/login.component */ "./src/app/features/login/component/login.component.ts");
/* harmony import */ var _features_signup_component_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features/signup/component/signup.component */ "./src/app/features/signup/component/signup.component.ts");





var routes = [
    { path: '', redirectTo: 'Login', pathMatch: 'full' },
    { path: 'Login', component: _features_login_component_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'SignUp', component: _features_signup_component_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"] }
];
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

module.exports = "<div class=\"container-fluid\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-color: lightskyblue; }\n\n#norton-idsafe-field-logo-imgId {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxQaGlsbGlwIE5ndXllblxcU1NESV9Qcm9qZWN0XFxBbmd1bGFyLVByb2plY3RcXEFuZ3VsYXIvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUE4QixFQUFBOztBQUdsQztFQUNJLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xyXG59XHJcblxyXG4jbm9ydG9uLWlkc2FmZS1maWVsZC1sb2dvLWltZ0lkIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn0iXX0= */"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'FormSubmit';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _features_login_component_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./features/login/component/login.component */ "./src/app/features/login/component/login.component.ts");
/* harmony import */ var _features_login_service_login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./features/login/service/login.service */ "./src/app/features/login/service/login.service.ts");
/* harmony import */ var _features_signup_component_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./features/signup/component/signup.component */ "./src/app/features/signup/component/signup.component.ts");
/* harmony import */ var _features_signup_service_signup_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./features/signup/service/signup.service */ "./src/app/features/signup/service/signup.service.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _features_login_component_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _features_signup_component_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignUpComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            providers: [_features_login_service_login_service__WEBPACK_IMPORTED_MODULE_8__["LoginService"], _features_signup_service_signup_service__WEBPACK_IMPORTED_MODULE_10__["SignUpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/features/login/component/login.component.html":
/*!***************************************************************!*\
  !*** ./src/app/features/login/component/login.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Login Form -->\r\n<div class=\"bg-img\">\r\n    <div class=\"content\" [ngStyle]=\"spinner && {'width':'130px'}\">\r\n\r\n        <div *ngIf=\"spinner \" class=\"spinner spinner-circle \"></div>\r\n\r\n        <ng-container *ngIf=\"!spinner\">\r\n            <header>\r\n                <img src=\"../../../../assets/images/expense logo.PNG \" />\r\n            </header>\r\n            <header style=' color: black; font-size: 25px; font-weight: 600; margin: 0 0 15px 0; font-family: \"Montserrat \", sans-serif; '>\r\n                Login\r\n            </header>\r\n\r\n            <form [formGroup]=\"loginFormbuilder\" (ngSubmit)=\"onSubmit()\">\r\n                <div class=\"field \">\r\n                    <span class=\"fa fa-user \"></span>\r\n                    <input type=\"text \" required placeholder=\"Email \" formControlName=\"email\">\r\n                </div>\r\n                <div class=\"field space \">\r\n                    <span class=\"fa fa-lock \"></span>\r\n                    <input #z type=\"password \" class=\"pass-key \" required placeholder=\"Password \" formControlName=\"password\">\r\n                    <span class=\"show \" (click)=\"z.type==='password ' ? z.type='text ' : z.type='password'\">SHOW</span>\r\n                </div>\r\n                <div class=\"field\">\r\n                    <button type=\"submit\" [disabled]=\"!loginFormbuilder.valid\">LOGIN</button>\r\n                </div>\r\n            </form>\r\n\r\n            <div class=\"signup \">Don't have account? <a (click)=\"routeToSignup() \">Signup Now</a>\r\n            </div>\r\n\r\n        </ng-container>\r\n\r\n    </div>\r\n    <!-- /Login Form -->"

/***/ }),

/***/ "./src/app/features/login/component/login.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/features/login/component/login.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.bg-img {\n  height: 100vh;\n  background-size: cover;\n  background-position: center; }\n\n.bg-img:after {\n  position: absolute;\n  content: \"\";\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: bisque; }\n\n.content {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 999;\n  text-align: center;\n  padding: 60px 32px;\n  width: 400px;\n  transform: translate(-50%, -50%);\n  background: white;\n  box-shadow: -1px 4px 28px 0px rgba(0, 0, 0, 0.75); }\n\n.content header {\n  color: black;\n  font-size: 33px;\n  font-weight: 600;\n  margin: 0 0 35px 0;\n  font-family: \"Montserrat\", sans-serif; }\n\n.field {\n  position: relative;\n  height: 45px;\n  width: 100%;\n  display: flex;\n  background: rgba(255, 255, 255, 0.94); }\n\n.field span {\n  color: #222;\n  width: 40px;\n  line-height: 45px; }\n\n.field input {\n  border: 1px solid gray;\n  padding: 10px;\n  height: 100%;\n  width: 100%;\n  background: transparent;\n  color: #222;\n  font-size: 16px;\n  font-family: \"Poppins\", sans-serif; }\n\n.space {\n  margin-top: 16px;\n  margin-bottom: 30px; }\n\n.show {\n  position: absolute;\n  right: 13px;\n  font-size: 13px;\n  font-weight: 700;\n  color: #222;\n  display: none;\n  cursor: pointer;\n  font-family: \"Montserrat\", sans-serif; }\n\n.pass-key:valid ~ .show {\n  display: block; }\n\n.pass {\n  text-align: left;\n  margin: 10px 0; }\n\n.pass a {\n  color: white;\n  text-decoration: none;\n  font-family: \"Poppins\", sans-serif; }\n\n.pass:hover a {\n  text-decoration: underline; }\n\nbutton[disabled] {\n  cursor: initial !important;\n  background: gray !important; }\n\n.field button[type=\"submit\"] {\n  background: #3498db;\n  border: 1px solid #2691d9;\n  width: 100%;\n  color: white;\n  font-size: 18px;\n  letter-spacing: 1px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: \"Montserrat\", sans-serif; }\n\n.field button[type=\"submit\"]:hover {\n  background: #2691d9; }\n\n.login {\n  color: white;\n  margin: 20px 0;\n  font-family: \"Poppins\", sans-serif; }\n\n.links {\n  display: flex;\n  cursor: pointer;\n  color: white;\n  margin: 0 0 20px 0; }\n\n.links i {\n  font-size: 17px; }\n\ni span {\n  margin-left: 8px;\n  font-weight: 500;\n  letter-spacing: 1px;\n  font-size: 16px;\n  font-family: \"Poppins\", sans-serif; }\n\n.signup {\n  font-size: 15px;\n  color: black;\n  font-family: \"Poppins\", sans-serif; }\n\n.signup a {\n  color: #3498db;\n  text-decoration: none; }\n\n.signup a:hover {\n  text-decoration: underline; }\n\n.spinner {\n  width: 75px;\n  height: 75px;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto; }\n\n.spinner.spinner-circle {\n    border: 4px rgba(0, 85, 242, 0.25) solid;\n    border-top: 4px #0055f2 solid;\n    border-radius: 50%;\n    -webkit-animation: spCircRot 0.6s infinite linear;\n    animation: spCircRot 0.6s infinite linear; }\n\n@-webkit-keyframes spCircRot {\n  from {\n    -webkit-transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(359deg); } }\n\n@keyframes spCircRot {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(359deg); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvbG9naW4vY29tcG9uZW50L0M6XFxVc2Vyc1xcUGhpbGxpcCBOZ3V5ZW5cXFNTRElfUHJvamVjdFxcQW5ndWxhci1Qcm9qZWN0XFxBbmd1bGFyL3NyY1xcYXBwXFxmZWF0dXJlc1xcbG9naW5cXGNvbXBvbmVudFxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0Qix5QkFBaUI7S0FBakIsc0JBQWlCO01BQWpCLHFCQUFpQjtVQUFqQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDJCQUEyQixFQUFBOztBQUcvQjtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osV0FBVztFQUVYLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsaUJBQWlCO0VBQ2pCLGlEQUFpRCxFQUFBOztBQUdyRDtFQUNJLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixxQ0FBcUMsRUFBQTs7QUFHekM7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2IscUNBQXFDLEVBQUE7O0FBR3pDO0VBQ0ksV0FBVztFQUNYLFdBQVc7RUFDWCxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLFlBQVk7RUFDWixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0NBQWtDLEVBQUE7O0FBR3RDO0VBQ0ksZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGVBQWU7RUFDZixxQ0FBcUMsRUFBQTs7QUFHekM7RUFDSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGtDQUFrQyxFQUFBOztBQUd0QztFQUNJLDBCQUEwQixFQUFBOztBQUc5QjtFQUNJLDBCQUEwQjtFQUMxQiwyQkFBMEIsRUFBQTs7QUFHOUI7RUFDSSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHFDQUFxQyxFQUFBOztBQUd6QztFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLFlBQVk7RUFDWixjQUFjO0VBQ2Qsa0NBQWtDLEVBQUE7O0FBR3RDO0VBQ0ksYUFBYTtFQUNiLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUNJLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQ0FBa0MsRUFBQTs7QUFHdEM7RUFDSSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGtDQUFrQyxFQUFBOztBQUd0QztFQUNJLGNBQWM7RUFDZCxxQkFBcUIsRUFBQTs7QUFHekI7RUFDSSwwQkFBMEIsRUFBQTs7QUFHOUI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsWUFBWSxFQUFBOztBQVJoQjtJQVVRLHdDQUFxQztJQUNyQyw2QkFBc0M7SUFDdEMsa0JBQWtCO0lBQ2xCLGlEQUFpRDtJQUNqRCx5Q0FBeUMsRUFBQTs7QUFFN0M7RUFDSTtJQUNJLCtCQUErQixFQUFBO0VBRW5DO0lBQ0ksaUNBQWlDLEVBQUEsRUFBQTs7QUFHekM7RUFDSTtJQUNJLHVCQUF1QixFQUFBO0VBRTNCO0lBQ0kseUJBQXlCLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2xvZ2luL2NvbXBvbmVudC9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLmJnLWltZyB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxuLmJnLWltZzphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy9iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICBiYWNrZ3JvdW5kOiBiaXNxdWU7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNjBweCAzMnB4O1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IC0xcHggNHB4IDI4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbn1cclxuXHJcbi5jb250ZW50IGhlYWRlciB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDMzcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luOiAwIDAgMzVweCAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZmllbGQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk0KTtcclxufVxyXG5cclxuLmZpZWxkIHNwYW4ge1xyXG4gICAgY29sb3I6ICMyMjI7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG59XHJcblxyXG4uZmllbGQgaW5wdXQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6ICMyMjI7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5zcGFjZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLnNob3cge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDEzcHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICMyMjI7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4ucGFzcy1rZXk6dmFsaWR+LnNob3cge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5wYXNzIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxufVxyXG5cclxuLnBhc3MgYSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5wYXNzOmhvdmVyIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbmJ1dHRvbltkaXNhYmxlZF0ge1xyXG4gICAgY3Vyc29yOiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiBncmF5IWltcG9ydGFudDtcclxufVxyXG5cclxuLmZpZWxkIGJ1dHRvblt0eXBlPVwic3VibWl0XCJdIHtcclxuICAgIGJhY2tncm91bmQ6ICMzNDk4ZGI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMjY5MWQ5O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmZpZWxkIGJ1dHRvblt0eXBlPVwic3VibWl0XCJdOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMyNjkxZDk7XHJcbn1cclxuXHJcbi5sb2dpbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmxpbmtzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDAgMCAyMHB4IDA7XHJcbn1cclxuXHJcbi5saW5rcyBpIHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuaSBzcGFuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnNpZ251cCB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5zaWdudXAgYSB7XHJcbiAgICBjb2xvcjogIzM0OThkYjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLnNpZ251cCBhOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4uc3Bpbm5lciB7XHJcbiAgICB3aWR0aDogNzVweDtcclxuICAgIGhlaWdodDogNzVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgICYuc3Bpbm5lci1jaXJjbGUge1xyXG4gICAgICAgIGJvcmRlcjogNHB4IHJnYmEoIzAwNTVmMiwgMC4yNSkgc29saWQ7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogNHB4IHJnYmEoIzAwNTVmMiwgMSkgc29saWQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzcENpcmNSb3QgMC42cyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBzcENpcmNSb3QgMC42cyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgICB9XHJcbiAgICBALXdlYmtpdC1rZXlmcmFtZXMgc3BDaXJjUm90IHtcclxuICAgICAgICBmcm9tIHtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdG8ge1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBzcENpcmNSb3Qge1xyXG4gICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdG8ge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/features/login/component/login.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/features/login/component/login.component.ts ***!
  \*************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/login.service */ "./src/app/features/login/service/login.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, formBuilder, router) {
        this.loginService = loginService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.spinner = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginFormbuilder = this.formBuilder.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
        this.spinner = false;
        console.log(this.loginFormbuilder.valid);
    };
    LoginComponent.prototype.routeToSignup = function () {
        this.router.navigate(['/SignUp']);
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.spinner = true;
        var userDTO = {
            email: this.loginFormbuilder.value.email,
            password: this.loginFormbuilder.value.password
        };
        this.loginService.login(userDTO).subscribe(function (response) {
            _this.spinner = false;
            console.log(response);
            if (response.indicator) {
                alert('Login Successful');
            }
            else {
                if (response.message == 3) {
                    alert('The email you enter is not registered with us.');
                }
                else if (response.message == 2) {
                    alert('The password is incorrect.');
                }
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/features/login/component/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/features/login/component/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/features/login/service/login.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/features/login/service/login.service.ts ***!
  \*********************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:9595/ExpenseTracker';
    }
    LoginService.prototype.login = function (userDTO) {
        // return of({indicator: false, message: 3});
        return this.http.request('POST', this.baseUrl + "/signin", { body: userDTO });
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/features/signup/component/signup.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/features/signup/component/signup.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Signup Form -->\r\n<div class=\"bg-img\">\r\n    <div class=\"content\" [ngStyle]=\"spinner && {'width':'130px'}\">\r\n\r\n        <div *ngIf=\"spinner\" class=\"spinner spinner-circle \"></div>\r\n\r\n        <ng-container *ngIf=\"!spinner \">\r\n            <header>\r\n                <img src=\"../../../../assets/images/expense logo.PNG\" />\r\n            </header>\r\n            <header style='    color: black;\r\n            font-size: 25px;\r\n            font-weight: 600;\r\n            margin: 0 0 15px 0;\r\n            font-family: \"Montserrat\", sans-serif;'>\r\n                Sign Up\r\n            </header>\r\n            <form [formGroup]=\"SignUpFormbuilder\" (ngSubmit)=\"onSubmit()\">\r\n                <div class=\"field\">\r\n                    <input class=\"form-control\" type=\"text\" required placeholder=\"Email\" formControlName=\"email\">\r\n                </div>\r\n                <div class=\"field space\">\r\n                    <input class=\"form-control\" type=\"text\" class=\"pass-key\" required placeholder=\"Username\" formControlName=\"username\">\r\n                </div>\r\n                <div class=\"field space\">\r\n                    <input class=\"form-control\" #x type=\"password\" class=\"pass-key\" required placeholder=\"Password\" formControlName=\"password\">\r\n                    <span class=\"show\" (click)=\"x.type === 'password' ? x.type = 'text' : x.type = 'password'\">SHOW</span>\r\n                </div>\r\n                <div class=\"field space\">\r\n                    <input class=\"form-control\" #y type=\"password\" class=\"pass-key\" required placeholder=\"Password Confirm\" formControlName=\"passwordConfirm\">\r\n                    <span class=\"show\" (click)=\"y.type === 'password' ? y.type = 'text' : y.type = 'password'\">SHOW</span>\r\n                </div>\r\n                <div class=\"field\">\r\n                    <button type=\"submit\" [disabled]=\"!SignUpFormbuilder.valid\">Sign up</button>\r\n                </div>\r\n            </form>\r\n\r\n            <div class=\"signup\">Already have an account?\r\n                <a (click)=\"routeToSignIn()\">Sign in</a>\r\n            </div>\r\n        </ng-container>\r\n\r\n\r\n    </div>\r\n</div>\r\n<!-- /Signup Form -->"

/***/ }),

/***/ "./src/app/features/signup/component/signup.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/features/signup/component/signup.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.bg-img {\n  height: 100vh;\n  background-size: cover;\n  background-position: center; }\n\n.bg-img:after {\n  position: absolute;\n  content: \"\";\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: bisque; }\n\n.content {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 999;\n  text-align: center;\n  padding: 60px 32px;\n  width: 400px;\n  transform: translate(-50%, -50%);\n  background: white;\n  box-shadow: -1px 4px 28px 0px rgba(0, 0, 0, 0.75); }\n\n.content header {\n  color: black;\n  font-size: 33px;\n  font-weight: 600;\n  margin: 0 0 35px 0;\n  font-family: \"Montserrat\", sans-serif; }\n\n.field {\n  position: relative;\n  height: 45px;\n  width: 100%;\n  display: flex;\n  background: rgba(255, 255, 255, 0.94); }\n\n.field span {\n  color: #222;\n  width: 40px;\n  line-height: 45px; }\n\n.field input {\n  border: 1px solid gray;\n  padding: 10px;\n  height: 100%;\n  width: 100%;\n  background: transparent;\n  color: #222;\n  font-size: 16px;\n  font-family: \"Poppins\", sans-serif; }\n\n.space {\n  margin-top: 16px;\n  margin-bottom: 30px; }\n\n.show {\n  position: absolute;\n  right: 13px;\n  font-size: 13px;\n  font-weight: 700;\n  color: #222;\n  display: none;\n  cursor: pointer;\n  font-family: \"Montserrat\", sans-serif; }\n\n.pass-key:valid ~ .show {\n  display: block; }\n\n.pass {\n  text-align: left;\n  margin: 10px 0; }\n\n.pass a {\n  color: white;\n  text-decoration: none;\n  font-family: \"Poppins\", sans-serif; }\n\n.pass:hover a {\n  text-decoration: underline; }\n\nbutton[disabled] {\n  cursor: initial !important;\n  background: gray !important; }\n\n.field button[type=\"submit\"] {\n  background: #3498db;\n  border: 1px solid #2691d9;\n  width: 100%;\n  color: white;\n  font-size: 18px;\n  letter-spacing: 1px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: \"Montserrat\", sans-serif; }\n\n.field button[type=\"submit\"]:hover {\n  background: #2691d9; }\n\n.login {\n  color: white;\n  margin: 20px 0;\n  font-family: \"Poppins\", sans-serif; }\n\n.links {\n  display: flex;\n  cursor: pointer;\n  color: white;\n  margin: 0 0 20px 0; }\n\n.links i {\n  font-size: 17px; }\n\ni span {\n  margin-left: 8px;\n  font-weight: 500;\n  letter-spacing: 1px;\n  font-size: 16px;\n  font-family: \"Poppins\", sans-serif; }\n\n.signup {\n  font-size: 15px;\n  color: black;\n  font-family: \"Poppins\", sans-serif; }\n\n.signup a {\n  color: #3498db;\n  text-decoration: none; }\n\n.signup a:hover {\n  text-decoration: underline; }\n\n.spinner {\n  width: 75px;\n  height: 75px;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto; }\n\n.spinner.spinner-circle {\n    border: 4px rgba(0, 85, 242, 0.25) solid;\n    border-top: 4px #0055f2 solid;\n    border-radius: 50%;\n    -webkit-animation: spCircRot 0.6s infinite linear;\n    animation: spCircRot 0.6s infinite linear; }\n\n@-webkit-keyframes spCircRot {\n  from {\n    -webkit-transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(359deg); } }\n\n@keyframes spCircRot {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(359deg); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvc2lnbnVwL2NvbXBvbmVudC9DOlxcVXNlcnNcXFBoaWxsaXAgTmd1eWVuXFxTU0RJX1Byb2plY3RcXEFuZ3VsYXItUHJvamVjdFxcQW5ndWxhci9zcmNcXGFwcFxcZmVhdHVyZXNcXHNpZ251cFxcY29tcG9uZW50XFxzaWdudXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0Qix5QkFBaUI7S0FBakIsc0JBQWlCO01BQWpCLHFCQUFpQjtVQUFqQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDJCQUEyQixFQUFBOztBQUcvQjtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osV0FBVztFQUVYLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsaUJBQWlCO0VBQ2pCLGlEQUFpRCxFQUFBOztBQUdyRDtFQUNJLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixxQ0FBcUMsRUFBQTs7QUFHekM7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2IscUNBQXFDLEVBQUE7O0FBR3pDO0VBQ0ksV0FBVztFQUNYLFdBQVc7RUFDWCxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLFlBQVk7RUFDWixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0NBQWtDLEVBQUE7O0FBR3RDO0VBQ0ksZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGVBQWU7RUFDZixxQ0FBcUMsRUFBQTs7QUFHekM7RUFDSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGtDQUFrQyxFQUFBOztBQUd0QztFQUNJLDBCQUEwQixFQUFBOztBQUc5QjtFQUNJLDBCQUEwQjtFQUMxQiwyQkFBMEIsRUFBQTs7QUFHOUI7RUFDSSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHFDQUFxQyxFQUFBOztBQUd6QztFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLFlBQVk7RUFDWixjQUFjO0VBQ2Qsa0NBQWtDLEVBQUE7O0FBR3RDO0VBQ0ksYUFBYTtFQUNiLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUNJLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQ0FBa0MsRUFBQTs7QUFHdEM7RUFDSSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGtDQUFrQyxFQUFBOztBQUd0QztFQUNJLGNBQWM7RUFDZCxxQkFBcUIsRUFBQTs7QUFHekI7RUFDSSwwQkFBMEIsRUFBQTs7QUFHOUI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsWUFBWSxFQUFBOztBQVJoQjtJQVVRLHdDQUFxQztJQUNyQyw2QkFBc0M7SUFDdEMsa0JBQWtCO0lBQ2xCLGlEQUFpRDtJQUNqRCx5Q0FBeUMsRUFBQTs7QUFFN0M7RUFDSTtJQUNJLCtCQUErQixFQUFBO0VBRW5DO0lBQ0ksaUNBQWlDLEVBQUEsRUFBQTs7QUFHekM7RUFDSTtJQUNJLHVCQUF1QixFQUFBO0VBRTNCO0lBQ0kseUJBQXlCLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3NpZ251cC9jb21wb25lbnQvc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4uYmctaW1nIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcblxyXG4uYmctaW1nOmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvL2JhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICAgIGJhY2tncm91bmQ6IGJpc3F1ZTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA2MHB4IDMycHg7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogLTFweCA0cHggMjhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxufVxyXG5cclxuLmNvbnRlbnQgaGVhZGVyIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMzNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW46IDAgMCAzNXB4IDA7XHJcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5maWVsZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTQpO1xyXG59XHJcblxyXG4uZmllbGQgc3BhbiB7XHJcbiAgICBjb2xvcjogIzIyMjtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbn1cclxuXHJcbi5maWVsZCBpbnB1dCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogIzIyMjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnNwYWNlIHtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uc2hvdyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTNweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzIyMjtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5wYXNzLWtleTp2YWxpZH4uc2hvdyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnBhc3Mge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG59XHJcblxyXG4ucGFzcyBhIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnBhc3M6aG92ZXIgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuYnV0dG9uW2Rpc2FibGVkXSB7XHJcbiAgICBjdXJzb3I6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IGdyYXkhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmllbGQgYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gICAgYmFja2dyb3VuZDogIzM0OThkYjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyNjkxZDk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZmllbGQgYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzI2OTFkOTtcclxufVxyXG5cclxuLmxvZ2luIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4ubGlua3Mge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogMCAwIDIwcHggMDtcclxufVxyXG5cclxuLmxpbmtzIGkge1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG5pIHNwYW4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uc2lnbnVwIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnNpZ251cCBhIHtcclxuICAgIGNvbG9yOiAjMzQ5OGRiO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uc2lnbnVwIGE6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5zcGlubmVyIHtcclxuICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgJi5zcGlubmVyLWNpcmNsZSB7XHJcbiAgICAgICAgYm9yZGVyOiA0cHggcmdiYSgjMDA1NWYyLCAwLjI1KSBzb2xpZDtcclxuICAgICAgICBib3JkZXItdG9wOiA0cHggcmdiYSgjMDA1NWYyLCAxKSBzb2xpZDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNwQ2lyY1JvdCAwLjZzIGluZmluaXRlIGxpbmVhcjtcclxuICAgICAgICBhbmltYXRpb246IHNwQ2lyY1JvdCAwLjZzIGluZmluaXRlIGxpbmVhcjtcclxuICAgIH1cclxuICAgIEAtd2Via2l0LWtleWZyYW1lcyBzcENpcmNSb3Qge1xyXG4gICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0byB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBAa2V5ZnJhbWVzIHNwQ2lyY1JvdCB7XHJcbiAgICAgICAgZnJvbSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0byB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/features/signup/component/signup.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/features/signup/component/signup.component.ts ***!
  \***************************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_signup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/signup.service */ "./src/app/features/signup/service/signup.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(SignUpService, formBuilder, router) {
        this.SignUpService = SignUpService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.spinner = true;
    }
    SignUpComponent.prototype.ngOnInit = function () {
        this.SignUpFormbuilder = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            passwordConfirm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
        this.spinner = false;
    };
    SignUpComponent.prototype.routeToSignIn = function () {
        this.router.navigate(['/Login']);
    };
    SignUpComponent.prototype.onSubmit = function () {
        var _this = this;
        this.spinner = true;
        var userDTO = {
            email: this.SignUpFormbuilder.value.email,
            username: this.SignUpFormbuilder.value.username,
            password: this.SignUpFormbuilder.value.password,
            passwordConfirm: this.SignUpFormbuilder.value.passwordConfirm
        };
        console.log(userDTO);
        this.SignUpService.login(userDTO).subscribe(function (response) {
            console.log(response);
            _this.spinner = false;
            if (response.indicator) {
                alert('SignUp Successful');
                _this.router.navigate(['/Login']);
            }
            else {
                if (response.message == 1) {
                    alert('The email you enter is already registered with us.');
                }
            }
        });
    };
    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/features/signup/component/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/features/signup/component/signup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_signup_service__WEBPACK_IMPORTED_MODULE_2__["SignUpService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/features/signup/service/signup.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/features/signup/service/signup.service.ts ***!
  \***********************************************************/
/*! exports provided: SignUpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpService", function() { return SignUpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var SignUpService = /** @class */ (function () {
    function SignUpService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:9595/ExpenseTracker';
    }
    SignUpService.prototype.login = function (userDTO) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ indicator: false, message: 1 });
        //return this.http.request('POST',`${this.baseUrl}/signup`, { body: userDTO });
    };
    SignUpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SignUpService);
    return SignUpService;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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

module.exports = __webpack_require__(/*! C:\Users\Phillip Nguyen\SSDI_Project\Angular-Project\Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map