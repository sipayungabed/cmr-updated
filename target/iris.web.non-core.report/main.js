(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _error_forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error/forbidden/forbidden.component */ "./src/app/error/forbidden/forbidden.component.ts");
/* harmony import */ var _shared_service_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/service/auth-guard/auth-guard.service */ "./src/app/shared/service/auth-guard/auth-guard.service.ts");
/* harmony import */ var _controller_report_report_home_report_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controller/report/report-home/report-home.component */ "./src/app/controller/report/report-home/report-home.component.ts");
/* harmony import */ var _controller_report_report_sla_report_sla_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controller/report/report-sla/report-sla.component */ "./src/app/controller/report/report-sla/report-sla.component.ts");
/* harmony import */ var _controller_report_report_perekrutan_merchant_report_perekrutan_merchant_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controller/report/report-perekrutan-merchant/report-perekrutan-merchant.component */ "./src/app/controller/report/report-perekrutan-merchant/report-perekrutan-merchant.component.ts");
/* harmony import */ var _controller_cmr_inquiry_client_inquiry_client_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./controller/cmr/inquiry-client/inquiry-client.component */ "./src/app/controller/cmr/inquiry-client/inquiry-client.component.ts");
/* harmony import */ var _controller_cmr_resend_report_resend_report_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controller/cmr/resend-report/resend-report.component */ "./src/app/controller/cmr/resend-report/resend-report.component.ts");











const routes = [
    {
        path: '',
        canActivate: [_shared_service_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]],
        data: {
            breadcrumb: 'Laporan',
            title: 'Laporan'
        },
        children: [
            {
                path: '',
                component: _controller_report_report_home_report_home_component__WEBPACK_IMPORTED_MODULE_4__["ReportHomeComponent"],
            },
            {
                path: 'report-sla',
                data: {
                    breadcrumb: 'Laporan SLA'
                },
                children: [
                    {
                        path: '',
                        component: _controller_report_report_sla_report_sla_component__WEBPACK_IMPORTED_MODULE_5__["ReportSlaComponent"],
                    },
                ],
            },
            {
                path: 'report-perekrutan-merchant',
                data: {
                    breadcrumb: 'Laporan Perekrutan Merchant'
                },
                children: [
                    {
                        path: '',
                        component: _controller_report_report_perekrutan_merchant_report_perekrutan_merchant_component__WEBPACK_IMPORTED_MODULE_6__["ReportPerekrutanMerchantComponent"],
                    },
                ],
            },
        ]
    },
    {
        path: 'cmr',
        canActivate: [_shared_service_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]],
        data: {
            title: 'Menu CMR',
            breadcrumb: 'Menu CMR'
        },
        children: [
            {
                path: 'resend-report',
                data: {
                    breadcrumb: 'Refresh Resend Report'
                },
                children: [
                    {
                        path: '',
                        component: _controller_cmr_resend_report_resend_report_component__WEBPACK_IMPORTED_MODULE_8__["ResendReportComponent"],
                    },
                ],
            },
            {
                path: 'inquiry-client',
                data: {
                    breadcrumb: 'Inquiry Client'
                },
                children: [
                    {
                        path: '',
                        component: _controller_cmr_inquiry_client_inquiry_client_component__WEBPACK_IMPORTED_MODULE_7__["InquiryClientComponent"],
                    },
                ],
            },
        ]
    },
    {
        path: 'forbidden',
        data: {
            title: 'Error Code 403: Forbidden',
            breadcrumb: 'Forbidden'
        },
        component: _error_forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_2__["ForbiddenComponent"],
    },
    { path: '', redirectTo: 'data-master', pathMatch: 'full' },
    { path: '**', redirectTo: 'data-master', pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _data_api_host_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data-api/host.api */ "./src/app/data-api/host.api.ts");
/* harmony import */ var _shared_service_access_token_access_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/service/access-token/access-token.service */ "./src/app/shared/service/access-token/access-token.service.ts");
/* harmony import */ var _shared_service_api_shared_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/service/api-shared/shared.service */ "./src/app/shared/service/api-shared/shared.service.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/breadcrumbs/breadcrumbs.component */ "./src/app/shared/breadcrumbs/breadcrumbs.component.ts");











class AppComponent {
    constructor(route, router, AccessTokenService, SharedService) {
        this.route = route;
        this.router = router;
        this.AccessTokenService = AccessTokenService;
        this.SharedService = SharedService;
        this.counter = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(300000); // 300000 ms = 5 menit
        this.parentUrl = _data_api_host_api__WEBPACK_IMPORTED_MODULE_4__["SHELLAPP_HOST"];
        this.finishLoading = {
            messageType: "finishLoading"
        };
        this.pingMessage = {
            messageType: "pingMessage"
        };
    }
    ngOnInit() {
        this.setTitle();
        if (window.location != window.parent.location && window.location.ancestorOrigins[0] == this.parentUrl) {
            window.parent.postMessage(JSON.stringify(this.finishLoading), this.parentUrl);
            console.log("iFrame");
            this.setCounter();
        }
        else {
            // this.router.navigate(["forbidden"]);
            console.log("not iFrame");
        }
        console.log("app-component.ts selesai");
    }
    setCounter() {
        this.counter.subscribe((count) => {
            if (this.isActive) {
                window.parent.postMessage(JSON.stringify(this.pingMessage), this.parentUrl);
                this.isActive = false;
            }
        });
    }
    setTitle() {
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => this.route), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(route => {
            while (route.firstChild) {
                if (route.firstChild.snapshot.data.title) {
                    route = route.firstChild;
                    return route;
                }
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(route => route.outlet === 'primary'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(route => route.data)).subscribe(data => {
            this.title = data.title;
        });
    }
    clearToken() {
        this.AccessTokenService.accessToken$.next(null);
        localStorage.removeItem('accessToken');
        console.log('clear Token', localStorage.getItem('accessToken'));
    }
    getDataFromDummyServer() {
        this.SharedService.getData(_data_api_host_api__WEBPACK_IMPORTED_MODULE_4__["SHELLAPP_HOST"] + '/magenta-dummy-resource/sample').subscribe((response) => {
            console.log(response);
        });
    }
    //Parent Message Listener
    onPostMessage(event) {
        if (event.origin === this.parentUrl) {
            var data = JSON.parse(event.data);
            console.log("message", data);
            switch (data.messageType) {
                case "saveToken":
                    console.log("save TOKEN");
                    this.expiry = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(Math.abs(data.expiry) * 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
                    this.expiry.subscribe(counter => {
                        console.log("EXPIRED", new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds());
                        this.AccessTokenService.accessToken$.next(null);
                        localStorage.removeItem('userInfo');
                        localStorage.removeItem('accessToken');
                    });
                    console.log("Insert Data", new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds());
                    this.AccessTokenService.accessToken$.next(data.accessToken.toString());
                    localStorage.setItem('accessToken', data.accessToken.toString());
                    localStorage.setItem('userInfo', JSON.stringify(data.userInfo));
                    break;
                case "deleteToken":
                    console.log("deleteToken", new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds());
                    this.AccessTokenService.accessToken$.next(null);
                    localStorage.removeItem('accessToken');
                    break;
            }
        }
    }
    //Keyboard Listener
    handleKeyboardEvent(event) {
        this.isActive = true;
    }
    //Mouse Listener
    handleMouseEvent(event) {
        this.isActive = true;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_access_token_access_token_service__WEBPACK_IMPORTED_MODULE_5__["AccessTokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_api_shared_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("message", function AppComponent_message_HostBindingHandler($event) { return ctx.onPostMessage($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("keypress", function AppComponent_keypress_HostBindingHandler($event) { return ctx.handleKeyboardEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("mousedown", function AppComponent_mousedown_HostBindingHandler($event) { return ctx.handleMouseEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, decls: 10, vars: 1, consts: [[1, "example-container"], [1, "container-fluid"], [1, "row", "border-bottom", "page-heading"], [1, "col-lg-10"], [2, "color", "#6c676a", "font-weight", "200", "font-size", "27px"], [1, "page-content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-breadcrumbs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContent"], _shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_8__["BreadcrumbsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".example-container[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n  }\r\n  \r\n  .example-events[_ngcontent-%COMP%] {\r\n    width: 300px;\r\n    height: 200px;\r\n    overflow: auto;\r\n    border: 1px solid #555;\r\n  }\r\n  \r\n  .page-heading[_ngcontent-%COMP%] {\r\n    background-color: #fff;\r\n    padding: 20px 10px;\r\n    }\r\n  \r\n  .page-content[_ngcontent-%COMP%] {\r\n    padding-top: 20px;\r\n    padding-bottom: 40px;\r\n}\r\n  \r\n  .page-footer[_ngcontent-%COMP%] {\r\n  padding: 10px 20px;\r\n  padding-top: 10px;\r\n  padding-right: 20px;\r\n  padding-bottom: 10px;\r\n  padding-left: 20px;\r\n  font-size: 13px;\r\n  color: #6c676a;\r\n  border-top: 1px solid #e7e7e7;\r\n  border-top-width: 1px;\r\n  border-top-style: solid;\r\n  border-top-color: rgb(231, 231, 231);\r\n  background-color: #fff;\r\n}\r\n  \r\n  .page-footer.bottom[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin-top: auto;\r\n  bottom: 0;\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7RUFDVjs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztJQUNkLHNCQUFzQjtFQUN4Qjs7RUFDQTtJQUNFLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEI7O0VBRUo7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOztFQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztFQUNkLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLG9DQUFvQztFQUNwQyxzQkFBc0I7QUFDeEI7O0VBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIC5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWV2ZW50cyB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTU1O1xyXG4gIH1cclxuICAucGFnZS1oZWFkaW5nIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbiAgICB9XHJcblxyXG4ucGFnZS1jb250ZW50IHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbi5wYWdlLWZvb3RlciB7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBjb2xvcjogIzZjNjc2YTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U3ZTdlNztcclxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XHJcbiAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogcmdiKDIzMSwgMjMxLCAyMzEpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuLnBhZ2UtZm9vdGVyLmJvdHRvbSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _shared_service_access_token_access_token_service__WEBPACK_IMPORTED_MODULE_5__["AccessTokenService"] }, { type: _shared_service_api_shared_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] }]; }, { onPostMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:message', ['$event']]
        }], handleKeyboardEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:keypress', ['$event']]
        }], handleMouseEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:mousedown', ['$event']]
        }] }); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material-module */ "./src/app/material-module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/breadcrumbs/breadcrumbs.component */ "./src/app/shared/breadcrumbs/breadcrumbs.component.ts");
/* harmony import */ var _shared_table_component_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/table/component/top-bar/top-bar.component */ "./src/app/shared/table/component/top-bar/top-bar.component.ts");
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/sidebar/sidebar.component */ "./src/app/shared/sidebar/sidebar.component.ts");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _shared_form_component_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/form/component/input-text/input-text.component */ "./src/app/shared/form/component/input-text/input-text.component.ts");
/* harmony import */ var _shared_form_component_input_radio_input_radio_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/form/component/input-radio/input-radio.component */ "./src/app/shared/form/component/input-radio/input-radio.component.ts");
/* harmony import */ var _shared_form_component_input_select_input_select_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/form/component/input-select/input-select.component */ "./src/app/shared/form/component/input-select/input-select.component.ts");
/* harmony import */ var _shared_form_component_input_modal_input_modal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/form/component/input-modal/input-modal.component */ "./src/app/shared/form/component/input-modal/input-modal.component.ts");
/* harmony import */ var _shared_form_template_form_template_form_template_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/form/template/form-template/form-template.component */ "./src/app/shared/form/template/form-template/form-template.component.ts");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _shared_form_component_input_modal_table_modal_table_modal_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/form/component/input-modal/table-modal/table-modal.component */ "./src/app/shared/form/component/input-modal/table-modal/table-modal.component.ts");
/* harmony import */ var _shared_form_component_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/form/component/input-number/input-number.component */ "./src/app/shared/form/component/input-number/input-number.component.ts");
/* harmony import */ var _shared_form_component_non_input_non_input_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared/form/component/non-input/non-input.component */ "./src/app/shared/form/component/non-input/non-input.component.ts");
/* harmony import */ var _shared_form_component_input_text_area_input_text_area_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shared/form/component/input-text-area/input-text-area.component */ "./src/app/shared/form/component/input-text-area/input-text-area.component.ts");
/* harmony import */ var _shared_form_component_input_address_input_address_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./shared/form/component/input-address/input-address.component */ "./src/app/shared/form/component/input-address/input-address.component.ts");
/* harmony import */ var _shared_details_template_details_simple_template_details_simple_template_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./shared/details/template/details-simple-template/details-simple-template.component */ "./src/app/shared/details/template/details-simple-template/details-simple-template.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_details_template_details_dual_col_template_details_dual_col_template_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./shared/details/template/details-dual-col-template/details-dual-col-template.component */ "./src/app/shared/details/template/details-dual-col-template/details-dual-col-template.component.ts");
/* harmony import */ var _shared_details_component_general_detail_default_detail_default_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./shared/details/component/general/detail-default/detail-default.component */ "./src/app/shared/details/component/general/detail-default/detail-default.component.ts");
/* harmony import */ var _shared_details_component_general_detail_address_detail_address_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./shared/details/component/general/detail-address/detail-address.component */ "./src/app/shared/details/component/general/detail-address/detail-address.component.ts");
/* harmony import */ var _shared_details_component_general_detail_multi_value_detail_multi_value_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./shared/details/component/general/detail-multi-value/detail-multi-value.component */ "./src/app/shared/details/component/general/detail-multi-value/detail-multi-value.component.ts");
/* harmony import */ var _shared_details_component_general_detail_multi_json_label_detail_multi_json_label_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./shared/details/component/general/detail-multi-json-label/detail-multi-json-label.component */ "./src/app/shared/details/component/general/detail-multi-json-label/detail-multi-json-label.component.ts");
/* harmony import */ var _shared_details_component_detail_controller_detail_controller_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./shared/details/component/detail-controller/detail-controller.component */ "./src/app/shared/details/component/detail-controller/detail-controller.component.ts");
/* harmony import */ var _shared_details_component_custom_detail_dokumen_detail_dokumen_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./shared/details/component/custom/detail-dokumen/detail-dokumen.component */ "./src/app/shared/details/component/custom/detail-dokumen/detail-dokumen.component.ts");
/* harmony import */ var _shared_details_component_custom_detail_fasilitas_detail_fasilitas_debit_detail_fasilitas_debit_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./shared/details/component/custom/detail-fasilitas/detail-fasilitas-debit/detail-fasilitas-debit.component */ "./src/app/shared/details/component/custom/detail-fasilitas/detail-fasilitas-debit/detail-fasilitas-debit.component.ts");
/* harmony import */ var _shared_details_component_custom_detail_fasilitas_detail_fasilitas_kredit_detail_fasilitas_kredit_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./shared/details/component/custom/detail-fasilitas/detail-fasilitas-kredit/detail-fasilitas-kredit.component */ "./src/app/shared/details/component/custom/detail-fasilitas/detail-fasilitas-kredit/detail-fasilitas-kredit.component.ts");
/* harmony import */ var _shared_details_component_custom_detail_fasilitas_detail_fasilitas_flazz_detail_fasilitas_flazz_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./shared/details/component/custom/detail-fasilitas/detail-fasilitas-flazz/detail-fasilitas-flazz.component */ "./src/app/shared/details/component/custom/detail-fasilitas/detail-fasilitas-flazz/detail-fasilitas-flazz.component.ts");
/* harmony import */ var _shared_details_component_custom_detail_fasilitas_detail_fasilitas_lainnya_detail_fasilitas_lainnya_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./shared/details/component/custom/detail-fasilitas/detail-fasilitas-lainnya/detail-fasilitas-lainnya.component */ "./src/app/shared/details/component/custom/detail-fasilitas/detail-fasilitas-lainnya/detail-fasilitas-lainnya.component.ts");
/* harmony import */ var _shared_details_component_custom_detail_fasilitas_detail_fasilitas_fitur_detail_fasilitas_fitur_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./shared/details/component/custom/detail-fasilitas/detail-fasilitas-fitur/detail-fasilitas-fitur.component */ "./src/app/shared/details/component/custom/detail-fasilitas/detail-fasilitas-fitur/detail-fasilitas-fitur.component.ts");
/* harmony import */ var _shared_details_component_custom_detail_fasilitas_detail_fasilitas_fitur_controller_detail_fasilitas_fitur_controller_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./shared/details/component/custom/detail-fasilitas/detail-fasilitas-fitur-controller/detail-fasilitas-fitur-controller.component */ "./src/app/shared/details/component/custom/detail-fasilitas/detail-fasilitas-fitur-controller/detail-fasilitas-fitur-controller.component.ts");
/* harmony import */ var _shared_details_component_custom_detail_fasilitas_detail_table_mdr_detail_table_mdr_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./shared/details/component/custom/detail-fasilitas/detail-table-mdr/detail-table-mdr.component */ "./src/app/shared/details/component/custom/detail-fasilitas/detail-table-mdr/detail-table-mdr.component.ts");
/* harmony import */ var _shared_details_component_custom_detail_fasilitas_detail_fasilitas_detail_fasilitas_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./shared/details/component/custom/detail-fasilitas/detail-fasilitas/detail-fasilitas.component */ "./src/app/shared/details/component/custom/detail-fasilitas/detail-fasilitas/detail-fasilitas.component.ts");
/* harmony import */ var _shared_details_component_general_detail_address_two_detail_address_two_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./shared/details/component/general/detail-address-two/detail-address-two.component */ "./src/app/shared/details/component/general/detail-address-two/detail-address-two.component.ts");
/* harmony import */ var _shared_details_template_details_fasilitas_cicilan_nol_template_details_fasilitas_cicilan_nol_template_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./shared/details/template/details-fasilitas-cicilan-nol-template/details-fasilitas-cicilan-nol-template.component */ "./src/app/shared/details/template/details-fasilitas-cicilan-nol-template/details-fasilitas-cicilan-nol-template.component.ts");
/* harmony import */ var _shared_details_template_details_fasilitas_e_commerce_template_details_fasilitas_e_commerce_template_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./shared/details/template/details-fasilitas-e-commerce-template/details-fasilitas-e-commerce-template.component */ "./src/app/shared/details/template/details-fasilitas-e-commerce-template/details-fasilitas-e-commerce-template.component.ts");
/* harmony import */ var _shared_details_template_details_data_terminal_template_details_data_terminal_template_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./shared/details/template/details-data-terminal-template/details-data-terminal-template.component */ "./src/app/shared/details/template/details-data-terminal-template/details-data-terminal-template.component.ts");
/* harmony import */ var _shared_details_template_details_dokumen_template_details_dokumen_template_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./shared/details/template/details-dokumen-template/details-dokumen-template.component */ "./src/app/shared/details/template/details-dokumen-template/details-dokumen-template.component.ts");
/* harmony import */ var _shared_details_template_details_fasilitas_default_template_details_fasilitas_default_template_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./shared/details/template/details-fasilitas-default-template/details-fasilitas-default-template.component */ "./src/app/shared/details/template/details-fasilitas-default-template/details-fasilitas-default-template.component.ts");
/* harmony import */ var _angular_common_locales_id__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/common/locales/id */ "./node_modules/@angular/common/locales/id.js");
/* harmony import */ var _angular_common_locales_id__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_id__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var _shared_table_template_table_api_table_api_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./shared/table/template/table-api/table-api.component */ "./src/app/shared/table/template/table-api/table-api.component.ts");
/* harmony import */ var _shared_table_template_table_non_api_table_non_api_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./shared/table/template/table-non-api/table-non-api.component */ "./src/app/shared/table/template/table-non-api/table-non-api.component.ts");
/* harmony import */ var _shared_pipe_change_value_change_value_pipe__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./shared/pipe/change-value/change-value.pipe */ "./src/app/shared/pipe/change-value/change-value.pipe.ts");
/* harmony import */ var _shared_form_form_controller_form_controller_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./shared/form/form-controller/form-controller.component */ "./src/app/shared/form/form-controller/form-controller.component.ts");
/* harmony import */ var _shared_details_component_general_detail_text_area_disabled_detail_text_area_disabled_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./shared/details/component/general/detail-text-area-disabled/detail-text-area-disabled.component */ "./src/app/shared/details/component/general/detail-text-area-disabled/detail-text-area-disabled.component.ts");
/* harmony import */ var _shared_details_component_general_detail_text_disabled_detail_text_disabled_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./shared/details/component/general/detail-text-disabled/detail-text-disabled.component */ "./src/app/shared/details/component/general/detail-text-disabled/detail-text-disabled.component.ts");
/* harmony import */ var _shared_details_component_general_detail_radio_children_disabled_detail_radio_children_disabled_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./shared/details/component/general/detail-radio-children-disabled/detail-radio-children-disabled.component */ "./src/app/shared/details/component/general/detail-radio-children-disabled/detail-radio-children-disabled.component.ts");
/* harmony import */ var _shared_table_component_loading_bar_loading_bar_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./shared/table/component/loading-bar/loading-bar.component */ "./src/app/shared/table/component/loading-bar/loading-bar.component.ts");
/* harmony import */ var _shared_table_component_notification_bar_notification_bar_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./shared/table/component/notification-bar/notification-bar.component */ "./src/app/shared/table/component/notification-bar/notification-bar.component.ts");
/* harmony import */ var _shared_table_component_header_bar_header_bar_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./shared/table/component/header-bar/header-bar.component */ "./src/app/shared/table/component/header-bar/header-bar.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _shared_pipe_custom_table_custom_table_pipe__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./shared/pipe/custom-table/custom-table.pipe */ "./src/app/shared/pipe/custom-table/custom-table.pipe.ts");
/* harmony import */ var _error_forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./error/forbidden/forbidden.component */ "./src/app/error/forbidden/forbidden.component.ts");
/* harmony import */ var _shared_service_http_interceptor_http_interceptor_service__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./shared/service/http-interceptor/http-interceptor.service */ "./src/app/shared/service/http-interceptor/http-interceptor.service.ts");
/* harmony import */ var _shared_pipe_data_terminal_custom_data_terminal_custom_pipe__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./shared/pipe/data-terminal-custom/data-terminal-custom.pipe */ "./src/app/shared/pipe/data-terminal-custom/data-terminal-custom.pipe.ts");
/* harmony import */ var _controller_report_report_sla_report_sla_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./controller/report/report-sla/report-sla.component */ "./src/app/controller/report/report-sla/report-sla.component.ts");
/* harmony import */ var _controller_report_report_perekrutan_merchant_report_perekrutan_merchant_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./controller/report/report-perekrutan-merchant/report-perekrutan-merchant.component */ "./src/app/controller/report/report-perekrutan-merchant/report-perekrutan-merchant.component.ts");
/* harmony import */ var _controller_report_report_home_report_home_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./controller/report/report-home/report-home.component */ "./src/app/controller/report/report-home/report-home.component.ts");
/* harmony import */ var _shared_form_component_multiple_checkbox_multiple_checkbox_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./shared/form/component/multiple-checkbox/multiple-checkbox.component */ "./src/app/shared/form/component/multiple-checkbox/multiple-checkbox.component.ts");
/* harmony import */ var _shared_form_component_input_date_input_date_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./shared/form/component/input-date/input-date.component */ "./src/app/shared/form/component/input-date/input-date.component.ts");
/* harmony import */ var _controller_cmr_resend_report_resend_report_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./controller/cmr/resend-report/resend-report.component */ "./src/app/controller/cmr/resend-report/resend-report.component.ts");
/* harmony import */ var _controller_cmr_inquiry_client_inquiry_client_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./controller/cmr/inquiry-client/inquiry-client.component */ "./src/app/controller/cmr/inquiry-client/inquiry-client.component.ts");
/* harmony import */ var _shared_card_card_client_card_client_component__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./shared/card/card-client/card-client.component */ "./src/app/shared/card/card-client/card-client.component.ts");
/* harmony import */ var _shared_card_card_filter_card_filter_component__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./shared/card/card-filter/card-filter.component */ "./src/app/shared/card/card-filter/card-filter.component.ts");
/* harmony import */ var _directive_clickOutside__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./directive/clickOutside */ "./src/app/directive/clickOutside.ts");













































































Object(_angular_common__WEBPACK_IMPORTED_MODULE_27__["registerLocaleData"])(_angular_common_locales_id__WEBPACK_IMPORTED_MODULE_49___default.a, 'id');
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_27__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_27__["HashLocationStrategy"] },
        { provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD_DEFAULT_OPTIONS"], useValue: { appearance: 'fill' } },
        { provide: _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__["MAT_RADIO_DEFAULT_OPTIONS"], useValue: { color: 'primary' } },
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: "id-ID" },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"], useClass: _shared_service_http_interceptor_http_interceptor_service__WEBPACK_IMPORTED_MODULE_63__["HttpInterceptorService"], multi: true },
        { provide: 'AuthGuardService', useValue: (route, state) => true },
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_60__["CookieService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_27__["DatePipe"],
        _angular_common__WEBPACK_IMPORTED_MODULE_27__["CurrencyPipe"],
        _angular_common__WEBPACK_IMPORTED_MODULE_27__["DecimalPipe"],
        _shared_pipe_change_value_change_value_pipe__WEBPACK_IMPORTED_MODULE_52__["ChangeValuePipe"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_6__["DemoMaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbPaginationModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_directive_clickOutside__WEBPACK_IMPORTED_MODULE_74__["ClickOutsideDirective"],
        _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_11__["BreadcrumbsComponent"],
        _shared_table_component_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_12__["TopBarComponent"],
        _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__["SidebarComponent"],
        _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__["NavbarComponent"],
        _shared_form_component_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_15__["InputTextComponent"],
        _shared_form_component_input_select_input_select_component__WEBPACK_IMPORTED_MODULE_17__["InputSelectComponent"],
        _shared_form_component_input_radio_input_radio_component__WEBPACK_IMPORTED_MODULE_16__["InputRadioComponent"],
        _shared_form_component_input_modal_input_modal_component__WEBPACK_IMPORTED_MODULE_18__["InputModalComponent"],
        _shared_form_template_form_template_form_template_component__WEBPACK_IMPORTED_MODULE_19__["FormTemplateComponent"],
        _shared_form_component_input_modal_table_modal_table_modal_component__WEBPACK_IMPORTED_MODULE_21__["TableModalComponent"],
        _shared_form_component_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_22__["InputNumberComponent"],
        _shared_form_component_non_input_non_input_component__WEBPACK_IMPORTED_MODULE_23__["NonInputComponent"],
        _shared_form_component_input_text_area_input_text_area_component__WEBPACK_IMPORTED_MODULE_24__["InputTextAreaComponent"],
        _shared_form_component_input_address_input_address_component__WEBPACK_IMPORTED_MODULE_25__["InputAddressComponent"],
        _shared_details_template_details_simple_template_details_simple_template_component__WEBPACK_IMPORTED_MODULE_26__["DetailsSimpleTemplateComponent"],
        _shared_details_component_general_detail_default_detail_default_component__WEBPACK_IMPORTED_MODULE_29__["DetailDefaultComponent"],
        _shared_details_component_general_detail_address_detail_address_component__WEBPACK_IMPORTED_MODULE_30__["DetailAddressComponent"],
        _shared_details_component_general_detail_multi_value_detail_multi_value_component__WEBPACK_IMPORTED_MODULE_31__["DetailMultiValueComponent"],
        _shared_details_component_general_detail_multi_json_label_detail_multi_json_label_component__WEBPACK_IMPORTED_MODULE_32__["DetailMultiJsonLabelComponent"],
        _shared_details_component_detail_controller_detail_controller_component__WEBPACK_IMPORTED_MODULE_33__["DetailControllerComponent"],
        _shared_details_component_custom_detail_dokumen_detail_dokumen_component__WEBPACK_IMPORTED_MODULE_34__["DetailDokumenComponent"],
        _shared_details_component_custom_detail_fasilitas_detail_fasilitas_detail_fasilitas_component__WEBPACK_IMPORTED_MODULE_42__["DetailFasilitasComponent"],
        _shared_details_component_custom_detail_fasilitas_detail_table_mdr_detail_table_mdr_component__WEBPACK_IMPORTED_MODULE_41__["DetailTableMdrComponent"],
        _shared_details_component_custom_detail_fasilitas_detail_fasilitas_debit_detail_fasilitas_debit_component__WEBPACK_IMPORTED_MODULE_35__["DetailFasilitasDebitComponent"],
        _shared_details_component_custom_detail_fasilitas_detail_fasilitas_kredit_detail_fasilitas_kredit_component__WEBPACK_IMPORTED_MODULE_36__["DetailFasilitasKreditComponent"],
        _shared_details_component_custom_detail_fasilitas_detail_fasilitas_flazz_detail_fasilitas_flazz_component__WEBPACK_IMPORTED_MODULE_37__["DetailFasilitasFlazzComponent"],
        _shared_details_component_custom_detail_fasilitas_detail_fasilitas_lainnya_detail_fasilitas_lainnya_component__WEBPACK_IMPORTED_MODULE_38__["DetailFasilitasLainnyaComponent"],
        _shared_details_component_custom_detail_fasilitas_detail_fasilitas_fitur_detail_fasilitas_fitur_component__WEBPACK_IMPORTED_MODULE_39__["DetailFasilitasFiturComponent"],
        _shared_details_component_custom_detail_fasilitas_detail_fasilitas_fitur_controller_detail_fasilitas_fitur_controller_component__WEBPACK_IMPORTED_MODULE_40__["DetailFasilitasFiturControllerComponent"],
        _shared_table_template_table_non_api_table_non_api_component__WEBPACK_IMPORTED_MODULE_51__["TableNonApiComponent"],
        _shared_details_template_details_dual_col_template_details_dual_col_template_component__WEBPACK_IMPORTED_MODULE_28__["DetailsDualColTemplateComponent"],
        _shared_details_component_general_detail_address_two_detail_address_two_component__WEBPACK_IMPORTED_MODULE_43__["DetailAddressTwoComponent"],
        _shared_details_template_details_fasilitas_cicilan_nol_template_details_fasilitas_cicilan_nol_template_component__WEBPACK_IMPORTED_MODULE_44__["DetailsFasilitasCicilanNolTemplateComponent"],
        _shared_details_template_details_fasilitas_e_commerce_template_details_fasilitas_e_commerce_template_component__WEBPACK_IMPORTED_MODULE_45__["DetailsFasilitasECommerceTemplateComponent"],
        _shared_details_template_details_data_terminal_template_details_data_terminal_template_component__WEBPACK_IMPORTED_MODULE_46__["DetailsDataTerminalTemplateComponent"],
        _shared_details_template_details_dokumen_template_details_dokumen_template_component__WEBPACK_IMPORTED_MODULE_47__["DetailsDokumenTemplateComponent"],
        _shared_details_template_details_fasilitas_default_template_details_fasilitas_default_template_component__WEBPACK_IMPORTED_MODULE_48__["DetailsFasilitasDefaultTemplateComponent"],
        _shared_table_template_table_api_table_api_component__WEBPACK_IMPORTED_MODULE_50__["TableApiComponent"],
        _shared_pipe_change_value_change_value_pipe__WEBPACK_IMPORTED_MODULE_52__["ChangeValuePipe"],
        _shared_form_form_controller_form_controller_component__WEBPACK_IMPORTED_MODULE_53__["FormControllerComponent"],
        _shared_details_component_general_detail_text_area_disabled_detail_text_area_disabled_component__WEBPACK_IMPORTED_MODULE_54__["DetailTextAreaDisabledComponent"],
        _shared_details_component_general_detail_text_disabled_detail_text_disabled_component__WEBPACK_IMPORTED_MODULE_55__["DetailTextDisabledComponent"],
        _shared_details_component_general_detail_radio_children_disabled_detail_radio_children_disabled_component__WEBPACK_IMPORTED_MODULE_56__["DetailRadioChildrenDisabledComponent"],
        _shared_table_component_loading_bar_loading_bar_component__WEBPACK_IMPORTED_MODULE_57__["LoadingBarComponent"],
        _shared_table_component_notification_bar_notification_bar_component__WEBPACK_IMPORTED_MODULE_58__["NotificationBarComponent"],
        _shared_table_component_header_bar_header_bar_component__WEBPACK_IMPORTED_MODULE_59__["HeaderBarComponent"],
        _shared_pipe_custom_table_custom_table_pipe__WEBPACK_IMPORTED_MODULE_61__["CustomTablePipe"],
        _error_forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_62__["ForbiddenComponent"],
        _shared_pipe_data_terminal_custom_data_terminal_custom_pipe__WEBPACK_IMPORTED_MODULE_64__["DataTerminalCustomPipe"],
        _controller_report_report_sla_report_sla_component__WEBPACK_IMPORTED_MODULE_65__["ReportSlaComponent"],
        _controller_report_report_perekrutan_merchant_report_perekrutan_merchant_component__WEBPACK_IMPORTED_MODULE_66__["ReportPerekrutanMerchantComponent"],
        _controller_report_report_home_report_home_component__WEBPACK_IMPORTED_MODULE_67__["ReportHomeComponent"],
        _shared_form_component_multiple_checkbox_multiple_checkbox_component__WEBPACK_IMPORTED_MODULE_68__["MultipleCheckboxComponent"],
        _shared_form_component_input_date_input_date_component__WEBPACK_IMPORTED_MODULE_69__["InputDateComponent"],
        _controller_cmr_resend_report_resend_report_component__WEBPACK_IMPORTED_MODULE_70__["ResendReportComponent"],
        _controller_cmr_inquiry_client_inquiry_client_component__WEBPACK_IMPORTED_MODULE_71__["InquiryClientComponent"],
        _shared_card_card_client_card_client_component__WEBPACK_IMPORTED_MODULE_72__["CardClientComponent"],
        _shared_card_card_filter_card_filter_component__WEBPACK_IMPORTED_MODULE_73__["CardFilterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_6__["DemoMaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbPaginationModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _directive_clickOutside__WEBPACK_IMPORTED_MODULE_74__["ClickOutsideDirective"],
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_11__["BreadcrumbsComponent"],
                    _shared_table_component_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_12__["TopBarComponent"],
                    _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__["SidebarComponent"],
                    _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__["NavbarComponent"],
                    _shared_form_component_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_15__["InputTextComponent"],
                    _shared_form_component_input_select_input_select_component__WEBPACK_IMPORTED_MODULE_17__["InputSelectComponent"],
                    _shared_form_component_input_radio_input_radio_component__WEBPACK_IMPORTED_MODULE_16__["InputRadioComponent"],
                    _shared_form_component_input_modal_input_modal_component__WEBPACK_IMPORTED_MODULE_18__["InputModalComponent"],
                    _shared_form_template_form_template_form_template_component__WEBPACK_IMPORTED_MODULE_19__["FormTemplateComponent"],
                    _shared_form_component_input_modal_table_modal_table_modal_component__WEBPACK_IMPORTED_MODULE_21__["TableModalComponent"],
                    _shared_form_component_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_22__["InputNumberComponent"],
                    _shared_form_component_non_input_non_input_component__WEBPACK_IMPORTED_MODULE_23__["NonInputComponent"],
                    _shared_form_component_input_text_area_input_text_area_component__WEBPACK_IMPORTED_MODULE_24__["InputTextAreaComponent"],
                    _shared_form_component_input_address_input_address_component__WEBPACK_IMPORTED_MODULE_25__["InputAddressComponent"],
                    _shared_details_template_details_simple_template_details_simple_template_component__WEBPACK_IMPORTED_MODULE_26__["DetailsSimpleTemplateComponent"],
                    _shared_details_component_general_detail_default_detail_default_component__WEBPACK_IMPORTED_MODULE_29__["DetailDefaultComponent"],
                    _shared_details_component_general_detail_address_detail_address_component__WEBPACK_IMPORTED_MODULE_30__["DetailAddressComponent"],
                    _shared_details_component_general_detail_multi_value_detail_multi_value_component__WEBPACK_IMPORTED_MODULE_31__["DetailMultiValueComponent"],
                    _shared_details_component_general_detail_multi_json_label_detail_multi_json_label_component__WEBPACK_IMPORTED_MODULE_32__["DetailMultiJsonLabelComponent"],
                    _shared_details_component_detail_controller_detail_controller_component__WEBPACK_IMPORTED_MODULE_33__["DetailControllerComponent"],
                    _shared_details_component_custom_detail_dokumen_detail_dokumen_component__WEBPACK_IMPORTED_MODULE_34__["DetailDokumenComponent"],
                    _shared_details_component_custom_detail_fasilitas_detail_fasilitas_detail_fasilitas_component__WEBPACK_IMPORTED_MODULE_42__["DetailFasilitasComponent"],
                    _shared_details_component_custom_detail_fasilitas_detail_table_mdr_detail_table_mdr_component__WEBPACK_IMPORTED_MODULE_41__["DetailTableMdrComponent"],
                    _shared_details_component_custom_detail_fasilitas_detail_fasilitas_debit_detail_fasilitas_debit_component__WEBPACK_IMPORTED_MODULE_35__["DetailFasilitasDebitComponent"],
                    _shared_details_component_custom_detail_fasilitas_detail_fasilitas_kredit_detail_fasilitas_kredit_component__WEBPACK_IMPORTED_MODULE_36__["DetailFasilitasKreditComponent"],
                    _shared_details_component_custom_detail_fasilitas_detail_fasilitas_flazz_detail_fasilitas_flazz_component__WEBPACK_IMPORTED_MODULE_37__["DetailFasilitasFlazzComponent"],
                    _shared_details_component_custom_detail_fasilitas_detail_fasilitas_lainnya_detail_fasilitas_lainnya_component__WEBPACK_IMPORTED_MODULE_38__["DetailFasilitasLainnyaComponent"],
                    _shared_details_component_custom_detail_fasilitas_detail_fasilitas_fitur_detail_fasilitas_fitur_component__WEBPACK_IMPORTED_MODULE_39__["DetailFasilitasFiturComponent"],
                    _shared_details_component_custom_detail_fasilitas_detail_fasilitas_fitur_controller_detail_fasilitas_fitur_controller_component__WEBPACK_IMPORTED_MODULE_40__["DetailFasilitasFiturControllerComponent"],
                    _shared_table_template_table_non_api_table_non_api_component__WEBPACK_IMPORTED_MODULE_51__["TableNonApiComponent"],
                    _shared_details_template_details_dual_col_template_details_dual_col_template_component__WEBPACK_IMPORTED_MODULE_28__["DetailsDualColTemplateComponent"],
                    _shared_details_component_general_detail_address_two_detail_address_two_component__WEBPACK_IMPORTED_MODULE_43__["DetailAddressTwoComponent"],
                    _shared_details_template_details_fasilitas_cicilan_nol_template_details_fasilitas_cicilan_nol_template_component__WEBPACK_IMPORTED_MODULE_44__["DetailsFasilitasCicilanNolTemplateComponent"],
                    _shared_details_template_details_fasilitas_e_commerce_template_details_fasilitas_e_commerce_template_component__WEBPACK_IMPORTED_MODULE_45__["DetailsFasilitasECommerceTemplateComponent"],
                    _shared_details_template_details_data_terminal_template_details_data_terminal_template_component__WEBPACK_IMPORTED_MODULE_46__["DetailsDataTerminalTemplateComponent"],
                    _shared_details_template_details_dokumen_template_details_dokumen_template_component__WEBPACK_IMPORTED_MODULE_47__["DetailsDokumenTemplateComponent"],
                    _shared_details_template_details_fasilitas_default_template_details_fasilitas_default_template_component__WEBPACK_IMPORTED_MODULE_48__["DetailsFasilitasDefaultTemplateComponent"],
                    _shared_table_template_table_api_table_api_component__WEBPACK_IMPORTED_MODULE_50__["TableApiComponent"],
                    _shared_pipe_change_value_change_value_pipe__WEBPACK_IMPORTED_MODULE_52__["ChangeValuePipe"],
                    _shared_form_form_controller_form_controller_component__WEBPACK_IMPORTED_MODULE_53__["FormControllerComponent"],
                    _shared_details_component_general_detail_text_area_disabled_detail_text_area_disabled_component__WEBPACK_IMPORTED_MODULE_54__["DetailTextAreaDisabledComponent"],
                    _shared_details_component_general_detail_text_disabled_detail_text_disabled_component__WEBPACK_IMPORTED_MODULE_55__["DetailTextDisabledComponent"],
                    _shared_details_component_general_detail_radio_children_disabled_detail_radio_children_disabled_component__WEBPACK_IMPORTED_MODULE_56__["DetailRadioChildrenDisabledComponent"],
                    _shared_table_component_loading_bar_loading_bar_component__WEBPACK_IMPORTED_MODULE_57__["LoadingBarComponent"],
                    _shared_table_component_notification_bar_notification_bar_component__WEBPACK_IMPORTED_MODULE_58__["NotificationBarComponent"],
                    _shared_table_component_header_bar_header_bar_component__WEBPACK_IMPORTED_MODULE_59__["HeaderBarComponent"],
                    _shared_pipe_custom_table_custom_table_pipe__WEBPACK_IMPORTED_MODULE_61__["CustomTablePipe"],
                    _error_forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_62__["ForbiddenComponent"],
                    _shared_pipe_data_terminal_custom_data_terminal_custom_pipe__WEBPACK_IMPORTED_MODULE_64__["DataTerminalCustomPipe"],
                    _controller_report_report_sla_report_sla_component__WEBPACK_IMPORTED_MODULE_65__["ReportSlaComponent"],
                    _controller_report_report_perekrutan_merchant_report_perekrutan_merchant_component__WEBPACK_IMPORTED_MODULE_66__["ReportPerekrutanMerchantComponent"],
                    _controller_report_report_home_report_home_component__WEBPACK_IMPORTED_MODULE_67__["ReportHomeComponent"],
                    _shared_form_component_multiple_checkbox_multiple_checkbox_component__WEBPACK_IMPORTED_MODULE_68__["MultipleCheckboxComponent"],
                    _shared_form_component_input_date_input_date_component__WEBPACK_IMPORTED_MODULE_69__["InputDateComponent"],
                    _controller_cmr_resend_report_resend_report_component__WEBPACK_IMPORTED_MODULE_70__["ResendReportComponent"],
                    _controller_cmr_inquiry_client_inquiry_client_component__WEBPACK_IMPORTED_MODULE_71__["InquiryClientComponent"],
                    _shared_card_card_client_card_client_component__WEBPACK_IMPORTED_MODULE_72__["CardClientComponent"],
                    _shared_card_card_filter_card_filter_component__WEBPACK_IMPORTED_MODULE_73__["CardFilterComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_6__["DemoMaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbPaginationModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
                ],
                providers: [
                    { provide: _angular_common__WEBPACK_IMPORTED_MODULE_27__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_27__["HashLocationStrategy"] },
                    { provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD_DEFAULT_OPTIONS"], useValue: { appearance: 'fill' } },
                    { provide: _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__["MAT_RADIO_DEFAULT_OPTIONS"], useValue: { color: 'primary' } },
                    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: "id-ID" },
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"], useClass: _shared_service_http_interceptor_http_interceptor_service__WEBPACK_IMPORTED_MODULE_63__["HttpInterceptorService"], multi: true },
                    { provide: 'AuthGuardService', useValue: (route, state) => true },
                    ngx_cookie_service__WEBPACK_IMPORTED_MODULE_60__["CookieService"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_27__["DatePipe"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_27__["CurrencyPipe"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_27__["DecimalPipe"],
                    _shared_pipe_change_value_change_value_pipe__WEBPACK_IMPORTED_MODULE_52__["ChangeValuePipe"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/controller/cmr/inquiry-client/inquiry-client.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/controller/cmr/inquiry-client/inquiry-client.component.ts ***!
  \***************************************************************************/
/*! exports provided: InquiryClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InquiryClientComponent", function() { return InquiryClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_data_api_data_master_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/data-api/data-master.api */ "./src/app/data-api/data-master.api.ts");
/* harmony import */ var src_app_shared_service_api_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/service/api-shared/shared.service */ "./src/app/shared/service/api-shared/shared.service.ts");
/* harmony import */ var _shared_card_card_client_card_client_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/card/card-client/card-client.component */ "./src/app/shared/card/card-client/card-client.component.ts");





class InquiryClientComponent {
    constructor(SharedService) {
        this.SharedService = SharedService;
        this.tableModel = {
            removeTopBar: true,
            title: 'Inquiry CMR',
            totalrows: 0,
            editButton: true,
            getListUrl: src_app_data_api_data_master_api__WEBPACK_IMPORTED_MODULE_1__["GET_CLIENT_CMR"],
            paginationInit: {
                page: 1,
                size: 5,
                orderby: 'clientId',
                query: '',
            },
            tableData: [
                {
                    headerName: 'Client ID',
                    jsonName: 'client_id',
                    search: {
                        inputType: "text",
                        inputQuery: "full_like",
                    }
                },
                {
                    headerName: 'Client Name',
                    jsonName: 'client_name',
                    search: {
                        inputType: "text",
                        inputQuery: "full_like",
                    }
                },
                {
                    headerName: 'Client Type',
                    jsonName: 'client_type',
                    search: {
                        inputType: "text",
                        inputQuery: "full_like",
                    }
                },
                {
                    headerName: 'Client Status',
                    jsonName: 'client_status_approval',
                    search: {
                        inputType: "text",
                        inputQuery: "full_like",
                    }
                },
                {
                    headerName: 'Email 1',
                    jsonName: 'client_email1',
                },
                {
                    headerName: 'Email 2',
                    jsonName: 'client_email2',
                },
                {
                    headerName: 'Email 3',
                    jsonName: 'client_email3',
                },
                {
                    headerName: 'Email 4',
                    jsonName: 'client_email4',
                },
                {
                    headerName: 'Email 5',
                    jsonName: 'client_email5',
                },
                {
                    headerName: 'Template Status',
                    jsonName: 'template_status_approval',
                },
                {
                    headerName: 'File Type',
                    jsonName: 'file_type',
                },
            ],
        };
        this.value = '';
        // status : string = "failed";
        this.cardModel = {
            removeTopBar: true,
            title: 'Inquiry CMR',
            totalrows: 0,
            editButton: true,
            getListUrl: src_app_data_api_data_master_api__WEBPACK_IMPORTED_MODULE_1__["GET_CLIENT_CMR"],
            paginationInit: {
                page: 1,
                size: 5,
                orderby: 'clientId',
                query: '',
            },
            cardData: [
                {
                    headerName: 'Client ID',
                    jsonName: 'clientId',
                },
                {
                    headerName: 'Client Name',
                    jsonName: 'clientName',
                },
                {
                    headerName: 'Email',
                    jsonName: 'clientEmail1',
                },
                {
                    headerName: 'Client Approval',
                    jsonName: 'client_email2',
                },
                {
                    headerName: 'Template Approval',
                    jsonName: 'client_email3',
                },
                {
                    headerName: 'File Type',
                    jsonName: 'client_email4',
                }
            ],
        };
    }
    ngOnInit() { }
}
InquiryClientComponent.ɵfac = function InquiryClientComponent_Factory(t) { return new (t || InquiryClientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_api_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"])); };
InquiryClientComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InquiryClientComponent, selectors: [["app-inquiry-client"]], decls: 3, vars: 2, consts: [[1, "row"], [1, "col-xl-11"], [3, "cardModel", "excelButton"]], template: function InquiryClientComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-card-client", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardModel", ctx.cardModel)("excelButton", true);
    } }, directives: [_shared_card_card_client_card_client_component__WEBPACK_IMPORTED_MODULE_3__["CardClientComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyb2xsZXIvY21yL2lucXVpcnktY2xpZW50L2lucXVpcnktY2xpZW50LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InquiryClientComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-inquiry-client',
                templateUrl: './inquiry-client.component.html',
                styleUrls: ['./inquiry-client.component.css'],
            }]
    }], function () { return [{ type: src_app_shared_service_api_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/controller/cmr/resend-report/resend-report.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/controller/cmr/resend-report/resend-report.component.ts ***!
  \*************************************************************************/
/*! exports provided: ResendReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResendReportComponent", function() { return ResendReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_service_api_shared_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/service/api-shared/shared.service */ "./src/app/shared/service/api-shared/shared.service.ts");
/* harmony import */ var _shared_form_template_form_template_form_template_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/form/template/form-template/form-template.component */ "./src/app/shared/form/template/form-template/form-template.component.ts");




class ResendReportComponent {
    constructor(sharedService) {
        this.formType = 'post';
        this.formTemplate = {
            title: 'Resend Report',
            backUrl: '',
            inputList: [
                {
                    jsonName: 'client_id',
                    label: 'Client ID',
                    maxlength: 75,
                    minlength: 7,
                    required: true,
                    type: 'text',
                    value: '',
                },
                {
                    jsonName: '',
                    label: 'Periode Report',
                    maxlength: 75,
                    required: false,
                    type: 'non-input',
                    value: '',
                },
                {
                    jsonName: 'start_date',
                    label: 'Date',
                    maxlength: 75,
                    required: true,
                    type: 'date',
                    value: '',
                }
            ],
        };
    }
    refreshForm() {
    }
    ngOnInit() { }
}
ResendReportComponent.ɵfac = function ResendReportComponent_Factory(t) { return new (t || ResendReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_api_shared_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"])); };
ResendReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResendReportComponent, selectors: [["app-resend-report"]], decls: 1, vars: 2, consts: [[3, "formType", "formTemplate"]], template: function ResendReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-form-template", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formType", ctx.formType)("formTemplate", ctx.formTemplate);
    } }, directives: [_shared_form_template_form_template_form_template_component__WEBPACK_IMPORTED_MODULE_2__["FormTemplateComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyb2xsZXIvY21yL3Jlc2VuZC1yZXBvcnQvcmVzZW5kLXJlcG9ydC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResendReportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resend-report',
                templateUrl: './resend-report.component.html',
                styleUrls: ['./resend-report.component.css'],
            }]
    }], function () { return [{ type: src_app_shared_service_api_shared_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/controller/report/report-home/report-home.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/controller/report/report-home/report-home.component.ts ***!
  \************************************************************************/
/*! exports provided: ReportHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportHomeComponent", function() { return ReportHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




function ReportHomeComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const report_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", report_r1.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", report_r1.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](report_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](report_r1.description);
} }
class ReportHomeComponent {
    constructor() {
        this.reportList = [
            {
                name: "CMR INQUIRY CLIENT",
                link: "cmr/inquiry-client",
                description: "Inquiry CLient CMR"
            },
            {
                name: "CMR RESEND REPORT",
                link: "cmr/resend-report",
                description: "Resend Report Merchant"
            }
        ];
    }
    ngOnInit() {
    }
}
ReportHomeComponent.ɵfac = function ReportHomeComponent_Factory(t) { return new (t || ReportHomeComponent)(); };
ReportHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportHomeComponent, selectors: [["report-home"]], decls: 4, vars: 1, consts: [[1, "container"], [1, "album", "py-5", "bg-light"], [1, "row"], ["class", "col-lg-3", "style", "text-decoration: none; color: gray;", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "col-lg-3", 2, "text-decoration", "none", "color", "gray", 3, "routerLink"], [1, "card", "mb-3", "box-shadow", 2, "height", "175px"], [1, "card-img-top", 3, "innerHTML"], [1, "card-body"], [1, "card-text", "text-primary"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "card-text"]], template: function ReportHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ReportHomeComponent_a_3_Template, 9, 4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.reportList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyb2xsZXIvcmVwb3J0L3JlcG9ydC1ob21lL3JlcG9ydC1ob21lLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'report-home',
                templateUrl: './report-home.component.html',
                styleUrls: ['./report-home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/controller/report/report-perekrutan-merchant/report-perekrutan-merchant.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/controller/report/report-perekrutan-merchant/report-perekrutan-merchant.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ReportPerekrutanMerchantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportPerekrutanMerchantComponent", function() { return ReportPerekrutanMerchantComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_data_api_data_master_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/data-api/data-master.api */ "./src/app/data-api/data-master.api.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_form_template_form_template_form_template_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/form/template/form-template/form-template.component */ "./src/app/shared/form/template/form-template/form-template.component.ts");





class ReportPerekrutanMerchantComponent {
    constructor(ActivedRoute) {
        this.ActivedRoute = ActivedRoute;
        this.formTemplate = {
            title: "Laporan Perekrutan Merchant",
            backUrl: "report",
            postDataUrl: src_app_data_api_data_master_api__WEBPACK_IMPORTED_MODULE_1__["REPORT_SLA"],
            inputList: [
                {
                    jsonName: "name",
                    required: true,
                    label: "Brand",
                    type: "text",
                    maxlength: 25,
                }
            ]
        };
    }
    ngOnInit() {
    }
}
ReportPerekrutanMerchantComponent.ɵfac = function ReportPerekrutanMerchantComponent_Factory(t) { return new (t || ReportPerekrutanMerchantComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ReportPerekrutanMerchantComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportPerekrutanMerchantComponent, selectors: [["app-report-perekrutan-merchant"]], decls: 3, vars: 1, consts: [[1, "row"], [1, "col-xl-11"], [3, "formTemplate"]], template: function ReportPerekrutanMerchantComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-form-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formTemplate", ctx.formTemplate);
    } }, directives: [_shared_form_template_form_template_form_template_component__WEBPACK_IMPORTED_MODULE_3__["FormTemplateComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyb2xsZXIvcmVwb3J0L3JlcG9ydC1wZXJla3J1dGFuLW1lcmNoYW50L3JlcG9ydC1wZXJla3J1dGFuLW1lcmNoYW50LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportPerekrutanMerchantComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-report-perekrutan-merchant',
                templateUrl: './report-perekrutan-merchant.component.html',
                styleUrls: ['./report-perekrutan-merchant.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/controller/report/report-sla/report-sla.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/controller/report/report-sla/report-sla.component.ts ***!
  \**********************************************************************/
/*! exports provided: ReportSlaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportSlaComponent", function() { return ReportSlaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_data_api_data_master_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/data-api/data-master.api */ "./src/app/data-api/data-master.api.ts");
/* harmony import */ var _shared_form_template_form_template_form_template_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/form/template/form-template/form-template.component */ "./src/app/shared/form/template/form-template/form-template.component.ts");




class ReportSlaComponent {
    constructor() {
        this.formTemplate = {
            title: "Laporan SLA",
            backUrl: "report",
            postDataUrl: src_app_data_api_data_master_api__WEBPACK_IMPORTED_MODULE_1__["REPORT_SLA"],
            inputList: [
                {
                    jsonName: "jenisPermohonan",
                    label: "Jenis Permohonan",
                    maxlength: 75,
                    required: true,
                    value: "",
                    type: "multiple-checkbox",
                    option: [
                        { key: "Merchant Baru", value: "Merchant Baru" },
                        { key: "Tambah Outlet", value: "Tambah Outlet" },
                        { key: "Tambah Terminal", value: "Tambah Terminal" },
                        { key: "Ubah Fasilitas", value: "Ubah Fasilitas" },
                        { key: "Terminate", value: "Terminate" },
                        { key: "Perubahan Data", value: "Perubahan Data" },
                    ]
                },
                {
                    jsonName: "isCreatedDate",
                    label: "Periode",
                    required: true,
                    type: "radio-children",
                    option: [
                        { key: "Created Date", value: true },
                        { key: "Approved / Reject Date", value: false }
                    ],
                    children: {
                        true: [
                            {
                                jsonName: "createdDateFrom",
                                label: "Tanggal Mulai",
                                maxlength: 75,
                                required: true,
                                type: "date",
                                value: ""
                            },
                            {
                                jsonName: "createdDateTo",
                                label: "Tanggal Selesai",
                                maxlength: 75,
                                required: true,
                                type: "date",
                                value: ""
                            }
                        ],
                        false: [
                            {
                                jsonName: "approvedDateFrom",
                                label: "Tanggal Mulai",
                                maxlength: 75,
                                required: true,
                                type: "date",
                                value: ""
                            },
                            {
                                jsonName: "approvedDateTo",
                                label: "Tanggal Selesai",
                                maxlength: 75,
                                required: true,
                                type: "date",
                                value: ""
                            }
                        ]
                    }
                }
            ]
        };
    }
    ngOnInit() {
    }
}
ReportSlaComponent.ɵfac = function ReportSlaComponent_Factory(t) { return new (t || ReportSlaComponent)(); };
ReportSlaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportSlaComponent, selectors: [["report-sla"]], decls: 3, vars: 2, consts: [[1, "row"], [1, "col-xl-11"], [3, "formTemplate", "isCheckboxVertical"]], template: function ReportSlaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-form-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formTemplate", ctx.formTemplate)("isCheckboxVertical", true);
    } }, directives: [_shared_form_template_form_template_form_template_component__WEBPACK_IMPORTED_MODULE_2__["FormTemplateComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyb2xsZXIvcmVwb3J0L3JlcG9ydC1zbGEvcmVwb3J0LXNsYS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportSlaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'report-sla',
                templateUrl: './report-sla.component.html',
                styleUrls: ['./report-sla.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/data-api/data-master.api.ts":
/*!*********************************************!*\
  !*** ./src/app/data-api/data-master.api.ts ***!
  \*********************************************/
/*! exports provided: GET_CLIENT_CMR, POST_RESEND_CMR, GET_LIST_BRAND, GET_ONE_BRAND, POST_BRAND, UPDATE_BRAND, GET_LIST_GROUP, GET_ONE_GROUP, POST_GROUP, UPDATE_GROUP, GET_LIST_JENIS_USAHA, GET_ONE_JENIS_USAHA, POST_JENIS_USAHA, UPDATE_JENIS_USAHA, GET_LIST_KATEGORI_USAHA, GET_ONE_KATEGORI_USAHA, POST_KATEGORI_USAHA, UPDATE_KATEGORI_USAHA, GET_LIST_KODE_MALL, GET_ONE_KODE_MALL, POST_KODE_MALL, UPDATE_KODE_MALL, GET_LIST_KODE_SETTLE, GET_ONE_KODE_SETTLE, POST_KODE_SETTLE, UPDATE_KODE_SETTLE, GET_LIST_KODE_OFFICER, GET_ONE_KODE_OFFICER, CHECK_DUPLICATE_KODE_OFFICER, POST_KODE_OFFICER, UPDATE_KODE_OFFICER, GET_LIST_MDR, UPDATE_MDR, GET_LIST_POSTAL, GET_LIST_CABANG, GET_LIST_APPROVAL_SCORING, GET_LIST_CITY, GET_LIST_POSITIVE_LIST, GET_ONE_POSITIVE_LIST, POST_POSITIVE_LIST, UPDATE_POSITIVE_LIST, REPORT_SLA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CLIENT_CMR", function() { return GET_CLIENT_CMR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_RESEND_CMR", function() { return POST_RESEND_CMR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_LIST_BRAND", function() { return GET_LIST_BRAND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ONE_BRAND", function() { return GET_ONE_BRAND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_BRAND", function() { return POST_BRAND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_BRAND", function() { return UPDATE_BRAND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_LIST_GROUP", function() { return GET_LIST_GROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ONE_GROUP", function() { return GET_ONE_GROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_GROUP", function() { return POST_GROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_GROUP", function() { return UPDATE_GROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_LIST_JENIS_USAHA", function() { return GET_LIST_JENIS_USAHA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ONE_JENIS_USAHA", function() { return GET_ONE_JENIS_USAHA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_JENIS_USAHA", function() { return POST_JENIS_USAHA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_JENIS_USAHA", function() { return UPDATE_JENIS_USAHA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_LIST_KATEGORI_USAHA", function() { return GET_LIST_KATEGORI_USAHA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ONE_KATEGORI_USAHA", function() { return GET_ONE_KATEGORI_USAHA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_KATEGORI_USAHA", function() { return POST_KATEGORI_USAHA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_KATEGORI_USAHA", function() { return UPDATE_KATEGORI_USAHA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_LIST_KODE_MALL", function() { return GET_LIST_KODE_MALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ONE_KODE_MALL", function() { return GET_ONE_KODE_MALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_KODE_MALL", function() { return POST_KODE_MALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_KODE_MALL", function() { return UPDATE_KODE_MALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_LIST_KODE_SETTLE", function() { return GET_LIST_KODE_SETTLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ONE_KODE_SETTLE", function() { return GET_ONE_KODE_SETTLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_KODE_SETTLE", function() { return POST_KODE_SETTLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_KODE_SETTLE", function() { return UPDATE_KODE_SETTLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_LIST_KODE_OFFICER", function() { return GET_LIST_KODE_OFFICER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ONE_KODE_OFFICER", function() { return GET_ONE_KODE_OFFICER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_DUPLICATE_KODE_OFFICER", function() { return CHECK_DUPLICATE_KODE_OFFICER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_KODE_OFFICER", function() { return POST_KODE_OFFICER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_KODE_OFFICER", function() { return UPDATE_KODE_OFFICER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_LIST_MDR", function() { return GET_LIST_MDR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_MDR", function() { return UPDATE_MDR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_LIST_POSTAL", function() { return GET_LIST_POSTAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_LIST_CABANG", function() { return GET_LIST_CABANG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_LIST_APPROVAL_SCORING", function() { return GET_LIST_APPROVAL_SCORING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_LIST_CITY", function() { return GET_LIST_CITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_LIST_POSITIVE_LIST", function() { return GET_LIST_POSITIVE_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ONE_POSITIVE_LIST", function() { return GET_ONE_POSITIVE_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_POSITIVE_LIST", function() { return POST_POSITIVE_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_POSITIVE_LIST", function() { return UPDATE_POSITIVE_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REPORT_SLA", function() { return REPORT_SLA; });
/* harmony import */ var _host_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./host.api */ "./src/app/data-api/host.api.ts");

const GET_CLIENT_CMR = _host_api__WEBPACK_IMPORTED_MODULE_0__["HOST"] + "merchant-report/v1/client/inquiry";
const POST_RESEND_CMR = _host_api__WEBPACK_IMPORTED_MODULE_0__["HOST"] + "merchant-report/v1/client/resend";
/*EXISTING*/
//Brand
const GET_LIST_BRAND = _host_api__WEBPACK_IMPORTED_MODULE_0__["HOST"] + "api.util/v1/Merks";
const GET_ONE_BRAND = _host_api__WEBPACK_IMPORTED_MODULE_0__["HOST"] + "api.util/v1/Merks?query=id;equals;";
const POST_BRAND = _host_api__WEBPACK_IMPORTED_MODULE_0__["HOST"] + "api.util/v4/Merk";
const UPDATE_BRAND = _host_api__WEBPACK_IMPORTED_MODULE_0__["HOST"] + "api.util/v2/Merk/";
//Group
const GET_LIST_GROUP = _host_api__WEBPACK_IMPORTED_MODULE_0__["HOST"] + "api.util/v1/Groups";
const GET_ONE_GROUP = _host_api__WEBPACK_IMPORTED_MODULE_0__["HOST"] + "api.util/v1/Groups?query=id;equals;";
const POST_GROUP = _host_api__WEBPACK_IMPORTED_MODULE_0__["HOST"] + "api.util/v4/Group";
const UPDATE_GROUP = _host_api__WEBPACK_IMPORTED_MODULE_0__["HOST"] + "api.util/v2/Group/";
//Jenis Usaha
const GET_LIST_JENIS_USAHA = _host_api__WEBPACK_IMPORTED_MODULE_0__["HOST"] + "api.util/v1/MCCs";
const GET_ONE_JENIS_USAHA = _host_api__WEBPACK_IMPORTED_MODULE_0__["HOST"] + "api.util/v1/MCCs?query=id;equals;";
const POST_JENIS_USAHA = _host_api__WEBPACK_IMPORTED_MODULE_0__["HOST"] + "api.util/v4/MCC";
const UPDATE_JENIS_USAHA = _host_api__WEBPACK_IMPORTED_MODULE_0__["HOST"] + "api.util/v2/MCC/";
//Kategori Usaha
const GET_LIST_KATEGORI_USAHA = _host_api__WEBPACK_IMPORTED_MODULE_0__["HOST"] + "api.util/v1/LOBs";
const GET_ONE_KATEGORI_USAHA = _host_api__WEBPACK_IMPORTED_MODULE_0__["HOST"] + "api.util/v1/LOBs?query=id;equals;";
const POST_KATEGORI_USAHA = _host_api__WEBPACK_IMPORTED_MODULE_0__["HOST"] + "api.util/v4/LOB";
const UPDATE_KATEGORI_USAHA = _host_api__WEBPACK_IMPORTED_MODULE_0__["HOST"] + "api.util/v2/LOB/";
//Kode Mall
const GET_LIST_KODE_MALL = _host_api__WEBPACK_IMPORTED_MODULE_0__["HOST"] + "api.util/v1/LokasiUsahas";
const GET_ONE_KODE_MALL = _host_api__WEBPACK_IMPORTED_MODULE_0__["HOST"] + "api.util/v1/LokasiUsahas?query=id;equals;";
const POST_KODE_MALL = _host_api__WEBPACK_IMPORTED_MODULE_0__["HOST"] + "api.util/v4/LokasiUsaha";
const UPDATE_KODE_MALL = _host_api__WEBPACK_IMPORTED_MODULE_0__["HOST"] + "api.util/v2/LokasiUsaha/";
//Kode Settle
const GET_LIST_KODE_SETTLE = _host_api__WEBPACK_IMPORTED_MODULE_0__["HOST"] + "api.util/v1/Merchantsettle";
const GET_ONE_KODE_SETTLE = _host_api__WEBPACK_IMPORTED_MODULE_0__["HOST"] + "api.util/v1/Merchantsettle?query=id;equals;";
const POST_KODE_SETTLE = _host_api__WEBPACK_IMPORTED_MODULE_0__["HOST"] + "api.util/v1/Merchantsettle";
const UPDATE_KODE_SETTLE = _host_api__WEBPACK_IMPORTED_MODULE_0__["HOST"] + "api.util/v1/Merchantsettle/";
//Kode Officer
const GET_LIST_KODE_OFFICER = _host_api__WEBPACK_IMPORTED_MODULE_0__["HOST"] + "api.util/v1/MerchantOfficers";
const GET_ONE_KODE_OFFICER = _host_api__WEBPACK_IMPORTED_MODULE_0__["HOST"] + "api.util/v1/MerchantOfficer/";
const CHECK_DUPLICATE_KODE_OFFICER = _host_api__WEBPACK_IMPORTED_MODULE_0__["HOST"] + "api.util/v5/MerchantOfficer/";
const POST_KODE_OFFICER = _host_api__WEBPACK_IMPORTED_MODULE_0__["HOST"] + "api.util/v4/MerchantOfficer";
const UPDATE_KODE_OFFICER = _host_api__WEBPACK_IMPORTED_MODULE_0__["HOST"] + "api.util/v2/MerchantOfficer/";
//MDR
const GET_LIST_MDR = _host_api__WEBPACK_IMPORTED_MODULE_0__["HOST"] + "api.util/v1/MasterMdr";
const UPDATE_MDR = _host_api__WEBPACK_IMPORTED_MODULE_0__["HOST"] + "api.util/v2/FacilityCard/updateMasterMDR";
//Input
const GET_LIST_POSTAL = _host_api__WEBPACK_IMPORTED_MODULE_0__["HOST"] + "api.util/v1/Postals";
const GET_LIST_CABANG = _host_api__WEBPACK_IMPORTED_MODULE_0__["HOST"] + "api.util/v1/Cabangs";
const GET_LIST_APPROVAL_SCORING = _host_api__WEBPACK_IMPORTED_MODULE_0__["HOST"] + "api.util/v1/ApprovalScoring";
const GET_LIST_CITY = _host_api__WEBPACK_IMPORTED_MODULE_0__["HOST"] + "api.util/v1/City";
//Positive List
const GET_LIST_POSITIVE_LIST = _host_api__WEBPACK_IMPORTED_MODULE_0__["HOST"] + "api.util/v1/SSS";
const GET_ONE_POSITIVE_LIST = _host_api__WEBPACK_IMPORTED_MODULE_0__["HOST"] + "api.util/v1/SSS?query=id;equals;";
const POST_POSITIVE_LIST = _host_api__WEBPACK_IMPORTED_MODULE_0__["HOST"] + "api.util/v1/SSS";
const UPDATE_POSITIVE_LIST = _host_api__WEBPACK_IMPORTED_MODULE_0__["HOST"] + "api.util/v1/SSS/";
//Report
const REPORT_SLA = _host_api__WEBPACK_IMPORTED_MODULE_0__["HOST"] + "api.fdm_v2.0.0/v1.0.0/ReportSla/generateReportSLA";
/*NEW API*/
// //Brand
// export const GET_LIST_BRAND = "http://10.20.214.170:55203/merk.api-1.0/Merk/v1/getList"; //Updated
// export const GET_ONE_BRAND = HOST + "api.util/v1/Merks?query=id;equals;";
// export const POST_BRAND = HOST + "api.util/v4/Merk";
// export const UPDATE_BRAND = HOST + "api.util/v2/Merk/";
// //Group
// export const GET_LIST_GROUP = "http://10.20.214.170:55203/group.api-1.0/Group/v1/getList"; //Updated
// export const GET_ONE_GROUP = HOST + "api.util/v1/Groups?query=id;equals;";
// export const POST_GROUP = HOST + "api.util/v4/Group";
// export const UPDATE_GROUP = HOST + "api.util/v2/Group/";
// //Jenis Usaha
// export const GET_LIST_JENIS_USAHA = "http://10.20.214.170:55203/mcc.api-1.0/Mcc/v1/getList"; //Updated
// export const GET_ONE_JENIS_USAHA = HOST + "api.util/v1/MCCs?query=id;equals;";
// export const POST_JENIS_USAHA = HOST + "api.util/v4/MCC";
// export const UPDATE_JENIS_USAHA = HOST + "api.util/v2/MCC/";
// //Kategori Usaha
// export const GET_LIST_KATEGORI_USAHA = "http://10.20.214.170:55203/lob.api-1.0/Lob/v1/getList";  //Updated
// export const GET_ONE_KATEGORI_USAHA = HOST + "api.util/v1/LOBs?query=id;equals;";
// export const POST_KATEGORI_USAHA = HOST + "api.util/v4/LOB";
// export const UPDATE_KATEGORI_USAHA = HOST + "api.util/v2/LOB/";
// //Kode Mall
// export const GET_LIST_KODE_MALL = "http://10.20.214.170:55203/lokasiusaha.api-1.0/LokasiUsaha/v1/getList"; //Updated
// export const GET_ONE_KODE_MALL = HOST + "api.util/v1/LokasiUsahas?query=id;equals;";
// export const POST_KODE_MALL = HOST + "api.util/v4/LokasiUsaha";
// export const UPDATE_KODE_MALL= HOST + "api.util/v2/LokasiUsaha/";
// //Kode Settle
// export const GET_LIST_KODE_SETTLE = HOST + "api.util/v1/Merchantsettle";
// export const GET_ONE_KODE_SETTLE = HOST + "api.util/v1/Merchantsettle?query=id;equals;";
// export const POST_KODE_SETTLE = HOST + "api.util/v1/Merchantsettle";
// export const UPDATE_KODE_SETTLE = HOST + "api.util/v1/Merchantsettle/";
// //Kode Officer
// export const GET_LIST_KODE_OFFICER = "http://10.20.214.170:55203/merchantofficer.api-1.0/MerchantOfficer/v1/getList"; //Updated //Dpne Bersyarat
// export const GET_ONE_KODE_OFFICER  = "http://10.20.214.170:55203/merchantofficer.api-1.0/MerchantOfficer/v1/getById/"; //Updated //Done Bersyarat
// export const CHECK_DUPLICATE_KODE_OFFICER  = HOST + "api.util/v5/MerchantOfficer/"; 
// export const POST_KODE_OFFICER  = "http://10.20.214.170:55203/merchantofficer.api-1.0/MerchantOfficer/v1/save"; //Updated //Done
// export const UPDATE_KODE_OFFICER  = "http://10.20.214.170:55203/merchantofficer.api-1.0/MerchantOfficer/v1/update/"; //Updated //Done
// //MDR
// export const GET_LIST_MDR = "http://10.20.214.170:55203/mastermdr.api-1.0/MasterMdr/v1/getList"; //Updated
// export const UPDATE_MDR = HOST + "api.util/v2/FacilityCard/updateMasterMDR";
// //Input
// export const GET_LIST_POSTAL = HOST + "api.util/v1/Postals"; 
// export const GET_LIST_CABANG = HOST + "api.util/v1/Cabangs"; 
// export const GET_LIST_APPROVAL_SCORING = HOST + "api.util/v1/ApprovalScoring"; 
// export const GET_LIST_CITY = HOST + "api.util/v1/City";


/***/ }),

/***/ "./src/app/data-api/host.api.ts":
/*!**************************************!*\
  !*** ./src/app/data-api/host.api.ts ***!
  \**************************************/
/*! exports provided: DEV_EXISTING, DEV_BARU, UAT, PRODWSA1, PRODWSA2, PRODMBCA1, PRODMBCA2, PRODGRAHA1, PRODGRAHA2, SERVEROLNWSA1, SERVEROLNWSA2, SERVEROLNMBCA1, SERVEROLNMBCA2, SERVEROLNGRAHA1, SERVEROLNGRAHA2, SHELLAPP_DEV, SHELLAPP_UAT1, SHELLAPP_UAT2, SHELLAPP_PRODWSA1, SHELLAPP_PRODWSA2, SHELLAPP_PRODMBCA1, SHELLAPP_PRODMBCA2, SHELLAPP_PRODGRAHA1, SHELLAPP_PRODGRAHA2, HOST, SHELLAPP_HOST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEV_EXISTING", function() { return DEV_EXISTING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEV_BARU", function() { return DEV_BARU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UAT", function() { return UAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODWSA1", function() { return PRODWSA1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODWSA2", function() { return PRODWSA2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODMBCA1", function() { return PRODMBCA1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODMBCA2", function() { return PRODMBCA2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODGRAHA1", function() { return PRODGRAHA1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODGRAHA2", function() { return PRODGRAHA2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVEROLNWSA1", function() { return SERVEROLNWSA1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVEROLNWSA2", function() { return SERVEROLNWSA2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVEROLNMBCA1", function() { return SERVEROLNMBCA1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVEROLNMBCA2", function() { return SERVEROLNMBCA2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVEROLNGRAHA1", function() { return SERVEROLNGRAHA1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVEROLNGRAHA2", function() { return SERVEROLNGRAHA2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHELLAPP_DEV", function() { return SHELLAPP_DEV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHELLAPP_UAT1", function() { return SHELLAPP_UAT1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHELLAPP_UAT2", function() { return SHELLAPP_UAT2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHELLAPP_PRODWSA1", function() { return SHELLAPP_PRODWSA1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHELLAPP_PRODWSA2", function() { return SHELLAPP_PRODWSA2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHELLAPP_PRODMBCA1", function() { return SHELLAPP_PRODMBCA1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHELLAPP_PRODMBCA2", function() { return SHELLAPP_PRODMBCA2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHELLAPP_PRODGRAHA1", function() { return SHELLAPP_PRODGRAHA1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHELLAPP_PRODGRAHA2", function() { return SHELLAPP_PRODGRAHA2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOST", function() { return HOST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHELLAPP_HOST", function() { return SHELLAPP_HOST; });
const DEV_EXISTING = "http://10.20.213.191:55203/";
const DEV_BARU = "http://10.20.214.170:55203/";
const UAT = "http://10.20.214.170:55003/";
const PRODWSA1 = "http://magenta-app:55203/";
const PRODWSA2 = "http://10.0.50.35:55203/";
const PRODMBCA1 = "http://10.16.50.34:55203/";
const PRODMBCA2 = "http://10.16.50.35:55203/";
const PRODGRAHA1 = "http://10.32.51.188:55203/";
const PRODGRAHA2 = "http://10.32.51.189:55203/";
const SERVEROLNWSA1 = "http://10.0.51.188:55203";
const SERVEROLNWSA2 = "http://10.0.51.189:55203";
const SERVEROLNMBCA1 = "http://10.16.51.188:55203";
const SERVEROLNMBCA2 = "http://10.16.51.189:55203";
const SERVEROLNGRAHA1 = "http://10.32.51.188:55203";
const SERVEROLNGRAHA2 = "http://10.32.51.189:55203";
const SHELLAPP_DEV = "http://10.20.214.170:55205";
const SHELLAPP_UAT1 = "http://10.20.214.173:55205";
const SHELLAPP_UAT2 = "http://10.20.214.174:55205";
const SHELLAPP_PRODWSA1 = "http://magenta-app:55203";
const SHELLAPP_PRODWSA2 = "http://10.0.50.35:55203";
const SHELLAPP_PRODMBCA1 = "http://10.16.50.34:55203";
const SHELLAPP_PRODMBCA2 = "http://10.16.50.35:55203";
const SHELLAPP_PRODGRAHA1 = "http://10.32.51.188:55203";
const SHELLAPP_PRODGRAHA2 = "http://10.32.51.189:55203";
const HOST = UAT;
const SHELLAPP_HOST = SHELLAPP_UAT2;


/***/ }),

/***/ "./src/app/directive/clickOutside.ts":
/*!*******************************************!*\
  !*** ./src/app/directive/clickOutside.ts ***!
  \*******************************************/
/*! exports provided: ClickOutsideDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickOutsideDirective", function() { return ClickOutsideDirective; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





class ClickOutsideDirective {
    constructor(element, document) {
        this.element = element;
        this.document = document;
        this.clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngAfterViewInit() {
        this.documentClickSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.document, 'click')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((event) => {
            return !this.isInside(event.target);
        }))
            .subscribe(() => {
            this.clickOutside.emit();
        });
    }
    ngOnDestroy() {
        var _a;
        (_a = this.documentClickSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
    isInside(elementToCheck) {
        return (elementToCheck === this.element.nativeElement ||
            this.element.nativeElement.contains(elementToCheck));
    }
}
ClickOutsideDirective.ɵfac = function ClickOutsideDirective_Factory(t) { return new (t || ClickOutsideDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); };
ClickOutsideDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: ClickOutsideDirective, selectors: [["", "clickOutside", ""]], outputs: { clickOutside: "clickOutside" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ClickOutsideDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[clickOutside]',
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }] }]; }, { clickOutside: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/error/forbidden/forbidden.component.ts":
/*!********************************************************!*\
  !*** ./src/app/error/forbidden/forbidden.component.ts ***!
  \********************************************************/
/*! exports provided: ForbiddenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForbiddenComponent", function() { return ForbiddenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ForbiddenComponent {
    constructor() { }
    ngOnInit() {
    }
}
ForbiddenComponent.ɵfac = function ForbiddenComponent_Factory(t) { return new (t || ForbiddenComponent)(); };
ForbiddenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForbiddenComponent, selectors: [["app-forbidden"]], decls: 2, vars: 0, consts: [[2, "color", "#6c676a"]], template: function ForbiddenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Anda tidak diizinkan untuk mengakses halaman ini!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2ZvcmJpZGRlbi9mb3JiaWRkZW4uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForbiddenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forbidden',
                templateUrl: './forbidden.component.html',
                styleUrls: ['./forbidden.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/material-module.ts":
/*!************************************!*\
  !*** ./src/app/material-module.ts ***!
  \************************************/
/*! exports provided: DemoMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoMaterialModule", function() { return DemoMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/clipboard */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");












































class DemoMaterialModule {
}
DemoMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DemoMaterialModule });
DemoMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DemoMaterialModule_Factory(t) { return new (t || DemoMaterialModule)(); }, imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DemoMaterialModule, { exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DemoMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"],
                    _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
                    _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/breadcrumbs/breadcrumbs.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/breadcrumbs/breadcrumbs.component.ts ***!
  \*************************************************************/
/*! exports provided: BreadcrumbsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsComponent", function() { return BreadcrumbsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function BreadcrumbsComponent_div_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const breadcrumb_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", breadcrumb_r1.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", breadcrumb_r1.label, " ");
} }
function BreadcrumbsComponent_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const breadcrumb_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", breadcrumb_r1.label, " ");
} }
function BreadcrumbsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadcrumbsComponent_div_1_a_1_Template, 2, 2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BreadcrumbsComponent_div_1_span_2_Template, 2, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", i_r2 == ctx_r0.breadcrumbs.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 < ctx_r0.breadcrumbs.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 == ctx_r0.breadcrumbs.length - 1);
} }
class BreadcrumbsComponent {
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
    }
    ngOnInit() {
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])()).subscribe(() => {
            this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
        });
    }
    /**
     * Recursively build breadcrumb according to activated route.
     * @param route
     * @param url
     * @param breadcrumbs
     */
    buildBreadCrumb(route, url = '', breadcrumbs = []) {
        //If no routeConfig is avalailable we are on the root path
        let label = route.routeConfig && route.routeConfig.data ? route.routeConfig.data.breadcrumb : '';
        let isClickable = route.routeConfig && route.routeConfig.data && route.routeConfig.data.isClickable;
        let path = route.routeConfig && route.routeConfig.data ? route.routeConfig.path : '';
        // If the route is dynamic route such as ':id', remove it
        //  const lastRoutePart = path.split('/').pop();
        //  const isDynamicRoute = lastRoutePart.startsWith(':');
        //  if(isDynamicRoute && !!route.snapshot) {
        //    const paramName = lastRoutePart.split(':')[1];
        //    path = path.replace(lastRoutePart, route.snapshot.params[paramName]);
        //    label = label + route.snapshot.params[paramName];
        //  }
        //In the routeConfig the complete path is not available,
        //so we rebuild it each time
        const nextUrl = path ? `${url}/${path}` : url;
        const breadcrumb = {
            label: label,
            url: nextUrl,
        };
        // Only adding route with non-empty label
        const newBreadcrumbs = breadcrumb.label ? [...breadcrumbs, breadcrumb] : [...breadcrumbs];
        if (route.firstChild) {
            //If we are not on our current path yet,
            //there will be more children to look after, to build our breadcumb
            return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
        }
        return newBreadcrumbs;
    }
}
BreadcrumbsComponent.ɵfac = function BreadcrumbsComponent_Factory(t) { return new (t || BreadcrumbsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
BreadcrumbsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BreadcrumbsComponent, selectors: [["app-breadcrumbs"]], decls: 2, vars: 1, consts: [[1, "breadcrumb", 2, "margin-bottom", "0"], ["class", "breadcrumb-item breadcrumb-custom", 3, "active", 4, "ngFor", "ngForOf"], [1, "breadcrumb-item", "breadcrumb-custom"], [3, "routerLink", 4, "ngIf"], [4, "ngIf"], [3, "routerLink"]], template: function BreadcrumbsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadcrumbsComponent_div_1_Template, 3, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.breadcrumbs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".breadcrumb[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    padding: 0 0 0 0;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    list-style: none;\r\n    border-radius: .25rem;\r\n} \r\n\r\n\r\n.breadcrumb-custom[_ngcontent-%COMP%]\r\n{\r\n    font-size: 13px;\r\n    font-weight: 200;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUM7SUFDRyx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBRWhCLGFBQWE7SUFFYixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6Qjs7O0FBR0E7O0lBRUksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9icmVhZGNydW1icy9icmVhZGNydW1icy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIC5icmVhZGNydW1iIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMCAwIDAgMDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC1tcy1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG59IFxyXG5cclxuXHJcbi5icmVhZGNydW1iLWN1c3RvbVxyXG57XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadcrumbsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-breadcrumbs',
                templateUrl: './breadcrumbs.component.html',
                styleUrls: ['./breadcrumbs.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/card/card-client/card-client.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/card/card-client/card-client.component.ts ***!
  \******************************************************************/
/*! exports provided: CardClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardClientComponent", function() { return CardClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _service_api_shared_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/api-shared/shared.service */ "./src/app/shared/service/api-shared/shared.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _card_filter_card_filter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../card-filter/card-filter.component */ "./src/app/shared/card/card-filter/card-filter.component.ts");
/* harmony import */ var _table_component_header_bar_header_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../table/component/header-bar/header-bar.component */ "./src/app/shared/table/component/header-bar/header-bar.component.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");












function CardClientComponent_mat_expansion_panel_5_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "merchant");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardClientComponent_mat_expansion_panel_5_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardClientComponent_mat_expansion_panel_5_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "corporate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardClientComponent_mat_expansion_panel_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function CardClientComponent_mat_expansion_panel_5_Template_mat_expansion_panel_opened_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.panelOpenState = true; })("closed", function CardClientComponent_mat_expansion_panel_5_Template_mat_expansion_panel_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.panelOpenState = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CardClientComponent_mat_expansion_panel_5_div_10_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CardClientComponent_mat_expansion_panel_5_div_11_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CardClientComponent_mat_expansion_panel_5_div_12_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " CLIENT : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Requested Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Requested Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Approval Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Approval_id");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " TEMPLATE : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Status Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Requested Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Requested Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Approval Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Approval Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collapsedHeight", "200px")("expandedHeight", "200px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r2.client_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r2.client_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", data_r2.client_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "M");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "G");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.client_email1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.client_email2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.client_email3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.client_email4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.client_email5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r2.client_status_approval, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r2.template_status_approval, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r2.file_type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.client_requested_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.client_requested_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.client_approval_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.client_approval_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.template_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.template_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.template_status_approval);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.template_requested_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.template_requested_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.template_approval_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.template_approval_id);
} }
function CardClientComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ngb-pagination", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function CardClientComponent_div_6_Template_ngb_pagination_pageChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.pagination.page = $event; })("pageChange", function CardClientComponent_div_6_Template_ngb_pagination_pageChange_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.paginate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" Baris ", ctx_r1.row.start, " - ", ctx_r1.row.end, " dari ", ctx_r1.cardModel.totalrows, " data. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", ctx_r1.cardModel.totalrows)("page", ctx_r1.pagination.page)("maxSize", 5)("rotate", true)("ellipses", false)("boundaryLinks", true);
} }
class CardClientComponent {
    constructor(SharedService, modalService, sanitizer) {
        this.SharedService = SharedService;
        this.modalService = modalService;
        this.sanitizer = sanitizer;
        this.queryParam = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.panelOpenState = false;
        this.cancelRequest = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.imageModal = null;
        this.pagination = {
            page: 1,
            size: 10,
            orderby: "",
            query: "",
        };
        this.sort = {
            index: -1,
            direction: ""
        };
        this.row = {
            start: 1,
            end: 10
        };
        this.closeResult = '';
    }
    ngOnInit() {
        if (this.cardModel.paginationInit) {
            this.pagination = this.cardModel.paginationInit;
            this.pagination.queryMandatory = this.cardModel.paginationInit.queryMandatory ? this.cardModel.paginationInit.queryMandatory : "";
            this.sort.index = this.cardModel.cardData.findIndex(card => card.jsonName == this.pagination.orderby.split(" ")[0]);
            this.sort.direction = this.pagination.orderby.split(" ")[1];
        }
        this.checkNewColumn();
        this.paginate();
    }
    openScrollableContent(longContent) {
        this.modalService.open(longContent, { scrollable: true });
    }
    getList(queryParam) {
        this.status = "loading";
        this.cancelRequest.next();
        this.SharedService.getData(this.cardModel.getListUrl, queryParam).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.cancelRequest)).subscribe((response) => {
            console.log('response', response);
            if (response != null) {
                if (response.body == null) {
                    this.status = "no content";
                }
                else {
                    if (response.status == 200) {
                        this.status = "success";
                        var data = response.body;
                        this.cardModel.totalrows = 30;
                        console.log("ini data" + data.content);
                        // this.cardModel.totalrows = data.total_rows ;
                        this.dataList = data.content;
                        this.paging();
                    }
                    else if ((response.status == 200 && response.body.info.code == 204) || (response.status == 200 && response.body.info.status == 204) || response.status == 204) {
                        this.status = "no content";
                    }
                }
            }
            else {
                this.status = "failed";
            }
        });
    }
    sorting(index) {
        if (this.sort.index != index || this.sort.direction == "desc") {
            this.sort.direction = "asc";
        }
        else {
            this.sort.direction = "desc";
        }
        this.sort.index = index;
        if (typeof this.cardModel.cardData[index].jsonName == 'string') {
            this.pagination.orderby = this.cardModel.cardData[index].jsonName + " " + this.sort.direction;
        }
        else {
            this.pagination.orderby = this.cardModel.cardData[index].jsonName[0] + " " + this.sort.direction;
        }
        this.paginate();
    }
    filter(event) {
        this.pagination.query = "";
        this.cardModel.cardData.forEach((data) => {
            if (data != null && data.search != null) {
                if (data.search.inputType != "" && data.search.value) {
                    const trimmedSearchDataValue = data.search.value.trim(); // FDW => 1 Dec 2021 => trim search data value
                    if (typeof data.jsonName == 'string') {
                        this.pagination.query = this.pagination.query + data.jsonName + ";" + data.search.inputQuery + ";" + trimmedSearchDataValue + ";;";
                    }
                    else {
                        data.jsonName.forEach((jsonName, index) => {
                            if (index == data.jsonName.length - 1) {
                                this.pagination.query = this.pagination.query + jsonName + ";" + data.search.inputQuery + ";" + trimmedSearchDataValue;
                            }
                            else {
                                this.pagination.query = this.pagination.query + jsonName + ";" + data.search.inputQuery + ";" + trimmedSearchDataValue + "||";
                            }
                        });
                    }
                }
            }
        });
        if (this.pagination.query.slice(-2) == ";;" && !this.pagination.queryMandatory) {
            this.pagination.query = this.pagination.query.slice(0, -2);
        }
        this.pagination.page = 1;
        this.paginate();
    }
    paging() {
        this.row.start = 1 + (10 * (this.pagination.page - 1));
        this.row.end = 10 * this.pagination.page;
        if (this.row.end > this.cardModel.totalrows) {
            this.row.end = this.cardModel.totalrows;
        }
    }
    paginate() {
        const queryParam = "?page=" + this.pagination.page +
            "&orderby=" + this.pagination.orderby +
            "&size=" + this.pagination.size +
            "&query=" + this.pagination.query + this.pagination.queryMandatory;
        this.getList(queryParam);
    }
    checkNewColumn() {
        this.length = this.newColumn ? this.cardModel.cardData.length + 1 : this.cardModel.cardData.length;
    }
    openModal(content, data, pathParam) {
        // FDW - 02072022
        this.dataModal = $.extend({}, data);
        if (pathParam) {
            this.dataModal.getListUrl = data.getListUrl + pathParam;
        }
        this.imageModal = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'xl', windowClass: 'modal-document' });
        // if (data.mid) { this.getImage(data.mid); }
    }
    // getImage(mid) {
    //   this.isImageLoading = true;
    //   this.SharedService.getDataImage(GET_QRIS_IMAGE, mid).subscribe((response) =>
    //   {
    //     if(response)
    //     {
    //       let url = URL.createObjectURL(response);
    //       this.imageResponse = response;
    //       this.imageToShow = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    //       this.isImageLoading = false;
    //     }
    //     else
    //     {
    //       this.imageToShow = null;
    //       this.isImageLoading = false;
    //     }
    //   })
    // }
    downloadImage(data) {
        var date = new Date();
        var currentYear = date.getFullYear();
        var currentMonth = (date.getMonth() + 1).toString();
        currentMonth = ("0" + currentMonth).slice(-2);
        var currentDate = ("0" + date.getDate()).slice(-2);
        var currentHours = ("0" + date.getHours()).slice(-2);
        var currentMinutes = ("0" + date.getMinutes()).slice(-2);
        var blob = new Blob([this.imageResponse], { type: "data:image/png;base64" });
        var filename = data.mid + "_" + data.nmid + "_QR_IMAGE_" + currentYear + currentMonth + currentDate + "_" + currentHours + currentMinutes + ".png";
        file_saver__WEBPACK_IMPORTED_MODULE_3__["saveAs"](blob, filename);
    }
    closeModal() {
        this.imageModal.close();
    }
    /* FDW => 19-NOV-2021 => add Export/Import Button */
    // exportExcel(): void { /* Export current card to Excel */
    //   Swal.fire({
    //     title: 'Do you want to export this current card?',
    //     text: 'This card will downloaded as xlsx file into your system!',
    //     icon: 'info',
    //     showCancelButton: true,
    //     confirmButtonColor: '#3085d6',
    //     cancelButtonColor: '#d33',
    //     confirmButtonText: 'Yes'
    //   }).then((result) => {
    //     if (result.isConfirmed) {
    //       try {
    //         const excelTitle = 'List ' + this.cardModel.title.charAt(0).toUpperCase() + this.cardModel.title.slice(1) + '.xlsx';
    //         /* convert json to excel */
    //         const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.dataList);
    //         /* generate workbook and add the worksheet */
    //         const wb: XLSX.WorkBook = XLSX.utils.book_new();
    //         XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    //         /* download file */
    //         XLSX.writeFile(wb, excelTitle);
    //         Swal.fire(
    //           'Success!',
    //           'File downloaded!',
    //           'success'
    //         );
    //       } catch (e) {
    //         Swal.fire(
    //           'Oops!',
    //           'Something went wrong!',
    //           'error'
    //         );
    //       }
    //     }
    //   });
    // }
    getClick(cardData, data) {
        if (cardData.click == "downloadFile") {
            this.downloadFile(data);
        }
    }
    downloadFile(data) {
        //modal loading
        //save excel
    }
}
CardClientComponent.ɵfac = function CardClientComponent_Factory(t) { return new (t || CardClientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_api_shared_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"])); };
CardClientComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardClientComponent, selectors: [["app-card-client"]], inputs: { cardModel: "cardModel", dataList: "dataList", excelButton: "excelButton" }, outputs: { queryParam: "queryParam" }, decls: 7, vars: 5, consts: [[1, "d-flex", "flex-column"], [1, "table", "table-striped", "table-hover"], ["app-header-bar", "", 3, "tableData", "sort", "append", "sortEvent"], [3, "opened", "closed", 4, "ngFor", "ngForOf"], ["class", "row mt-4", 4, "ngIf"], [3, "opened", "closed"], [1, "d-flex", "justify-content-between", 3, "collapsedHeight", "expandedHeight"], [1, "header-client-list", "justify-content-between"], [1, "flex-20"], [1, "d-flex", "flex-column", "align-items-center"], [1, ""], [1, "justify-content-center", 3, "ngSwitch"], ["class", "merchant-label", 4, "ngSwitchCase"], ["class", "group-label", 4, "ngSwitchCase"], ["class", "corporate-label", 4, "ngSwitchCase"], [1, "email"], [1, "email-detail"], [1, "d-flex", "flex-row", "justify-content-around"], [1, "client-data-detail"], [1, "merchant-label"], [1, "group-label"], [1, "corporate-label"], [1, "row", "mt-4"], [1, "col-lg-6", "mt-2"], [1, "pagination-responsive"], [1, "col-lg-6"], [1, "pagination-responsive", "d-flex", "justify-content-end"], [3, "collectionSize", "page", "maxSize", "rotate", "ellipses", "boundaryLinks", "pageChange"]], template: function CardClientComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-card-filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sortEvent", function CardClientComponent_Template_thead_sortEvent_3_listener($event) { return ctx.sorting($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CardClientComponent_mat_expansion_panel_5_Template, 112, 27, "mat-expansion-panel", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CardClientComponent_div_6_Template, 7, 9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tableData", ctx.cardModel.cardData)("sort", ctx.sort)("append", ctx.newColumn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.status == "success" && !ctx.cardModel.removePagination);
    } }, directives: [_card_filter_card_filter_component__WEBPACK_IMPORTED_MODULE_7__["CardFilterComponent"], _table_component_header_bar_header_bar_component__WEBPACK_IMPORTED_MODULE_8__["HeaderBarComponent"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanelHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitchCase"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbPagination"]], styles: [".client-data-detail[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    \r\n}\r\n.header-client-list[_ngcontent-%COMP%]{\r\n    display: flex;\r\n}\r\n.email[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    padding-left: 30px;\r\n    flex-direction: column;\r\n}\r\n.merchant-label[_ngcontent-%COMP%]{\r\n    background-color: #FEECB5;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    border-radius: 10px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    color: black;\r\n}\r\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n    padding: 0.2rem 0.5rem  0.2rem 0.7rem;\r\n    vertical-align: middle;\r\n    border-top: 1px solid #dee2e6;\r\n    color: #6c676a;\r\n    word-wrap: break-word;\r\n    font-size: 13px;\r\n}\r\n.group-label[_ngcontent-%COMP%]{\r\n    background-color : #DFF0D0\r\n}\r\n.corporate-label[_ngcontent-%COMP%]{\r\n    background-color: #E1F1F6\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NhcmQvY2FyZC1jbGllbnQvY2FyZC1jbGllbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxhQUFhOztBQUVqQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7QUFDQTtJQUNJO0FBQ0o7QUFFQTtJQUNJOztBQUVKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NhcmQvY2FyZC1jbGllbnQvY2FyZC1jbGllbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY2xpZW50LWRhdGEtZGV0YWlse1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIFxyXG59XHJcbi5oZWFkZXItY2xpZW50LWxpc3R7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5lbWFpbHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLm1lcmNoYW50LWxhYmVse1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZFRUNCNTtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4udGFibGUgdGR7XHJcbiAgICBwYWRkaW5nOiAwLjJyZW0gMC41cmVtICAwLjJyZW0gMC43cmVtO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgY29sb3I6ICM2YzY3NmE7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn0gXHJcbi5ncm91cC1sYWJlbHtcclxuICAgIGJhY2tncm91bmQtY29sb3IgOiAjREZGMEQwXHJcbn1cclxuXHJcbi5jb3Jwb3JhdGUtbGFiZWx7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTFGMUY2XHJcblxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardClientComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card-client',
                templateUrl: './card-client.component.html',
                styleUrls: ['./card-client.component.css']
            }]
    }], function () { return [{ type: _service_api_shared_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] }]; }, { cardModel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dataList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], excelButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], queryParam: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/card/card-filter/card-filter.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/card/card-filter/card-filter.component.ts ***!
  \******************************************************************/
/*! exports provided: CardFilterComponent, FilterValue, CheckListFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardFilterComponent", function() { return CardFilterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterValue", function() { return FilterValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckListFilter", function() { return CheckListFilter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _directive_clickOutside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../directive/clickOutside */ "./src/app/directive/clickOutside.ts");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");











function CardFilterComponent_mat_card_4_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Tipe Client : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-checkbox", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Merchant");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-checkbox", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-checkbox", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-expansion-panel", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Client Status : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-checkbox", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Approve");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-checkbox", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-expansion-panel", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Template Status : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-checkbox", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Approve");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-checkbox", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-expansion-panel", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Tipe File : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-checkbox", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "xls");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-checkbox", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "txt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-checkbox", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "csv");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-action-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardFilterComponent_mat_card_4_Template_button_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.prevStep(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Atur Ulang");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardFilterComponent_mat_card_4_Template_button_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.nextStep(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Pakai");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", true);
} }
class CardFilterComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.queryParam = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.filterOpened = false;
        this.searchCategory = 'Nama';
        this.placeholder = 'Cari berdasarkan Nama';
        this.searchInput = '';
    }
    toogleFilter() {
        if (this.filterOpened) {
            this.filterOpened = false;
        }
        else {
            this.filterOpened = true;
        }
    }
    onChanges() {
        this.filterModel.searchCategory = this.searchCategory;
        this.placeholder = "Cari berdasarkan " + this.searchCategory;
    }
    clickedOutside() {
        this.filterOpened = false;
    }
    search() {
        console.log(this.searchInput);
    }
    ngOnInit() { }
}
CardFilterComponent.ɵfac = function CardFilterComponent_Factory(t) { return new (t || CardFilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"])); };
CardFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardFilterComponent, selectors: [["app-card-filter"]], outputs: { queryParam: "queryParam" }, decls: 16, vars: 5, consts: [[1, "filter"], [3, "clickOutside"], [1, "btn-filter", "form-control", 3, "ngClass", "click"], ["class", "filter-card ", 4, "ngIf"], [1, "client-search"], [1, "client-search-select"], ["aria-label", ".form-select-lg example", 1, "form-select", "form-control", "form-select-lg", 3, "ngModel", "ngModelChange", "change"], ["value", "Nama", "selected", ""], ["value", "ClientID"], ["value", "Email"], [1, "client-search-input"], ["type", "search", "aria-label", "Username", "aria-describedby", "basic-addon1", 1, "form-control", 3, "ngModel", "placeholder", "ngModelChange", "search"], [1, "filter-card"], [1, "expansion-filter", "mat-elevation-z0", 3, "expanded"], [1, "filter-checkbox"], ["mat-button", "", "color", "warn", 3, "click"], ["mat-button", "", "color", "primary", 3, "click"]], template: function CardFilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOutside", function CardFilterComponent_Template_div_clickOutside_1_listener() { return ctx.clickedOutside(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-button-toggle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardFilterComponent_Template_mat_button_toggle_click_2_listener() { return ctx.toogleFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CardFilterComponent_mat_card_4_Template, 38, 4, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CardFilterComponent_Template_select_ngModelChange_7_listener($event) { return ctx.searchCategory = $event; })("change", function CardFilterComponent_Template_select_change_7_listener() { return ctx.onChanges(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Nama");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "ClientID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CardFilterComponent_Template_input_ngModelChange_15_listener($event) { return ctx.searchInput = $event; })("search", function CardFilterComponent_Template_input_search_15_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.filterOpened ? "btn-filter-open" : "btn-filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filterOpened);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchCategory);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchInput)("placeholder", ctx.placeholder);
    } }, directives: [_directive_clickOutside__WEBPACK_IMPORTED_MODULE_2__["ClickOutsideDirective"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanelHeader"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckbox"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanelActionRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]], styles: [".filter-card[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    display: flex;\r\n    padding: 0px !important;\r\n    z-index: 1000;\r\n    margin: 4px 0px 0px 0px !important;\r\n    border-radius: 4px;\r\n    transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\r\n    max-width: 400px;\r\n    flex-direction: column;\r\n}\r\n.expansion-filter[_ngcontent-%COMP%]{\r\n    border-radius: 0px !important;\r\n    transition: none !important;\r\n    margin: 0px !important;\r\n}\r\n.filter-checkbox[_ngcontent-%COMP%]{\r\n    margin: 5px ;\r\n}\r\n.client-search[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: nowrap;\r\n    flex: auto;\r\n}\r\n.btn-filter-open[_ngcontent-%COMP%]{\r\n    background-color: rgba(0, 0, 0, 0.12)!important;\r\n}\r\n.mat-expansion-panel[_ngcontent-%COMP%]:not([class*='mat-elevation-z']) {\r\n    box-shadow: none;\r\n}\r\n.btn-filter[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    border: 1px solid #ced4da;\r\n    padding: 0px !important;\r\n    margin-right: 10px ;\r\n    position: relative;\r\n    line-height: 36px !important;\r\n    border-radius: 4px;\r\n    width: 70px;\r\n}\r\n.client-search-input[_ngcontent-%COMP%]{\r\n    flex: auto;\r\n}\r\n.client-search-select[_ngcontent-%COMP%]{\r\n    margin-right: 5px;\r\n    min-width: 110px;\r\n    max-width: 110px;\r\n}\r\n.filter[_ngcontent-%COMP%]{\r\n    margin: 10px 0px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    align-content: center;\r\n    align-items: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NhcmQvY2FyZC1maWx0ZXIvY2FyZC1maWx0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLHlEQUF5RDtJQUN6RCxnQkFBZ0I7SUFDaEIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsMkJBQTJCO0lBQzNCLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsVUFBVTtBQUNkO0FBRUE7SUFDSSwrQ0FBK0M7QUFDbkQ7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjtBQUVBO0lBQ0ksVUFBVTtBQUNkO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY2FyZC9jYXJkLWZpbHRlci9jYXJkLWZpbHRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbHRlci1jYXJke1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIG1hcmdpbjogNHB4IDBweCAwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDI4MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4uZXhwYW5zaW9uLWZpbHRlcntcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZpbHRlci1jaGVja2JveHtcclxuICAgIG1hcmdpbjogNXB4IDtcclxufVxyXG5cclxuLmNsaWVudC1zZWFyY2h7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgZmxleDogYXV0bztcclxufVxyXG5cclxuLmJ0bi1maWx0ZXItb3BlbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMikhaW1wb3J0YW50O1xyXG59XHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdChbY2xhc3MqPSdtYXQtZWxldmF0aW9uLXonXSkge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uYnRuLWZpbHRlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4IDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB3aWR0aDogNzBweDtcclxufVxyXG5cclxuLmNsaWVudC1zZWFyY2gtaW5wdXR7XHJcbiAgICBmbGV4OiBhdXRvO1xyXG59XHJcblxyXG4uY2xpZW50LXNlYXJjaC1zZWxlY3R7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIG1pbi13aWR0aDogMTEwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDExMHB4O1xyXG59XHJcblxyXG4uZmlsdGVye1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardFilterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card-filter',
                templateUrl: './card-filter.component.html',
                styleUrls: ['./card-filter.component.css'],
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }]; }, { queryParam: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();
class FilterValue {
}
class CheckListFilter {
}


/***/ }),

/***/ "./src/app/shared/details/component/custom/detail-dokumen/detail-dokumen.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/shared/details/component/custom/detail-dokumen/detail-dokumen.component.ts ***!
  \********************************************************************************************/
/*! exports provided: DetailDokumenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailDokumenComponent", function() { return DetailDokumenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function DetailDokumenComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dokumen_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dokumen_r1);
} }
class DetailDokumenComponent {
    constructor(datePipe) {
        this.datePipe = datePipe;
        this.imageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dokumenList = [];
    }
    ;
    ngOnInit() {
        this.checkDokumen();
    }
    checkDokumen() {
        if (this.data['type'] && this.data['type'].toString().match(',')) {
            this.dokumenList = this.data['type'].toString().split('||')[0].split(',');
            this.dokumenList.pop();
        }
        else {
            this.dokumenList.push(this.data['type']);
        }
        this.RBAchecked = this.dokumenList.some((dokumen) => dokumen == "RBA");
        this.dokumenModifiedDate = this.datePipe.transform(this.data['modifiedDate'], 'EEEE dd-MMM-yyyy HH:mm:ss');
    }
    emitEvent() {
        this.imageEvent.emit(this.index);
    }
}
DetailDokumenComponent.ɵfac = function DetailDokumenComponent_Factory(t) { return new (t || DetailDokumenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"])); };
DetailDokumenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailDokumenComponent, selectors: [["app-detail-dokumen"]], inputs: { index: "index", data: "data" }, outputs: { imageEvent: "imageEvent" }, decls: 14, vars: 3, consts: [[1, "row", "mb-4"], [1, "col-md-3", "label-text"], [1, "main"], [1, "col-md-6"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "fas", "fa-eye"], [4, "ngFor", "ngForOf"], [1, "hr-dashed"], [1, "row", "px-3"], [1, "form-check"], ["type", "checkbox", "checked", "", "disabled", "", 1, "form-check-input"], [1, "form-check-label"]], template: function DetailDokumenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailDokumenComponent_Template_button_click_5_listener() { return ctx.emitEvent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DetailDokumenComponent_div_8_Template, 6, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Tanggal Upload: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Dokumen ", ctx.index + 1, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dokumenList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.dokumenModifiedDate, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["@media(max-width: 768px) \r\n{\r\n.label-text[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n  }\r\n}\r\n\r\n@media(min-width: 768px) \r\n{\r\n.label-text[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n  }\r\n}\r\n\r\n.main[_ngcontent-%COMP%] {\r\n  font-weight: 700;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2RldGFpbHMvY29tcG9uZW50L2N1c3RvbS9kZXRhaWwtZG9rdW1lbi9kZXRhaWwtZG9rdW1lbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBO0lBQ0ksZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7O0FBRUE7SUFDSSxpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9kZXRhaWxzL2NvbXBvbmVudC9jdXN0b20vZGV0YWlsLWRva3VtZW4vZGV0YWlsLWRva3VtZW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KSBcclxue1xyXG4ubGFiZWwtdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhKG1pbi13aWR0aDogNzY4cHgpIFxyXG57XHJcbi5sYWJlbC10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxufVxyXG5cclxuLm1haW4ge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailDokumenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detail-dokumen',
                templateUrl: './detail-dokumen.component.html',
                styleUrls: ['./detail-dokumen.component.css']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"] }]; }, { index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], imageEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/details/component/custom/detail-fasilitas/detail-fasilitas-debit/detail-fasilitas-debit.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/shared/details/component/custom/detail-fasilitas/detail-fasilitas-debit/detail-fasilitas-debit.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: DetailFasilitasDebitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailFasilitasDebitComponent", function() { return DetailFasilitasDebitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _detail_fasilitas_fitur_detail_fasilitas_fitur_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../detail-fasilitas-fitur/detail-fasilitas-fitur.component */ "./src/app/shared/details/component/custom/detail-fasilitas/detail-fasilitas-fitur/detail-fasilitas-fitur.component.ts");
/* harmony import */ var _detail_table_mdr_detail_table_mdr_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../detail-table-mdr/detail-table-mdr.component */ "./src/app/shared/details/component/custom/detail-fasilitas/detail-table-mdr/detail-table-mdr.component.ts");





function DetailFasilitasDebitComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "MDR Debit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-detail-table-mdr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-detail-table-mdr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("key", ctx_r1.key["onUs"])("dataList", ctx_r1.dataDebit[ctx_r1.jsonKey.facilityCards])("tableMdr", ctx_r1.debetMDR["onUs"])("title", "On US");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("key", ctx_r1.key["offUs"])("dataList", ctx_r1.dataDebit[ctx_r1.jsonKey.facilityCards])("tableMdr", ctx_r1.debetMDR["offUs"])("title", "Off US");
} }
function DetailFasilitasDebitComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DetailFasilitasDebitComponent_div_0_div_1_Template, 8, 8, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Fitur");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-detail-fasilitas-fitur", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.category == "outlet" && ctx_r0.dataDebit[ctx_r0.jsonKey.facilityCards]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fiturConfiguration", ctx_r0.fiturMenuDebit)("length", ctx_r0.dataDebit[ctx_r0.jsonKey.facilityFiturs] ? ctx_r0.dataDebit[ctx_r0.jsonKey.facilityFiturs].length : "0");
} }
class DetailFasilitasDebitComponent {
    constructor() {
        this.debetMDR = {
            onUs: [
                {
                    label: 'On Us',
                    name: 'BCA'
                },
            ],
            offUs: [
                {
                    label: 'Debit Domestik',
                    name: 'Bank Lain'
                },
                {
                    label: 'Maestro',
                    name: 'Maestro'
                },
            ]
        };
        this.key = {
            onUs: {
                name: 'nameOnUs',
                mdr: 'mdrOnUs',
                flag: 'isActiveOnUs'
            },
            offUs: {
                name: 'nameOffUs',
                mdr: 'mdrOffUs',
                flag: 'isActiveOffUs'
            }
        };
        this.fiturMenuDebit = [
            {
                name: 'EAL',
            },
            {
                name: 'Tunai BCA',
                children1: [{
                        inputType: 'currency',
                        name: 'Fee',
                    },
                    {
                        inputType: 'currency',
                        name: 'Biaya Admin',
                    }]
            },
            {
                name: 'Transfer Virtual Account',
            },
            {
                name: 'Enable Fee Debit',
                children1: [{
                        inputType: 'currency',
                        name: 'Fee',
                    }]
            },
            {
                name: 'MPN',
            },
        ];
    }
    ngOnInit() {
        if (this.dataDebit && this.dataDebit[this.jsonKey.facilityFiturs]) {
            this.fiturMenuDebit.forEach(menu => {
                this.dataDebit[this.jsonKey.facilityFiturs].forEach(fitur => {
                    if (fitur.name == menu.name) {
                        menu.value = true;
                        if (menu.children1) {
                            menu.children1.forEach(itemChild => {
                                fitur[this.jsonKey.facFiturItems].forEach(itemFitur => {
                                    if (itemFitur.name == itemChild.name && itemFitur.value && itemFitur.value != 'false') {
                                        itemChild.value = itemFitur.value;
                                    }
                                });
                            });
                        }
                    }
                });
            });
            this.length = this.dataDebit[this.jsonKey.facilityFiturs].length;
        }
    }
}
DetailFasilitasDebitComponent.ɵfac = function DetailFasilitasDebitComponent_Factory(t) { return new (t || DetailFasilitasDebitComponent)(); };
DetailFasilitasDebitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailFasilitasDebitComponent, selectors: [["app-detail-fasilitas-debit"]], inputs: { jsonKey: "jsonKey", category: "category", dataDebit: "dataDebit" }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["class", "row mb-2", 4, "ngIf"], [1, "row", "mb-2"], [1, "col-md-3", "label-text"], [1, "main"], [1, "col-md-4"], [3, "fiturConfiguration", "length"], [3, "key", "dataList", "tableMdr", "title"]], template: function DetailFasilitasDebitComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DetailFasilitasDebitComponent_div_0_Template, 8, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataDebit);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _detail_fasilitas_fitur_detail_fasilitas_fitur_component__WEBPACK_IMPORTED_MODULE_2__["DetailFasilitasFiturComponent"], _detail_table_mdr_detail_table_mdr_component__WEBPACK_IMPORTED_MODULE_3__["DetailTableMdrComponent"]], styles: ["@media(max-width: 768px) \r\n{\r\n.label-text[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n  }\r\n}\r\n\r\n@media(min-width: 768px) \r\n{\r\n.label-text[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n  }\r\n}\r\n\r\n.main[_ngcontent-%COMP%] {\r\n  font-weight: 700;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2RldGFpbHMvY29tcG9uZW50L2N1c3RvbS9kZXRhaWwtZmFzaWxpdGFzL2RldGFpbC1mYXNpbGl0YXMtZGViaXQvZGV0YWlsLWZhc2lsaXRhcy1kZWJpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBO0lBQ0ksZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7O0FBRUE7SUFDSSxpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9kZXRhaWxzL2NvbXBvbmVudC9jdXN0b20vZGV0YWlsLWZhc2lsaXRhcy9kZXRhaWwtZmFzaWxpdGFzLWRlYml0L2RldGFpbC1mYXNpbGl0YXMtZGViaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KSBcclxue1xyXG4ubGFiZWwtdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhKG1pbi13aWR0aDogNzY4cHgpIFxyXG57XHJcbi5sYWJlbC10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxufVxyXG5cclxuLm1haW4ge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailFasilitasDebitComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detail-fasilitas-debit',
                templateUrl: './detail-fasilitas-debit.component.html',
                styleUrls: ['./detail-fasilitas-debit.component.css']
            }]
    }], function () { return []; }, { jsonKey: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], category: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dataDebit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/details/component/custom/detail-fasilitas/detail-fasilitas-fitur-controller/detail-fasilitas-fitur-controller.component.ts":
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/shared/details/component/custom/detail-fasilitas/detail-fasilitas-fitur-controller/detail-fasilitas-fitur-controller.component.ts ***!
  \***************************************************************************************************************************************************/
/*! exports provided: DetailFasilitasFiturControllerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailFasilitasFiturControllerComponent", function() { return DetailFasilitasFiturControllerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function DetailFasilitasFiturControllerComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "RP.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.child.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.value);
} }
function DetailFasilitasFiturControllerComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.child.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.value);
} }
function DetailFasilitasFiturControllerComponent_ng_container_3_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r5.child.prepend, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function DetailFasilitasFiturControllerComponent_ng_container_3_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r6.child.append, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function DetailFasilitasFiturControllerComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DetailFasilitasFiturControllerComponent_ng_container_3_div_5_Template, 3, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DetailFasilitasFiturControllerComponent_ng_container_3_div_7_Template, 3, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.child.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.child.prepend);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.child.append);
} }
function DetailFasilitasFiturControllerComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.value);
} }
function DetailFasilitasFiturControllerComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.value);
} }
class DetailFasilitasFiturControllerComponent {
    constructor(decimalPipe, datePipe) {
        this.decimalPipe = decimalPipe;
        this.datePipe = datePipe;
        this.value = "";
    }
    ngOnInit() {
        switch (this.child.inputType) {
            case 'currency':
                this.value = this.child.value.match('^[0-9]*$') ? this.decimalPipe.transform(this.child.value, '1.0-2') : this.child.value;
                break;
            case 'hour':
                this.value = this.child.value.match('^[0-9]*$') ? this.child.value.slice(0, 2) + ":" + this.child.value.slice(2, 4) : this.child.value;
                break;
            case 'text':
                this.value = this.child.value;
                break;
            case 'checkbox':
                this.value = this.child.name;
                // this.child.value != 'true' && this.child.value != true ? this.child.value :
                break;
            case 'radio':
                this.value = this.child.value != 'true' && this.child.value != true ? this.child.value : this.child.name;
                break;
        }
    }
}
DetailFasilitasFiturControllerComponent.ɵfac = function DetailFasilitasFiturControllerComponent_Factory(t) { return new (t || DetailFasilitasFiturControllerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"])); };
DetailFasilitasFiturControllerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailFasilitasFiturControllerComponent, selectors: [["app-detail-fasilitas-fitur-controller"]], inputs: { child: "child" }, decls: 6, vars: 6, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [1, "form-group"], [1, "font-italic"], [1, "input-group", "input-group-sm"], [1, "input-group-prepend"], [1, "input-group-text", "main"], ["type", "text", "disabled", "", 1, "form-control", "form-control-sm", "text-right", 3, "value"], [1, "fas", "fa-clock"], ["class", "input-group-prepend", 4, "ngIf"], ["class", "input-group-append", 4, "ngIf"], [3, "innerHTML"], [1, "input-group-append"], [1, "form-group", "ml-3"], ["type", "checkbox", "disabled", "", "checked", "", 1, "form-check-input"], [1, "form-check-label"], ["type", "radio", "disabled", "", "checked", "", 1, "form-check-input"]], template: function DetailFasilitasFiturControllerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DetailFasilitasFiturControllerComponent_ng_container_1_Template, 9, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DetailFasilitasFiturControllerComponent_ng_container_2_Template, 9, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DetailFasilitasFiturControllerComponent_ng_container_3_Template, 8, 4, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DetailFasilitasFiturControllerComponent_ng_container_4_Template, 5, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DetailFasilitasFiturControllerComponent_ng_container_5_Template, 5, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.child.inputType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "hour");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "radio");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["@media(max-width: 768px) \r\n{\r\n.label-text[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n  }\r\n}\r\n\r\n@media(min-width: 768px) \r\n{\r\n.label-text[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n  }\r\n}\r\n\r\n.main[_ngcontent-%COMP%] {\r\n  font-weight: 700;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2RldGFpbHMvY29tcG9uZW50L2N1c3RvbS9kZXRhaWwtZmFzaWxpdGFzL2RldGFpbC1mYXNpbGl0YXMtZml0dXItY29udHJvbGxlci9kZXRhaWwtZmFzaWxpdGFzLWZpdHVyLWNvbnRyb2xsZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTtJQUNJLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBOztBQUVBO0lBQ0ksaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZGV0YWlscy9jb21wb25lbnQvY3VzdG9tL2RldGFpbC1mYXNpbGl0YXMvZGV0YWlsLWZhc2lsaXRhcy1maXR1ci1jb250cm9sbGVyL2RldGFpbC1mYXNpbGl0YXMtZml0dXItY29udHJvbGxlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhKG1heC13aWR0aDogNzY4cHgpIFxyXG57XHJcbi5sYWJlbC10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEobWluLXdpZHRoOiA3NjhweCkgXHJcbntcclxuLmxhYmVsLXRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG59XHJcblxyXG4ubWFpbiB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailFasilitasFiturControllerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detail-fasilitas-fitur-controller',
                templateUrl: './detail-fasilitas-fitur-controller.component.html',
                styleUrls: ['./detail-fasilitas-fitur-controller.component.css']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"] }]; }, { child: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/details/component/custom/detail-fasilitas/detail-fasilitas-fitur/detail-fasilitas-fitur.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/shared/details/component/custom/detail-fasilitas/detail-fasilitas-fitur/detail-fasilitas-fitur.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: DetailFasilitasFiturComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailFasilitasFiturComponent", function() { return DetailFasilitasFiturComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _detail_fasilitas_fitur_controller_detail_fasilitas_fitur_controller_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../detail-fasilitas-fitur-controller/detail-fasilitas-fitur-controller.component */ "./src/app/shared/details/component/custom/detail-fasilitas/detail-fasilitas-fitur-controller/detail-fasilitas-fitur-controller.component.ts");




function DetailFasilitasFiturComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Outlet ini tidak memiliki fitur.\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function DetailFasilitasFiturComponent_ng_container_1_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fitur_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](fitur_r3.name);
} }
function DetailFasilitasFiturComponent_ng_container_1_ng_container_1_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-detail-fasilitas-fitur-controller", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const child1_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("child", child1_r7);
} }
function DetailFasilitasFiturComponent_ng_container_1_ng_container_1_ng_container_2_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-detail-fasilitas-fitur-controller", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const child2_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("child", child2_r11);
} }
function DetailFasilitasFiturComponent_ng_container_1_ng_container_1_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DetailFasilitasFiturComponent_ng_container_1_ng_container_1_ng_container_2_ng_container_2_div_1_Template, 3, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const child2_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", child2_r11 == null ? null : child2_r11.value);
} }
function DetailFasilitasFiturComponent_ng_container_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DetailFasilitasFiturComponent_ng_container_1_ng_container_1_ng_container_2_div_1_Template, 3, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DetailFasilitasFiturComponent_ng_container_1_ng_container_1_ng_container_2_ng_container_2_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const child1_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", child1_r7 == null ? null : child1_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", child1_r7 == null ? null : child1_r7.children2);
} }
function DetailFasilitasFiturComponent_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DetailFasilitasFiturComponent_ng_container_1_ng_container_1_div_1_Template, 5, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DetailFasilitasFiturComponent_ng_container_1_ng_container_1_ng_container_2_Template, 3, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const fitur_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", fitur_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", fitur_r3.children1);
} }
function DetailFasilitasFiturComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DetailFasilitasFiturComponent_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.fiturConfiguration);
} }
class DetailFasilitasFiturComponent {
    constructor() { }
    ngOnInit() {
    }
}
DetailFasilitasFiturComponent.ɵfac = function DetailFasilitasFiturComponent_Factory(t) { return new (t || DetailFasilitasFiturComponent)(); };
DetailFasilitasFiturComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailFasilitasFiturComponent, selectors: [["app-detail-fasilitas-fitur"]], inputs: { fiturConfiguration: "fiturConfiguration", length: "length" }, decls: 2, vars: 2, consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "row mb-2", 4, "ngIf"], [1, "row", "mb-2"], [1, "form-check"], ["type", "checkbox", "disabled", "", "checked", "", 1, "form-check-input"], [1, "form-check-label"], ["class", "row ml-1", 4, "ngIf"], [1, "row", "ml-1"], [1, "col"], [3, "child"], ["class", "row ml-4", 4, "ngIf"], [1, "row", "ml-4"]], template: function DetailFasilitasFiturComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DetailFasilitasFiturComponent_ng_container_0_Template, 2, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DetailFasilitasFiturComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.length != 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _detail_fasilitas_fitur_controller_detail_fasilitas_fitur_controller_component__WEBPACK_IMPORTED_MODULE_2__["DetailFasilitasFiturControllerComponent"]], styles: ["@media(max-width: 768px) \r\n{\r\n.label-text[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n  }\r\n}\r\n\r\n@media(min-width: 768px) \r\n{\r\n.label-text[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n  }\r\n}\r\n\r\n.main[_ngcontent-%COMP%] {\r\n  font-weight: 700;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2RldGFpbHMvY29tcG9uZW50L2N1c3RvbS9kZXRhaWwtZmFzaWxpdGFzL2RldGFpbC1mYXNpbGl0YXMtZml0dXIvZGV0YWlsLWZhc2lsaXRhcy1maXR1ci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBO0lBQ0ksZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7O0FBRUE7SUFDSSxpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9kZXRhaWxzL2NvbXBvbmVudC9jdXN0b20vZGV0YWlsLWZhc2lsaXRhcy9kZXRhaWwtZmFzaWxpdGFzLWZpdHVyL2RldGFpbC1mYXNpbGl0YXMtZml0dXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KSBcclxue1xyXG4ubGFiZWwtdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhKG1pbi13aWR0aDogNzY4cHgpIFxyXG57XHJcbi5sYWJlbC10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxufVxyXG5cclxuLm1haW4ge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailFasilitasFiturComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detail-fasilitas-fitur',
                templateUrl: './detail-fasilitas-fitur.component.html',
                styleUrls: ['./detail-fasilitas-fitur.component.css']
            }]
    }], function () { return []; }, { fiturConfiguration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], length: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/details/component/custom/detail-fasilitas/detail-fasilitas-flazz/detail-fasilitas-flazz.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/shared/details/component/custom/detail-fasilitas/detail-fasilitas-flazz/detail-fasilitas-flazz.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: DetailFasilitasFlazzComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailFasilitasFlazzComponent", function() { return DetailFasilitasFlazzComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _detail_fasilitas_fitur_detail_fasilitas_fitur_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../detail-fasilitas-fitur/detail-fasilitas-fitur.component */ "./src/app/shared/details/component/custom/detail-fasilitas/detail-fasilitas-fitur/detail-fasilitas-fitur.component.ts");



class DetailFasilitasFlazzComponent {
    constructor() {
        this.fiturMenuFlazz = [
            {
                name: 'Flazz Top Up Kartu + Update Saldo',
                children1: [{
                        inputType: 'currency',
                        name: 'Minimal Top Up',
                    },
                    {
                        inputType: 'text',
                        name: 'Fee Merchant',
                    },
                    {
                        inputType: 'text',
                        name: 'Fee Nasabah',
                    }]
            },
            {
                name: 'Flazz Top Up Tunai',
                children1: [{
                        inputType: 'text',
                        name: 'Fee Merchant',
                    },
                    {
                        inputType: 'text',
                        name: 'Fee Nasabah',
                    }]
            },
            {
                name: 'Flazz Payment',
            },
            {
                name: 'Flazz Perdana + Harga Perdana',
                children1: [{
                        inputType: 'text',
                        name: 'Amount',
                        altValue: { "NONCABANG": "Merchant" }
                    }]
            },
            {
                name: 'Single Amount',
                children1: [
                    {
                        id: 38,
                        inputType: 'currency',
                        name: 'Nominal',
                    },
                    {
                        id: 39,
                        inputType: 'currency',
                        name: 'Nominal',
                    },
                    {
                        id: 40,
                        inputType: 'currency',
                        name: 'Nominal',
                    },
                    {
                        id: 41,
                        inputType: 'currency',
                        name: 'Nominal',
                    },
                    {
                        id: 42,
                        inputType: 'currency',
                        name: 'Nominal',
                    },
                ]
            },
            {
                name: 'Show Expired Date',
            },
            {
                name: 'Positive List/Fleet',
                children1: [{
                        inputType: 'checkbox',
                        name: 'Grup Patra',
                    }]
            },
        ];
    }
    ngOnInit() {
        if (this.dataFlazz && this.dataFlazz[this.jsonKey.facilityFiturs]) {
            this.fiturMenuFlazz.forEach(menu => {
                this.dataFlazz[this.jsonKey.facilityFiturs].forEach(fitur => {
                    if (fitur.name == menu.name) {
                        menu.value = true;
                        if (menu.children1) {
                            menu.children1.forEach(itemChild => {
                                fitur[this.jsonKey.facFiturItems].forEach(itemFitur => {
                                    //patokan dari namanya
                                    if (!itemChild.id && itemFitur.name == itemChild.name && itemFitur.value && itemFitur.value != 'false') {
                                        itemChild.value = itemChild.altValue && itemChild.altValue[itemFitur.value] ? itemChild.altValue[itemFitur.value] : itemFitur.value;
                                    }
                                    //patokan dari namanya
                                    else if (itemChild.id && itemChild.id == itemFitur.facilityFiturItemId && itemFitur.value && itemFitur.value != 'false') {
                                        itemChild.value = itemChild.altValue && itemChild.altValue[itemFitur.value] ? itemChild.altValue[itemFitur.value] : itemFitur.value;
                                    }
                                });
                            });
                        }
                    }
                });
            });
            this.length = this.dataFlazz[this.jsonKey.facilityFiturs] ? this.dataFlazz[this.jsonKey.facilityFiturs].length : '0';
        }
    }
}
DetailFasilitasFlazzComponent.ɵfac = function DetailFasilitasFlazzComponent_Factory(t) { return new (t || DetailFasilitasFlazzComponent)(); };
DetailFasilitasFlazzComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailFasilitasFlazzComponent, selectors: [["app-detail-fasilitas-flazz"]], inputs: { dataFlazz: "dataFlazz", jsonKey: "jsonKey" }, decls: 6, vars: 2, consts: [[1, "row", "mb-2"], [1, "col-md-3", "label-text"], [1, "main"], [1, "col-md-4"], [3, "fiturConfiguration", "length"]], template: function DetailFasilitasFlazzComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Fitur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-detail-fasilitas-fitur", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fiturConfiguration", ctx.fiturMenuFlazz)("length", ctx.length);
    } }, directives: [_detail_fasilitas_fitur_detail_fasilitas_fitur_component__WEBPACK_IMPORTED_MODULE_1__["DetailFasilitasFiturComponent"]], styles: ["@media(max-width: 768px) \r\n{\r\n.label-text[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n  }\r\n}\r\n\r\n@media(min-width: 768px) \r\n{\r\n.label-text[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n  }\r\n}\r\n\r\n.main[_ngcontent-%COMP%] {\r\n  font-weight: 700;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2RldGFpbHMvY29tcG9uZW50L2N1c3RvbS9kZXRhaWwtZmFzaWxpdGFzL2RldGFpbC1mYXNpbGl0YXMtZmxhenovZGV0YWlsLWZhc2lsaXRhcy1mbGF6ei5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBO0lBQ0ksZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7O0FBRUE7SUFDSSxpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9kZXRhaWxzL2NvbXBvbmVudC9jdXN0b20vZGV0YWlsLWZhc2lsaXRhcy9kZXRhaWwtZmFzaWxpdGFzLWZsYXp6L2RldGFpbC1mYXNpbGl0YXMtZmxhenouY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KSBcclxue1xyXG4ubGFiZWwtdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhKG1pbi13aWR0aDogNzY4cHgpIFxyXG57XHJcbi5sYWJlbC10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxufVxyXG5cclxuLm1haW4ge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailFasilitasFlazzComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detail-fasilitas-flazz',
                templateUrl: './detail-fasilitas-flazz.component.html',
                styleUrls: ['./detail-fasilitas-flazz.component.css']
            }]
    }], function () { return []; }, { dataFlazz: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], jsonKey: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/details/component/custom/detail-fasilitas/detail-fasilitas-kredit/detail-fasilitas-kredit.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/shared/details/component/custom/detail-fasilitas/detail-fasilitas-kredit/detail-fasilitas-kredit.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: DetailFasilitasKreditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailFasilitasKreditComponent", function() { return DetailFasilitasKreditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _detail_fasilitas_fitur_detail_fasilitas_fitur_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../detail-fasilitas-fitur/detail-fasilitas-fitur.component */ "./src/app/shared/details/component/custom/detail-fasilitas/detail-fasilitas-fitur/detail-fasilitas-fitur.component.ts");
/* harmony import */ var _detail_table_mdr_detail_table_mdr_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../detail-table-mdr/detail-table-mdr.component */ "./src/app/shared/details/component/custom/detail-fasilitas/detail-table-mdr/detail-table-mdr.component.ts");





function DetailFasilitasKreditComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "MDR Kredit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-detail-table-mdr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-detail-table-mdr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("key", ctx_r1.key["onUs"])("tableMdr", ctx_r1.kreditMDR["onUs"])("dataList", ctx_r1.dataKredit[ctx_r1.jsonKey.facilityCards])("title", "On US");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("key", ctx_r1.key["offUs"])("tableMdr", ctx_r1.kreditMDR["offUs"])("dataList", ctx_r1.dataKredit[ctx_r1.jsonKey.facilityCards])("title", "Off US");
} }
function DetailFasilitasKreditComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DetailFasilitasKreditComponent_div_0_div_1_Template, 8, 8, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Fitur");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-detail-fasilitas-fitur", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.category == "outlet" && ctx_r0.dataKredit[ctx_r0.jsonKey.facilityCards]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fiturConfiguration", ctx_r0.fiturMenuKredit)("length", ctx_r0.length);
} }
class DetailFasilitasKreditComponent {
    constructor() {
        this.kreditMDR = {
            onUs: [
                {
                    label: 'BCA Card',
                    name: 'BCA Card'
                },
                {
                    label: 'BCA Visa',
                    name: 'BCA Visa'
                },
                {
                    label: 'BCA Master',
                    name: 'BCA Master'
                },
                {
                    label: 'BCA JCB',
                    name: 'BCA JCB'
                },
                {
                    label: 'BCA Amex',
                    name: 'BCA Amex'
                },
                {
                    label: 'BCA CUP',
                    name: 'BCA CUP'
                }
            ],
            offUs: [
                {
                    label: 'Visa',
                    name: 'Visa'
                },
                {
                    label: 'Master',
                    name: 'Master'
                },
                {
                    label: 'JCB',
                    name: 'JCB'
                },
                {
                    label: 'Amex',
                    name: 'Amex'
                },
                {
                    label: 'CUP',
                    name: 'CUP'
                }
            ]
        };
        this.key = {
            onUs: {
                name: 'nameOnUs',
                mdr: 'mdrOnUs',
                flag: 'isActiveOnUs'
            },
            offUs: {
                name: 'nameOffUs',
                mdr: 'mdrOffUs',
                flag: 'isActiveOffUs'
            }
        };
        this.fiturMenuKredit = [
            {
                name: 'DCC',
                children1: [
                    {
                        name: 'DCC Print Offering',
                        inputType: 'checkbox',
                    },
                    {
                        name: 'Rebate DCC',
                        inputType: 'text',
                    }
                ]
            },
            {
                name: 'Card Ver+Offline+Release Card Ver',
            },
            {
                name: 'Cicilan',
                children1: [
                    {
                        name: 'Cicilan Regular',
                        inputType: 'checkbox',
                        children2: [
                            {
                                name: 'Plan',
                                inputType: 'text',
                            },
                            {
                                name: 'Everyday Plan',
                                inputType: 'text',
                            },
                        ]
                    },
                    {
                        name: 'Cicilan 0%',
                        inputType: 'checkbox',
                    }
                ],
            },
            {
                name: 'Enable Fee Kredit',
                children1: [
                    {
                        inputType: 'currency',
                        name: 'Fee',
                    }
                ]
            },
            {
                name: 'Manual Key In + Show Expiry',
            },
            {
                name: 'Tips',
            },
            {
                name: 'Adjustment',
            },
            {
                name: 'Refund',
            },
        ];
        this.length = 0;
    }
    ngOnInit() {
        if (this.dataKredit && this.dataKredit[this.jsonKey.facilityFiturs]) {
            this.fiturMenuKredit.forEach(menu => {
                this.dataKredit[this.jsonKey.facilityFiturs].forEach(fitur => {
                    if (fitur.name == menu.name) {
                        menu.value = true;
                        this.length++;
                        if (menu.children1) {
                            menu.children1.forEach(itemChild => {
                                fitur[this.jsonKey.facFiturItems].forEach(itemFitur => {
                                    if (itemFitur.name == itemChild.name && itemFitur.value && itemFitur.value != 'false') {
                                        itemChild.value = itemFitur.value;
                                    }
                                });
                            });
                        }
                    }
                    else if (menu.name == 'Cicilan' && (fitur.name == 'Cicilan Regular' || fitur.name == 'Cicilan 0%')) {
                        menu.value = true;
                        this.length++;
                        const itemMenu = menu.children1.find((child) => child.name == fitur.name);
                        itemMenu.value = true;
                        if (itemMenu.children2) {
                            itemMenu.children2.forEach(itemChild => {
                                fitur[this.jsonKey.facFiturItems].forEach(itemFitur => {
                                    if (itemFitur.name == itemChild.name) {
                                        itemChild.value = itemFitur.value;
                                    }
                                });
                            });
                        }
                    }
                });
            });
        }
    }
}
DetailFasilitasKreditComponent.ɵfac = function DetailFasilitasKreditComponent_Factory(t) { return new (t || DetailFasilitasKreditComponent)(); };
DetailFasilitasKreditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailFasilitasKreditComponent, selectors: [["app-detail-fasilitas-kredit"]], inputs: { jsonKey: "jsonKey", category: "category", dataKredit: "dataKredit" }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["class", "row mb-2", 4, "ngIf"], [1, "row", "mb-2"], [1, "col-md-3", "label-text"], [1, "main"], [1, "col-md-4"], [3, "fiturConfiguration", "length"], [3, "key", "tableMdr", "dataList", "title"]], template: function DetailFasilitasKreditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DetailFasilitasKreditComponent_div_0_Template, 8, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataKredit);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _detail_fasilitas_fitur_detail_fasilitas_fitur_component__WEBPACK_IMPORTED_MODULE_2__["DetailFasilitasFiturComponent"], _detail_table_mdr_detail_table_mdr_component__WEBPACK_IMPORTED_MODULE_3__["DetailTableMdrComponent"]], styles: ["@media(max-width: 768px) \r\n{\r\n.label-text[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n  }\r\n}\r\n\r\n@media(min-width: 768px) \r\n{\r\n.label-text[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n  }\r\n}\r\n\r\n.main[_ngcontent-%COMP%] {\r\n  font-weight: 700;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2RldGFpbHMvY29tcG9uZW50L2N1c3RvbS9kZXRhaWwtZmFzaWxpdGFzL2RldGFpbC1mYXNpbGl0YXMta3JlZGl0L2RldGFpbC1mYXNpbGl0YXMta3JlZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7SUFDSSxnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTs7QUFFQTtJQUNJLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2RldGFpbHMvY29tcG9uZW50L2N1c3RvbS9kZXRhaWwtZmFzaWxpdGFzL2RldGFpbC1mYXNpbGl0YXMta3JlZGl0L2RldGFpbC1mYXNpbGl0YXMta3JlZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEobWF4LXdpZHRoOiA3NjhweCkgXHJcbntcclxuLmxhYmVsLXRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYShtaW4td2lkdGg6IDc2OHB4KSBcclxue1xyXG4ubGFiZWwtdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcbn1cclxuXHJcbi5tYWluIHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailFasilitasKreditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detail-fasilitas-kredit',
                templateUrl: './detail-fasilitas-kredit.component.html',
                styleUrls: ['./detail-fasilitas-kredit.component.css']
            }]
    }], function () { return []; }, { jsonKey: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], category: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dataKredit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/details/component/custom/detail-fasilitas/detail-fasilitas-lainnya/detail-fasilitas-lainnya.component.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/shared/details/component/custom/detail-fasilitas/detail-fasilitas-lainnya/detail-fasilitas-lainnya.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: DetailFasilitasLainnyaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailFasilitasLainnyaComponent", function() { return DetailFasilitasLainnyaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _detail_fasilitas_fitur_detail_fasilitas_fitur_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../detail-fasilitas-fitur/detail-fasilitas-fitur.component */ "./src/app/shared/details/component/custom/detail-fasilitas/detail-fasilitas-fitur/detail-fasilitas-fitur.component.ts");



class DetailFasilitasLainnyaComponent {
    constructor() {
        this.fiturMenuEdcCompliment = {
            name: 'EDC Compliment',
        };
        this.fiturMenuLoyalty = {
            name: 'Loyalty',
        };
        this.fiturMenuLainnya = [
            {
                name: 'ECR',
                children1: [
                    {
                        inputType: 'text',
                        name: 'Tipe',
                        altValue: {
                            NA: "ECR Fase 1 atau 3",
                            KA: "ECR Fase KAI",
                            NP: "ECR Fase NPCT1",
                            PL: "ECR Fase Pelindo",
                            PM: "ECR Fase Patraniaga",
                            BZ: "ECR Fase Benzine",
                            MD: "ECR Fase MCD",
                            Decathlon: "ECR Fase Decathlon",
                            ST: "ECR Fase Samsat",
                        }
                    },
                ]
            },
            {
                name: 'Number of Print',
                children1: [
                    {
                        inputType: 'text',
                        name: 'Jumlah',
                    },
                ]
            },
            {
                name: 'Fare & Non Fare',
                children1: [
                    {
                        inputType: 'checkbox',
                        name: 'Enable Print',
                    },
                    {
                        inputType: 'checkbox',
                        name: 'Tampilan Layar',
                    },
                    {
                        inputType: 'text',
                        name: 'Ticket No.',
                    },
                ]
            },
            {
                name: 'Custom Masking Merchant Copy',
                children1: [
                    {
                        inputType: 'text',
                        name: 'Masking',
                        altValue: {
                            '124': '1234.1234.**.1234/1.2.4',
                            'TRC': '*.*.**.1234/TRC',
                            '44': '1234.*.*.1234/4.4',
                            '64': '1234.12xx.xxxx.1234/6.4',
                        }
                    },
                ]
            },
            {
                name: 'Maksimum Amount',
                children1: [
                    {
                        inputType: 'text',
                        name: 'Nominal',
                    },
                ]
            }
        ];
        this.fiturMenuCMR = {
            name: 'CMR',
            children1: []
        };
        this.fiturMenuAutoSettle = {
            name: 'Auto Settle',
            children1: []
        };
        this.fiturMenuFreeUangIuran = {
            name: 'Free Uang Iuran',
            children1: []
        };
        this.fiturMenuForceSettlementDay = {
            name: 'Force Settlement Day',
            children1: []
        };
        this.fiturNumberOfReprint = {
            name: 'Number of Reprint',
            children1: [
                {
                    inputType: 'text',
                    name: 'Jumlah',
                    altValue: { '255': 'No Limit' }
                },
            ]
        };
        this.ecrMaskingMapping = {
            '16': "By Merchant",
            '17': "Unmask",
            '18': "6.4",
        };
        this.length = 0;
    }
    ngOnInit() {
        if (this.dataLainnya && this.dataLainnya[this.jsonKey.facilityFiturs]) {
            this.fiturMenuLainnya.forEach((menu, index) => {
                this.dataLainnya[this.jsonKey.facilityFiturs].forEach(fitur => {
                    if (fitur.name == menu.name) {
                        menu.value = true;
                        this.length++;
                        if (menu.children1) {
                            menu.children1.forEach(itemChild => {
                                fitur[this.jsonKey.facFiturItems].forEach(itemFitur => {
                                    if (itemFitur.name == itemChild.name && itemFitur.value && itemFitur.value != 'false') {
                                        itemChild.value = itemChild.altValue && itemChild.altValue[itemFitur.value] ? itemChild.altValue[itemFitur.value] : itemFitur.value;
                                    }
                                });
                            });
                        }
                    }
                    else if (menu.name == 'ECR' && (fitur.name == "ECR Lock Screen" || fitur.name == "ECR Masking")) {
                        var name;
                        var value;
                        if (fitur.name == "ECR Lock Screen") {
                            name = fitur.name;
                            value = 'true';
                            const inputType = 'checkbox';
                            menu.children1[1] = { name, value, inputType };
                        }
                        else if (fitur.name == "ECR Masking") {
                            name = fitur[this.jsonKey.facFiturItems][0].name;
                            value = this.ecrMaskingMapping[fitur[this.jsonKey.facFiturItems][0].value];
                            const inputType = 'text';
                            menu.children1[2] = { name, value, inputType };
                        }
                        this.length++;
                    }
                    else if (index == this.fiturMenuLainnya.length - 1 && fitur.name == 'Number of Reprint') {
                        this.length++;
                        this.fiturNumberOfReprint.value = true;
                        this.fiturNumberOfReprint.children1[0].value =
                            this.fiturNumberOfReprint.children1[0].altValue[fitur[this.jsonKey.facFiturItems][0].value] ?
                                this.fiturNumberOfReprint.children1[0].altValue[fitur[this.jsonKey.facFiturItems][0].value] : fitur[this.jsonKey.facFiturItems][0].value;
                    }
                });
            });
        }
        if (this.dataKredit && this.dataKredit[this.jsonKey.facilityFiturs]) {
            const index = this.dataKredit[this.jsonKey.facilityFiturs].findIndex((itemKR) => itemKR.name == 'Loyalty');
            if (index != -1) {
                this.fiturMenuLoyalty.value = true;
                this.fiturMenuLainnya.unshift(this.fiturMenuLoyalty);
                this.length++;
            }
        }
        if (this.dataKredit && this.dataKredit[this.jsonKey.facilityFiturs]) {
            const index = this.dataKredit[this.jsonKey.facilityFiturs].findIndex((itemKR) => itemKR.name == 'EDC Compliment');
            if (index != -1) {
                this.fiturMenuEdcCompliment.value = true;
                this.fiturMenuLainnya.unshift(this.fiturMenuEdcCompliment);
                this.length++;
            }
        }
        if (this.dataCMR && this.dataCMR[this.jsonKey.facilityItems]) {
            this.fiturMenuCMR.value = true;
            this.dataCMR[this.jsonKey.facilityItems].forEach((itemCMR, index) => {
                var name = 'Email ' + (index + 1);
                var value = itemCMR.value;
                const inputType = 'text';
                this.fiturMenuCMR.children1.push({ name, value, inputType });
            });
            this.fiturMenuLainnya.push(this.fiturMenuCMR);
            this.length++;
        }
        if (this.dataAutoSettle && this.dataAutoSettle[this.jsonKey.facilityItems]) {
            this.fiturMenuAutoSettle.value = true;
            this.dataAutoSettle[this.jsonKey.facilityItems].forEach((itemAS) => {
                var inputType = '';
                var name = itemAS.name;
                var value = itemAS.value;
                inputType = name == 'Setiap Jam' ? 'hour' : 'text';
                this.fiturMenuAutoSettle.children1.push({ name, value, inputType });
            });
            this.fiturMenuLainnya.push(this.fiturMenuAutoSettle);
            this.length++;
        }
        if (this.dataForceSettlementDay && this.dataForceSettlementDay[this.jsonKey.facilityItems]) {
            this.fiturMenuForceSettlementDay.value = true;
            this.dataForceSettlementDay[this.jsonKey.facilityItems].forEach((itemFSD) => {
                var name = 'Setiap';
                var value = itemFSD.value;
                const inputType = 'text';
                this.fiturMenuForceSettlementDay.children1.push({ name, value, inputType });
            });
            this.fiturMenuLainnya.push(this.fiturMenuForceSettlementDay);
            this.length++;
        }
        if (this.dataFreeUangIuran && this.dataFreeUangIuran[this.jsonKey.facilityItems]) {
            this.fiturMenuFreeUangIuran.value = true;
            this.dataFreeUangIuran[this.jsonKey.facilityItems].forEach((itemFUI) => {
                var name = 'Free Uang Iuran';
                var value = itemFUI.value;
                const inputType = 'radio';
                this.fiturMenuFreeUangIuran.children1.push({ name, value, inputType });
            });
            this.fiturMenuLainnya.push(this.fiturMenuFreeUangIuran);
            this.length++;
        }
        this.fiturMenuLainnya.push(this.fiturNumberOfReprint);
    }
}
DetailFasilitasLainnyaComponent.ɵfac = function DetailFasilitasLainnyaComponent_Factory(t) { return new (t || DetailFasilitasLainnyaComponent)(); };
DetailFasilitasLainnyaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailFasilitasLainnyaComponent, selectors: [["app-detail-fasilitas-lainnya"]], inputs: { dataLainnya: "dataLainnya", dataKredit: "dataKredit", dataCMR: "dataCMR", dataFreeUangIuran: "dataFreeUangIuran", dataForceSettlementDay: "dataForceSettlementDay", dataAutoSettle: "dataAutoSettle", jsonKey: "jsonKey" }, decls: 6, vars: 2, consts: [[1, "row", "mb-2"], [1, "col-md-3", "label-text"], [1, "main"], [1, "col-md-4"], [3, "fiturConfiguration", "length"]], template: function DetailFasilitasLainnyaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Fitur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-detail-fasilitas-fitur", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fiturConfiguration", ctx.fiturMenuLainnya)("length", ctx.length);
    } }, directives: [_detail_fasilitas_fitur_detail_fasilitas_fitur_component__WEBPACK_IMPORTED_MODULE_1__["DetailFasilitasFiturComponent"]], styles: ["@media(max-width: 768px) \r\n{\r\n.label-text[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n  }\r\n}\r\n\r\n@media(min-width: 768px) \r\n{\r\n.label-text[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n  }\r\n}\r\n\r\n.main[_ngcontent-%COMP%] {\r\n  font-weight: 700;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2RldGFpbHMvY29tcG9uZW50L2N1c3RvbS9kZXRhaWwtZmFzaWxpdGFzL2RldGFpbC1mYXNpbGl0YXMtbGFpbm55YS9kZXRhaWwtZmFzaWxpdGFzLWxhaW5ueWEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTtJQUNJLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBOztBQUVBO0lBQ0ksaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZGV0YWlscy9jb21wb25lbnQvY3VzdG9tL2RldGFpbC1mYXNpbGl0YXMvZGV0YWlsLWZhc2lsaXRhcy1sYWlubnlhL2RldGFpbC1mYXNpbGl0YXMtbGFpbm55YS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhKG1heC13aWR0aDogNzY4cHgpIFxyXG57XHJcbi5sYWJlbC10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEobWluLXdpZHRoOiA3NjhweCkgXHJcbntcclxuLmxhYmVsLXRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG59XHJcblxyXG4ubWFpbiB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailFasilitasLainnyaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detail-fasilitas-lainnya',
                templateUrl: './detail-fasilitas-lainnya.component.html',
                styleUrls: ['./detail-fasilitas-lainnya.component.css']
            }]
    }], function () { return []; }, { dataLainnya: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dataKredit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dataCMR: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dataFreeUangIuran: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dataForceSettlementDay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dataAutoSettle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], jsonKey: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/details/component/custom/detail-fasilitas/detail-fasilitas/detail-fasilitas.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/shared/details/component/custom/detail-fasilitas/detail-fasilitas/detail-fasilitas.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: DetailFasilitasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailFasilitasComponent", function() { return DetailFasilitasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _detail_fasilitas_debit_detail_fasilitas_debit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../detail-fasilitas-debit/detail-fasilitas-debit.component */ "./src/app/shared/details/component/custom/detail-fasilitas/detail-fasilitas-debit/detail-fasilitas-debit.component.ts");
/* harmony import */ var _detail_fasilitas_kredit_detail_fasilitas_kredit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../detail-fasilitas-kredit/detail-fasilitas-kredit.component */ "./src/app/shared/details/component/custom/detail-fasilitas/detail-fasilitas-kredit/detail-fasilitas-kredit.component.ts");
/* harmony import */ var _detail_fasilitas_flazz_detail_fasilitas_flazz_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../detail-fasilitas-flazz/detail-fasilitas-flazz.component */ "./src/app/shared/details/component/custom/detail-fasilitas/detail-fasilitas-flazz/detail-fasilitas-flazz.component.ts");
/* harmony import */ var _detail_fasilitas_lainnya_detail_fasilitas_lainnya_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../detail-fasilitas-lainnya/detail-fasilitas-lainnya.component */ "./src/app/shared/details/component/custom/detail-fasilitas/detail-fasilitas-lainnya/detail-fasilitas-lainnya.component.ts");







function DetailFasilitasComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Fasilitas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "QRIS Statis");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function DetailFasilitasComponent_ng_container_1_div_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const fas_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](fas_r8.name);
} }
function DetailFasilitasComponent_ng_container_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DetailFasilitasComponent_ng_container_1_div_5_ng_container_1_Template, 6, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fas_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", fas_r8.show);
} }
function DetailFasilitasComponent_ng_container_1_ng_container_7_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailFasilitasComponent_ng_container_1_ng_container_7_li_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const menu_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.activeMenu = menu_r11.name; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("nav-custom", menu_r11.name != ctx_r12.activeMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", menu_r11.name == ctx_r12.activeMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Fitur ", menu_r11.name, "");
} }
function DetailFasilitasComponent_ng_container_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DetailFasilitasComponent_ng_container_1_ng_container_7_li_1_Template, 3, 5, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const menu_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menu_r11.show);
} }
function DetailFasilitasComponent_ng_container_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-detail-fasilitas-debit", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataDebit", ctx_r4.dataFasilitas[ctx_r4.activeMenu])("category", ctx_r4.category)("jsonKey", ctx_r4.jsonKey[ctx_r4.category]);
} }
function DetailFasilitasComponent_ng_container_1_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-detail-fasilitas-kredit", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataKredit", ctx_r5.dataFasilitas[ctx_r5.activeMenu])("category", ctx_r5.category)("jsonKey", ctx_r5.jsonKey[ctx_r5.category]);
} }
function DetailFasilitasComponent_ng_container_1_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-detail-fasilitas-flazz", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataFlazz", ctx_r6.dataFasilitas[ctx_r6.activeMenu])("jsonKey", ctx_r6.jsonKey[ctx_r6.category]);
} }
function DetailFasilitasComponent_ng_container_1_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-detail-fasilitas-lainnya", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataLainnya", ctx_r7.dataFasilitas[ctx_r7.activeMenu])("dataKredit", ctx_r7.dataFasilitas["Kredit"])("dataCMR", ctx_r7.dataFasilitas["CMR"])("dataFreeUangIuran", ctx_r7.dataFasilitas["Free Uang Iuran"])("dataForceSettlementDay", ctx_r7.dataFasilitas["Force Settlement Day"])("dataAutoSettle", ctx_r7.dataFasilitas["Auto Settle"])("jsonKey", ctx_r7.jsonKey[ctx_r7.category]);
} }
function DetailFasilitasComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Fasilitas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DetailFasilitasComponent_ng_container_1_div_5_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DetailFasilitasComponent_ng_container_1_ng_container_7_Template, 2, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DetailFasilitasComponent_ng_container_1_div_9_Template, 2, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DetailFasilitasComponent_ng_container_1_div_10_Template, 2, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DetailFasilitasComponent_ng_container_1_div_11_Template, 2, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DetailFasilitasComponent_ng_container_1_div_12_Template, 2, 7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.fasilitasList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.menuList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r1.activeMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Debit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Kredit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Flazz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Lainnya");
} }
class DetailFasilitasComponent {
    constructor() {
        this.fasilitasList = [
            {
                name: 'Debit',
            },
            {
                name: 'Kredit',
            },
            {
                name: 'Flazz',
            },
            {
                name: 'QRIS',
            },
        ];
        this.menuList = [
            {
                name: 'Debit',
            },
            {
                name: 'Kredit',
            },
            {
                name: 'Flazz',
            },
            {
                name: 'Lainnya',
                show: true
            },
        ];
        this.jsonKey = {
            outlet: {
                facilities: 'oFacilities',
                facilityCards: 'oFacilityCards',
                facilityItems: 'oFacilityItems',
                facilityFiturs: 'oFacilityFiturs',
                facFiturItems: 'oFacFiturItems',
                facFiturItemLists: 'oFacFiturItemLists',
            },
            outletDevices: {
                facilities: 'odFacilities',
                facilityCards: 'odFacilityCards',
                facilityItems: 'odFacilityItems',
                facilityFiturs: 'odFacilityFiturs',
                facFiturItems: 'odFacFiturItems',
                facFiturItemLists: 'odFacFiturItemLists',
            }
        };
        this.dataFasilitas = {};
    }
    ngOnInit() {
        this.insertFasilitas();
    }
    insertFasilitas() {
        if (this.category != 'outletQris') {
            this.dataList.forEach(data => {
                this.dataFasilitas[data.name] = data;
                this.fasilitasList.forEach(fasilitas => {
                    if (data.name == fasilitas.name) {
                        fasilitas.show = true;
                    }
                });
                this.menuList.forEach(menu => {
                    if (data.name == menu.name) {
                        menu.show = true;
                    }
                });
            });
        }
    }
}
DetailFasilitasComponent.ɵfac = function DetailFasilitasComponent_Factory(t) { return new (t || DetailFasilitasComponent)(); };
DetailFasilitasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailFasilitasComponent, selectors: [["app-detail-fasilitas"]], inputs: { category: "category", dataList: "dataList" }, decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "row", "mb-2"], [1, "col-md-3", "label-text"], [1, "main"], [1, "col-md-2"], [1, "form-check"], ["type", "checkbox", "disabled", "", "checked", "", 1, "form-check-input"], [1, "form-check-label"], [4, "ngFor", "ngForOf"], [1, "nav", "nav-tabs", "noselect", "text-primary", "mb-2"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "nav-item", 3, "nav-custom", 4, "ngIf"], [1, "nav-item"], [1, "nav-link", 3, "click"], [3, "dataDebit", "category", "jsonKey"], [3, "dataKredit", "category", "jsonKey"], [3, "dataFlazz", "jsonKey"], [3, "dataLainnya", "dataKredit", "dataCMR", "dataFreeUangIuran", "dataForceSettlementDay", "dataAutoSettle", "jsonKey"]], template: function DetailFasilitasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DetailFasilitasComponent_ng_container_0_Template, 10, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DetailFasilitasComponent_ng_container_1_Template, 13, 7, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.category == "outletQris");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.category != "outletQris");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _detail_fasilitas_debit_detail_fasilitas_debit_component__WEBPACK_IMPORTED_MODULE_2__["DetailFasilitasDebitComponent"], _detail_fasilitas_kredit_detail_fasilitas_kredit_component__WEBPACK_IMPORTED_MODULE_3__["DetailFasilitasKreditComponent"], _detail_fasilitas_flazz_detail_fasilitas_flazz_component__WEBPACK_IMPORTED_MODULE_4__["DetailFasilitasFlazzComponent"], _detail_fasilitas_lainnya_detail_fasilitas_lainnya_component__WEBPACK_IMPORTED_MODULE_5__["DetailFasilitasLainnyaComponent"]], styles: ["@media(max-width: 768px) \r\n{\r\n.label-text[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n  }\r\n}\r\n\r\n@media(min-width: 768px) \r\n{\r\n.label-text[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n  }\r\n}\r\n\r\n.main[_ngcontent-%COMP%] {\r\n  font-weight: 700;\r\n}\r\n\r\n.nav-custom[_ngcontent-%COMP%]:hover\r\n{\r\n    cursor: pointer;\r\n    background-color: rgb(236, 236, 236);\r\n}\r\n\r\n.noselect[_ngcontent-%COMP%] {\r\n  -webkit-touch-callout: none; \r\n    -webkit-user-select: none;    \r\n            user-select: none; \r\n}\r\n\r\n.clickable[_ngcontent-%COMP%]:hover {\r\n  color: #00b7f1;\r\n  cursor: pointer;\r\n}\r\n\r\n.clickable[_ngcontent-%COMP%]\r\n{\r\n  color: #6C676A;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2RldGFpbHMvY29tcG9uZW50L2N1c3RvbS9kZXRhaWwtZmFzaWxpdGFzL2RldGFpbC1mYXNpbGl0YXMvZGV0YWlsLWZhc2lsaXRhcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBO0lBQ0ksZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7O0FBRUE7SUFDSSxpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2Ysb0NBQW9DO0FBQ3hDOztBQUVBO0VBQ0UsMkJBQTJCLEVBQUUsZUFBZTtJQUMxQyx5QkFBeUIsRUFBRSxXQUFXLEVBQ1gsbUJBQW1CLEVBQ25CLDRCQUE0QixFQUM1QiwyQkFBMkI7WUFDOUMsaUJBQWlCLEVBQUU7Z0ZBQ2lEO0FBQ2hGOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9kZXRhaWxzL2NvbXBvbmVudC9jdXN0b20vZGV0YWlsLWZhc2lsaXRhcy9kZXRhaWwtZmFzaWxpdGFzL2RldGFpbC1mYXNpbGl0YXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KSBcclxue1xyXG4ubGFiZWwtdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhKG1pbi13aWR0aDogNzY4cHgpIFxyXG57XHJcbi5sYWJlbC10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxufVxyXG5cclxuLm1haW4ge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5uYXYtY3VzdG9tOmhvdmVyXHJcbntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDIzNiwgMjM2KTtcclxufVxyXG5cclxuLm5vc2VsZWN0IHtcclxuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7IC8qIGlPUyBTYWZhcmkgKi9cclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xyXG4gICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTsgLyogS29ucXVlcm9yIEhUTUwgKi9cclxuICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IC8qIE9sZCB2ZXJzaW9ucyBvZiBGaXJlZm94ICovXHJcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXHJcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lOyAvKiBOb24tcHJlZml4ZWQgdmVyc2lvbiwgY3VycmVudGx5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBwb3J0ZWQgYnkgQ2hyb21lLCBFZGdlLCBPcGVyYSBhbmQgRmlyZWZveCAqL1xyXG59XHJcblxyXG4uY2xpY2thYmxlOmhvdmVyIHtcclxuICBjb2xvcjogIzAwYjdmMTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jbGlja2FibGVcclxue1xyXG4gIGNvbG9yOiAjNkM2NzZBO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailFasilitasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detail-fasilitas',
                templateUrl: './detail-fasilitas.component.html',
                styleUrls: ['./detail-fasilitas.component.css']
            }]
    }], function () { return []; }, { category: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dataList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/details/component/custom/detail-fasilitas/detail-table-mdr/detail-table-mdr.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/shared/details/component/custom/detail-fasilitas/detail-table-mdr/detail-table-mdr.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: DetailTableMdrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailTableMdrComponent", function() { return DetailTableMdrComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function DetailTableMdrComponent_div_0_ng_container_12_ng_container_1_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const table_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](table_r2["label"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", data_r4[ctx_r5.key["mdr"]], " %");
} }
function DetailTableMdrComponent_div_0_ng_container_12_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DetailTableMdrComponent_div_0_ng_container_12_ng_container_1_tr_1_Template, 5, 2, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r4 = ctx.$implicit;
    const table_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, data_r4[ctx_r3.key["name"]]) == _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, table_r2["name"]) && data_r4[ctx_r3.key["flag"]]);
} }
function DetailTableMdrComponent_div_0_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DetailTableMdrComponent_div_0_ng_container_12_ng_container_1_Template, 4, 5, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.dataList);
} }
function DetailTableMdrComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Jenis Kartu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "MDR");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DetailTableMdrComponent_div_0_ng_container_12_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.tableMdr);
} }
class DetailTableMdrComponent {
    constructor() { }
    ngOnInit() {
    }
}
DetailTableMdrComponent.ɵfac = function DetailTableMdrComponent_Factory(t) { return new (t || DetailTableMdrComponent)(); };
DetailTableMdrComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailTableMdrComponent, selectors: [["app-detail-table-mdr"]], inputs: { title: "title", dataList: "dataList", tableMdr: "tableMdr", key: "key" }, decls: 1, vars: 1, consts: [["class", "table-responsive", 4, "ngIf"], [1, "table-responsive"], [1, "table", "text-center"], [1, "text-center"], ["colspan", "2"], [4, "ngFor", "ngForOf"], [4, "ngIf"]], template: function DetailTableMdrComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DetailTableMdrComponent_div_0_Template, 13, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"]], styles: [".table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    padding: 0.2rem 0.5rem  0.2rem 0.5rem;\r\n    vertical-align: middle;\r\n    border-top: 1px solid #dee2e6;\r\n    color: #6c676a;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] \r\n{\r\n    font-size: 14.3px;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]\r\n{\r\n    font-size: 13px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] { \r\n    text-align: right; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2RldGFpbHMvY29tcG9uZW50L2N1c3RvbS9kZXRhaWwtZmFzaWxpdGFzL2RldGFpbC10YWJsZS1tZHIvZGV0YWlsLXRhYmxlLW1kci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLHFDQUFxQztJQUNyQyxzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZGV0YWlscy9jb21wb25lbnQvY3VzdG9tL2RldGFpbC1mYXNpbGl0YXMvZGV0YWlsLXRhYmxlLW1kci9kZXRhaWwtdGFibGUtbWRyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnRhYmxlIHRkLCAudGFibGUgdGgge1xyXG4gICAgcGFkZGluZzogMC4ycmVtIDAuNXJlbSAgMC4ycmVtIDAuNXJlbTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcclxuICAgIGNvbG9yOiAjNmM2NzZhO1xyXG59XHJcblxyXG4udGFibGUgdGggXHJcbntcclxuICAgIGZvbnQtc2l6ZTogMTQuM3B4O1xyXG59XHJcblxyXG4udGFibGUgdGRcclxue1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG5pbnB1dCB7IFxyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7IFxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailTableMdrComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detail-table-mdr',
                templateUrl: './detail-table-mdr.component.html',
                styleUrls: ['./detail-table-mdr.component.css']
            }]
    }], function () { return []; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dataList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], tableMdr: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], key: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/details/component/detail-controller/detail-controller.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/shared/details/component/detail-controller/detail-controller.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: DetailControllerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailControllerComponent", function() { return DetailControllerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _general_detail_default_detail_default_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../general/detail-default/detail-default.component */ "./src/app/shared/details/component/general/detail-default/detail-default.component.ts");
/* harmony import */ var _general_detail_address_detail_address_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../general/detail-address/detail-address.component */ "./src/app/shared/details/component/general/detail-address/detail-address.component.ts");
/* harmony import */ var _general_detail_address_two_detail_address_two_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../general/detail-address-two/detail-address-two.component */ "./src/app/shared/details/component/general/detail-address-two/detail-address-two.component.ts");
/* harmony import */ var _general_detail_multi_value_detail_multi_value_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../general/detail-multi-value/detail-multi-value.component */ "./src/app/shared/details/component/general/detail-multi-value/detail-multi-value.component.ts");
/* harmony import */ var _general_detail_multi_json_label_detail_multi_json_label_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../general/detail-multi-json-label/detail-multi-json-label.component */ "./src/app/shared/details/component/general/detail-multi-json-label/detail-multi-json-label.component.ts");
/* harmony import */ var _general_detail_text_area_disabled_detail_text_area_disabled_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../general/detail-text-area-disabled/detail-text-area-disabled.component */ "./src/app/shared/details/component/general/detail-text-area-disabled/detail-text-area-disabled.component.ts");
/* harmony import */ var _general_detail_text_disabled_detail_text_disabled_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../general/detail-text-disabled/detail-text-disabled.component */ "./src/app/shared/details/component/general/detail-text-disabled/detail-text-disabled.component.ts");
/* harmony import */ var _general_detail_radio_children_disabled_detail_radio_children_disabled_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../general/detail-radio-children-disabled/detail-radio-children-disabled.component */ "./src/app/shared/details/component/general/detail-radio-children-disabled/detail-radio-children-disabled.component.ts");











function DetailControllerComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-detail-default", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("detail", ctx_r1.detail)("data", ctx_r1.data);
} }
function DetailControllerComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-detail-address", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("detail", ctx_r2.detail)("data", ctx_r2.data);
} }
function DetailControllerComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-detail-address-two", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("detail", ctx_r3.detail)("data", ctx_r3.data);
} }
function DetailControllerComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-detail-multi-value", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("detail", ctx_r4.detail)("dataList", ctx_r4.data[ctx_r4.detail.jsonNameParent]);
} }
function DetailControllerComponent_div_0_div_5_app_detail_controller_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-detail-controller", 3);
} if (rf & 2) {
    const children_r14 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("detail", children_r14)("data", ctx_r13.data);
} }
function DetailControllerComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-detail-default", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DetailControllerComponent_div_0_div_5_app_detail_controller_2_Template, 1, 2, "app-detail-controller", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("detail", ctx_r5.detail)("data", ctx_r5.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.detail.children[ctx_r5.data[ctx_r5.detail.jsonName] + ""]);
} }
function DetailControllerComponent_div_0_div_6_app_detail_controller_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-detail-controller", 3);
} if (rf & 2) {
    const children_r17 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("detail", children_r17)("data", ctx_r15.data);
} }
function DetailControllerComponent_div_0_div_6_app_detail_controller_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-detail-controller", 3);
} if (rf & 2) {
    const children_r18 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("detail", children_r18)("data", ctx_r16.data);
} }
function DetailControllerComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DetailControllerComponent_div_0_div_6_app_detail_controller_3_Template, 1, 2, "app-detail-controller", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DetailControllerComponent_div_0_div_6_app_detail_controller_5_Template, 1, 2, "app-detail-controller", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.detail.children["left"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.detail.children["right"]);
} }
function DetailControllerComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.detail.jsonName ? ctx_r7.detail.label + ctx_r7.data[ctx_r7.detail.jsonName] : ctx_r7.detail.label);
} }
function DetailControllerComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DetailControllerComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.detail.label);
} }
function DetailControllerComponent_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-detail-multi-json-label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("detail", ctx_r10.detail)("data", ctx_r10.data);
} }
function DetailControllerComponent_div_0_div_11_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-detail-text-area-disabled", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("detail", ctx_r19.detail)("data", ctx_r19.data);
} }
function DetailControllerComponent_div_0_div_11_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-detail-text-disabled", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("detail", ctx_r20.detail)("data", ctx_r20.data);
} }
function DetailControllerComponent_div_0_div_11_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-detail-radio-children-disabled", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("detail", ctx_r21.detail)("data", ctx_r21.data);
} }
function DetailControllerComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DetailControllerComponent_div_0_div_11_ng_container_2_Template, 2, 2, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DetailControllerComponent_div_0_div_11_ng_container_3_Template, 2, 2, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DetailControllerComponent_div_0_div_11_ng_container_4_Template, 2, 2, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r11.detail.inputConfig.inputType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "text-area");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "radio-children");
} }
function DetailControllerComponent_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r12.detail.label, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function DetailControllerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DetailControllerComponent_div_0_div_1_Template, 2, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DetailControllerComponent_div_0_div_2_Template, 2, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DetailControllerComponent_div_0_div_3_Template, 2, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DetailControllerComponent_div_0_div_4_Template, 2, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DetailControllerComponent_div_0_div_5_Template, 3, 3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DetailControllerComponent_div_0_div_6_Template, 6, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DetailControllerComponent_div_0_div_7_Template, 3, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DetailControllerComponent_div_0_div_8_Template, 2, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DetailControllerComponent_div_0_div_9_Template, 7, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DetailControllerComponent_div_0_div_10_Template, 2, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DetailControllerComponent_div_0_div_11_Template, 5, 4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DetailControllerComponent_div_0_div_12_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r0.detail.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "default");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "address-two");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "multi-value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "children");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "dual-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "sub-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "border");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "label-only");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "multi-json-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "input-disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "text-custom");
} }
class DetailControllerComponent {
    constructor() { }
    ngOnInit() {
        this.checkData();
    }
    checkTypeJsonNameDetail() {
        return typeof this.detail.jsonName === 'string' ? true : false;
    }
    checkData() {
        if (this.detail.hidden) {
            if (this.checkTypeJsonNameDetail()) {
                this.show = this.data[this.detail.jsonName] ? true : false;
            }
            else {
                var count = 0;
                this.detail.jsonName.forEach(jsonName => {
                    this.data[jsonName] ? count++ : null;
                });
                this.show = count != 0 ? true : false;
            }
        }
        else {
            this.show = true;
        }
    }
}
DetailControllerComponent.ɵfac = function DetailControllerComponent_Factory(t) { return new (t || DetailControllerComponent)(); };
DetailControllerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailControllerComponent, selectors: [["app-detail-controller"]], inputs: { detail: "detail", data: "data" }, decls: 1, vars: 1, consts: [[3, "ngSwitch", 4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], [3, "detail", "data"], [3, "detail", "dataList"], [3, "detail", "data", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col-md-6"], [1, "main"], [1, "hr-dashed"], [1, "row", "mb-4"], [1, "col-md-3", "label-text"], [1, "col-md-9"], [3, "innerHTML"]], template: function DetailControllerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DetailControllerComponent_div_0_Template, 13, 13, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _general_detail_default_detail_default_component__WEBPACK_IMPORTED_MODULE_2__["DetailDefaultComponent"], _general_detail_address_detail_address_component__WEBPACK_IMPORTED_MODULE_3__["DetailAddressComponent"], _general_detail_address_two_detail_address_two_component__WEBPACK_IMPORTED_MODULE_4__["DetailAddressTwoComponent"], _general_detail_multi_value_detail_multi_value_component__WEBPACK_IMPORTED_MODULE_5__["DetailMultiValueComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], DetailControllerComponent, _general_detail_multi_json_label_detail_multi_json_label_component__WEBPACK_IMPORTED_MODULE_6__["DetailMultiJsonLabelComponent"], _general_detail_text_area_disabled_detail_text_area_disabled_component__WEBPACK_IMPORTED_MODULE_7__["DetailTextAreaDisabledComponent"], _general_detail_text_disabled_detail_text_disabled_component__WEBPACK_IMPORTED_MODULE_8__["DetailTextDisabledComponent"], _general_detail_radio_children_disabled_detail_radio_children_disabled_component__WEBPACK_IMPORTED_MODULE_9__["DetailRadioChildrenDisabledComponent"]], styles: ["@media(max-width: 768px) \r\n{\r\n  .label-text[_ngcontent-%COMP%] \r\n  {\r\n    text-align: left;\r\n  }\r\n}\r\n\r\n@media(min-width: 768px) \r\n{\r\n.label-text[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n  }\r\n}\r\n\r\n.hr-dashed[_ngcontent-%COMP%] {\r\n    border: 1px solid #eee;\r\n    width: 100%;\r\n    border-style: dashed;\r\n    margin: 15px 0;\r\n}\r\n\r\n.main[_ngcontent-%COMP%] {\r\n  font-weight: 700;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2RldGFpbHMvY29tcG9uZW50L2RldGFpbC1jb250cm9sbGVyL2RldGFpbC1jb250cm9sbGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOztFQUVFOztJQUVFLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBOztBQUVBO0lBQ0ksaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixjQUFjO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2RldGFpbHMvY29tcG9uZW50L2RldGFpbC1jb250cm9sbGVyL2RldGFpbC1jb250cm9sbGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuQG1lZGlhKG1heC13aWR0aDogNzY4cHgpIFxyXG57XHJcbiAgLmxhYmVsLXRleHQgXHJcbiAge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYShtaW4td2lkdGg6IDc2OHB4KSBcclxue1xyXG4ubGFiZWwtdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcbn1cclxuXHJcbi5oci1kYXNoZWQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XHJcbiAgICBtYXJnaW46IDE1cHggMDtcclxufVxyXG5cclxuLm1haW4ge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailControllerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detail-controller',
                templateUrl: './detail-controller.component.html',
                styleUrls: ['./detail-controller.component.css']
            }]
    }], function () { return []; }, { detail: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/details/component/general/detail-address-two/detail-address-two.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/shared/details/component/general/detail-address-two/detail-address-two.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: DetailAddressTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailAddressTwoComponent", function() { return DetailAddressTwoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



class DetailAddressTwoComponent {
    constructor() {
        this.keyList = [
            'kelurahan',
            'kecamatan',
            'kota',
            'provinsi',
            'kodePos',
        ];
        this.defaultJsonName = {
            kelurahan: 'villageName',
            kecamatan: 'subdistrictName',
            kota: 'regencyName',
            provinsi: 'provinceName',
            kodePos: 'postalCode'
        };
        this.value = {
            kelurahan: null,
            kecamatan: null,
            kota: null,
            provinsi: null,
            kodePos: null
        };
    }
    ngOnInit() {
        this.indented = this.detail.indented ? `col-md-${this.detail.indented}` : `col-md-3`;
        this.keyList.forEach((key) => {
            this.checkAddress(key);
        });
    }
    checkAddress(address) {
        if (this.detail.addressJsonName && this.detail.addressJsonName[address]) {
            this.value[address] = this.data[this.detail.addressJsonName[address]] ? this.data[this.detail.addressJsonName[address]] : '-';
        }
        else {
            this.value[address] = this.data[this.defaultJsonName[address]] ? this.data[this.defaultJsonName[address]] : '-';
        }
    }
}
DetailAddressTwoComponent.ɵfac = function DetailAddressTwoComponent_Factory(t) { return new (t || DetailAddressTwoComponent)(); };
DetailAddressTwoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailAddressTwoComponent, selectors: [["app-detail-address-two"]], inputs: { detail: "detail", data: "data" }, decls: 34, vars: 7, consts: [[1, "row"], [3, "ngClass"], [1, "col-md-2"], [1, "form-control-static"], [1, "row", "mt-2", 2, "font-size", "15px"]], template: function DetailAddressTwoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Kelurahan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Kode Pos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Kecamatan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Kota");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Propinsi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.indented);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.value["kelurahan"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.value["kodePos"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.indented);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.value["kecamatan"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.value["kota"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.value["provinsi"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9kZXRhaWxzL2NvbXBvbmVudC9nZW5lcmFsL2RldGFpbC1hZGRyZXNzLXR3by9kZXRhaWwtYWRkcmVzcy10d28uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailAddressTwoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detail-address-two',
                templateUrl: './detail-address-two.component.html',
                styleUrls: ['./detail-address-two.component.css']
            }]
    }], function () { return []; }, { detail: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/details/component/general/detail-address/detail-address.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/shared/details/component/general/detail-address/detail-address.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: DetailAddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailAddressComponent", function() { return DetailAddressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



class DetailAddressComponent {
    constructor() {
        this.keyList = [
            'kelurahan',
            'kecamatan',
            'kota',
            'provinsi',
            'kodePos',
        ];
        this.defaultJsonName = {
            kelurahan: 'villageName',
            kecamatan: 'subdistrictName',
            kota: 'regencyName',
            provinsi: 'provinceName',
            kodePos: 'postalCode'
        };
        this.value = {
            kelurahan: null,
            kecamatan: null,
            kota: null,
            provinsi: null,
            kodePos: null
        };
    }
    ngOnInit() {
        this.indented = this.detail.indented ? `col-md-${this.detail.indented}` : ``;
        this.colLabel = this.detail.colLabel ? `col-md-${this.detail.colLabel}` : `col-md-3`;
        this.keyList.forEach((key) => {
            this.checkAddress(key);
        });
    }
    checkAddress(address) {
        if (this.detail.addressJsonName && this.detail.addressJsonName[address]) {
            this.value[address] = this.data[this.detail.addressJsonName[address]] ? this.data[this.detail.addressJsonName[address]] : '-';
        }
        else {
            this.value[address] = this.data[this.defaultJsonName[address]] ? this.data[this.defaultJsonName[address]] : '-';
        }
    }
}
DetailAddressComponent.ɵfac = function DetailAddressComponent_Factory(t) { return new (t || DetailAddressComponent)(); };
DetailAddressComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailAddressComponent, selectors: [["app-detail-address"]], inputs: { detail: "detail", data: "data" }, decls: 33, vars: 9, consts: [[1, "row"], [3, "ngClass"], [1, "label-text", 3, "ngClass"], [1, "main"], [1, "col-md-2"], [1, "col-md-1", "label-text"], [1, "row", "mt-2", 2, "font-size", "15px"], [1, "form-control-static"]], template: function DetailAddressComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Kelurahan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Kode Pos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Kecamatan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Kota");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Propinsi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.indented);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.colLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.value["kelurahan"], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.value["kodePos"], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.indented);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.colLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.value["kecamatan"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.value["kota"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.value["provinsi"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["@media(max-width: 768px) \r\n{\r\n.label-text[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n  }\r\n}\r\n\r\n@media(min-width: 768px) \r\n{\r\n.label-text[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n  }\r\n}\r\n\r\n.main[_ngcontent-%COMP%] {\r\n  font-weight: 700;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2RldGFpbHMvY29tcG9uZW50L2dlbmVyYWwvZGV0YWlsLWFkZHJlc3MvZGV0YWlsLWFkZHJlc3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTtJQUNJLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBOztBQUVBO0lBQ0ksaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZGV0YWlscy9jb21wb25lbnQvZ2VuZXJhbC9kZXRhaWwtYWRkcmVzcy9kZXRhaWwtYWRkcmVzcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhKG1heC13aWR0aDogNzY4cHgpIFxyXG57XHJcbi5sYWJlbC10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEobWluLXdpZHRoOiA3NjhweCkgXHJcbntcclxuLmxhYmVsLXRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG59XHJcblxyXG4ubWFpbiB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailAddressComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detail-address',
                templateUrl: './detail-address.component.html',
                styleUrls: ['./detail-address.component.css']
            }]
    }], function () { return []; }, { detail: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/details/component/general/detail-default/detail-default.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/shared/details/component/general/detail-default/detail-default.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: DetailDefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailDefaultComponent", function() { return DetailDefaultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pipe_change_value_change_value_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../pipe/change-value/change-value.pipe */ "./src/app/shared/pipe/change-value/change-value.pipe.ts");




class DetailDefaultComponent {
    constructor() { }
    ngOnInit() {
        this.indented = this.detail.indented ? `col-md-${this.detail.indented}` : ``;
        this.colLabel = this.detail.colLabel ? `col-md-${this.detail.colLabel}` : `col-md-3`;
        this.colValue = this.detail.colValue ? `col-md-${this.detail.colValue}` : `col-md-6`;
    }
}
DetailDefaultComponent.ɵfac = function DetailDefaultComponent_Factory(t) { return new (t || DetailDefaultComponent)(); };
DetailDefaultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailDefaultComponent, selectors: [["app-detail-default"]], inputs: { detail: "detail", data: "data" }, decls: 8, vars: 8, consts: [[1, "row", "mb-2"], [3, "ngClass"], [1, "label-text", 3, "ngClass"], [1, "main"]], template: function DetailDefaultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "changeValue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.indented);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.colLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.detail.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.colValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 5, ctx.data, ctx.detail), " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], pipes: [_pipe_change_value_change_value_pipe__WEBPACK_IMPORTED_MODULE_2__["ChangeValuePipe"]], styles: ["@media(max-width: 768px) \r\n{\r\n.label-text[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n  }\r\n}\r\n\r\n@media(min-width: 768px) \r\n{\r\n.label-text[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n  }\r\n}\r\n\r\n.main[_ngcontent-%COMP%] {\r\n  font-weight: 700;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2RldGFpbHMvY29tcG9uZW50L2dlbmVyYWwvZGV0YWlsLWRlZmF1bHQvZGV0YWlsLWRlZmF1bHQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTtJQUNJLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBOztBQUVBO0lBQ0ksaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZGV0YWlscy9jb21wb25lbnQvZ2VuZXJhbC9kZXRhaWwtZGVmYXVsdC9kZXRhaWwtZGVmYXVsdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhKG1heC13aWR0aDogNzY4cHgpIFxyXG57XHJcbi5sYWJlbC10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEobWluLXdpZHRoOiA3NjhweCkgXHJcbntcclxuLmxhYmVsLXRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG59XHJcblxyXG4ubWFpbiB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailDefaultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detail-default',
                templateUrl: './detail-default.component.html',
                styleUrls: ['./detail-default.component.css']
            }]
    }], function () { return []; }, { detail: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/details/component/general/detail-multi-json-label/detail-multi-json-label.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/shared/details/component/general/detail-multi-json-label/detail-multi-json-label.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: DetailMultiJsonLabelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailMultiJsonLabelComponent", function() { return DetailMultiJsonLabelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pipe_change_value_change_value_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../pipe/change-value/change-value.pipe */ "./src/app/shared/pipe/change-value/change-value.pipe.ts");




function DetailMultiJsonLabelComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "changeValue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jsonName_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.classCol);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.detail.multiLabel[jsonName_r1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](6, 3, ctx_r0.data, ctx_r0.detail, jsonName_r1), "");
} }
class DetailMultiJsonLabelComponent {
    constructor() { }
    ngOnInit() {
        var col = Math.floor(9 / this.detail.jsonName.length) != 0 ? Math.floor(9 / this.detail.jsonName.length) : 1;
        this.colLabel = this.detail.colLabel ? `col-md-${this.detail.colLabel}` : `col-md-3`;
        this.indented = this.detail.indented ? `col-md-${this.detail.indented}` : ``;
        this.classCol = `col-md-${col}`;
    }
}
DetailMultiJsonLabelComponent.ɵfac = function DetailMultiJsonLabelComponent_Factory(t) { return new (t || DetailMultiJsonLabelComponent)(); };
DetailMultiJsonLabelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailMultiJsonLabelComponent, selectors: [["app-detail-multi-json-label"]], inputs: { detail: "detail", data: "data" }, decls: 6, vars: 4, consts: [[1, "row", "mb-3"], [3, "ngClass"], [1, "label-text", "mt-auto", "mb-auto", 3, "ngClass"], [1, "main"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "form-control-static", "mt-auto", "mb-auto"]], template: function DetailMultiJsonLabelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DetailMultiJsonLabelComponent_div_5_Template, 7, 7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.indented);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.colLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.detail.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.detail.jsonName);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], pipes: [_pipe_change_value_change_value_pipe__WEBPACK_IMPORTED_MODULE_2__["ChangeValuePipe"]], styles: ["@media(max-width: 768px) \r\n{\r\n.label-text[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n  }\r\n}\r\n\r\n@media(min-width: 768px) \r\n{\r\n.label-text[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n  }\r\n}\r\n\r\n.main[_ngcontent-%COMP%] {\r\n  font-weight: 700;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2RldGFpbHMvY29tcG9uZW50L2dlbmVyYWwvZGV0YWlsLW11bHRpLWpzb24tbGFiZWwvZGV0YWlsLW11bHRpLWpzb24tbGFiZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTtJQUNJLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBOztBQUVBO0lBQ0ksaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZGV0YWlscy9jb21wb25lbnQvZ2VuZXJhbC9kZXRhaWwtbXVsdGktanNvbi1sYWJlbC9kZXRhaWwtbXVsdGktanNvbi1sYWJlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhKG1heC13aWR0aDogNzY4cHgpIFxyXG57XHJcbi5sYWJlbC10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEobWluLXdpZHRoOiA3NjhweCkgXHJcbntcclxuLmxhYmVsLXRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG59XHJcblxyXG4ubWFpbiB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailMultiJsonLabelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detail-multi-json-label',
                templateUrl: './detail-multi-json-label.component.html',
                styleUrls: ['./detail-multi-json-label.component.css']
            }]
    }], function () { return []; }, { detail: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/details/component/general/detail-multi-value/detail-multi-value.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/shared/details/component/general/detail-multi-value/detail-multi-value.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: DetailMultiValueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailMultiValueComponent", function() { return DetailMultiValueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pipe_change_value_change_value_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../pipe/change-value/change-value.pipe */ "./src/app/shared/pipe/change-value/change-value.pipe.ts");




function DetailMultiValueComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "changeValue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.indented);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.colLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.colValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 4, data_r1, ctx_r0.detail), " ");
} }
class DetailMultiValueComponent {
    constructor() { }
    ngOnInit() {
        this.indented = this.detail.indented ? `col-md-${this.detail.indented}` : ``;
        this.colLabel = this.detail.colLabel ? `col-md-${this.detail.colLabel}` : `col-md-3`;
        this.colValue = this.detail.colValue ? `col-md-${this.detail.colValue}` : `col-md-6`;
    }
}
DetailMultiValueComponent.ɵfac = function DetailMultiValueComponent_Factory(t) { return new (t || DetailMultiValueComponent)(); };
DetailMultiValueComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailMultiValueComponent, selectors: [["app-detail-multi-value"]], inputs: { detail: "detail", dataList: "dataList" }, decls: 11, vars: 12, consts: [[1, "mb-3"], [1, "row", "mb-2"], [3, "ngClass"], [1, "label-text", 3, "ngClass"], [1, "main"], ["class", "row mb-2", 4, "ngFor", "ngForOf"]], template: function DetailMultiValueComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "changeValue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DetailMultiValueComponent_div_9_Template, 6, 7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.indented);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.colLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.detail.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.colValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 6, ctx.dataList[0], ctx.detail), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 9, ctx.dataList, 1));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], pipes: [_pipe_change_value_change_value_pipe__WEBPACK_IMPORTED_MODULE_2__["ChangeValuePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["SlicePipe"]], styles: ["@media(max-width: 768px) \r\n{\r\n.label-text[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n  }\r\n}\r\n\r\n@media(min-width: 768px) \r\n{\r\n.label-text[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n  }\r\n}\r\n\r\n.main[_ngcontent-%COMP%] {\r\n  font-weight: 700;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2RldGFpbHMvY29tcG9uZW50L2dlbmVyYWwvZGV0YWlsLW11bHRpLXZhbHVlL2RldGFpbC1tdWx0aS12YWx1ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBO0lBQ0ksZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7O0FBRUE7SUFDSSxpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9kZXRhaWxzL2NvbXBvbmVudC9nZW5lcmFsL2RldGFpbC1tdWx0aS12YWx1ZS9kZXRhaWwtbXVsdGktdmFsdWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KSBcclxue1xyXG4ubGFiZWwtdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhKG1pbi13aWR0aDogNzY4cHgpIFxyXG57XHJcbi5sYWJlbC10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxufVxyXG5cclxuLm1haW4ge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailMultiValueComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detail-multi-value',
                templateUrl: './detail-multi-value.component.html',
                styleUrls: ['./detail-multi-value.component.css']
            }]
    }], function () { return []; }, { detail: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dataList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/details/component/general/detail-radio-children-disabled/detail-radio-children-disabled.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/shared/details/component/general/detail-radio-children-disabled/detail-radio-children-disabled.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: DetailRadioChildrenDisabledComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailRadioChildrenDisabledComponent", function() { return DetailRadioChildrenDisabledComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _detail_text_disabled_detail_text_disabled_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../detail-text-disabled/detail-text-disabled.component */ "./src/app/shared/details/component/general/detail-text-disabled/detail-text-disabled.component.ts");
/* harmony import */ var _detail_default_detail_default_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../detail-default/detail-default.component */ "./src/app/shared/details/component/general/detail-default/detail-default.component.ts");






function DetailRadioChildrenDisabledComponent_mat_radio_button_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-radio-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r3.key);
} }
function DetailRadioChildrenDisabledComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-detail-text-disabled", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.colChildren);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("detail", ctx_r1.detailChildren)("data", ctx_r1.data);
} }
function DetailRadioChildrenDisabledComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-detail-default", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.colChildren);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("detail", ctx_r2.detailChildren)("data", ctx_r2.data);
} }
class DetailRadioChildrenDisabledComponent {
    constructor() { }
    ngOnInit() {
        this.indented = this.detail.indented ? `col-md-${this.detail.indented}` : ``;
        this.colLabel = this.detail.colLabel ? `col-md-${this.detail.colLabel}` : `col-md-3`;
        this.colValue = this.detail.colValue ? `col-md-${this.detail.colValue}` : `col-md-3`;
        this.typeRadioChild = this.checkTypeRadioChild();
    }
    checkTypeRadioChild() {
        if (this.detail.children && this.detail.children[this.data[this.detail.jsonName].toString()]
            && this.detail.children[this.data[this.detail.jsonName].toString()][0]
            && this.detail.children[this.data[this.detail.jsonName].toString()][0].type == 'input-text') {
            this.detailChildren = this.detail.children[this.data[this.detail.jsonName].toString()][0];
            this.colChildren = this.detail.colChildren ? `col-md-${this.detail.colChildren}` : `col-md-4`;
            return 'input-text';
        }
        else if (this.detail.children && this.detail.children[this.data[this.detail.jsonName].toString()]
            && this.detail.children[this.data[this.detail.jsonName].toString()][0]
            && this.detail.children[this.data[this.detail.jsonName].toString()][0].type == 'non-input-text') {
            this.detailChildren = this.detail.children[this.data[this.detail.jsonName].toString()][0];
            this.colChildren = this.detail.colChildren ? `col-md-${this.detail.colChildren}` : `col-md-6`;
            return 'non-input-text';
        }
        else {
            return false;
        }
    }
}
DetailRadioChildrenDisabledComponent.ɵfac = function DetailRadioChildrenDisabledComponent_Factory(t) { return new (t || DetailRadioChildrenDisabledComponent)(); };
DetailRadioChildrenDisabledComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailRadioChildrenDisabledComponent, selectors: [["app-detail-radio-children-disabled"]], inputs: { detail: "detail", data: "data" }, decls: 11, vars: 9, consts: [[1, "row", "mb-2", "h-100", "mb-3"], [3, "ngClass"], [1, "label-text", "my-auto", 3, "ngClass"], [1, "main"], [1, "my-auto", 3, "ngClass"], ["disabled", "", 3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [3, "ngSwitch"], ["class", "my-auto", 3, "ngClass", 4, "ngSwitchCase"], [3, "value"], [3, "detail", "data"]], template: function DetailRadioChildrenDisabledComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-radio-group", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DetailRadioChildrenDisabledComponent_mat_radio_button_7_Template, 2, 2, "mat-radio-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DetailRadioChildrenDisabledComponent_div_9_Template, 2, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DetailRadioChildrenDisabledComponent_div_10_Template, 2, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.indented);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.colLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.detail.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.colValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.data[ctx.detail.jsonName]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.detail.inputConfig.option);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.typeRadioChild);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "input-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "non-input-text");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_2__["MatRadioGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_2__["MatRadioButton"], _detail_text_disabled_detail_text_disabled_component__WEBPACK_IMPORTED_MODULE_3__["DetailTextDisabledComponent"], _detail_default_detail_default_component__WEBPACK_IMPORTED_MODULE_4__["DetailDefaultComponent"]], styles: ["@media(max-width: 768px) \r\n{\r\n.label-text[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n  }\r\n}\r\n\r\n@media(min-width: 768px) \r\n{\r\n.label-text[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n  }\r\n}\r\n\r\n.main[_ngcontent-%COMP%] {\r\n  font-weight: 700;\r\n}\r\n\r\n.note[_ngcontent-%COMP%]\r\n{\r\n    margin-top: 5px;\r\n    font-size: 11.7px;\r\n}\r\n\r\n.mat-radio-button[_ngcontent-%COMP%]    ~ .mat-radio-button[_ngcontent-%COMP%] {\r\n    margin-left: 0px;\r\n    margin-left: 15px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2RldGFpbHMvY29tcG9uZW50L2dlbmVyYWwvZGV0YWlsLXJhZGlvLWNoaWxkcmVuLWRpc2FibGVkL2RldGFpbC1yYWRpby1jaGlsZHJlbi1kaXNhYmxlZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBO0lBQ0ksZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7O0FBRUE7SUFDSSxpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9kZXRhaWxzL2NvbXBvbmVudC9nZW5lcmFsL2RldGFpbC1yYWRpby1jaGlsZHJlbi1kaXNhYmxlZC9kZXRhaWwtcmFkaW8tY2hpbGRyZW4tZGlzYWJsZWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KSBcclxue1xyXG4ubGFiZWwtdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhKG1pbi13aWR0aDogNzY4cHgpIFxyXG57XHJcbi5sYWJlbC10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxufVxyXG5cclxuLm1haW4ge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5ub3RlXHJcbntcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTEuN3B4O1xyXG59XHJcblxyXG4ubWF0LXJhZGlvLWJ1dHRvbiB+IC5tYXQtcmFkaW8tYnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailRadioChildrenDisabledComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detail-radio-children-disabled',
                templateUrl: './detail-radio-children-disabled.component.html',
                styleUrls: ['./detail-radio-children-disabled.component.css']
            }]
    }], function () { return []; }, { detail: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/details/component/general/detail-text-area-disabled/detail-text-area-disabled.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/shared/details/component/general/detail-text-area-disabled/detail-text-area-disabled.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: DetailTextAreaDisabledComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailTextAreaDisabledComponent", function() { return DetailTextAreaDisabledComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pipe_change_value_change_value_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../pipe/change-value/change-value.pipe */ "./src/app/shared/pipe/change-value/change-value.pipe.ts");




class DetailTextAreaDisabledComponent {
    constructor() { }
    ngOnInit() {
        this.indented = this.detail.indented ? `col-md-${this.detail.indented}` : ``;
        this.colLabel = this.detail.colLabel ? `col-md-${this.detail.colLabel}` : `col-md-3`;
        this.colValue = this.detail.colValue ? `col-md-${this.detail.colValue}` : `col-md-6`;
    }
}
DetailTextAreaDisabledComponent.ɵfac = function DetailTextAreaDisabledComponent_Factory(t) { return new (t || DetailTextAreaDisabledComponent)(); };
DetailTextAreaDisabledComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailTextAreaDisabledComponent, selectors: [["app-detail-text-area-disabled"]], inputs: { detail: "detail", data: "data" }, decls: 9, vars: 9, consts: [[1, "row", "mb-2"], [3, "ngClass"], [1, "label-text", "my-auto", 3, "ngClass"], [1, "main"], ["disabled", "", 1, "form-control", 3, "rows"]], template: function DetailTextAreaDisabledComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "textarea", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "changeValue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.indented);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.colLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.detail.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.colValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx.detail.inputConfig.rows ? ctx.detail.inputConfig.rows : "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 6, ctx.data, ctx.detail));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], pipes: [_pipe_change_value_change_value_pipe__WEBPACK_IMPORTED_MODULE_2__["ChangeValuePipe"]], styles: ["@media(max-width: 768px) \r\n{\r\n.label-text[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n  }\r\n}\r\n\r\n@media(min-width: 768px) \r\n{\r\n.label-text[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n  }\r\n}\r\n\r\n.main[_ngcontent-%COMP%] {\r\n  font-weight: 700;\r\n}\r\n\r\n.note[_ngcontent-%COMP%]\r\n{\r\n    margin-top: 5px;\r\n    font-size: 11.7px;\r\n}\r\n\r\n.mat-radio-button[_ngcontent-%COMP%]    ~ .mat-radio-button[_ngcontent-%COMP%] {\r\n    margin-left: 0px;\r\n    margin-left: 15px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2RldGFpbHMvY29tcG9uZW50L2dlbmVyYWwvZGV0YWlsLXRleHQtYXJlYS1kaXNhYmxlZC9kZXRhaWwtdGV4dC1hcmVhLWRpc2FibGVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7SUFDSSxnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTs7QUFFQTtJQUNJLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBOztJQUVJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25CIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2RldGFpbHMvY29tcG9uZW50L2dlbmVyYWwvZGV0YWlsLXRleHQtYXJlYS1kaXNhYmxlZC9kZXRhaWwtdGV4dC1hcmVhLWRpc2FibGVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEobWF4LXdpZHRoOiA3NjhweCkgXHJcbntcclxuLmxhYmVsLXRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYShtaW4td2lkdGg6IDc2OHB4KSBcclxue1xyXG4ubGFiZWwtdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcbn1cclxuXHJcbi5tYWluIHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4ubm90ZVxyXG57XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDExLjdweDtcclxufVxyXG5cclxuLm1hdC1yYWRpby1idXR0b24gfiAubWF0LXJhZGlvLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailTextAreaDisabledComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detail-text-area-disabled',
                templateUrl: './detail-text-area-disabled.component.html',
                styleUrls: ['./detail-text-area-disabled.component.css']
            }]
    }], function () { return []; }, { detail: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/details/component/general/detail-text-disabled/detail-text-disabled.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/shared/details/component/general/detail-text-disabled/detail-text-disabled.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: DetailTextDisabledComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailTextDisabledComponent", function() { return DetailTextDisabledComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pipe_change_value_change_value_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../pipe/change-value/change-value.pipe */ "./src/app/shared/pipe/change-value/change-value.pipe.ts");




function DetailTextDisabledComponent_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r2.detail.inputConfig.prepend[ctx_r2.detail.jsonName], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function DetailTextDisabledComponent_div_5_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r3.detail.inputConfig.append[ctx_r3.detail.jsonName], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function DetailTextDisabledComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DetailTextDisabledComponent_div_5_div_2_Template, 3, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "changeValue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DetailTextDisabledComponent_div_5_div_5_Template, 3, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.colValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.detail.inputConfig && ctx_r0.detail.inputConfig.prepend);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r0.detail.label)("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 5, ctx_r0.data, ctx_r0.detail));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.detail.inputConfig && ctx_r0.detail.inputConfig.append);
} }
function DetailTextDisabledComponent_div_6_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jsonName_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r7.detail.inputConfig.prepend[jsonName_r5], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function DetailTextDisabledComponent_div_6_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jsonName_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r8.detail.inputConfig.append[jsonName_r5], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function DetailTextDisabledComponent_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DetailTextDisabledComponent_div_6_div_2_div_2_Template, 3, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "changeValue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DetailTextDisabledComponent_div_6_div_2_div_5_Template, 3, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jsonName_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r4.colChildren);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.detail.inputConfig && ctx_r4.detail.inputConfig.prepend && ctx_r4.detail.inputConfig.prepend[jsonName_r5]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r4.detail.label)("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](4, 5, ctx_r4.data, ctx_r4.detail, jsonName_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.detail.inputConfig && ctx_r4.detail.inputConfig.append && ctx_r4.detail.inputConfig.append[jsonName_r5]);
} }
function DetailTextDisabledComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DetailTextDisabledComponent_div_6_div_2_Template, 6, 9, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.colValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.detail.jsonName);
} }
class DetailTextDisabledComponent {
    constructor() { }
    ngOnInit() {
        this.indented = this.detail.indented ? `col-md-${this.detail.indented}` : ``;
        this.colLabel = this.detail.colLabel ? `col-md-${this.detail.colLabel}` : `col-md-3`;
        if (typeof this.detail.jsonName === 'string') {
            this.jsonNameIsString = true;
            this.colValue = this.detail.colValue ? `col-md-${this.detail.colValue}` : `col-md-4`;
        }
        else {
            this.colValue = this.detail.colValue ? `col-md-${this.detail.colValue}` : `col-md-8`;
            this.colChildren = this.detail.colChildren ? `col-${this.detail.colChildren}` : `col`;
        }
    }
}
DetailTextDisabledComponent.ɵfac = function DetailTextDisabledComponent_Factory(t) { return new (t || DetailTextDisabledComponent)(); };
DetailTextDisabledComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailTextDisabledComponent, selectors: [["app-detail-text-disabled"]], inputs: { detail: "detail", data: "data" }, decls: 7, vars: 5, consts: [[1, "row", "mb-4", "h-100"], [3, "ngClass"], [1, "label-text", "my-auto", 3, "ngClass"], [1, "main"], [3, "ngClass", 4, "ngIf"], [1, "input-group", "input-group-sm"], ["class", "input-group-prepend", 4, "ngIf"], ["type", "text", "disabled", "", 1, "form-control", "form-control-sm", 3, "placeholder", "value"], ["class", "input-group-append", 4, "ngIf"], [1, "input-group-prepend"], [1, "input-group-text"], [3, "innerHTML"], [1, "input-group-append"], [1, "row"], [3, "ngClass", 4, "ngFor", "ngForOf"]], template: function DetailTextDisabledComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DetailTextDisabledComponent_div_5_Template, 6, 8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DetailTextDisabledComponent_div_6_Template, 3, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.indented);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.colLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.detail.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.jsonNameIsString);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.jsonNameIsString);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], pipes: [_pipe_change_value_change_value_pipe__WEBPACK_IMPORTED_MODULE_2__["ChangeValuePipe"]], styles: ["@media(max-width: 768px) \r\n{\r\n.label-text[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n  }\r\n}\r\n\r\n@media(min-width: 768px) \r\n{\r\n.label-text[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n  }\r\n}\r\n\r\n.main[_ngcontent-%COMP%] {\r\n  font-weight: 700;\r\n}\r\n\r\n.note[_ngcontent-%COMP%]\r\n{\r\n    margin-top: 5px;\r\n    font-size: 11.7px;\r\n}\r\n\r\n.mat-radio-button[_ngcontent-%COMP%]    ~ .mat-radio-button[_ngcontent-%COMP%] {\r\n    margin-left: 0px;\r\n    margin-left: 15px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2RldGFpbHMvY29tcG9uZW50L2dlbmVyYWwvZGV0YWlsLXRleHQtZGlzYWJsZWQvZGV0YWlsLXRleHQtZGlzYWJsZWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTtJQUNJLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBOztBQUVBO0lBQ0ksaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7O0lBRUksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZGV0YWlscy9jb21wb25lbnQvZ2VuZXJhbC9kZXRhaWwtdGV4dC1kaXNhYmxlZC9kZXRhaWwtdGV4dC1kaXNhYmxlZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhKG1heC13aWR0aDogNzY4cHgpIFxyXG57XHJcbi5sYWJlbC10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEobWluLXdpZHRoOiA3NjhweCkgXHJcbntcclxuLmxhYmVsLXRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG59XHJcblxyXG4ubWFpbiB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLm5vdGVcclxue1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMS43cHg7XHJcbn1cclxuXHJcbi5tYXQtcmFkaW8tYnV0dG9uIH4gLm1hdC1yYWRpby1idXR0b24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailTextDisabledComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-detail-text-disabled',
                templateUrl: './detail-text-disabled.component.html',
                styleUrls: ['./detail-text-disabled.component.css']
            }]
    }], function () { return []; }, { detail: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/details/template/details-data-terminal-template/details-data-terminal-template.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/shared/details/template/details-data-terminal-template/details-data-terminal-template.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: DetailsDataTerminalTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsDataTerminalTemplateComponent", function() { return DetailsDataTerminalTemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _component_custom_detail_fasilitas_detail_fasilitas_detail_fasilitas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../component/custom/detail-fasilitas/detail-fasilitas/detail-fasilitas.component */ "./src/app/shared/details/component/custom/detail-fasilitas/detail-fasilitas/detail-fasilitas.component.ts");
/* harmony import */ var _pipe_data_terminal_custom_data_terminal_custom_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../pipe/data-terminal-custom/data-terminal-custom.pipe */ "./src/app/shared/pipe/data-terminal-custom/data-terminal-custom.pipe.ts");







function DetailsDataTerminalTemplateComponent_tr_27_ng_container_3_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsDataTerminalTemplateComponent_tr_27_ng_container_3_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const data_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29); return ctx_r8.openModal(_r1, data_r3.odFacilities); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " View Fasilitas ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DetailsDataTerminalTemplateComponent_tr_27_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DetailsDataTerminalTemplateComponent_tr_27_ng_container_3_button_14_Template, 3, 0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r3["terminalInit"] ? data_r3["terminalInit"] : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r3["deviceMachineName"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", data_r3["deviceTypeName"], " ", data_r3["deviceConnectionTypeName"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r3["isSameParentFacility"] ? "Sama dengan outlet" : "Custom");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r3["serialNumber"] ? data_r3["serialNumber"] : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r3["status"] ? data_r3["status"] : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !data_r3["isSameParentFacility"]);
} }
function DetailsDataTerminalTemplateComponent_tr_27_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "API");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "dataTerminalCustom");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "QRIS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r3["terminalInit"] ? data_r3["terminalInit"] : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 4, data_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r3["serialNumber"] ? data_r3["serialNumber"] : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r3["status"] ? data_r3["status"] : "-");
} }
function DetailsDataTerminalTemplateComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DetailsDataTerminalTemplateComponent_tr_27_ng_container_3_Template, 15, 8, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DetailsDataTerminalTemplateComponent_tr_27_ng_container_4_Template, 18, 6, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r4 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r3["deviceMachineName"] != "API QRIS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r3["deviceMachineName"] == "API QRIS");
} }
function DetailsDataTerminalTemplateComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Fasilitas Terminal Tracking");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsDataTerminalTemplateComponent_ng_template_28_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-detail-fasilitas", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsDataTerminalTemplateComponent_ng_template_28_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("category", "outletDevices")("dataList", ctx_r2.dataModal);
} }
class DetailsDataTerminalTemplateComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.detailQrScannerCount = {
            jsonName: 'qrScannerCount',
            type: 'default',
            label: 'QRIS READER',
            inputConfig: {
                inputType: 'text-disabled',
                prepend: { qrScannerCount: 'Jumlah' }
            }
        };
    }
    ngOnInit() {
    }
    openModal(content, data) {
        this.fasilitasOutletDevices = this.modalService.open(content, { size: 'lg' });
        this.dataModal = data;
    }
    closeModal() {
        this.fasilitasOutletDevices.close();
    }
}
DetailsDataTerminalTemplateComponent.ɵfac = function DetailsDataTerminalTemplateComponent_Factory(t) { return new (t || DetailsDataTerminalTemplateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"])); };
DetailsDataTerminalTemplateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailsDataTerminalTemplateComponent, selectors: [["app-details-data-terminal-template"]], inputs: { dataOutlet: "dataOutlet" }, decls: 30, vars: 2, consts: [[1, "color-gray", "mb-3", 3, "expanded"], [1, "block-header"], [1, "clickable"], [1, "block-content"], [1, "table-responsive"], [1, "table", "table-striped", "table-hover", "text-center"], [4, "ngFor", "ngForOf"], ["content", ""], [4, "ngIf"], ["class", "btn btn-primary btn-sm", 3, "click", 4, "ngIf"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "fas", "fa-edit", "left"], [1, "form-check"], ["type", "checkbox", "disabled", "", 1, "form-check-input", 3, "checked"], [1, "form-check-label"], [1, "modal-header", "text-center"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", "btn", "btn-danger", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "category", "dataList"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function DetailsDataTerminalTemplateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Data Terminal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "TID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Tipe Terminal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Jenis Koneksi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Fasilitas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Serial Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, DetailsDataTerminalTemplateComponent_tr_27_Template, 5, 3, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, DetailsDataTerminalTemplateComponent_ng_template_28_Template, 11, 2, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataOutlet.outletDevices);
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _component_custom_detail_fasilitas_detail_fasilitas_detail_fasilitas_component__WEBPACK_IMPORTED_MODULE_4__["DetailFasilitasComponent"]], pipes: [_pipe_data_terminal_custom_data_terminal_custom_pipe__WEBPACK_IMPORTED_MODULE_5__["DataTerminalCustomPipe"]], styles: [".block-header[_ngcontent-%COMP%] {\r\n    border-bottom: #dadada 1px solid;\r\n\r\n}\r\n\r\n.block-content[_ngcontent-%COMP%] {\r\n    padding-top: 15px;\r\n}\r\n\r\n.clickable[_ngcontent-%COMP%]:hover {\r\n    color: #00b7f1;\r\n    cursor: pointer;\r\n}\r\n\r\n.clickable[_ngcontent-%COMP%]\r\n{\r\n    color: #6C676A;\r\n}\r\n\r\n.color-gray[_ngcontent-%COMP%]\r\n{\r\n    color: #6c676a;\r\n}\r\n\r\n.main[_ngcontent-%COMP%] {\r\n    font-weight: 700;\r\n  }\r\n\r\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n      padding: 0.2rem 0.5rem  0.2rem 0.7rem;\r\n      vertical-align: middle;\r\n      border-top: 1px solid #dee2e6;\r\n      color: #6c676a;\r\n  }\r\n\r\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] \r\n  {\r\n      font-size: 14.3px;\r\n  }\r\n\r\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]\r\n  {\r\n      max-width: 15em;\r\n      word-wrap: break-word;\r\n      font-size: 13px;\r\n  }\r\n\r\n.fixed-width-btn[_ngcontent-%COMP%]\r\n  {\r\n      min-width: 7em;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2RldGFpbHMvdGVtcGxhdGUvZGV0YWlscy1kYXRhLXRlcm1pbmFsLXRlbXBsYXRlL2RldGFpbHMtZGF0YS10ZXJtaW5hbC10ZW1wbGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0NBQWdDOztBQUVwQzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBOztJQUVJLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksY0FBYztBQUNsQjs7QUFHQTtJQUNJLGdCQUFnQjtFQUNsQjs7QUFJQTtNQUNJLHFDQUFxQztNQUNyQyxzQkFBc0I7TUFDdEIsNkJBQTZCO01BQzdCLGNBQWM7RUFDbEI7O0FBRUE7O01BRUksaUJBQWlCO0VBQ3JCOztBQUVBOztNQUVJLGVBQWU7TUFDZixxQkFBcUI7TUFDckIsZUFBZTtFQUNuQjs7QUFFQTs7TUFFSSxjQUFjO0VBQ2xCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2RldGFpbHMvdGVtcGxhdGUvZGV0YWlscy1kYXRhLXRlcm1pbmFsLXRlbXBsYXRlL2RldGFpbHMtZGF0YS10ZXJtaW5hbC10ZW1wbGF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsb2NrLWhlYWRlciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAjZGFkYWRhIDFweCBzb2xpZDtcclxuXHJcbn1cclxuXHJcbi5ibG9jay1jb250ZW50IHtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG59XHJcblxyXG4uY2xpY2thYmxlOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMDBiN2YxO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2xpY2thYmxlXHJcbntcclxuICAgIGNvbG9yOiAjNkM2NzZBO1xyXG59XHJcblxyXG4uY29sb3ItZ3JheVxyXG57XHJcbiAgICBjb2xvcjogIzZjNjc2YTtcclxufVxyXG5cclxuXHJcbi5tYWluIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC50YWJsZSB0ZCwgLnRhYmxlIHRoIHtcclxuICAgICAgcGFkZGluZzogMC4ycmVtIDAuNXJlbSAgMC4ycmVtIDAuN3JlbTtcclxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgICAgIGNvbG9yOiAjNmM2NzZhO1xyXG4gIH0gXHJcbiAgXHJcbiAgLnRhYmxlIHRoIFxyXG4gIHtcclxuICAgICAgZm9udC1zaXplOiAxNC4zcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50YWJsZSB0ZFxyXG4gIHtcclxuICAgICAgbWF4LXdpZHRoOiAxNWVtO1xyXG4gICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcbiAgXHJcbiAgLmZpeGVkLXdpZHRoLWJ0blxyXG4gIHtcclxuICAgICAgbWluLXdpZHRoOiA3ZW07XHJcbiAgfVxyXG4gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailsDataTerminalTemplateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-details-data-terminal-template',
                templateUrl: './details-data-terminal-template.component.html',
                styleUrls: ['./details-data-terminal-template.component.css']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }]; }, { dataOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/details/template/details-dokumen-template/details-dokumen-template.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/shared/details/template/details-dokumen-template/details-dokumen-template.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: DetailsDokumenTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsDokumenTemplateComponent", function() { return DetailsDokumenTemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _component_custom_detail_dokumen_detail_dokumen_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../component/custom/detail-dokumen/detail-dokumen.component */ "./src/app/shared/details/component/custom/detail-dokumen/detail-dokumen.component.ts");








function DetailsDokumenTemplateComponent_app_detail_dokumen_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-detail-dokumen", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("imageEvent", function DetailsDokumenTemplateComponent_app_detail_dokumen_6_Template_app_detail_dokumen_imageEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return ctx_r5.openModal(_r1, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dataDokumen_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", dataDokumen_r3)("index", i_r4);
} }
function DetailsDokumenTemplateComponent_ng_template_7_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsDokumenTemplateComponent_ng_template_7_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.rotate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DetailsDokumenTemplateComponent_ng_template_7_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "iframe", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r9.imageActive, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
} }
function DetailsDokumenTemplateComponent_ng_template_7_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 29);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r11.imageActive, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function DetailsDokumenTemplateComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsDokumenTemplateComponent_ng_template_7_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsDokumenTemplateComponent_ng_template_7_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.link(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DetailsDokumenTemplateComponent_ng_template_7_button_13_Template, 2, 0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsDokumenTemplateComponent_ng_template_7_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.prevImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsDokumenTemplateComponent_ng_template_7_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.nextImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, DetailsDokumenTemplateComponent_ng_template_7_div_21_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, DetailsDokumenTemplateComponent_ng_template_7_ng_template_22_Template, 1, 1, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Dokumen ", ctx_r2.indexActive + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Dokumen Terlampir: ", ctx_r2.documentTypes, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.filetype != "PDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.filetype == "PDF")("ngIfElse", _r10);
} }
class DetailsDokumenTemplateComponent {
    constructor(modalService, sanitizer) {
        this.modalService = modalService;
        this.sanitizer = sanitizer;
        this.angle = 0;
        this.indexActive = 0;
        this.dokumenImageModal = null;
        this.MAX_PIXEL = 1024;
    }
    ngOnInit() {
    }
    openModal(content, index) {
        this.indexActive = index;
        this.dokumenImageModal = this.modalService.open(content, { size: 'lg', windowClass: 'modal-document' });
        this.imageActive = this.sanitizer.bypassSecurityTrustResourceUrl(this.dataList[this.indexActive]['name']);
        this.filetype = this.dataList[this.indexActive]['path'].split('.')[1].toUpperCase();
        let valueDocument = this.dataList[this.indexActive]['type'].split("||")[0];
        let values = valueDocument.split(",");
        this.getDocumentTypes(values);
    }
    closeModal() {
        this.dokumenImageModal.close();
    }
    nextImage() {
        this.indexActive++;
        if (this.indexActive > this.dataList.length - 1) {
            this.indexActive = 0;
        }
        this.imageActive = this.sanitizer.bypassSecurityTrustResourceUrl(this.dataList[this.indexActive]['name']);
        this.filetype = this.dataList[this.indexActive]['path'].split('.')[1].toUpperCase();
        let valueDocument = this.dataList[this.indexActive]['type'].split("||")[0];
        let values = valueDocument.split(",");
        this.getDocumentTypes(values);
    }
    prevImage() {
        this.indexActive--;
        if (this.indexActive < 0) {
            this.indexActive = this.dataList.length - 1;
        }
        this.imageActive = this.sanitizer.bypassSecurityTrustResourceUrl(this.dataList[this.indexActive]['name']);
        this.filetype = this.dataList[this.indexActive]['path'].split('.')[1].toUpperCase();
        let valueDocument = this.dataList[this.indexActive]['type'].split("||")[0];
        let values = valueDocument.split(",");
        this.getDocumentTypes(values);
    }
    getDocumentTypes(values) {
        let documentTypes = "";
        for (let i = 0; i < values.length; i++) {
            if (values[i] != "") {
                if (values[i].toUpperCase() == 'FDM'.toUpperCase()) {
                    documentTypes = documentTypes + "FDM, ";
                }
                if (values[i].toUpperCase() == 'Paspor'.toUpperCase()) {
                    documentTypes = documentTypes + "Paspor Pemilik, ";
                }
                if (values[i].toUpperCase() == 'Paspor Pejabat 1'.toUpperCase()) {
                    documentTypes = documentTypes + "Paspor Pejabat 1, ";
                }
                if (values[i].toUpperCase() == 'Paspor Pejabat 2'.toUpperCase()) {
                    documentTypes = documentTypes + "Paspor Pejabat 2, ";
                }
                if (values[i].toUpperCase() == 'Paspor Penerima Kuasa'.toUpperCase()) {
                    documentTypes = documentTypes + "Paspor Penerima Kuasa, ";
                }
                if (values[i].toUpperCase() == 'KTP'.toUpperCase()) {
                    documentTypes = documentTypes + "KTP/KITAS/KITAP Pemilik, ";
                } // done
                if (values[i].toUpperCase() == 'NPWP'.toUpperCase()) {
                    documentTypes = documentTypes + "NPWP, ";
                }
                if (values[i].toUpperCase() == 'SIUP/BAPU'.toUpperCase()) {
                    documentTypes = documentTypes + "SIUP/BAPU, ";
                }
                if (values[i].toUpperCase() == 'Surat Keterangan Pameran'.toUpperCase()) {
                    documentTypes = documentTypes + "Surat Keterangan Pameran, ";
                }
                if (values[i].toUpperCase() == 'RBA'.toUpperCase()) {
                    documentTypes = documentTypes + "RBA, ";
                }
                if (values[i].toUpperCase() == 'NIB'.toUpperCase()) {
                    documentTypes = documentTypes + "NIB, ";
                }
                if (values[i].toUpperCase() == 'KTP Penerima Kuasa'.toUpperCase()) {
                    documentTypes = documentTypes + "KTP/KITAS/KITAP Penerima Kuasa, ";
                }
                if (values[i].toUpperCase() == 'Kuasa Pengajuan'.toUpperCase()) {
                    documentTypes = documentTypes + "Kuasa Pengajuan, ";
                }
                if (values[i].toUpperCase() == 'Surat Kuasa Rekening'.toUpperCase()) {
                    documentTypes = documentTypes + "Surat Kuasa Rekening, ";
                }
                if (values[i].toUpperCase() == 'Akta Perubahan Terakhir'.toUpperCase()) {
                    documentTypes = documentTypes + "Akta Perubahan Terakhir, ";
                }
                if (values[i].toUpperCase() == 'SK / Menkeh'.toUpperCase()) {
                    documentTypes = documentTypes + "SK Menkeh, ";
                }
                if (values[i].toUpperCase() == 'KTP Pejabat 1'.toUpperCase()) {
                    documentTypes = documentTypes + "KTP/KITAS/KITAP Pejabat 1, ";
                }
                if (values[i].toUpperCase() == 'KTP Pejabat 2'.toUpperCase()) {
                    documentTypes = documentTypes + "KTP/KITAS/KITAP Pejabat 2, ";
                }
                if (values[i].toUpperCase() == 'PKS'.toUpperCase()) {
                    documentTypes = documentTypes + "PKS/Surat Pernyataan, ";
                }
                if (values[i].toUpperCase() == 'Akta Pendirian'.toUpperCase()) {
                    documentTypes = documentTypes + "Akta Pendirian, ";
                }
                if (values[i].toUpperCase() == 'Foto Lokasi Usaha'.toUpperCase()) {
                    documentTypes = documentTypes + "Foto Lokasi Usaha, ";
                }
                if (values[i].toUpperCase() == 'Form Close'.toUpperCase()) {
                    documentTypes = documentTypes + "Form Close, ";
                }
                if (values[i].toUpperCase() == 'Lainnya'.toUpperCase()) {
                    documentTypes = documentTypes + "Lainnya, ";
                }
                if ('' + values[i].trim().toUpperCase() === 'Dokumen Merchant Apps'.toUpperCase() || values[i].toUpperCase() == "Dokumen Merchant Apps".toUpperCase()) {
                    documentTypes = documentTypes + "Dokumen Merchant Apps, ";
                }
                if (values[i].toUpperCase() == "FEME".toUpperCase()) {
                    documentTypes = documentTypes + "FEME, ";
                }
            }
        }
        documentTypes = documentTypes.substring(0, documentTypes.length - 2);
        this.documentTypes = documentTypes;
    }
    link() {
        let url = this.dataList[this.indexActive]['name'];
        window.open(url, '_blank');
    }
    rotate() {
        this.angle = (this.angle + 90) % 360;
        let url = this.dataList[this.indexActive]['name'];
        let img = jquery__WEBPACK_IMPORTED_MODULE_1__(`<img class="bg-white img-thumbnail" src="${url}" crossOrigin="anonymous">`).get(0);
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const pixel = img.width > img.height ? img.width : img.height;
        const ratio = this.MAX_PIXEL / pixel;
        let width = img.width * ratio;
        let height = img.height * ratio;
        canvas.width = height;
        canvas.height = width;
        ctx.translate(height, 0);
        ctx.rotate(Math.PI / 2);
        ctx.drawImage(img, 0, 0, width, height);
        let file = canvas.toDataURL();
        url = URL.createObjectURL(this.b64toFile(file, null, null));
        this.imageActive = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        this.dataList[this.indexActive]['name'] = url;
    }
    b64toFile(base64, contentType, sliceSize) {
        base64 = base64.split(',');
        contentType = contentType || base64[0].substring(base64[0].indexOf(':') + 1, base64[0].indexOf(';')) || '';
        sliceSize = sliceSize || 512;
        const byteCharacters = atob(base64[1]);
        const byteArrays = [];
        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            let slice = byteCharacters.slice(offset, offset + sliceSize);
            let byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            byteArrays.push(new Uint8Array(byteNumbers));
        }
        return new Blob(byteArrays, { type: contentType });
    }
}
DetailsDokumenTemplateComponent.ɵfac = function DetailsDokumenTemplateComponent_Factory(t) { return new (t || DetailsDokumenTemplateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"])); };
DetailsDokumenTemplateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailsDokumenTemplateComponent, selectors: [["app-details-dokumen-template"]], inputs: { dataList: "dataList" }, decls: 9, vars: 2, consts: [[1, "color-gray", "mb-3", 3, "expanded"], [1, "block-header"], [1, "clickable"], [1, "block-content"], [3, "data", "index", "imageEvent", 4, "ngFor", "ngForOf"], ["content", ""], [3, "data", "index", "imageEvent"], [1, "modal-header", "text-center"], ["id", "modal-basic-title", 1, "modal-title", 2, "text-align", "center"], ["type", "button", "aria-label", "Close", 1, "btn", "btn-danger", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "pull-left", 2, "margin-top", "-10px"], [1, "pull-right", 2, "margin-top", "-20px", "float", "right"], ["type", "button", "title", "Open in new tab", 1, "btn", "btn-link", 3, "click"], [1, "fas", "fa-external-link-alt"], ["type", "button", "class", "btn btn-link", "title", "Rotate", 3, "click", 4, "ngIf"], ["type", "button", "title", "Previous", 1, "btn", "btn-link", 3, "click"], [1, "fas", "fa-chevron-left"], ["type", "button", "title", "Next", 1, "btn", "btn-link", 3, "click"], [1, "fas", "fa-chevron-right"], ["id", "carouselExampleControls", 1, "carousel", "slide"], [1, "carousel-inner"], [1, "carousel-item", "active"], [4, "ngIf", "ngIfElse"], ["image", ""], ["type", "button", "title", "Rotate", 1, "btn", "btn-link", 3, "click"], [1, "fas", "fa-redo"], ["height", "500", "title", "Iframe Example", 2, "width", "100%", 3, "src"], ["crossOrigin", "anonymous", 1, "bg-white", "img-thumbnail", 2, "width", "100vw", 3, "src"]], template: function DetailsDokumenTemplateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Kelengkapan Dokumen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DetailsDokumenTemplateComponent_app_detail_dokumen_6_Template, 1, 2, "app-detail-dokumen", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DetailsDokumenTemplateComponent_ng_template_7_Template, 24, 5, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataList);
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _component_custom_detail_dokumen_detail_dokumen_component__WEBPACK_IMPORTED_MODULE_6__["DetailDokumenComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".block-header[_ngcontent-%COMP%] {\r\n    border-bottom: #dadada 1px solid;\r\n\r\n}\r\n\r\n.block-content[_ngcontent-%COMP%] {\r\n    padding-top: 15px;\r\n}\r\n\r\n.clickable[_ngcontent-%COMP%]:hover {\r\n    color: #00b7f1;\r\n    cursor: pointer;\r\n}\r\n\r\n.clickable[_ngcontent-%COMP%]\r\n{\r\n    color: #6C676A;\r\n}\r\n\r\n.color-gray[_ngcontent-%COMP%]\r\n{\r\n    color: #6c676a;\r\n}\r\n\r\niframe[_ngcontent-%COMP%] {\r\n    display:block;\r\n    width:100%;\r\n}\r\n\r\n  .modal-document  {\r\n    \r\n}\r\n\r\n.btn-link[_ngcontent-%COMP%] {\r\n    color: gray;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2RldGFpbHMvdGVtcGxhdGUvZGV0YWlscy1kb2t1bWVuLXRlbXBsYXRlL2RldGFpbHMtZG9rdW1lbi10ZW1wbGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0NBQWdDOztBQUVwQzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBOztJQUVJLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixVQUFVO0FBQ2Q7O0FBRUE7O0FBRUE7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZGV0YWlscy90ZW1wbGF0ZS9kZXRhaWxzLWRva3VtZW4tdGVtcGxhdGUvZGV0YWlscy1kb2t1bWVuLXRlbXBsYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvY2staGVhZGVyIHtcclxuICAgIGJvcmRlci1ib3R0b206ICNkYWRhZGEgMXB4IHNvbGlkO1xyXG5cclxufVxyXG5cclxuLmJsb2NrLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5jbGlja2FibGU6aG92ZXIge1xyXG4gICAgY29sb3I6ICMwMGI3ZjE7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jbGlja2FibGVcclxue1xyXG4gICAgY29sb3I6ICM2QzY3NkE7XHJcbn1cclxuXHJcbi5jb2xvci1ncmF5XHJcbntcclxuICAgIGNvbG9yOiAjNmM2NzZhO1xyXG59XHJcblxyXG5pZnJhbWUge1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIHdpZHRoOjEwMCU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubW9kYWwtZG9jdW1lbnQgIHtcclxuICAgIFxyXG59XHJcblxyXG4uYnRuLWxpbmsge1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailsDokumenTemplateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-details-dokumen-template',
                templateUrl: './details-dokumen-template.component.html',
                styleUrls: ['./details-dokumen-template.component.css']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }]; }, { dataList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/details/template/details-dual-col-template/details-dual-col-template.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/shared/details/template/details-dual-col-template/details-dual-col-template.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: DetailsDualColTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsDualColTemplateComponent", function() { return DetailsDualColTemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _component_detail_controller_detail_controller_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/detail-controller/detail-controller.component */ "./src/app/shared/details/component/detail-controller/detail-controller.component.ts");





function DetailsDualColTemplateComponent_app_detail_controller_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-detail-controller", 7);
} if (rf & 2) {
    const detail_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("detail", detail_r2)("data", ctx_r0.data);
} }
function DetailsDualColTemplateComponent_app_detail_controller_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-detail-controller", 7);
} if (rf & 2) {
    const detail_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("detail", detail_r3)("data", ctx_r1.data);
} }
class DetailsDualColTemplateComponent {
    constructor() { }
    ngOnInit() {
    }
}
DetailsDualColTemplateComponent.ɵfac = function DetailsDualColTemplateComponent_Factory(t) { return new (t || DetailsDualColTemplateComponent)(); };
DetailsDualColTemplateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailsDualColTemplateComponent, selectors: [["app-details-dual-col-template"]], inputs: { title: "title", data: "data", detailsListLeft: "detailsListLeft", detailsListRight: "detailsListRight", index: "index" }, decls: 11, vars: 4, consts: [[1, "color-gray", "mb-3", 3, "expanded"], [1, "block-header"], [1, "clickable"], [1, "block-content"], [1, "row"], [1, "col-md-6"], [3, "detail", "data", 4, "ngFor", "ngForOf"], [3, "detail", "data"]], template: function DetailsDualColTemplateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DetailsDualColTemplateComponent_app_detail_controller_8_Template, 1, 2, "app-detail-controller", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DetailsDualColTemplateComponent_app_detail_controller_10_Template, 1, 2, "app-detail-controller", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.detailsListLeft);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.detailsListRight);
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _component_detail_controller_detail_controller_component__WEBPACK_IMPORTED_MODULE_3__["DetailControllerComponent"]], styles: [".block-header[_ngcontent-%COMP%] {\r\n    border-bottom: #dadada 1px solid;\r\n\r\n}\r\n\r\n.block-content[_ngcontent-%COMP%] {\r\n    padding-top: 15px;\r\n}\r\n\r\n.clickable[_ngcontent-%COMP%]:hover {\r\n    color: #00b7f1;\r\n    cursor: pointer;\r\n}\r\n\r\n.clickable[_ngcontent-%COMP%]\r\n{\r\n    color: #6C676A;\r\n}\r\n\r\n.color-gray[_ngcontent-%COMP%]\r\n{\r\n    color: #6c676a;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2RldGFpbHMvdGVtcGxhdGUvZGV0YWlscy1kdWFsLWNvbC10ZW1wbGF0ZS9kZXRhaWxzLWR1YWwtY29sLXRlbXBsYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQ0FBZ0M7O0FBRXBDOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksY0FBYztBQUNsQjs7QUFFQTs7SUFFSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2RldGFpbHMvdGVtcGxhdGUvZGV0YWlscy1kdWFsLWNvbC10ZW1wbGF0ZS9kZXRhaWxzLWR1YWwtY29sLXRlbXBsYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvY2staGVhZGVyIHtcclxuICAgIGJvcmRlci1ib3R0b206ICNkYWRhZGEgMXB4IHNvbGlkO1xyXG5cclxufVxyXG5cclxuLmJsb2NrLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5jbGlja2FibGU6aG92ZXIge1xyXG4gICAgY29sb3I6ICMwMGI3ZjE7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jbGlja2FibGVcclxue1xyXG4gICAgY29sb3I6ICM2QzY3NkE7XHJcbn1cclxuXHJcbi5jb2xvci1ncmF5XHJcbntcclxuICAgIGNvbG9yOiAjNmM2NzZhO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailsDualColTemplateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-details-dual-col-template',
                templateUrl: './details-dual-col-template.component.html',
                styleUrls: ['./details-dual-col-template.component.css']
            }]
    }], function () { return []; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], detailsListLeft: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], detailsListRight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/details/template/details-fasilitas-cicilan-nol-template/details-fasilitas-cicilan-nol-template.component.ts":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/shared/details/template/details-fasilitas-cicilan-nol-template/details-fasilitas-cicilan-nol-template.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: DetailsFasilitasCicilanNolTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsFasilitasCicilanNolTemplateComponent", function() { return DetailsFasilitasCicilanNolTemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _component_detail_controller_detail_controller_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/detail-controller/detail-controller.component */ "./src/app/shared/details/component/detail-controller/detail-controller.component.ts");





function DetailsFasilitasCicilanNolTemplateComponent_mat_expansion_panel_0_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "MID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DetailsFasilitasCicilanNolTemplateComponent_mat_expansion_panel_0_tr_34_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dat_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dat_r3["mid"] ? dat_r3["mid"] : "-");
} }
function DetailsFasilitasCicilanNolTemplateComponent_mat_expansion_panel_0_tr_34_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dataoFacFiturItemListCards_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dataoFacFiturItemListCards_r9["mdr"], " % ");
} }
function DetailsFasilitasCicilanNolTemplateComponent_mat_expansion_panel_0_tr_34_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td");
} }
function DetailsFasilitasCicilanNolTemplateComponent_mat_expansion_panel_0_tr_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DetailsFasilitasCicilanNolTemplateComponent_mat_expansion_panel_0_tr_34_td_1_Template, 2, 1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DetailsFasilitasCicilanNolTemplateComponent_mat_expansion_panel_0_tr_34_td_8_Template, 2, 1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DetailsFasilitasCicilanNolTemplateComponent_mat_expansion_panel_0_tr_34_td_9_Template, 1, 0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dat_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.jenisOutlet != "e-commerce");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", dat_r3["tenor"] ? dat_r3["tenor"] : "-", " Bulan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dat_r3["name"] ? dat_r3["name"] : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dat_r3["plan"] ? dat_r3["plan"] : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", dat_r3.oFacFiturItemListCards);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isCupNotFound);
} }
function DetailsFasilitasCicilanNolTemplateComponent_mat_expansion_panel_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Fasilitas Cicilan 0%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-detail-controller", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DetailsFasilitasCicilanNolTemplateComponent_mat_expansion_panel_0_th_11_Template, 2, 0, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Tenor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Header Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Plan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "MDR");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "BCA Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Visa");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Master");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "JCB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "AMEX");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "CUP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, DetailsFasilitasCicilanNolTemplateComponent_mat_expansion_panel_0_tr_34_Template, 10, 6, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("detail", ctx_r0.detail)("data", ctx_r0.dataFasilitasCil0.oFacFiturItemLists[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.jenisOutlet != "e-commerce");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.dataFasilitasCil0.oFacFiturItemLists);
} }
class DetailsFasilitasCicilanNolTemplateComponent {
    constructor() {
        this.detail = {
            jsonName: ['dateFrom', 'dateTo'],
            label: 'Periode Umum',
            isDate: { 'dateFrom': true, 'dateTo': true },
            type: 'input-disabled',
            inputConfig: {
                prepend: { 'dateFrom': '<strong>Tanggal Mulai</strong>', 'dateTo': '<strong>Tanggal Selesai</strong>' },
                inputType: 'text',
            }
        };
    }
    ngOnInit() {
        this.checkDataFasilitasCil0();
    }
    checkDataFasilitasCil0() {
        var data = this.data.find((data) => data.name == 'Kredit');
        if (data && data.oFacilityFiturs != null) {
            data = data.oFacilityFiturs.find((data) => data.name == 'Cicilan 0%');
            this.dataFasilitasCil0 = data;
            if (this.dataFasilitasCil0) {
                this.dataFasilitasCil0.oFacFiturItemLists.forEach(oFacFiturItemList => {
                    let cup = oFacFiturItemList.oFacFiturItemListCards.find((oFacFiturItemListCard) => oFacFiturItemListCard.name == 'CUP');
                    console.log("cup", cup);
                    if (cup == undefined) {
                        this.isCupNotFound = true;
                    }
                });
            }
        }
    }
}
DetailsFasilitasCicilanNolTemplateComponent.ɵfac = function DetailsFasilitasCicilanNolTemplateComponent_Factory(t) { return new (t || DetailsFasilitasCicilanNolTemplateComponent)(); };
DetailsFasilitasCicilanNolTemplateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailsFasilitasCicilanNolTemplateComponent, selectors: [["app-details-fasilitas-cicilan-nol-template"]], inputs: { data: "data", jenisOutlet: "jenisOutlet" }, decls: 1, vars: 1, consts: [["class", "color-gray mb-3", 3, "expanded", 4, "ngIf"], [1, "color-gray", "mb-3", 3, "expanded"], [1, "block-header"], [1, "clickable"], [1, "block-content"], [3, "detail", "data"], [1, "table-responsive"], [1, "table", "table-striped", "table-hover", "text-center"], ["rowspan", "2", "class", "align-middle", 4, "ngIf"], ["rowspan", "2", 1, "align-middle"], ["colspan", "6"], [4, "ngFor", "ngForOf"], [4, "ngIf"]], template: function DetailsFasilitasCicilanNolTemplateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DetailsFasilitasCicilanNolTemplateComponent_mat_expansion_panel_0_Template, 35, 5, "mat-expansion-panel", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataFasilitasCil0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelTitle"], _component_detail_controller_detail_controller_component__WEBPACK_IMPORTED_MODULE_3__["DetailControllerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".block-header[_ngcontent-%COMP%] {\r\n    border-bottom: #dadada 1px solid;\r\n\r\n}\r\n\r\n.block-content[_ngcontent-%COMP%] {\r\n    padding-top: 15px;\r\n}\r\n\r\n.clickable[_ngcontent-%COMP%]:hover {\r\n    color: #00b7f1;\r\n    cursor: pointer;\r\n}\r\n\r\n.clickable[_ngcontent-%COMP%]\r\n{\r\n    color: #6C676A;\r\n}\r\n\r\n.color-gray[_ngcontent-%COMP%]\r\n{\r\n    color: #6c676a;\r\n}\r\n\r\n.main[_ngcontent-%COMP%] {\r\n    font-weight: 700;\r\n  }\r\n\r\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n      padding: 0.2rem 0.5rem  0.2rem 0.7rem;\r\n      vertical-align: middle;\r\n      border-top: 1px solid #dee2e6;\r\n      color: #6c676a;\r\n  }\r\n\r\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] \r\n  {\r\n      font-size: 14.3px;\r\n  }\r\n\r\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]\r\n  {\r\n        min-width: 7em;\r\n      max-width: 15em;\r\n      word-wrap: break-word;\r\n      font-size: 13px;\r\n  }\r\n\r\n.fixed-width-btn[_ngcontent-%COMP%]\r\n  {\r\n      min-width: 7em;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2RldGFpbHMvdGVtcGxhdGUvZGV0YWlscy1mYXNpbGl0YXMtY2ljaWxhbi1ub2wtdGVtcGxhdGUvZGV0YWlscy1mYXNpbGl0YXMtY2ljaWxhbi1ub2wtdGVtcGxhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdDQUFnQzs7QUFFcEM7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxjQUFjO0FBQ2xCOztBQUVBOztJQUVJLGNBQWM7QUFDbEI7O0FBR0E7SUFDSSxnQkFBZ0I7RUFDbEI7O0FBR0E7TUFDSSxxQ0FBcUM7TUFDckMsc0JBQXNCO01BQ3RCLDZCQUE2QjtNQUM3QixjQUFjO0VBQ2xCOztBQUVBOztNQUVJLGlCQUFpQjtFQUNyQjs7QUFFQTs7UUFFTSxjQUFjO01BQ2hCLGVBQWU7TUFDZixxQkFBcUI7TUFDckIsZUFBZTtFQUNuQjs7QUFFQTs7TUFFSSxjQUFjO0VBQ2xCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2RldGFpbHMvdGVtcGxhdGUvZGV0YWlscy1mYXNpbGl0YXMtY2ljaWxhbi1ub2wtdGVtcGxhdGUvZGV0YWlscy1mYXNpbGl0YXMtY2ljaWxhbi1ub2wtdGVtcGxhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibG9jay1oZWFkZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogI2RhZGFkYSAxcHggc29saWQ7XHJcblxyXG59XHJcblxyXG4uYmxvY2stY29udGVudCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxufVxyXG5cclxuLmNsaWNrYWJsZTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzAwYjdmMTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNsaWNrYWJsZVxyXG57XHJcbiAgICBjb2xvcjogIzZDNjc2QTtcclxufVxyXG5cclxuLmNvbG9yLWdyYXlcclxue1xyXG4gICAgY29sb3I6ICM2YzY3NmE7XHJcbn1cclxuXHJcblxyXG4ubWFpbiB7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuICBcclxuICBcclxuICAudGFibGUgdGQsIC50YWJsZSB0aCB7XHJcbiAgICAgIHBhZGRpbmc6IDAuMnJlbSAwLjVyZW0gIDAuMnJlbSAwLjdyZW07XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgICBjb2xvcjogIzZjNjc2YTtcclxuICB9IFxyXG4gIFxyXG4gIC50YWJsZSB0aCBcclxuICB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTQuM3B4O1xyXG4gIH1cclxuICBcclxuICAudGFibGUgdGRcclxuICB7XHJcbiAgICAgICAgbWluLXdpZHRoOiA3ZW07XHJcbiAgICAgIG1heC13aWR0aDogMTVlbTtcclxuICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5maXhlZC13aWR0aC1idG5cclxuICB7XHJcbiAgICAgIG1pbi13aWR0aDogN2VtO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailsFasilitasCicilanNolTemplateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-details-fasilitas-cicilan-nol-template',
                templateUrl: './details-fasilitas-cicilan-nol-template.component.html',
                styleUrls: ['./details-fasilitas-cicilan-nol-template.component.css']
            }]
    }], function () { return []; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], jenisOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/details/template/details-fasilitas-default-template/details-fasilitas-default-template.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/shared/details/template/details-fasilitas-default-template/details-fasilitas-default-template.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: DetailsFasilitasDefaultTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsFasilitasDefaultTemplateComponent", function() { return DetailsFasilitasDefaultTemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _component_custom_detail_fasilitas_detail_fasilitas_detail_fasilitas_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/custom/detail-fasilitas/detail-fasilitas/detail-fasilitas.component */ "./src/app/shared/details/component/custom/detail-fasilitas/detail-fasilitas/detail-fasilitas.component.ts");




class DetailsFasilitasDefaultTemplateComponent {
    constructor() { }
    ngOnInit() {
    }
}
DetailsFasilitasDefaultTemplateComponent.ɵfac = function DetailsFasilitasDefaultTemplateComponent_Factory(t) { return new (t || DetailsFasilitasDefaultTemplateComponent)(); };
DetailsFasilitasDefaultTemplateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailsFasilitasDefaultTemplateComponent, selectors: [["app-details-fasilitas-default-template"]], inputs: { data: "data", category: "category" }, decls: 7, vars: 3, consts: [[1, "color-gray", "mb-3", 3, "expanded"], [1, "block-header"], [1, "clickable"], [1, "block-content"], [3, "category", "dataList"]], template: function DetailsFasilitasDefaultTemplateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Fasilitas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-detail-fasilitas", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("category", ctx.category)("dataList", ctx.data);
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelTitle"], _component_custom_detail_fasilitas_detail_fasilitas_detail_fasilitas_component__WEBPACK_IMPORTED_MODULE_2__["DetailFasilitasComponent"]], styles: [".block-header[_ngcontent-%COMP%] {\r\n    border-bottom: #dadada 1px solid;\r\n\r\n}\r\n\r\n.block-content[_ngcontent-%COMP%] {\r\n    padding-top: 15px;\r\n}\r\n\r\n.clickable[_ngcontent-%COMP%]:hover {\r\n    color: #00b7f1;\r\n    cursor: pointer;\r\n}\r\n\r\n.clickable[_ngcontent-%COMP%]\r\n{\r\n    color: #6C676A;\r\n}\r\n\r\n.color-gray[_ngcontent-%COMP%]\r\n{\r\n    color: #6c676a;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2RldGFpbHMvdGVtcGxhdGUvZGV0YWlscy1mYXNpbGl0YXMtZGVmYXVsdC10ZW1wbGF0ZS9kZXRhaWxzLWZhc2lsaXRhcy1kZWZhdWx0LXRlbXBsYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQ0FBZ0M7O0FBRXBDOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksY0FBYztBQUNsQjs7QUFFQTs7SUFFSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2RldGFpbHMvdGVtcGxhdGUvZGV0YWlscy1mYXNpbGl0YXMtZGVmYXVsdC10ZW1wbGF0ZS9kZXRhaWxzLWZhc2lsaXRhcy1kZWZhdWx0LXRlbXBsYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvY2staGVhZGVyIHtcclxuICAgIGJvcmRlci1ib3R0b206ICNkYWRhZGEgMXB4IHNvbGlkO1xyXG5cclxufVxyXG5cclxuLmJsb2NrLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5jbGlja2FibGU6aG92ZXIge1xyXG4gICAgY29sb3I6ICMwMGI3ZjE7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jbGlja2FibGVcclxue1xyXG4gICAgY29sb3I6ICM2QzY3NkE7XHJcbn1cclxuXHJcbi5jb2xvci1ncmF5XHJcbntcclxuICAgIGNvbG9yOiAjNmM2NzZhO1xyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailsFasilitasDefaultTemplateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-details-fasilitas-default-template',
                templateUrl: './details-fasilitas-default-template.component.html',
                styleUrls: ['./details-fasilitas-default-template.component.css']
            }]
    }], function () { return []; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], category: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/details/template/details-fasilitas-e-commerce-template/details-fasilitas-e-commerce-template.component.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/shared/details/template/details-fasilitas-e-commerce-template/details-fasilitas-e-commerce-template.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: DetailsFasilitasECommerceTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsFasilitasECommerceTemplateComponent", function() { return DetailsFasilitasECommerceTemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _component_custom_detail_fasilitas_detail_fasilitas_fitur_detail_fasilitas_fitur_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/custom/detail-fasilitas/detail-fasilitas-fitur/detail-fasilitas-fitur.component */ "./src/app/shared/details/component/custom/detail-fasilitas/detail-fasilitas-fitur/detail-fasilitas-fitur.component.ts");
/* harmony import */ var _component_custom_detail_fasilitas_detail_table_mdr_detail_table_mdr_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../component/custom/detail-fasilitas/detail-table-mdr/detail-table-mdr.component */ "./src/app/shared/details/component/custom/detail-fasilitas/detail-table-mdr/detail-table-mdr.component.ts");






function DetailsFasilitasECommerceTemplateComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "MDR Kredit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-detail-table-mdr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-detail-table-mdr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("key", ctx_r0.key["onUs"])("tableMdr", ctx_r0.kreditMDR["onUs"])("dataList", ctx_r0.dataKredit.oFacilityCards)("title", "On US");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("key", ctx_r0.key["offUs"])("tableMdr", ctx_r0.kreditMDR["offUs"])("dataList", ctx_r0.dataKredit.oFacilityCards)("title", "Off US");
} }
class DetailsFasilitasECommerceTemplateComponent {
    constructor() {
        this.dataFasilitas = {};
        this.kreditMDR = {
            onUs: [
                {
                    label: 'BCA Card',
                    name: 'BCA Card'
                },
                {
                    label: 'BCA Visa',
                    name: 'BCA Visa'
                },
                {
                    label: 'BCA Master',
                    name: 'BCA Master'
                },
                {
                    label: 'BCA JCB',
                    name: 'BCA JCB'
                },
                {
                    label: 'BCA Amex',
                    name: 'BCA Amex'
                },
                {
                    label: 'BCA CUP',
                    name: 'BCA CUP'
                },
            ],
            offUs: [
                {
                    label: 'CUP',
                    name: 'CUP'
                },
                {
                    label: 'Visa',
                    name: 'Visa'
                },
                {
                    label: 'Master',
                    name: 'Master'
                },
                {
                    label: 'JCB',
                    name: 'JCB'
                },
                {
                    label: 'Amex',
                    name: 'Amex'
                },
            ]
        };
        this.key = {
            onUs: {
                name: 'nameOnUs',
                mdr: 'mdrOnUs',
                flag: 'isActiveOnUs'
            },
            offUs: {
                name: 'nameOffUs',
                mdr: 'mdrOffUs',
                flag: 'isActiveOffUs'
            }
        };
        this.allFitur = [
            {
                name: 'Kredit',
                value: true
            },
            {
                name: 'Refund',
            },
            {
                name: 'Void',
            },
            {
                name: 'Payment Link',
            },
            {
                name: 'Moto / VEDC',
            },
            {
                name: 'Allow Advance API',
            },
            {
                name: 'Tokenization',
            },
            {
                name: 'Fare & Non Fare',
            },
            {
                name: 'Reward',
            },
            {
                name: 'DCC',
                children1: [
                    {
                        name: 'DCC Value',
                        inputType: 'text',
                        append: '%'
                    }
                ]
            },
            {
                name: 'Klikpay Debit',
                children1: [
                    {
                        name: 'Fee Debit',
                        inputType: 'currency',
                    }
                ]
            },
            {
                name: 'Klikpay Debit & Kredit',
                children1: [
                    {
                        name: 'Fee Debit',
                        inputType: 'currency',
                    }
                ]
            },
            {
                name: 'Manual Settle',
                children1: [
                    {
                        name: 'Never Force Settle',
                        inputType: 'radio',
                    },
                    {
                        name: 'Force Settle After',
                        inputType: 'text',
                        append: 'Day'
                    }
                ]
            },
            {
                name: 'Cicilan',
                children1: [
                    {
                        name: 'Cicilan Regular',
                        inputType: 'checkbox',
                        children2: [
                            {
                                name: 'Plan',
                                inputType: 'text',
                            },
                            {
                                name: 'Everyday Plan',
                                inputType: 'text',
                            },
                            {
                                name: 'Min Transaction',
                                inputType: 'currency',
                            },
                            {
                                name: 'Max Transaction',
                                inputType: 'currency',
                            },
                        ]
                    },
                    {
                        name: 'Cicilan 0%',
                        inputType: 'checkbox',
                        children2: [
                            {
                                name: 'Min Transaction',
                                inputType: 'currency',
                            },
                            {
                                name: 'Max Transaction',
                                inputType: 'currency',
                            },
                        ]
                    }
                ],
            },
        ];
        this.length = 1;
    }
    ngOnInit() {
        this.insertValueFitur();
        this.searchDataFasilitasKredit();
    }
    searchDataFasilitasKredit() {
        this.dataKredit = this.dataList.find(data => data.name.toString().toUpperCase() == 'KREDIT');
        if (!this.dataKredit) {
            this.dataKredit = this.dataList.find(data => data.name.toString().toUpperCase() == 'CREDIT');
        }
    }
    insertValueFitur() {
        if (this.dataList) {
            this.allFitur.forEach(menu => {
                this.dataList.forEach(oFacilities => {
                    oFacilities.oFacilityFiturs.forEach(fitur => {
                        if (fitur.name == menu.name && menu.name != 'Manual Settle') {
                            menu.value = true;
                            this.length++;
                            if (menu.children1) {
                                menu.children1.forEach(itemChild => {
                                    fitur.oFacFiturItems.forEach(itemFitur => {
                                        if (itemFitur.name == itemChild.name && itemFitur.value && itemFitur.value != 'false') {
                                            itemChild.value = itemFitur.value;
                                        }
                                    });
                                });
                            }
                        }
                        else if (fitur.name == menu.name && menu.name == 'Manual Settle') {
                            menu.value = true;
                            this.length++;
                            if (fitur.oFacFiturItems[0].value == "0") {
                                menu.children1[0].value = true;
                            }
                            else {
                                menu.children1[1].value = fitur.oFacFiturItems[0].value;
                            }
                        }
                        else if (menu.name == 'Cicilan' && (fitur.name == 'Cicilan Regular' || fitur.name == 'Cicilan 0%')) {
                            menu.value = true;
                            const itemMenu = menu.children1.find((child) => child.name == fitur.name);
                            itemMenu.value = true;
                            this.length++;
                            if (itemMenu.children2) {
                                itemMenu.children2.forEach(itemChild => {
                                    fitur.oFacFiturItems.forEach(itemFitur => {
                                        if (itemFitur.name == itemChild.name && itemFitur.value && itemFitur.value != 'false') {
                                            itemChild.value = itemFitur.value;
                                        }
                                    });
                                });
                            }
                        }
                    });
                });
            });
        }
        this.fiturLeft = this.allFitur.slice(0, 10);
        this.fiturRight = this.allFitur.slice(10, this.allFitur.length);
    }
}
DetailsFasilitasECommerceTemplateComponent.ɵfac = function DetailsFasilitasECommerceTemplateComponent_Factory(t) { return new (t || DetailsFasilitasECommerceTemplateComponent)(); };
DetailsFasilitasECommerceTemplateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailsFasilitasECommerceTemplateComponent, selectors: [["app-details-fasilitas-e-commerce-template"]], inputs: { dataList: "dataList" }, decls: 15, vars: 6, consts: [[1, "color-gray", "mb-3", 3, "expanded"], [1, "block-header"], [1, "clickable"], [1, "block-content"], ["class", "row mb-2", 4, "ngIf"], [1, "row", "mb-2"], [1, "col-md-3", "label-text"], [1, "main"], [1, "col-md-4"], [3, "fiturConfiguration", "length"], [3, "key", "tableMdr", "dataList", "title"]], template: function DetailsFasilitasECommerceTemplateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Fasilitas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DetailsFasilitasECommerceTemplateComponent_div_6_Template, 8, 8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Fitur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-detail-fasilitas-fitur", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-detail-fasilitas-fitur", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataKredit && ctx.dataKredit.oFacilityCards);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fiturConfiguration", ctx.fiturLeft)("length", ctx.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fiturConfiguration", ctx.fiturRight)("length", ctx.length);
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _component_custom_detail_fasilitas_detail_fasilitas_fitur_detail_fasilitas_fitur_component__WEBPACK_IMPORTED_MODULE_3__["DetailFasilitasFiturComponent"], _component_custom_detail_fasilitas_detail_table_mdr_detail_table_mdr_component__WEBPACK_IMPORTED_MODULE_4__["DetailTableMdrComponent"]], styles: [".block-header[_ngcontent-%COMP%] {\r\n    border-bottom: #dadada 1px solid;\r\n\r\n}\r\n\r\n.block-content[_ngcontent-%COMP%] {\r\n    padding-top: 15px;\r\n}\r\n\r\n.clickable[_ngcontent-%COMP%]:hover {\r\n    color: #00b7f1;\r\n    cursor: pointer;\r\n}\r\n\r\n.clickable[_ngcontent-%COMP%]\r\n{\r\n    color: #6C676A;\r\n}\r\n\r\n.color-gray[_ngcontent-%COMP%]\r\n{\r\n    color: #6c676a;\r\n}\r\n\r\n@media(max-width: 768px) \r\n{\r\n.label-text[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n  }\r\n}\r\n\r\n@media(min-width: 768px) \r\n{\r\n.label-text[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n  }\r\n}\r\n\r\n.main[_ngcontent-%COMP%] {\r\n  font-weight: 700;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2RldGFpbHMvdGVtcGxhdGUvZGV0YWlscy1mYXNpbGl0YXMtZS1jb21tZXJjZS10ZW1wbGF0ZS9kZXRhaWxzLWZhc2lsaXRhcy1lLWNvbW1lcmNlLXRlbXBsYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQ0FBZ0M7O0FBRXBDOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksY0FBYztBQUNsQjs7QUFFQTs7SUFFSSxjQUFjO0FBQ2xCOztBQUdBOztBQUVBO0lBQ0ksZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7O0FBRUE7SUFDSSxpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9kZXRhaWxzL3RlbXBsYXRlL2RldGFpbHMtZmFzaWxpdGFzLWUtY29tbWVyY2UtdGVtcGxhdGUvZGV0YWlscy1mYXNpbGl0YXMtZS1jb21tZXJjZS10ZW1wbGF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsb2NrLWhlYWRlciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAjZGFkYWRhIDFweCBzb2xpZDtcclxuXHJcbn1cclxuXHJcbi5ibG9jay1jb250ZW50IHtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG59XHJcblxyXG4uY2xpY2thYmxlOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMDBiN2YxO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2xpY2thYmxlXHJcbntcclxuICAgIGNvbG9yOiAjNkM2NzZBO1xyXG59XHJcblxyXG4uY29sb3ItZ3JheVxyXG57XHJcbiAgICBjb2xvcjogIzZjNjc2YTtcclxufVxyXG5cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KSBcclxue1xyXG4ubGFiZWwtdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhKG1pbi13aWR0aDogNzY4cHgpIFxyXG57XHJcbi5sYWJlbC10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxufVxyXG5cclxuLm1haW4ge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailsFasilitasECommerceTemplateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-details-fasilitas-e-commerce-template',
                templateUrl: './details-fasilitas-e-commerce-template.component.html',
                styleUrls: ['./details-fasilitas-e-commerce-template.component.css']
            }]
    }], function () { return []; }, { dataList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/details/template/details-simple-template/details-simple-template.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/shared/details/template/details-simple-template/details-simple-template.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: DetailsSimpleTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsSimpleTemplateComponent", function() { return DetailsSimpleTemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _component_detail_controller_detail_controller_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/detail-controller/detail-controller.component */ "./src/app/shared/details/component/detail-controller/detail-controller.component.ts");





function DetailsSimpleTemplateComponent_app_detail_controller_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-detail-controller", 6);
} if (rf & 2) {
    const detail_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("detail", detail_r2)("data", ctx_r0.data);
} }
function DetailsSimpleTemplateComponent_mat_action_row_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-action-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsSimpleTemplateComponent_mat_action_row_7_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.close.emit(ctx_r3.data); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DetailsSimpleTemplateComponent {
    constructor() {
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
}
DetailsSimpleTemplateComponent.ɵfac = function DetailsSimpleTemplateComponent_Factory(t) { return new (t || DetailsSimpleTemplateComponent)(); };
DetailsSimpleTemplateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailsSimpleTemplateComponent, selectors: [["app-details-simple-template"]], inputs: { title: "title", data: "data", detailsList: "detailsList", closeButton: "closeButton" }, outputs: { close: "close" }, decls: 8, vars: 4, consts: [[1, "color-gray", "mb-3", 3, "expanded"], [1, "block-header"], [1, "clickable"], [1, "block-content"], [3, "detail", "data", 4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "detail", "data"], [1, "btn", "btn-danger", 3, "click"], [1, "fas", "fa-window-close"]], template: function DetailsSimpleTemplateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DetailsSimpleTemplateComponent_app_detail_controller_6_Template, 1, 2, "app-detail-controller", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DetailsSimpleTemplateComponent_mat_action_row_7_Template, 4, 0, "mat-action-row", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.detailsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.closeButton);
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _component_detail_controller_detail_controller_component__WEBPACK_IMPORTED_MODULE_3__["DetailControllerComponent"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelActionRow"]], styles: [".block-header[_ngcontent-%COMP%] {\r\n    border-bottom: #dadada 1px solid;\r\n\r\n}\r\n\r\n.block-content[_ngcontent-%COMP%] {\r\n    padding-top: 15px;\r\n}\r\n\r\n.clickable[_ngcontent-%COMP%]:hover {\r\n    color: #00b7f1;\r\n    cursor: pointer;\r\n}\r\n\r\n.clickable[_ngcontent-%COMP%]\r\n{\r\n    color: #6C676A;\r\n}\r\n\r\n.color-gray[_ngcontent-%COMP%]\r\n{\r\n    color: #6c676a;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2RldGFpbHMvdGVtcGxhdGUvZGV0YWlscy1zaW1wbGUtdGVtcGxhdGUvZGV0YWlscy1zaW1wbGUtdGVtcGxhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdDQUFnQzs7QUFFcEM7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxjQUFjO0FBQ2xCOztBQUVBOztJQUVJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZGV0YWlscy90ZW1wbGF0ZS9kZXRhaWxzLXNpbXBsZS10ZW1wbGF0ZS9kZXRhaWxzLXNpbXBsZS10ZW1wbGF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsb2NrLWhlYWRlciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAjZGFkYWRhIDFweCBzb2xpZDtcclxuXHJcbn1cclxuXHJcbi5ibG9jay1jb250ZW50IHtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG59XHJcblxyXG4uY2xpY2thYmxlOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMDBiN2YxO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2xpY2thYmxlXHJcbntcclxuICAgIGNvbG9yOiAjNkM2NzZBO1xyXG59XHJcblxyXG4uY29sb3ItZ3JheVxyXG57XHJcbiAgICBjb2xvcjogIzZjNjc2YTtcclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailsSimpleTemplateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-details-simple-template',
                templateUrl: './details-simple-template.component.html',
                styleUrls: ['./details-simple-template.component.css']
            }]
    }], function () { return []; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], detailsList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], closeButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/form/component/input-address/input-address.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared/form/component/input-address/input-address.component.ts ***!
  \********************************************************************************/
/*! exports provided: InputAddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputAddressComponent", function() { return InputAddressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_data_api_data_master_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/data-api/data-master.api */ "./src/app/data-api/data-master.api.ts");
/* harmony import */ var _input_modal_input_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../input-modal/input-modal.component */ "./src/app/shared/form/component/input-modal/input-modal.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






class InputAddressComponent {
    constructor() {
        this.modalConfiguration = {
            displayKey: "village_name",
            displayKey2: "postal_code",
            apiUrl: src_app_data_api_data_master_api__WEBPACK_IMPORTED_MODULE_1__["GET_LIST_POSTAL"],
            paginationInit: {
                page: 1,
                size: 10,
                orderby: "postal_code asc",
                query: ""
            },
            tableData: [
                {
                    headerName: "Kode Pos",
                    jsonName: "postal_code",
                    search: {
                        inputType: "text",
                        inputQuery: "full_like",
                    }
                },
                {
                    headerName: "Kelurahan",
                    jsonName: "village_name",
                    search: {
                        inputType: "text",
                        inputQuery: "full_like",
                    }
                },
                {
                    headerName: "Kecamatan",
                    jsonName: "subdistrict_name",
                    search: {
                        inputType: "text",
                        inputQuery: "full_like",
                    }
                },
                {
                    headerName: "Kota / Kabupaten",
                    jsonName: "regency_name",
                    search: {
                        inputType: "text",
                        inputQuery: "full_like",
                    }
                },
                {
                    headerName: "Propinsi",
                    jsonName: "province_name",
                    search: {
                        inputType: "text",
                        inputQuery: "full_like",
                    }
                }
            ]
        };
    }
    ngOnInit() {
        this.indented = this.input.indented ? `col-md-${this.input.indented}` : ``;
        this.colLabel = this.input.colLabel ? `col-md-${this.input.colLabel}` : `col-md-3`;
        this.colInput = this.input.colInput ? `col-md-${this.input.colInput}` : `col-md-6`;
        var inputDetails = this.input;
        this.modalConfiguration.displayInit = this.formGroup.get("village_name").value;
        this.modalConfiguration.displayInit2 = this.formGroup.get("postal_code").value;
        this.modalConfiguration.tableTitle = "Kode Pos";
        this.modalConfiguration.displayLabel = "Kelurahan";
        this.modalConfiguration.displayLabel2 = "Kode Pos";
        inputDetails.modalConfiguration = this.modalConfiguration;
        this.input = inputDetails;
        console.log(this.input);
    }
    valid(input) {
        if (typeof input.jsonName != "object") {
            return this.formGroup.get(input.jsonName).touched && this.formGroup.get(input.jsonName).valid;
        }
        else {
            var check = true;
            input.jsonName.forEach((jsonName) => {
                check = check && this.formGroup.get(jsonName).touched && this.formGroup.get(jsonName).valid;
            });
            return check;
        }
    }
    invalid(input) {
        if (typeof input.jsonName != "object") {
            return this.formGroup.get(input.jsonName).touched && this.formGroup.get(input.jsonName).invalid;
        }
        else {
            var check = false;
            input.jsonName.forEach((jsonName) => {
                check = check || (this.formGroup.get(jsonName).touched && this.formGroup.get(jsonName).invalid);
            });
            return check;
        }
    }
}
InputAddressComponent.ɵfac = function InputAddressComponent_Factory(t) { return new (t || InputAddressComponent)(); };
InputAddressComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputAddressComponent, selectors: [["app-input-address"]], inputs: { input: "input", formGroup: "formGroup" }, decls: 25, vars: 13, consts: [[3, "input", "formGroup"], [1, "row", "mb-3"], [3, "ngClass"], [3, "formGroup"], [1, "row", "mt-2", 2, "font-size", "15px"], [1, "col-sm-4"], [1, "form-control-static"]], template: function InputAddressComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-input-modal", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Kecamatan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Kota");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Propinsi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("input", ctx.input)("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("text-danger", ctx.invalid(ctx.input))("text-success", ctx.valid(ctx.input));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.indented);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.colLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.colInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formGroup.get("subdistrict_name").value ? ctx.formGroup.get("subdistrict_name").value : "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formGroup.get("regency_name").value ? ctx.formGroup.get("regency_name").value : "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formGroup.get("province_name").value ? ctx.formGroup.get("province_name").value : "-");
    } }, directives: [_input_modal_input_modal_component__WEBPACK_IMPORTED_MODULE_2__["InputModalComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], styles: [".note[_ngcontent-%COMP%]\r\n{\r\n    margin-top: 5px;\r\n    font-size: 11.7px;\r\n}\r\n\r\n.main[_ngcontent-%COMP%] {\r\n    font-weight: 500; \r\n}\r\n\r\n@media(max-width: 768px) \r\n{\r\n.label-text[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n  }\r\n}\r\n\r\n@media(min-width: 768px) \r\n{\r\n.label-text[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Zvcm0vY29tcG9uZW50L2lucHV0LWFkZHJlc3MvaW5wdXQtYWRkcmVzcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBQ0E7O0FBRUE7SUFDSSxnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTs7QUFFQTtJQUNJLGlCQUFpQjtFQUNuQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2Zvcm0vY29tcG9uZW50L2lucHV0LWFkZHJlc3MvaW5wdXQtYWRkcmVzcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdGVcclxue1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMS43cHg7XHJcbn1cclxuXHJcbi5tYWluIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7IFxyXG59XHJcbkBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KSBcclxue1xyXG4ubGFiZWwtdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhKG1pbi13aWR0aDogNzY4cHgpIFxyXG57XHJcbi5sYWJlbC10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputAddressComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-input-address',
                templateUrl: './input-address.component.html',
                styleUrls: ['./input-address.component.css']
            }]
    }], function () { return []; }, { input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], formGroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/form/component/input-date/input-date.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/form/component/input-date/input-date.component.ts ***!
  \**************************************************************************/
/*! exports provided: InputDateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputDateComponent", function() { return InputDateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




function InputDateComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InputDateComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r1.input.prepend, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function InputDateComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r2.input.append, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function InputDateComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Wajib diisi! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InputDateComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Inputan tidak boleh lebih dari ", ctx_r4.input.maxlength, " digit! ");
} }
function InputDateComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Inputan tidak boleh kurang dari ", ctx_r5.input.minlength, " digit! ");
} }
function InputDateComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Sedang Memuat... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InputDateComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Gagal Memuat Data! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InputDateComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Inputan sudah ada! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class InputDateComponent {
    constructor() { }
    ngOnInit() {
        this.indented = this.input.indented ? `col-md-${this.input.indented}` : ``;
        this.colLabel = this.input.colLabel ? `col-md-${this.input.colLabel}` : `col-md-3`;
        this.colInput = this.input.colInput ? `col-md-${this.input.colInput}` : `col-md-6`;
    }
}
InputDateComponent.ɵfac = function InputDateComponent_Factory(t) { return new (t || InputDateComponent)(); };
InputDateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputDateComponent, selectors: [["app-input-date"]], inputs: { input: "input", formGroup: "formGroup" }, decls: 18, vars: 30, consts: [[1, "row", "mb-3", "color-gray"], [3, "ngClass"], [1, "label-text", 3, "ngClass"], [1, "main"], ["class", "text-danger", 4, "ngIf"], [3, "formGroup"], [1, "input-group", "input-group-sm"], ["class", "input-group-prepend", 4, "ngIf"], ["type", "date", 1, "form-control-sm", "form-control", 3, "formControlName", "placeholder"], ["class", "input-group-append", 4, "ngIf"], ["class", "note text-danger", 4, "ngIf"], ["class", "note text-warning", 4, "ngIf"], [1, "text-danger"], [1, "input-group-prepend"], [1, "input-group-text"], [3, "innerHTML"], [1, "input-group-append"], [1, "note", "text-danger"], [1, "note", "text-warning"], [1, "fas", "fa-hourglass-end"]], template: function InputDateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InputDateComponent_span_5_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, InputDateComponent_div_9_Template, 3, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, InputDateComponent_div_11_Template, 3, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, InputDateComponent_div_12_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, InputDateComponent_div_13_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, InputDateComponent_div_14_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, InputDateComponent_div_15_Template, 3, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, InputDateComponent_div_16_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, InputDateComponent_div_17_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("text-danger", ctx.formGroup.get(ctx.input.jsonName).touched && ctx.formGroup.get(ctx.input.jsonName).invalid)("text-success", ctx.formGroup.get(ctx.input.jsonName).touched && ctx.formGroup.get(ctx.input.jsonName).valid)("text-warning", ctx.formGroup.get(ctx.input.jsonName).touched && ctx.formGroup.get(ctx.input.jsonName).status == "PENDING");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.indented);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.colLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.input.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.input.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.colInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.input.prepend);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("has-warning", ctx.formGroup.get(ctx.input.jsonName).touched && ctx.formGroup.get(ctx.input.jsonName).status == "PENDING")("is-invalid", ctx.formGroup.get(ctx.input.jsonName).touched && ctx.formGroup.get(ctx.input.jsonName).invalid)("is-valid", ctx.formGroup.get(ctx.input.jsonName).touched && ctx.formGroup.get(ctx.input.jsonName).valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx.input.jsonName)("placeholder", ctx.input.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("maxlength", ctx.input.maxlength)("id", ctx.input.jsonName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.input.append);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroup.get(ctx.input.jsonName).touched && (ctx.formGroup.get(ctx.input.jsonName).errors == null ? null : ctx.formGroup.get(ctx.input.jsonName).errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroup.get(ctx.input.jsonName).touched && (ctx.formGroup.get(ctx.input.jsonName).errors == null ? null : ctx.formGroup.get(ctx.input.jsonName).errors.maxlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroup.get(ctx.input.jsonName).touched && (ctx.formGroup.get(ctx.input.jsonName).errors == null ? null : ctx.formGroup.get(ctx.input.jsonName).errors.minlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroup.get(ctx.input.jsonName).touched && ctx.formGroup.get(ctx.input.jsonName).status == "PENDING");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroup.get(ctx.input.jsonName).touched && (ctx.formGroup.get(ctx.input.jsonName).errors == null ? null : ctx.formGroup.get(ctx.input.jsonName).errors.errorService));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroup.get(ctx.input.jsonName).touched && (ctx.formGroup.get(ctx.input.jsonName).errors == null ? null : ctx.formGroup.get(ctx.input.jsonName).errors.duplicate));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"]], styles: [".note[_ngcontent-%COMP%]\r\n{\r\n    margin-top: 5px;\r\n    font-size: 11.7px;\r\n}\r\n\r\n.main[_ngcontent-%COMP%] {\r\n    font-weight: 500; \r\n}\r\n\r\n@media(max-width: 768px) \r\n{\r\n.label-text[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n  }\r\n}\r\n\r\n@media(min-width: 768px) \r\n{\r\n.label-text[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n  }\r\n}\r\n\r\n.has-warning[_ngcontent-%COMP%], .has-warning[_ngcontent-%COMP%]:focus\r\n{\r\n  border-color: #f0ad4e!important;\r\n  box-shadow: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Zvcm0vY29tcG9uZW50L2lucHV0LWRhdGUvaW5wdXQtZGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBQ0E7O0FBRUE7SUFDSSxnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTs7QUFFQTtJQUNJLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBOztFQUVFLCtCQUErQjtFQUMvQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZm9ybS9jb21wb25lbnQvaW5wdXQtZGF0ZS9pbnB1dC1kYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90ZVxyXG57XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDExLjdweDtcclxufVxyXG5cclxuLm1haW4ge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDsgXHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDogNzY4cHgpIFxyXG57XHJcbi5sYWJlbC10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEobWluLXdpZHRoOiA3NjhweCkgXHJcbntcclxuLmxhYmVsLXRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG59XHJcblxyXG4uaGFzLXdhcm5pbmcsIC5oYXMtd2FybmluZzpmb2N1c1xyXG57XHJcbiAgYm9yZGVyLWNvbG9yOiAjZjBhZDRlIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputDateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-input-date',
                templateUrl: './input-date.component.html',
                styleUrls: ['./input-date.component.css']
            }]
    }], function () { return []; }, { input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], formGroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/form/component/input-modal/input-modal.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/form/component/input-modal/input-modal.component.ts ***!
  \****************************************************************************/
/*! exports provided: InputModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputModalComponent", function() { return InputModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _table_modal_table_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./table-modal/table-modal.component */ "./src/app/shared/form/component/input-modal/table-modal/table-modal.component.ts");






function InputModalComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InputModalComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputModalComponent_div_13_Template_p_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); return ctx_r7.open(_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("failed", ctx_r1.invalid(ctx_r1.input))("success", ctx_r1.valid(ctx_r1.input));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.displayData2 ? ctx_r1.displayData2 : ctx_r1.input.modalConfiguration.displayLabel2 ? ctx_r1.input.modalConfiguration.displayLabel2 : ctx_r1.input.label);
} }
function InputModalComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InputModalComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputModalComponent_div_15_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.clear(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hapus");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InputModalComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Wajib diisi! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InputModalComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputModalComponent_ng_template_17_Template_button_click_3_listener() { const modal_r11 = ctx.$implicit; return modal_r11.dismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-table-modal", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("inputEvent", function InputModalComponent_ng_template_17_Template_app_table_modal_inputEvent_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const modal_r11 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r13.inputEvent($event); return modal_r11.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputModalComponent_ng_template_17_Template_button_click_9_listener() { const modal_r11 = ctx.$implicit; return modal_r11.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Go Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.input.modalConfiguration.tableTitle ? ctx_r6.input.modalConfiguration.tableTitle : ctx_r6.input.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("modalConfiguration", ctx_r6.input.modalConfiguration);
} }
class InputModalComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    ngOnInit() {
        if (this.input.value != null && this.input.value != 0) {
            this.displayData = this.input.modalConfiguration.displayInit;
            if (this.input.modalConfiguration.displayKey2 && this.input.modalConfiguration.displayInit2) {
                this.displayData2 = this.input.modalConfiguration.displayInit2;
            }
        }
    }
    inputEvent(event) {
        //buat display data
        if (this.input.modalConfiguration.valuesKey) {
            const displayKey = this.input.modalConfiguration.valuesKey[this.input.modalConfiguration.displayKey] ? this.input.modalConfiguration.valuesKey[this.input.modalConfiguration.displayKey] : this.input.modalConfiguration.displayKey;
            this.displayData = event[displayKey];
            if (this.input.modalConfiguration.displayKey2) {
                const displayKey2 = this.input.modalConfiguration.valuesKey[this.input.modalConfiguration.displayKey2] ? this.input.modalConfiguration.valuesKey[this.input.modalConfiguration.displayKey2] : this.input.modalConfiguration.displayKey2;
                this.displayData2 = event[displayKey2];
            }
        }
        else {
            const displayKey = this.input.modalConfiguration.displayKey;
            this.displayData = event[displayKey];
            if (this.input.modalConfiguration.displayKey2) {
                const displayKey2 = this.input.modalConfiguration.displayKey2;
                this.displayData2 = event[displayKey2];
            }
        }
        //buat nge set value setelah di klik
        this.input.jsonName.forEach(jsonName => {
            if (this.input.modalConfiguration.valuesKey && this.input.modalConfiguration.valuesKey[jsonName]) {
                this.formGroup.get(jsonName).setValue(event[this.input.modalConfiguration.valuesKey[jsonName]]);
            }
            else {
                this.formGroup.get(jsonName).setValue(event[jsonName]);
            }
            this.formGroup.get(jsonName).markAsTouched();
            this.formGroup.get(jsonName).markAsDirty();
        });
        console.log(this.formGroup.value);
    }
    clear() {
        this.input.jsonName.forEach(jsonName => {
            this.formGroup.get(jsonName).setValue('');
            this.formGroup.get(jsonName).markAsTouched();
            this.formGroup.get(jsonName).markAsDirty();
        });
        this.displayData = "";
        this.displayData2 = "";
    }
    valid(input) {
        var check = true;
        input.jsonName.forEach((jsonName) => {
            check = check && this.formGroup.get(jsonName).touched && this.formGroup.get(jsonName).valid;
        });
        return check;
    }
    invalid(input) {
        var check = false;
        input.jsonName.forEach((jsonName) => {
            check = check || (this.formGroup.get(jsonName).touched && this.formGroup.get(jsonName).invalid);
        });
        return check;
    }
    //////////////////////////////Modal////////////////////////////////////
    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then((tes) => { }).catch((res) => {
            this.input.jsonName.forEach((jsonName) => {
                this.formGroup.get(jsonName).markAsTouched();
            });
        });
        ;
    }
}
InputModalComponent.ɵfac = function InputModalComponent_Factory(t) { return new (t || InputModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"])); };
InputModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputModalComponent, selectors: [["app-input-modal"]], inputs: { input: "input", formGroup: "formGroup" }, decls: 19, vars: 20, consts: [[1, "row", "mb-3", "color-gray"], [1, "col-md-3", "label-text"], [1, "main"], ["class", "text-danger", 4, "ngIf"], [1, "col-md-6"], [3, "formGroup"], [1, "input-group", "input-group-sm"], [1, "input-group-prepend"], ["type", "button", 1, "btn-custom", "input-group-text", 3, "click"], [1, "fas", "fa-search", "form-control-feedback"], ["readonly", "", 1, "clickable", "form-control", "btn-custom", 3, "click"], ["class", "input-group-append border-right", 4, "ngIf"], ["class", "input-group-append", 4, "ngIf"], ["class", "note", 4, "ngIf"], ["content", ""], [1, "text-danger"], [1, "input-group-append", "border-right"], ["readonly", "", 1, "input-group-text", "clickable", "btn-custom", "justify-content-center", 2, "min-width", "4em", 3, "click"], [1, "input-group-append"], [2, "background-color", "white", "width", "4em"], ["type", "button", 1, "btn-custom", "input-group-text", "failed", 3, "click"], [1, "fas", "fa-trash", "form-control-feedback"], [1, "ml-1"], [1, "note"], [1, "modal-header", "text-center"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", "btn", "btn-danger", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "modalConfiguration", "inputEvent"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"]], template: function InputModalComponent_Template(rf, ctx) { if (rf & 1) {
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InputModalComponent_span_4_Template, 2, 0, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputModalComponent_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); return ctx.open(_r5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputModalComponent_Template_div_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); return ctx.open(_r5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, InputModalComponent_div_13_Template, 3, 5, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, InputModalComponent_div_14_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, InputModalComponent_div_15_Template, 5, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, InputModalComponent_div_16_Template, 2, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, InputModalComponent_ng_template_17_Template, 11, 2, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("text-danger", ctx.invalid(ctx.input))("text-success", ctx.valid(ctx.input));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.input.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.input.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("failed", ctx.invalid(ctx.input))("success", ctx.valid(ctx.input));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.invalid(ctx.input))("is-valid", ctx.valid(ctx.input));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.displayData ? ctx.displayData : ctx.input.modalConfiguration.displayLabel ? ctx.input.modalConfiguration.displayLabel : ctx.input.label, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.input.modalConfiguration.displayKey2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.input.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.input.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalid(ctx.input));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _table_modal_table_modal_component__WEBPACK_IMPORTED_MODULE_4__["TableModalComponent"]], styles: [".modal-content[_ngcontent-%COMP%]{\r\n    animation-name: example;\r\n    animation-duration: 0.3s;\r\n  }\r\n@keyframes example {\r\n    0%   {transform: scale(0.5)}\r\n    75%  {transform: scale(1.1)}\r\n    100% {transform: scale(1)}\r\n  }\r\n.clickable[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n  }\r\n.note[_ngcontent-%COMP%]\r\n{\r\n  margin-top: 5px;\r\n  font-size: 11.7px;\r\n}\r\n.failed[_ngcontent-%COMP%]\r\n{\r\n  background-color: #D9534F;\r\n  color: rgb(241, 241, 241);\r\n  border-color: #D9534F;\r\n  border-width: 1px;\r\n}\r\n.success[_ngcontent-%COMP%]\r\n{\r\n  background-color: #5cb85c;\r\n  color: rgb(241, 241, 241);\r\n  border-color: #5cb85c;\r\n  border-width: 1px;\r\n}\r\n.btn-custom[_ngcontent-%COMP%]:active, .btn-custom[_ngcontent-%COMP%]:hover\r\n{\r\n  filter: brightness(80%);\r\n}\r\nbutton[type=\"button\"][_ngcontent-%COMP%]{\r\n  outline:none;\r\n}\r\nbutton[type=\"button\"][_ngcontent-%COMP%]::-moz-focus-inner {\r\n  border: 0;\r\n}\r\n.border-right[_ngcontent-%COMP%]\r\n{\r\n  border-right-color: rgb(206, 212, 218)!important;\r\n  border-right-style: solid!important;\r\n  border-right-width: 1px!important;\r\n}\r\n.note[_ngcontent-%COMP%]\r\n{\r\n    margin-top: 5px;\r\n    font-size: 11.7px;\r\n}\r\n.main[_ngcontent-%COMP%] {\r\n    font-weight: 500; \r\n}\r\n@media(max-width: 768px) \r\n{\r\n.label-text[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n  }\r\n}\r\n@media(min-width: 768px) \r\n{\r\n.label-text[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Zvcm0vY29tcG9uZW50L2lucHV0LW1vZGFsL2lucHV0LW1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCO0lBQ0ksdUJBQXVCO0lBQ3ZCLHdCQUF3QjtFQUMxQjtBQUVBO0lBQ0UsTUFBTSxxQkFBcUI7SUFDM0IsTUFBTSxxQkFBcUI7SUFDM0IsTUFBTSxtQkFBbUI7RUFDM0I7QUFFQTtJQUNFLGVBQWU7RUFDakI7QUFHRjs7RUFFRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBRUE7O0VBRUUseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25CO0FBRUE7O0VBRUUseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25CO0FBRUE7O0VBRUUsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFNBQVM7QUFDWDtBQUVBOztFQUVFLGdEQUFnRDtFQUNoRCxtQ0FBbUM7RUFDbkMsaUNBQWlDO0FBQ25DO0FBRUE7O0lBRUksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7O0FBRUE7SUFDSSxnQkFBZ0I7RUFDbEI7QUFDRjtBQUVBOztBQUVBO0lBQ0ksaUJBQWlCO0VBQ25CO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZm9ybS9jb21wb25lbnQvaW5wdXQtbW9kYWwvaW5wdXQtbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIG1vZGFsIGFuaW1hdGlvbiAqL1xyXG4ubW9kYWwtY29udGVudHtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBleGFtcGxlO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGV4YW1wbGUge1xyXG4gICAgMCUgICB7dHJhbnNmb3JtOiBzY2FsZSgwLjUpfVxyXG4gICAgNzUlICB7dHJhbnNmb3JtOiBzY2FsZSgxLjEpfVxyXG4gICAgMTAwJSB7dHJhbnNmb3JtOiBzY2FsZSgxKX1cclxuICB9XHJcblxyXG4gIC5jbGlja2FibGU6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcblxyXG4ubm90ZVxyXG57XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTEuN3B4O1xyXG59XHJcblxyXG4uZmFpbGVkXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDk1MzRGO1xyXG4gIGNvbG9yOiByZ2IoMjQxLCAyNDEsIDI0MSk7XHJcbiAgYm9yZGVyLWNvbG9yOiAjRDk1MzRGO1xyXG4gIGJvcmRlci13aWR0aDogMXB4O1xyXG59XHJcblxyXG4uc3VjY2Vzc1xyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjYjg1YztcclxuICBjb2xvcjogcmdiKDI0MSwgMjQxLCAyNDEpO1xyXG4gIGJvcmRlci1jb2xvcjogIzVjYjg1YztcclxuICBib3JkZXItd2lkdGg6IDFweDtcclxufVxyXG5cclxuLmJ0bi1jdXN0b206YWN0aXZlLCAuYnRuLWN1c3RvbTpob3ZlclxyXG57XHJcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDgwJSk7XHJcbn0gXHJcblxyXG5idXR0b25bdHlwZT1cImJ1dHRvblwiXXtcclxuICBvdXRsaW5lOm5vbmU7XHJcbn1cclxuYnV0dG9uW3R5cGU9XCJidXR0b25cIl06Oi1tb3otZm9jdXMtaW5uZXIge1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG5cclxuLmJvcmRlci1yaWdodFxyXG57XHJcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiByZ2IoMjA2LCAyMTIsIDIxOCkhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yaWdodC1zdHlsZTogc29saWQhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yaWdodC13aWR0aDogMXB4IWltcG9ydGFudDtcclxufVxyXG5cclxuLm5vdGVcclxue1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMS43cHg7XHJcbn1cclxuXHJcbi5tYWluIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7IFxyXG59XHJcbkBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KSBcclxue1xyXG4ubGFiZWwtdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhKG1pbi13aWR0aDogNzY4cHgpIFxyXG57XHJcbi5sYWJlbC10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-input-modal',
                templateUrl: './input-modal.component.html',
                styleUrls: ['./input-modal.component.css']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }]; }, { input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], formGroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/form/component/input-modal/table-modal/table-modal.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/form/component/input-modal/table-modal/table-modal.component.ts ***!
  \****************************************************************************************/
/*! exports provided: TableModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableModalComponent", function() { return TableModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_service_api_shared_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/service/api-shared/shared.service */ "./src/app/shared/service/api-shared/shared.service.ts");
/* harmony import */ var _table_component_header_bar_header_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../table/component/header-bar/header-bar.component */ "./src/app/shared/table/component/header-bar/header-bar.component.ts");
/* harmony import */ var _table_component_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../table/component/top-bar/top-bar.component */ "./src/app/shared/table/component/top-bar/top-bar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _table_component_loading_bar_loading_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../table/component/loading-bar/loading-bar.component */ "./src/app/shared/table/component/loading-bar/loading-bar.component.ts");
/* harmony import */ var _table_component_notification_bar_notification_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../table/component/notification-bar/notification-bar.component */ "./src/app/shared/table/component/notification-bar/notification-bar.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _pipe_change_value_change_value_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../pipe/change-value/change-value.pipe */ "./src/app/shared/pipe/change-value/change-value.pipe.ts");










function TableModalComponent_tbody_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tbody", 9);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx_r0.modalConfiguration.tableData.length);
} }
function TableModalComponent_tbody_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tbody", 10);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("text-danger text-center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx_r1.modalConfiguration.tableData.length)("content", "Gagal memuat data!");
} }
function TableModalComponent_tbody_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tbody", 10);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("text-center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx_r2.modalConfiguration.tableData.length)("content", "Tidak ada data!");
} }
function TableModalComponent_tbody_8_tr_1_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "changeValue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tableData_r8 = ctx.$implicit;
    const data_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, data_r6, tableData_r8));
} }
function TableModalComponent_tbody_8_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function TableModalComponent_tbody_8_tr_1_Template_tr_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const data_r6 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.input(data_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableModalComponent_tbody_8_tr_1_td_1_Template, 4, 4, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.modalConfiguration.tableData);
} }
function TableModalComponent_tbody_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableModalComponent_tbody_8_tr_1_Template, 2, 1, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.dataList);
} }
function TableModalComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ngb-pagination", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function TableModalComponent_div_9_Template_ngb_pagination_pageChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.pagination.page = $event; })("pageChange", function TableModalComponent_div_9_Template_ngb_pagination_pageChange_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.pageChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" Baris ", ctx_r4.row.start, " - ", ctx_r4.row.end, " dari ", ctx_r4.totalrows, " data. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", ctx_r4.totalrows)("page", ctx_r4.pagination.page)("maxSize", 5)("rotate", true)("ellipses", false)("boundaryLinks", true);
} }
class TableModalComponent {
    constructor(SharedService) {
        this.SharedService = SharedService;
        this.inputEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.status = "loading";
        ////////////////table thingy////////////////////////////////////////
        this.totalrows = 0;
        this.pagination = {
            page: 1,
            size: 10,
            orderby: "",
            query: ""
        };
        this.sort = {
            index: -1,
            direction: ""
        };
        this.row = {
            start: 1,
            end: 10
        };
    }
    ngOnInit() {
        if (this.modalConfiguration.paginationInit != null) {
            this.pagination = JSON.parse(JSON.stringify(this.modalConfiguration.paginationInit));
            this.sort.index = this.modalConfiguration.tableData.findIndex(table => table.jsonName == this.pagination.orderby.split(" ")[0]);
            this.sort.direction = this.pagination.orderby.split(" ")[1];
        }
        this.paginate();
    }
    input(data) {
        this.inputEvent.emit(data);
    }
    /////////////////////////////service///////////////////////////////////
    getList(queryParam) {
        this.status = "loading";
        this.SharedService.getData(this.modalConfiguration.apiUrl, queryParam).subscribe((response) => {
            if (response != null) {
                if (response.status == 200) {
                    this.totalrows = response.body.totalrows;
                    this.dataList = response.body.content;
                    this.checkRow();
                    this.status = "success";
                }
                else if (response.status == 204) {
                    this.status = "no content";
                }
            }
            else {
                this.status = "failed";
            }
        });
    }
    sorting(index) {
        if (this.sort.index != index || this.sort.direction == "desc") {
            this.sort.direction = "asc";
        }
        else {
            this.sort.direction = "desc";
        }
        this.sort.index = index;
        this.pagination.orderby = this.modalConfiguration.tableData[index].jsonName + " " + this.sort.direction;
        this.paginate();
    }
    filter(event) {
        this.pagination.query = "";
        event.forEach((tes) => {
            if (tes != null) {
                if (this.modalConfiguration.tableData[tes.index].search.inputType != "" && tes.value != "") {
                    this.pagination.query = this.pagination.query + this.modalConfiguration.tableData[tes.index].jsonName + ";" + this.modalConfiguration.tableData[tes.index].search.inputQuery + ";" + tes.value + ";;";
                }
            }
        });
        this.pagination.page = 1;
        this.pageChange();
    }
    checkRow() {
        this.row.start = 1 + (10 * (this.pagination.page - 1));
        this.row.end = 10 * this.pagination.page;
        if (this.row.end > this.totalrows) {
            this.row.end = this.totalrows;
        }
    }
    pageChange() {
        this.checkRow();
        this.paginate();
    }
    paginate() {
        const queryParam = "?page=" + this.pagination.page +
            "&orderby=" + this.pagination.orderby +
            "&size=" + this.pagination.size +
            "&query=" + this.pagination.query;
        console.log("queryParam: " + queryParam);
        this.getList(queryParam);
    }
}
TableModalComponent.ɵfac = function TableModalComponent_Factory(t) { return new (t || TableModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_api_shared_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"])); };
TableModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableModalComponent, selectors: [["app-table-modal"]], inputs: { modalConfiguration: "modalConfiguration" }, outputs: { inputEvent: "inputEvent" }, decls: 10, vars: 9, consts: [[1, "table-responsive"], [1, "table", "table-stripped", "table-hover"], ["app-header-bar", "", 3, "tableData", "sort", "sortEvent"], ["app-top-bar", "", 3, "tableData", "search"], [3, "ngSwitch"], ["app-loading-bar", "", 3, "length", 4, "ngSwitchCase"], ["app-notification-bar", "", 3, "length", "content", "class", 4, "ngSwitchCase"], [4, "ngSwitchCase"], ["class", "row mt-4 ", 4, "ngIf"], ["app-loading-bar", "", 3, "length"], ["app-notification-bar", "", 3, "length", "content"], ["class", "clickable noselect", 3, "dblclick", 4, "ngFor", "ngForOf"], [1, "clickable", "noselect", 3, "dblclick"], [4, "ngFor", "ngForOf"], [1, "row", "mt-4"], [1, "col-lg-6", "mt-2"], [1, "pagination-responsive"], [1, "col-lg-6"], [1, "pagination-responsive", "d-flex", "justify-content-end"], ["size", "sm", 1, "ml-auto", "align-self-center", 3, "collectionSize", "page", "maxSize", "rotate", "ellipses", "boundaryLinks", "pageChange"]], template: function TableModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sortEvent", function TableModalComponent_Template_thead_sortEvent_2_listener($event) { return ctx.sorting($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tbody", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("search", function TableModalComponent_Template_tbody_search_3_listener($event) { return ctx.filter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TableModalComponent_tbody_5_Template, 1, 1, "tbody", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TableModalComponent_tbody_6_Template, 1, 4, "tbody", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TableModalComponent_tbody_7_Template, 1, 4, "tbody", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TableModalComponent_tbody_8_Template, 2, 1, "tbody", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TableModalComponent_div_9_Template, 7, 9, "div", 8);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tableData", ctx.modalConfiguration.tableData)("sort", ctx.sort);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tableData", ctx.modalConfiguration.tableData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "failed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "no content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.status == "success");
    } }, directives: [_table_component_header_bar_header_bar_component__WEBPACK_IMPORTED_MODULE_2__["HeaderBarComponent"], _table_component_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_3__["TopBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _table_component_loading_bar_loading_bar_component__WEBPACK_IMPORTED_MODULE_5__["LoadingBarComponent"], _table_component_notification_bar_notification_bar_component__WEBPACK_IMPORTED_MODULE_6__["NotificationBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPagination"]], pipes: [_pipe_change_value_change_value_pipe__WEBPACK_IMPORTED_MODULE_8__["ChangeValuePipe"]], styles: [".clickable[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .clickable[_ngcontent-%COMP%]\r\n  {\r\n      color: #6C676A;\r\n  }\r\n  \r\n  tr.clickable[_ngcontent-%COMP%]:active\r\n  {\r\n      background-color: #009ccc;\r\n  }\r\n  \r\n  span.clickable[_ngcontent-%COMP%]:hover {\r\n    color: #00b7f1;\r\n    }\r\n  \r\n  .active[_ngcontent-%COMP%]\r\n    {\r\n    background-color: #f5f5f5;\r\n    }\r\n  \r\n  .noselect[_ngcontent-%COMP%] {\r\n    -webkit-touch-callout: none; \r\n      -webkit-user-select: none;    \r\n              user-select: none; \r\n  }\r\n  \r\n  .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    padding: 0.2rem 0.5rem  0.2rem 0.5rem;\r\n    vertical-align: middle;\r\n    border-top: 1px solid #dee2e6;\r\n    color: #6c676a;\r\n}\r\n  \r\n  .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] \r\n{\r\n    font-size: 14.3px;\r\n}\r\n  \r\n  .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]\r\n{\r\n    font-size: 13px;\r\n}\r\n  \r\n  @media(max-width: 990px)\r\n{\r\n    .pagination-responsive[_ngcontent-%COMP%]\r\n    {\r\n        color: #6c676a!important;\r\n        width: -moz-fit-content!important;\r\n        width: fit-content!important;\r\n        text-align: center!important;\r\n        display: block!important;\r\n        margin: 0 auto!important;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Zvcm0vY29tcG9uZW50L2lucHV0LW1vZGFsL3RhYmxlLW1vZGFsL3RhYmxlLW1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0VBQ2pCOztFQUVBOztNQUVJLGNBQWM7RUFDbEI7O0VBRUE7O01BRUkseUJBQXlCO0VBQzdCOztFQUVGO0lBQ0ksY0FBYztJQUNkOztFQUdGOztJQUVFLHlCQUF5QjtJQUN6Qjs7RUFFRjtJQUNFLDJCQUEyQixFQUFFLGVBQWU7TUFDMUMseUJBQXlCLEVBQUUsV0FBVyxFQUNYLG1CQUFtQixFQUNuQiw0QkFBNEIsRUFDNUIsMkJBQTJCO2NBQzlDLGlCQUFpQixFQUFFO2tGQUNpRDtFQUNoRjs7RUFFRjtJQUNJLHFDQUFxQztJQUNyQyxzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLGNBQWM7QUFDbEI7O0VBRUE7O0lBRUksaUJBQWlCO0FBQ3JCOztFQUVBOztJQUVJLGVBQWU7QUFDbkI7O0VBRUE7O0lBRUk7O1FBRUksd0JBQXdCO1FBQ3hCLGlDQUE0QjtRQUE1Qiw0QkFBNEI7UUFDNUIsNEJBQTRCO1FBQzVCLHdCQUF3QjtRQUN4Qix3QkFBd0I7SUFDNUI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb3JtL2NvbXBvbmVudC9pbnB1dC1tb2RhbC90YWJsZS1tb2RhbC90YWJsZS1tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsaWNrYWJsZTpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5jbGlja2FibGVcclxuICB7XHJcbiAgICAgIGNvbG9yOiAjNkM2NzZBO1xyXG4gIH1cclxuICBcclxuICB0ci5jbGlja2FibGU6YWN0aXZlXHJcbiAge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5Y2NjO1xyXG4gIH1cclxuICBcclxuc3Bhbi5jbGlja2FibGU6aG92ZXIge1xyXG4gICAgY29sb3I6ICMwMGI3ZjE7XHJcbiAgICB9XHJcblxyXG5cclxuICAuYWN0aXZlXHJcbiAgICB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgfVxyXG5cclxuICAubm9zZWxlY3Qge1xyXG4gICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lOyAvKiBpT1MgU2FmYXJpICovXHJcbiAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xyXG4gICAgICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lOyAvKiBLb25xdWVyb3IgSFRNTCAqL1xyXG4gICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAvKiBPbGQgdmVyc2lvbnMgb2YgRmlyZWZveCAqL1xyXG4gICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXHJcbiAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIE5vbi1wcmVmaXhlZCB2ZXJzaW9uLCBjdXJyZW50bHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwcG9ydGVkIGJ5IENocm9tZSwgRWRnZSwgT3BlcmEgYW5kIEZpcmVmb3ggKi9cclxuICB9XHJcblxyXG4udGFibGUgdGQsIC50YWJsZSB0aCB7XHJcbiAgICBwYWRkaW5nOiAwLjJyZW0gMC41cmVtICAwLjJyZW0gMC41cmVtO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgY29sb3I6ICM2YzY3NmE7XHJcbn1cclxuXHJcbi50YWJsZSB0aCBcclxue1xyXG4gICAgZm9udC1zaXplOiAxNC4zcHg7XHJcbn1cclxuXHJcbi50YWJsZSB0ZFxyXG57XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDk5MHB4KVxyXG57XHJcbiAgICAucGFnaW5hdGlvbi1yZXNwb25zaXZlXHJcbiAgICB7XHJcbiAgICAgICAgY29sb3I6ICM2YzY3NmEhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyIWltcG9ydGFudDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jayFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8haW1wb3J0YW50O1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-table-modal',
                templateUrl: './table-modal.component.html',
                styleUrls: ['./table-modal.component.css']
            }]
    }], function () { return [{ type: src_app_shared_service_api_shared_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"] }]; }, { modalConfiguration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], inputEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/form/component/input-number/input-number.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/form/component/input-number/input-number.component.ts ***!
  \******************************************************************************/
/*! exports provided: InputNumberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputNumberComponent", function() { return InputNumberComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




function InputNumberComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InputNumberComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r1.input.prepend, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function InputNumberComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r2.input.append, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function InputNumberComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Wajib diisi! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InputNumberComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Inputan harus angka dan harus ", ctx_r4.input.maxlength, " digit! ");
} }
function InputNumberComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Inputan tidak boleh kurang dari ", ctx_r5.input.minlength, " digit! ");
} }
function InputNumberComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Inputan tidak boleh lebih dari ", ctx_r6.input.maxValue, "! ");
} }
function InputNumberComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Inputan tidak boleh kurang dari ", ctx_r7.input.minValue, "! ");
} }
class InputNumberComponent {
    constructor() { }
    ngOnInit() {
        this.indented = this.input.indented ? `col-md-${this.input.indented}` : ``;
        this.colLabel = this.input.colLabel ? `col-md-${this.input.colLabel}` : `col-md-3`;
        this.colInput = this.input.colInput ? `col-md-${this.input.colInput}` : `col-md-6`;
        this.regex = this.input.isNegative ? `^-?[0-9]{0,${this.input.maxlength}}$` : `^[0-9]{0,${this.input.maxlength}}$`;
    }
    filter(event) {
        if (!this.formGroup.get(this.input.jsonName).value.toString().match(this.regex)) {
            this.formGroup.get(this.input.jsonName).setValue(this.befValue ? this.befValue : "");
        }
        this.befValue = this.formGroup.get(this.input.jsonName).value;
        event.target.value = this.formGroup.get(this.input.jsonName).value;
    }
}
InputNumberComponent.ɵfac = function InputNumberComponent_Factory(t) { return new (t || InputNumberComponent)(); };
InputNumberComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputNumberComponent, selectors: [["app-input-number"]], inputs: { input: "input", formGroup: "formGroup" }, decls: 17, vars: 24, consts: [[1, "row", "mb-3", "color-gray"], [3, "ngClass"], [1, "label-text", 3, "ngClass"], [1, "main"], ["class", "text-danger", 4, "ngIf"], [3, "formGroup"], [1, "input-group", "input-group-sm"], ["class", "input-group-prepend", 4, "ngIf"], ["type", "text", 1, "form-control-sm", "form-control", 3, "formControlName", "placeholder", "input"], ["class", "input-group-append", 4, "ngIf"], ["class", "note", 4, "ngIf"], [1, "text-danger"], [1, "input-group-prepend"], [1, "input-group-text"], [3, "innerHTML"], [1, "input-group-append"], [1, "note"]], template: function InputNumberComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InputNumberComponent_span_5_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, InputNumberComponent_div_9_Template, 3, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function InputNumberComponent_Template_input_input_10_listener($event) { return ctx.filter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, InputNumberComponent_div_11_Template, 3, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, InputNumberComponent_div_12_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, InputNumberComponent_div_13_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, InputNumberComponent_div_14_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, InputNumberComponent_div_15_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, InputNumberComponent_div_16_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("text-danger", ctx.formGroup.get(ctx.input.jsonName).touched && ctx.formGroup.get(ctx.input.jsonName).invalid)("text-success", ctx.formGroup.get(ctx.input.jsonName).touched && ctx.formGroup.get(ctx.input.jsonName).valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.indented);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.colLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.input.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.input.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.colInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.input.prepend);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.formGroup.get(ctx.input.jsonName).touched && ctx.formGroup.get(ctx.input.jsonName).invalid)("is-valid", ctx.formGroup.get(ctx.input.jsonName).touched && ctx.formGroup.get(ctx.input.jsonName).valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx.input.jsonName)("placeholder", ctx.input.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.input.jsonName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.input.append);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroup.get(ctx.input.jsonName).touched && (ctx.formGroup.get(ctx.input.jsonName).errors == null ? null : ctx.formGroup.get(ctx.input.jsonName).errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroup.get(ctx.input.jsonName).touched && (ctx.formGroup.get(ctx.input.jsonName).errors == null ? null : ctx.formGroup.get(ctx.input.jsonName).errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroup.get(ctx.input.jsonName).touched && (ctx.formGroup.get(ctx.input.jsonName).errors == null ? null : ctx.formGroup.get(ctx.input.jsonName).errors.minlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroup.get(ctx.input.jsonName).touched && (ctx.formGroup.get(ctx.input.jsonName).errors == null ? null : ctx.formGroup.get(ctx.input.jsonName).errors.max));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroup.get(ctx.input.jsonName).touched && (ctx.formGroup.get(ctx.input.jsonName).errors == null ? null : ctx.formGroup.get(ctx.input.jsonName).errors.min));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]], styles: [".note[_ngcontent-%COMP%]\r\n{\r\n    margin-top: 5px;\r\n    font-size: 11.7px;\r\n}\r\n\r\n.main[_ngcontent-%COMP%] {\r\n    font-weight: 500; \r\n}\r\n\r\n@media(max-width: 768px) \r\n{\r\n.label-text[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n  }\r\n}\r\n\r\n@media(min-width: 768px) \r\n{\r\n.label-text[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Zvcm0vY29tcG9uZW50L2lucHV0LW51bWJlci9pbnB1dC1udW1iZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUNBOztBQUVBO0lBQ0ksZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7O0FBRUE7SUFDSSxpQkFBaUI7RUFDbkI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb3JtL2NvbXBvbmVudC9pbnB1dC1udW1iZXIvaW5wdXQtbnVtYmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90ZVxyXG57XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDExLjdweDtcclxufVxyXG5cclxuLm1haW4ge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDsgXHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDogNzY4cHgpIFxyXG57XHJcbi5sYWJlbC10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEobWluLXdpZHRoOiA3NjhweCkgXHJcbntcclxuLmxhYmVsLXRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputNumberComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-input-number',
                templateUrl: './input-number.component.html',
                styleUrls: ['./input-number.component.css']
            }]
    }], function () { return []; }, { input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], formGroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/form/component/input-radio/input-radio.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/form/component/input-radio/input-radio.component.ts ***!
  \****************************************************************************/
/*! exports provided: InputRadioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputRadioComponent", function() { return InputRadioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _validator_insert_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../validator/insert-validator */ "./src/app/shared/form/validator/insert-validator.ts");
/* harmony import */ var _service_api_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/api-shared/shared.service */ "./src/app/shared/service/api-shared/shared.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");







function InputRadioComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InputRadioComponent_mat_radio_button_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-radio-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r4.key);
} }
function InputRadioComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Wajib diisi! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InputRadioComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Pilihan tidak sesuai ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class InputRadioComponent {
    constructor(SharedService) {
        this.SharedService = SharedService;
        this.onChangeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.indented = this.input.indented ? `col-md-${this.input.indented}` : ``;
        this.colLabel = this.input.colLabel ? `col-md-${this.input.colLabel}` : `col-md-3`;
        this.colInput = this.input.colInput ? `col-md-${this.input.colInput}` : `col-md-6`;
    }
    changeEvent(event) {
        // console.log(this.formGroup.get(this.input.jsonName).value)
        var formGroup = this.formGroup;
        var befValue = this.befValue;
        this.onChangeEvent.emit({ formGroup, befValue });
        this.befValue = this.formGroup.get(this.input.jsonName).value;
    }
    add(input) {
        if (typeof input.jsonName == 'string') {
            this.formGroup.addControl(input.jsonName, new _validator_insert_validator__WEBPACK_IMPORTED_MODULE_1__["InsertValidator"](input, this.SharedService));
        }
        else if (typeof input.jsonName == 'object' || input.type == 'radio-children') {
            input.jsonName.forEach(jName => {
                this.formGroup.addControl(jName, new _validator_insert_validator__WEBPACK_IMPORTED_MODULE_1__["InsertValidator"](input, this.SharedService, jName));
            });
        }
    }
}
InputRadioComponent.ɵfac = function InputRadioComponent_Factory(t) { return new (t || InputRadioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_api_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"])); };
InputRadioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputRadioComponent, selectors: [["app-input-radio"]], inputs: { input: "input", formGroup: "formGroup" }, outputs: { onChangeEvent: "onChangeEvent" }, decls: 12, vars: 14, consts: [[1, "row", "mb-3", "color-gray"], [3, "ngClass"], [1, "label-text", 3, "ngClass"], [1, "main"], ["class", "text-danger", 4, "ngIf"], [3, "formGroup"], ["aria-label", "Select an option", 3, "formControlName", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "note", 4, "ngIf"], [1, "text-danger"], [3, "value"], [1, "note"]], template: function InputRadioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InputRadioComponent_span_5_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-radio-group", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function InputRadioComponent_Template_mat_radio_group_change_8_listener($event) { return ctx.changeEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, InputRadioComponent_mat_radio_button_9_Template, 2, 2, "mat-radio-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, InputRadioComponent_div_10_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, InputRadioComponent_div_11_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("text-danger", ctx.formGroup.get(ctx.input.jsonName).touched && ctx.formGroup.get(ctx.input.jsonName).invalid)("text-success", ctx.formGroup.get(ctx.input.jsonName).touched && ctx.formGroup.get(ctx.input.jsonName).valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.indented);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.colLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.input.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.input.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.colInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx.input.jsonName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.input.option);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroup.get(ctx.input.jsonName).touched && (ctx.formGroup.get(ctx.input.jsonName).errors == null ? null : ctx.formGroup.get(ctx.input.jsonName).errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroup.get(ctx.input.jsonName).touched && (ctx.formGroup.get(ctx.input.jsonName).errors == null ? null : ctx.formGroup.get(ctx.input.jsonName).errors.pattern));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__["MatRadioButton"]], styles: [".note[_ngcontent-%COMP%]\r\n{\r\n    margin-top: 5px;\r\n    font-size: 11.7px;\r\n}\r\n\r\n.main[_ngcontent-%COMP%] {\r\n    font-weight: 500;\r\n}\r\n\r\n@media(max-width: 768px)\r\n{\r\n.label-text[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n  }\r\n}\r\n\r\n@media(min-width: 768px)\r\n{\r\n.label-text[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.mat-radio-group[_ngcontent-%COMP%] {\r\n  display: flex; flex-direction: column;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Zvcm0vY29tcG9uZW50L2lucHV0LXJhZGlvL2lucHV0LXJhZGlvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQTs7QUFFQTtJQUNJLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBOztBQUVBO0lBQ0ksaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUEsMENBQTBDOztBQUMxQyx3QkFBd0I7O0FBQ3hCLHlCQUF5Qjs7QUFDekIsTUFBTTs7QUFFTjtFQUNFLGFBQWEsRUFBRSxzQkFBc0I7QUFDdkMiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZm9ybS9jb21wb25lbnQvaW5wdXQtcmFkaW8vaW5wdXQtcmFkaW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3RlXHJcbntcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTEuN3B4O1xyXG59XHJcblxyXG4ubWFpbiB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbkBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KVxyXG57XHJcbi5sYWJlbC10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEobWluLXdpZHRoOiA3NjhweClcclxue1xyXG4ubGFiZWwtdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcbn1cclxuXHJcbi8qLm1hdC1yYWRpby1idXR0b24gfiAubWF0LXJhZGlvLWJ1dHRvbiB7Ki9cclxuLyogICAgbWFyZ2luLWxlZnQ6IDBweDsqL1xyXG4vKiAgICBtYXJnaW4tbGVmdDogMTVweDsqL1xyXG4vKiAgfSovXHJcblxyXG4ubWF0LXJhZGlvLWdyb3VwIHtcclxuICBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputRadioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-input-radio',
                templateUrl: './input-radio.component.html',
                styleUrls: ['./input-radio.component.css']
            }]
    }], function () { return [{ type: _service_api_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] }]; }, { input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], formGroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onChangeEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/form/component/input-select/input-select.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/form/component/input-select/input-select.component.ts ***!
  \******************************************************************************/
/*! exports provided: InputSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputSelectComponent", function() { return InputSelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_service_api_shared_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/service/api-shared/shared.service */ "./src/app/shared/service/api-shared/shared.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





function InputSelectComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InputSelectComponent_ng_container_8_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "-- Pilih --");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InputSelectComponent_ng_container_8_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", option_r8.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r8.key);
} }
function InputSelectComponent_ng_container_8_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Wajib diisi! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InputSelectComponent_ng_container_8_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Pilihan tidak sesuai ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { standalone: true }; };
function InputSelectComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InputSelectComponent_ng_container_8_Template_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.value = $event; })("change", function InputSelectComponent_ng_container_8_Template_select_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.changeEvent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InputSelectComponent_ng_container_8_option_2_Template, 2, 0, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InputSelectComponent_ng_container_8_option_3_Template, 2, 2, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InputSelectComponent_ng_container_8_div_4_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InputSelectComponent_ng_container_8_div_5_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r1.invalid)("is-valid", ctx_r1.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.value)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.value === "" || ctx_r1.value == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.input.option);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.error.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.error.pattern);
} }
function InputSelectComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Memuat Data...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function InputSelectComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Gagal Memuat Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class InputSelectComponent {
    constructor(SharedService) {
        this.SharedService = SharedService;
        this.onChangeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.value = '';
        this.error = { required: null, pattern: null };
    }
    ngOnInit() {
        this.setGrid();
        if (this.input.selectApiConfiguration) {
            this.getOption();
        }
        else {
            this.status = "success";
            this.insertInitValue();
        }
        this.befValue = this.value;
    }
    getOption() {
        this.status = "loading";
        this.SharedService.getData(this.input.selectApiConfiguration.apiUrl).subscribe((response) => {
            if (response) {
                response.body.content.forEach(data => {
                    var key = this.input.selectApiConfiguration.valuesKey[this.input.selectApiConfiguration.displayKey] ?
                        data[this.input.selectApiConfiguration.valuesKey[this.input.selectApiConfiguration.displayKey]] :
                        data[this.input.selectApiConfiguration.displayKey];
                    var value = {};
                    if (typeof this.input.jsonName == 'string') {
                        value = data[this.input.selectApiConfiguration.valuesKey];
                    }
                    else if (typeof this.input.jsonName == 'object') {
                        this.input.jsonName.forEach(jsonName => {
                            value[jsonName] = data[this.input.selectApiConfiguration.valuesKey[jsonName]];
                        });
                    }
                    this.input.option.push({ key, value });
                });
                this.insertInitValue();
                this.status = "success";
            }
            else {
                this.status = "failed";
            }
        });
    }
    setGrid() {
        this.indented = this.input.indented ? `col-md-${this.input.indented}` : ``;
        this.colLabel = this.input.colLabel ? `col-md-${this.input.colLabel}` : `col-md-3`;
        this.colInput = this.input.colInput ? `col-md-${this.input.colInput}` : `col-md-6`;
    }
    insertInitValue() {
        console.log(this.input.option);
        if (typeof this.input.jsonName == 'string' && this.formGroup.get(this.input.jsonName).value) {
            var valueTemp = {};
            valueTemp = this.input.option.find((opt) => opt.value == this.formGroup.get(this.input.jsonName).value);
            this.value = valueTemp['value'];
        }
        else if (typeof this.input.jsonName == 'object' && this.formGroup.get(this.input.benchmark).value) {
            var valueTemp = {};
            valueTemp = this.input.option.find((opt) => opt.value[this.input.benchmark] == this.formGroup.get(this.input.benchmark).value);
            this.value = valueTemp['value'];
        }
    }
    changeEvent() {
        console.log(this.formGroup);
        if (typeof this.input.jsonName == 'string') {
            this.formGroup.get(this.input.jsonName).setValue(this.value);
            this.formGroup.get(this.input.jsonName).markAsTouched();
            this.formGroup.get(this.input.jsonName).markAsDirty();
            var formGroup = this.formGroup;
            var befValue = this.befValue;
            this.onChangeEvent.emit({ formGroup, befValue });
            this.befValue = this.value;
        }
        else {
            this.input.jsonName.forEach(jsonName => {
                this.formGroup.get(jsonName).setValue(this.value[jsonName]);
                this.formGroup.get(jsonName).markAsTouched();
                this.formGroup.get(jsonName).markAsDirty();
            });
            var formGroup = this.formGroup;
            var befValue = this.befValue;
            this.onChangeEvent.emit({ formGroup, befValue });
            this.befValue = this.formGroup.get(this.input.benchmark).value;
        }
        this.valid = this.checkValid(this.input);
        this.invalid = this.checkInvalid(this.input);
        this.error.required = this.checkError(this.input, 'required');
        this.error.pattern = this.checkError(this.input, 'pattern');
        console.log(this.formGroup);
    }
    checkValid(input) {
        if (typeof input.jsonName == 'string') {
            return this.formGroup.get(input.jsonName).touched && this.formGroup.get(input.jsonName).valid;
        }
        else {
            var check = true;
            input.jsonName.forEach((jsonName) => {
                check = check && this.formGroup.get(jsonName).touched && this.formGroup.get(jsonName).valid;
            });
            return check;
        }
    }
    checkInvalid(input) {
        if (typeof input.jsonName == 'string') {
            return this.formGroup.get(input.jsonName).touched && this.formGroup.get(input.jsonName).invalid;
        }
        else {
            var check = false;
            input.jsonName.forEach((jsonName) => {
                check = check || (this.formGroup.get(jsonName).touched && this.formGroup.get(jsonName).invalid);
            });
            return check;
        }
    }
    checkError(input, typeError) {
        if (typeof input.jsonName == 'string') {
            return this.formGroup.get(input.jsonName).touched && this.formGroup.get(input.jsonName).errors && this.formGroup.get(input.jsonName).errors[typeError];
        }
        else {
            var check = false;
            input.jsonName.forEach((jsonName) => {
                check = check || (this.formGroup.get(jsonName).touched && this.formGroup.get(jsonName).errors && this.formGroup.get(jsonName).errors[typeError]);
            });
            return check;
        }
    }
}
InputSelectComponent.ɵfac = function InputSelectComponent_Factory(t) { return new (t || InputSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_api_shared_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"])); };
InputSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputSelectComponent, selectors: [["app-input-select"]], inputs: { input: "input", formGroup: "formGroup" }, outputs: { onChangeEvent: "onChangeEvent" }, decls: 11, vars: 13, consts: [[1, "row", "mb-3", "color-gray"], [3, "ngClass"], [1, "label-text", 3, "ngClass"], [1, "main"], ["class", "text-danger", 4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], [1, "text-danger"], [1, "form-control-sm", "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange", "change"], ["value", "", "selected", "", 4, "ngIf"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "note", 4, "ngIf"], ["value", "", "selected", ""], [3, "ngValue"], [1, "note"], [1, "input-group", "input-group-sm"], ["readonly", "", 1, "form-control"], ["readonly", "", 1, "form-control", "text-danger"]], template: function InputSelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InputSelectComponent_span_5_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, InputSelectComponent_ng_container_8_Template, 6, 11, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, InputSelectComponent_ng_container_9_Template, 4, 0, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, InputSelectComponent_ng_container_10_Template, 4, 0, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("text-danger", ctx.invalid)("text-success", ctx.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.indented);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.colLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.input.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.input.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.colInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "failed");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]], styles: [".note[_ngcontent-%COMP%]\r\n{\r\n    margin-top: 5px;\r\n    font-size: 11.7px;\r\n}\r\n\r\n.main[_ngcontent-%COMP%] {\r\n    font-weight: 500; \r\n}\r\n\r\n@media(max-width: 768px) \r\n{\r\n.label-text[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n  }\r\n}\r\n\r\n@media(min-width: 768px) \r\n{\r\n.label-text[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Zvcm0vY29tcG9uZW50L2lucHV0LXNlbGVjdC9pbnB1dC1zZWxlY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUNBOztBQUVBO0lBQ0ksZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7O0FBRUE7SUFDSSxpQkFBaUI7RUFDbkI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb3JtL2NvbXBvbmVudC9pbnB1dC1zZWxlY3QvaW5wdXQtc2VsZWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90ZVxyXG57XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDExLjdweDtcclxufVxyXG5cclxuLm1haW4ge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDsgXHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDogNzY4cHgpIFxyXG57XHJcbi5sYWJlbC10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEobWluLXdpZHRoOiA3NjhweCkgXHJcbntcclxuLmxhYmVsLXRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputSelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-input-select',
                templateUrl: './input-select.component.html',
                styleUrls: ['./input-select.component.css']
            }]
    }], function () { return [{ type: src_app_shared_service_api_shared_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"] }]; }, { input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], formGroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onChangeEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/form/component/input-text-area/input-text-area.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/shared/form/component/input-text-area/input-text-area.component.ts ***!
  \************************************************************************************/
/*! exports provided: InputTextAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTextAreaComponent", function() { return InputTextAreaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




function InputTextAreaComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InputTextAreaComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Wajib diisi! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InputTextAreaComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Inputan tidak boleh lebih dari ", ctx_r2.input.maxlength, " digit! ");
} }
function InputTextAreaComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Inputan tidak boleh kurang dari ", ctx_r3.input.minlength, " digit! ");
} }
class InputTextAreaComponent {
    constructor() { }
    ngOnInit() {
        this.indented = this.input.indented ? `col-md-${this.input.indented}` : ``;
        this.colLabel = this.input.colLabel ? `col-md-${this.input.colLabel}` : `col-md-3`;
        this.colInput = this.input.colInput ? `col-md-${this.input.colInput}` : `col-md-6`;
    }
}
InputTextAreaComponent.ɵfac = function InputTextAreaComponent_Factory(t) { return new (t || InputTextAreaComponent)(); };
InputTextAreaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputTextAreaComponent, selectors: [["app-input-text-area"]], inputs: { input: "input", formGroup: "formGroup" }, decls: 12, vars: 23, consts: [[1, "row", "mb-3", "color-gray"], [3, "ngClass"], [1, "label-text", 3, "ngClass"], [1, "main"], ["class", "text-danger", 4, "ngIf"], [3, "formGroup"], [1, "form-control-sm", "form-control", 3, "formControlName", "placeholder"], ["class", "note text-danger", 4, "ngIf"], [1, "text-danger"], [1, "note", "text-danger"]], template: function InputTextAreaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InputTextAreaComponent_span_5_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, InputTextAreaComponent_div_9_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, InputTextAreaComponent_div_10_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, InputTextAreaComponent_div_11_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("text-danger", ctx.formGroup.get(ctx.input.jsonName).touched && ctx.formGroup.get(ctx.input.jsonName).invalid)("text-success", ctx.formGroup.get(ctx.input.jsonName).touched && ctx.formGroup.get(ctx.input.jsonName).valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.indented);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.colLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.input.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.input.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.colInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.formGroup.get(ctx.input.jsonName).touched && ctx.formGroup.get(ctx.input.jsonName).invalid)("is-valid", ctx.formGroup.get(ctx.input.jsonName).touched && ctx.formGroup.get(ctx.input.jsonName).valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx.input.jsonName)("placeholder", ctx.input.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("maxlength", ctx.input.maxlength)("rows", ctx.input.textAreaConfiguration ? ctx.input.textAreaConfiguration.rows : "3")("cols", ctx.input.textAreaConfiguration ? ctx.input.textAreaConfiguration.cols : "50")("id", ctx.input.jsonName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroup.get(ctx.input.jsonName).touched && (ctx.formGroup.get(ctx.input.jsonName).errors == null ? null : ctx.formGroup.get(ctx.input.jsonName).errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroup.get(ctx.input.jsonName).touched && (ctx.formGroup.get(ctx.input.jsonName).errors == null ? null : ctx.formGroup.get(ctx.input.jsonName).errors.maxlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroup.get(ctx.input.jsonName).touched && (ctx.formGroup.get(ctx.input.jsonName).errors == null ? null : ctx.formGroup.get(ctx.input.jsonName).errors.minlength));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"]], styles: [".note[_ngcontent-%COMP%]\r\n{\r\n    margin-top: 5px;\r\n    font-size: 11.7px;\r\n}\r\n\r\n.main[_ngcontent-%COMP%] {\r\n    font-weight: 500; \r\n}\r\n\r\n@media(max-width: 768px) \r\n{\r\n.label-text[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n  }\r\n}\r\n\r\n@media(min-width: 768px) \r\n{\r\n.label-text[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Zvcm0vY29tcG9uZW50L2lucHV0LXRleHQtYXJlYS9pbnB1dC10ZXh0LWFyZWEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUNBOztBQUVBO0lBQ0ksZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7O0FBRUE7SUFDSSxpQkFBaUI7RUFDbkI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb3JtL2NvbXBvbmVudC9pbnB1dC10ZXh0LWFyZWEvaW5wdXQtdGV4dC1hcmVhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90ZVxyXG57XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDExLjdweDtcclxufVxyXG5cclxuLm1haW4ge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDsgXHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDogNzY4cHgpIFxyXG57XHJcbi5sYWJlbC10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEobWluLXdpZHRoOiA3NjhweCkgXHJcbntcclxuLmxhYmVsLXRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputTextAreaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-input-text-area',
                templateUrl: './input-text-area.component.html',
                styleUrls: ['./input-text-area.component.css']
            }]
    }], function () { return []; }, { input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], formGroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/form/component/input-text/input-text.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/form/component/input-text/input-text.component.ts ***!
  \**************************************************************************/
/*! exports provided: InputTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTextComponent", function() { return InputTextComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




function InputTextComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InputTextComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r1.input.prepend, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function InputTextComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r2.input.append, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function InputTextComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Wajib diisi! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InputTextComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Inputan tidak boleh lebih dari ", ctx_r4.input.maxlength, " digit! ");
} }
function InputTextComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Inputan tidak boleh kurang dari ", ctx_r5.input.minlength, " digit! ");
} }
function InputTextComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Sedang Memuat... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InputTextComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Gagal Memuat Data! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InputTextComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Inputan sudah ada! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class InputTextComponent {
    constructor() { }
    ngOnInit() {
        this.indented = this.input.indented ? `col-md-${this.input.indented}` : ``;
        this.colLabel = this.input.colLabel ? `col-md-${this.input.colLabel}` : `col-md-3`;
        this.colInput = this.input.colInput ? `col-md-${this.input.colInput}` : `col-md-6`;
        console.log("this form group", this.formGroup);
    }
}
InputTextComponent.ɵfac = function InputTextComponent_Factory(t) { return new (t || InputTextComponent)(); };
InputTextComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputTextComponent, selectors: [["app-input-text"]], inputs: { input: "input", formGroup: "formGroup" }, decls: 19, vars: 30, consts: [[1, "row", "mb-3", "color-gray"], [3, "ngClass"], [1, "label-text", 3, "ngClass"], [1, "main"], ["class", "text-danger", 4, "ngIf"], [3, "formGroup"], [1, "input-group", "input-group-sm"], ["class", "input-group-prepend", 4, "ngIf"], ["type", "text", 1, "form-control-sm", "form-control", 3, "formControlName", "placeholder"], ["class", "input-group-append", 4, "ngIf"], ["class", "note text-danger", 4, "ngIf"], ["class", "note text-warning", 4, "ngIf"], [1, "text-danger"], [1, "input-group-prepend"], [1, "input-group-text"], [3, "innerHTML"], [1, "input-group-append"], [1, "note", "text-danger"], [1, "note", "text-warning"], [1, "fas", "fa-hourglass-end"]], template: function InputTextComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InputTextComponent_span_5_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, InputTextComponent_div_9_Template, 3, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, InputTextComponent_div_11_Template, 3, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " minimal character 7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, InputTextComponent_div_13_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, InputTextComponent_div_14_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, InputTextComponent_div_15_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, InputTextComponent_div_16_Template, 3, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, InputTextComponent_div_17_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, InputTextComponent_div_18_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("text-danger", ctx.formGroup.get(ctx.input.jsonName).touched && ctx.formGroup.get(ctx.input.jsonName).invalid)("text-success", ctx.formGroup.get(ctx.input.jsonName).touched && ctx.formGroup.get(ctx.input.jsonName).valid)("text-warning", ctx.formGroup.get(ctx.input.jsonName).touched && ctx.formGroup.get(ctx.input.jsonName).status == "PENDING");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.indented);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.colLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.input.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.input.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.colInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.input.prepend);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("has-warning", ctx.formGroup.get(ctx.input.jsonName).touched && ctx.formGroup.get(ctx.input.jsonName).status == "PENDING")("is-invalid", ctx.formGroup.get(ctx.input.jsonName).touched && ctx.formGroup.get(ctx.input.jsonName).invalid)("is-valid", ctx.formGroup.get(ctx.input.jsonName).touched && ctx.formGroup.get(ctx.input.jsonName).valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx.input.jsonName)("placeholder", ctx.input.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("maxlength", ctx.input.maxlength)("id", ctx.input.jsonName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.input.append);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroup.get(ctx.input.jsonName).touched && (ctx.formGroup.get(ctx.input.jsonName).errors == null ? null : ctx.formGroup.get(ctx.input.jsonName).errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroup.get(ctx.input.jsonName).touched && (ctx.formGroup.get(ctx.input.jsonName).errors == null ? null : ctx.formGroup.get(ctx.input.jsonName).errors.maxlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroup.get(ctx.input.jsonName).touched && (ctx.formGroup.get(ctx.input.jsonName).errors == null ? null : ctx.formGroup.get(ctx.input.jsonName).errors.minlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroup.get(ctx.input.jsonName).touched && ctx.formGroup.get(ctx.input.jsonName).status == "PENDING");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroup.get(ctx.input.jsonName).touched && (ctx.formGroup.get(ctx.input.jsonName).errors == null ? null : ctx.formGroup.get(ctx.input.jsonName).errors.errorService));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroup.get(ctx.input.jsonName).touched && (ctx.formGroup.get(ctx.input.jsonName).errors == null ? null : ctx.formGroup.get(ctx.input.jsonName).errors.duplicate));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"]], styles: [".note[_ngcontent-%COMP%]\r\n{\r\n    margin-top: 5px;\r\n    font-size: 11.7px;\r\n}\r\n\r\n.main[_ngcontent-%COMP%] {\r\n    font-weight: 500; \r\n}\r\n\r\n@media(max-width: 768px) \r\n{\r\n.label-text[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n  }\r\n}\r\n\r\n@media(min-width: 768px) \r\n{\r\n.label-text[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n  }\r\n}\r\n\r\n.has-warning[_ngcontent-%COMP%], .has-warning[_ngcontent-%COMP%]:focus\r\n{\r\n  border-color: #f0ad4e!important;\r\n  box-shadow: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Zvcm0vY29tcG9uZW50L2lucHV0LXRleHQvaW5wdXQtdGV4dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBQ0E7O0FBRUE7SUFDSSxnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTs7QUFFQTtJQUNJLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBOztFQUVFLCtCQUErQjtFQUMvQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZm9ybS9jb21wb25lbnQvaW5wdXQtdGV4dC9pbnB1dC10ZXh0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90ZVxyXG57XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDExLjdweDtcclxufVxyXG5cclxuLm1haW4ge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDsgXHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDogNzY4cHgpIFxyXG57XHJcbi5sYWJlbC10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEobWluLXdpZHRoOiA3NjhweCkgXHJcbntcclxuLmxhYmVsLXRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG59XHJcblxyXG4uaGFzLXdhcm5pbmcsIC5oYXMtd2FybmluZzpmb2N1c1xyXG57XHJcbiAgYm9yZGVyLWNvbG9yOiAjZjBhZDRlIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputTextComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-input-text',
                templateUrl: './input-text.component.html',
                styleUrls: ['./input-text.component.css']
            }]
    }], function () { return []; }, { input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], formGroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/form/component/multiple-checkbox/multiple-checkbox.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/form/component/multiple-checkbox/multiple-checkbox.component.ts ***!
  \****************************************************************************************/
/*! exports provided: MultipleCheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultipleCheckboxComponent", function() { return MultipleCheckboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function MultipleCheckboxComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MultipleCheckboxComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r1.input.prepend, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function MultipleCheckboxComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function MultipleCheckboxComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r3.input.append, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function MultipleCheckboxComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Wajib diisi! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MultipleCheckboxComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Inputan tidak boleh lebih dari ", ctx_r5.input.maxlength, " digit! ");
} }
function MultipleCheckboxComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Inputan tidak boleh kurang dari ", ctx_r6.input.minlength, " digit! ");
} }
function MultipleCheckboxComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Sedang Memuat... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MultipleCheckboxComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Gagal Memuat Data! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MultipleCheckboxComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Inputan sudah ada! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MultipleCheckboxComponent_ng_template_20_label_0_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MultipleCheckboxComponent_ng_template_20_label_0_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const option_r15 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.onChange($event.target.checked, option_r15.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r15 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("has-warning", ctx_r14.formGroup.get(ctx_r14.input.jsonName).touched && ctx_r14.formGroup.get(ctx_r14.input.jsonName).status == "PENDING")("is-invalid", ctx_r14.formGroup.get(ctx_r14.input.jsonName).touched && ctx_r14.formGroup.get(ctx_r14.input.jsonName).invalid)("is-valid", ctx_r14.formGroup.get(ctx_r14.input.jsonName).touched && ctx_r14.formGroup.get(ctx_r14.input.jsonName).valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r14.input.jsonName)("value", ctx_r14.input.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r15.value, " ");
} }
function MultipleCheckboxComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MultipleCheckboxComponent_ng_template_20_label_0_Template, 3, 9, "label", 24);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.input.option);
} }
function MultipleCheckboxComponent_ng_template_22_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MultipleCheckboxComponent_ng_template_22_div_0_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const option_r19 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.onChange($event.target.checked, option_r19.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r19 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("has-warning", ctx_r18.formGroup.get(ctx_r18.input.jsonName).touched && ctx_r18.formGroup.get(ctx_r18.input.jsonName).status == "PENDING")("is-invalid", ctx_r18.formGroup.get(ctx_r18.input.jsonName).touched && ctx_r18.formGroup.get(ctx_r18.input.jsonName).invalid)("is-valid", ctx_r18.formGroup.get(ctx_r18.input.jsonName).touched && ctx_r18.formGroup.get(ctx_r18.input.jsonName).valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r18.input.jsonName)("value", ctx_r18.input.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r19.value, " ");
} }
function MultipleCheckboxComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MultipleCheckboxComponent_ng_template_22_div_0_Template, 3, 9, "div", 27);
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r13.input.option);
} }
class MultipleCheckboxComponent {
    constructor() { }
    ngOnInit() {
        this.indented = this.input.indented ? `col-md-${this.input.indented}` : ``;
        this.colLabel = this.input.colLabel ? `col-md-${this.input.colLabel}` : `col-md-3`;
        this.colInput = this.input.colInput ? `col-md-${this.input.colInput}` : `col-md-6`;
        this.formArray = [];
    }
    onChange(isChecked, value) {
        console.log("value", value);
        if (isChecked) {
            // emailFormArray.push(new FormControl(email));
            this.formArray.push(value);
        }
        else {
            let index = this.formArray.indexOf(value);
            this.formArray.splice(index, 1);
        }
        this.formGroup.removeControl('jenisPermohonan');
        this.formGroup.addControl('jenisPermohonan', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.formArray.toString()));
        // this.formGroup.get(this.input.jsonName).setValue(this.formArray.toString());
    }
}
MultipleCheckboxComponent.ɵfac = function MultipleCheckboxComponent_Factory(t) { return new (t || MultipleCheckboxComponent)(); };
MultipleCheckboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MultipleCheckboxComponent, selectors: [["app-multiple-checkbox"]], inputs: { input: "input", formGroup: "formGroup", isCheckboxVertical: "isCheckboxVertical" }, decls: 24, vars: 25, consts: [[1, "row", "mb-3", "color-gray"], [3, "ngClass"], [1, "label-text", 3, "ngClass"], [1, "main"], ["class", "text-danger", 4, "ngIf"], [3, "formGroup"], [1, "input-group", "input-group-sm"], ["class", "input-group-prepend", 4, "ngIf"], [1, "control-group"], [1, "controls", "span2"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["class", "input-group-append", 4, "ngIf"], ["class", "note text-danger", 4, "ngIf"], ["class", "note text-warning", 4, "ngIf"], ["standartInputTemplate", ""], ["verticalInputTemplate", ""], [1, "text-danger"], [1, "input-group-prepend"], [1, "input-group-text"], [3, "innerHTML"], [1, "input-group-append"], [1, "note", "text-danger"], [1, "note", "text-warning"], [1, "fas", "fa-hourglass-end"], ["class", "checkbox", 4, "ngFor", "ngForOf"], [1, "checkbox"], ["type", "checkbox", "id", "input.jsonName", 3, "formControlName", "value", "change"], [4, "ngFor", "ngForOf"]], template: function MultipleCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MultipleCheckboxComponent_span_5_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MultipleCheckboxComponent_div_9_Template, 3, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MultipleCheckboxComponent_div_12_Template, 1, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MultipleCheckboxComponent_div_13_Template, 3, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MultipleCheckboxComponent_div_14_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MultipleCheckboxComponent_div_15_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MultipleCheckboxComponent_div_16_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MultipleCheckboxComponent_div_17_Template, 3, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MultipleCheckboxComponent_div_18_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MultipleCheckboxComponent_div_19_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, MultipleCheckboxComponent_ng_template_20_Template, 1, 1, "ng-template", 5, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, MultipleCheckboxComponent_ng_template_22_Template, 1, 1, "ng-template", 5, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("text-danger", ctx.formGroup.get(ctx.input.jsonName).touched && ctx.formGroup.get(ctx.input.jsonName).invalid)("text-success", ctx.formGroup.get(ctx.input.jsonName).touched && ctx.formGroup.get(ctx.input.jsonName).valid)("text-warning", ctx.formGroup.get(ctx.input.jsonName).touched && ctx.formGroup.get(ctx.input.jsonName).status == "PENDING");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.indented);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.colLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.input.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.input.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.colInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.input.prepend);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCheckboxVertical)("ngIfThen", _r12)("ngIfElse", _r10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.input.append);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroup.get(ctx.input.jsonName).touched && (ctx.formGroup.get(ctx.input.jsonName).errors == null ? null : ctx.formGroup.get(ctx.input.jsonName).errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroup.get(ctx.input.jsonName).touched && (ctx.formGroup.get(ctx.input.jsonName).errors == null ? null : ctx.formGroup.get(ctx.input.jsonName).errors.maxlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroup.get(ctx.input.jsonName).touched && (ctx.formGroup.get(ctx.input.jsonName).errors == null ? null : ctx.formGroup.get(ctx.input.jsonName).errors.minlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroup.get(ctx.input.jsonName).touched && ctx.formGroup.get(ctx.input.jsonName).status == "PENDING");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroup.get(ctx.input.jsonName).touched && (ctx.formGroup.get(ctx.input.jsonName).errors == null ? null : ctx.formGroup.get(ctx.input.jsonName).errors.errorService));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroup.get(ctx.input.jsonName).touched && (ctx.formGroup.get(ctx.input.jsonName).errors == null ? null : ctx.formGroup.get(ctx.input.jsonName).errors.duplicate));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".note[_ngcontent-%COMP%]\r\n{\r\n    margin-top: 5px;\r\n    font-size: 11.7px;\r\n}\r\n\r\n.main[_ngcontent-%COMP%] {\r\n    font-weight: 500; \r\n}\r\n\r\n.checkbox[_ngcontent-%COMP%]\r\n{\r\n  margin-right: 12px;\r\n}\r\n\r\n@media(max-width: 768px) \r\n{\r\n.label-text[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n  }\r\n  \r\n}\r\n\r\n@media(min-width: 768px) \r\n{\r\n.label-text[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n  }\r\n}\r\n\r\n.has-warning[_ngcontent-%COMP%], .has-warning[_ngcontent-%COMP%]:focus\r\n{\r\n  border-color: #f0ad4e!important;\r\n  box-shadow: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Zvcm0vY29tcG9uZW50L211bHRpcGxlLWNoZWNrYm94L211bHRpcGxlLWNoZWNrYm94LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQTs7RUFFRSxrQkFBa0I7QUFDcEI7O0FBQ0E7O0FBRUE7SUFDSSxnQkFBZ0I7RUFDbEI7O0FBRUY7O0FBRUE7O0FBRUE7SUFDSSxpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQTs7RUFFRSwrQkFBK0I7RUFDL0IsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2Zvcm0vY29tcG9uZW50L211bHRpcGxlLWNoZWNrYm94L211bHRpcGxlLWNoZWNrYm94LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90ZVxyXG57XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDExLjdweDtcclxufVxyXG5cclxuLm1haW4ge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDsgXHJcbn1cclxuLmNoZWNrYm94XHJcbntcclxuICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDogNzY4cHgpIFxyXG57XHJcbi5sYWJlbC10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG5AbWVkaWEobWluLXdpZHRoOiA3NjhweCkgXHJcbntcclxuLmxhYmVsLXRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG59XHJcblxyXG4uaGFzLXdhcm5pbmcsIC5oYXMtd2FybmluZzpmb2N1c1xyXG57XHJcbiAgYm9yZGVyLWNvbG9yOiAjZjBhZDRlIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MultipleCheckboxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-multiple-checkbox',
                templateUrl: './multiple-checkbox.component.html',
                styleUrls: ['./multiple-checkbox.component.css']
            }]
    }], function () { return []; }, { input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], formGroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isCheckboxVertical: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/form/component/non-input/non-input.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/form/component/non-input/non-input.component.ts ***!
  \************************************************************************/
/*! exports provided: NonInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonInputComponent", function() { return NonInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




class NonInputComponent {
    constructor() { }
    ngOnInit() {
        this.indented = this.input.indented ? `col-md-${this.input.indented}` : ``;
        this.colLabel = this.input.colLabel ? `col-md-${this.input.colLabel}` : `col-md-3`;
        this.colInput = this.input.colInput ? `col-md-${this.input.colInput}` : `col-md-6`;
    }
}
NonInputComponent.ɵfac = function NonInputComponent_Factory(t) { return new (t || NonInputComponent)(); };
NonInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NonInputComponent, selectors: [["app-non-input"]], inputs: { input: "input", formGroup: "formGroup" }, decls: 8, vars: 6, consts: [[1, "row", "mb-3"], [3, "ngClass"], [1, "label-text", 3, "ngClass"], [1, "main"], [3, "formGroup"]], template: function NonInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.indented);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.colLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.input.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.colInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.formGroup.get(ctx.input.jsonName).value, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"]], styles: [".main[_ngcontent-%COMP%] {\r\n    font-weight: 500; \r\n}\r\n@media(max-width: 768px) \r\n{\r\n.label-text[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n  }\r\n}\r\n@media(min-width: 768px) \r\n{\r\n.label-text[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n  }\r\n}\r\n.note[_ngcontent-%COMP%]\r\n{\r\n    margin-top: 5px;\r\n    font-size: 11.7px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Zvcm0vY29tcG9uZW50L25vbi1pbnB1dC9ub24taW5wdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBOztBQUVBO0lBQ0ksZ0JBQWdCO0VBQ2xCO0FBQ0Y7QUFFQTs7QUFFQTtJQUNJLGlCQUFpQjtFQUNuQjtBQUNGO0FBQ0E7O0lBRUksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb3JtL2NvbXBvbmVudC9ub24taW5wdXQvbm9uLWlucHV0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XHJcbiAgICBmb250LXdlaWdodDogNTAwOyBcclxufVxyXG5AbWVkaWEobWF4LXdpZHRoOiA3NjhweCkgXHJcbntcclxuLmxhYmVsLXRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYShtaW4td2lkdGg6IDc2OHB4KSBcclxue1xyXG4ubGFiZWwtdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcbn1cclxuLm5vdGVcclxue1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMS43cHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NonInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-non-input',
                templateUrl: './non-input.component.html',
                styleUrls: ['./non-input.component.css']
            }]
    }], function () { return []; }, { input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], formGroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/form/form-controller/form-controller.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/form/form-controller/form-controller.component.ts ***!
  \**************************************************************************/
/*! exports provided: FormControllerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControllerComponent", function() { return FormControllerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _validator_insert_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../validator/insert-validator */ "./src/app/shared/form/validator/insert-validator.ts");
/* harmony import */ var _service_api_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/api-shared/shared.service */ "./src/app/shared/service/api-shared/shared.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _component_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/input-text/input-text.component */ "./src/app/shared/form/component/input-text/input-text.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _component_input_date_input_date_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/input-date/input-date.component */ "./src/app/shared/form/component/input-date/input-date.component.ts");
/* harmony import */ var _component_input_text_area_input_text_area_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/input-text-area/input-text-area.component */ "./src/app/shared/form/component/input-text-area/input-text-area.component.ts");
/* harmony import */ var _component_input_select_input_select_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../component/input-select/input-select.component */ "./src/app/shared/form/component/input-select/input-select.component.ts");
/* harmony import */ var _component_input_radio_input_radio_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../component/input-radio/input-radio.component */ "./src/app/shared/form/component/input-radio/input-radio.component.ts");
/* harmony import */ var _component_input_modal_input_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../component/input-modal/input-modal.component */ "./src/app/shared/form/component/input-modal/input-modal.component.ts");
/* harmony import */ var _component_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../component/input-number/input-number.component */ "./src/app/shared/form/component/input-number/input-number.component.ts");
/* harmony import */ var _component_input_address_input_address_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../component/input-address/input-address.component */ "./src/app/shared/form/component/input-address/input-address.component.ts");
/* harmony import */ var _component_non_input_non_input_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../component/non-input/non-input.component */ "./src/app/shared/form/component/non-input/non-input.component.ts");
/* harmony import */ var _component_multiple_checkbox_multiple_checkbox_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../component/multiple-checkbox/multiple-checkbox.component */ "./src/app/shared/form/component/multiple-checkbox/multiple-checkbox.component.ts");
















function FormControllerComponent_ng_container_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-input-text", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("input", ctx_r1.input)("formGroup", ctx_r1.formGroup);
} }
function FormControllerComponent_ng_container_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-input-date", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("input", ctx_r2.input)("formGroup", ctx_r2.formGroup);
} }
function FormControllerComponent_ng_container_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-input-text-area", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("input", ctx_r3.input)("formGroup", ctx_r3.formGroup);
} }
function FormControllerComponent_ng_container_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-input-select", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("input", ctx_r4.input)("formGroup", ctx_r4.formGroup);
} }
function FormControllerComponent_ng_container_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-input-radio", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("input", ctx_r5.input)("formGroup", ctx_r5.formGroup);
} }
function FormControllerComponent_ng_container_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-input-modal", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("input", ctx_r6.input)("formGroup", ctx_r6.formGroup);
} }
function FormControllerComponent_ng_container_0_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-input-number", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("input", ctx_r7.input)("formGroup", ctx_r7.formGroup);
} }
function FormControllerComponent_ng_container_0_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-input-address", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("input", ctx_r8.input)("formGroup", ctx_r8.formGroup);
} }
function FormControllerComponent_ng_container_0_div_10_app_form_controller_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-form-controller", 3);
} if (rf & 2) {
    const input_r14 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("input", input_r14)("formGroup", ctx_r13.formGroup);
} }
function FormControllerComponent_ng_container_0_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-input-select", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChangeEvent", function FormControllerComponent_ng_container_0_div_10_Template_app_input_select_onChangeEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.onChangeEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FormControllerComponent_ng_container_0_div_10_app_form_controller_2_Template, 1, 2, "app-form-controller", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("input", ctx_r9.input)("formGroup", ctx_r9.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.input.children[ctx_r9.formGroup.get(ctx_r9.input.jsonName).value]);
} }
function FormControllerComponent_ng_container_0_div_11_app_form_controller_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-form-controller", 3);
} if (rf & 2) {
    const input_r18 = ctx.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("input", input_r18)("formGroup", ctx_r17.formGroup);
} }
function FormControllerComponent_ng_container_0_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-input-radio", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChangeEvent", function FormControllerComponent_ng_container_0_div_11_Template_app_input_radio_onChangeEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.onChangeEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FormControllerComponent_ng_container_0_div_11_app_form_controller_2_Template, 1, 2, "app-form-controller", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("input", ctx_r10.input)("formGroup", ctx_r10.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.input.children[ctx_r10.formGroup.get(ctx_r10.input.jsonName).value]);
} }
function FormControllerComponent_ng_container_0_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-non-input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("input", ctx_r11.input)("formGroup", ctx_r11.formGroup);
} }
function FormControllerComponent_ng_container_0_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-multiple-checkbox", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("input", ctx_r12.input)("formGroup", ctx_r12.formGroup)("isCheckboxVertical", ctx_r12.isCheckboxVertical);
} }
function FormControllerComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FormControllerComponent_ng_container_0_div_2_Template, 2, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FormControllerComponent_ng_container_0_div_3_Template, 2, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FormControllerComponent_ng_container_0_div_4_Template, 2, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FormControllerComponent_ng_container_0_div_5_Template, 2, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FormControllerComponent_ng_container_0_div_6_Template, 2, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FormControllerComponent_ng_container_0_div_7_Template, 2, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FormControllerComponent_ng_container_0_div_8_Template, 2, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FormControllerComponent_ng_container_0_div_9_Template, 2, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FormControllerComponent_ng_container_0_div_10_Template, 3, 3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FormControllerComponent_ng_container_0_div_11_Template, 3, 3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FormControllerComponent_ng_container_0_div_12_Template, 2, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, FormControllerComponent_ng_container_0_div_13_Template, 2, 3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r0.input.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "text-area");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "radio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "modal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "select-children");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "radio-children");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "non-input");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "multiple-checkbox");
} }
class FormControllerComponent {
    constructor(SharedService) {
        this.SharedService = SharedService;
        this.formGroupEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        console.log("test " + typeof this.input.jsonName);
        // this.hide = typeof this.input.jsonName == "string" && !this.formGroup.get(this.input.jsonName).value && this.input.type == "non-input";
        console.log("dmy belajar", this.input.jsonName + " " + this.formGroup.get(this.input.jsonName));
    }
    handleChange(event) {
        alert("test");
    }
    onChangeEvent(event) {
        console.log("test");
        if (this.input.children[event.formGroup.get(this.input.jsonName).value]) {
            this.input.children[event.formGroup.get(this.input.jsonName).value].forEach((child) => {
                this.add(child);
            });
        }
        if (this.input.children[event.befValue]) {
            this.input.children[event.befValue].forEach((child) => {
                this.remove(child);
            });
        }
    }
    remove(input) {
        if (typeof input.jsonName == 'string') {
            this.formGroup.removeControl(input.jsonName);
        }
        else if (typeof input.jsonName == 'object' || input.type == 'radio-children') {
            input.jsonName.forEach(jName => {
                this.formGroup.removeControl(jName);
            });
        }
    }
    add(input) {
        if (typeof input.jsonName == 'string') {
            this.formGroup.addControl(input.jsonName, new _validator_insert_validator__WEBPACK_IMPORTED_MODULE_1__["InsertValidator"](input, this.SharedService));
        }
        else if (typeof input.jsonName == 'object' || input.type == 'radio-children') {
            input.jsonName.forEach(jName => {
                this.formGroup.addControl(jName, new _validator_insert_validator__WEBPACK_IMPORTED_MODULE_1__["InsertValidator"](input, this.SharedService, jName));
            });
        }
    }
}
FormControllerComponent.ɵfac = function FormControllerComponent_Factory(t) { return new (t || FormControllerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_api_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"])); };
FormControllerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormControllerComponent, selectors: [["app-form-controller"]], inputs: { input: "input", formGroup: "formGroup", isCheckboxVertical: "isCheckboxVertical" }, outputs: { formGroupEvent: "formGroupEvent" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], [3, "input", "formGroup"], [3, "input", "formGroup", "onChangeEvent"], [3, "input", "formGroup", 4, "ngFor", "ngForOf"], [3, "input", "formGroup", "isCheckboxVertical"]], template: function FormControllerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FormControllerComponent_ng_container_0_Template, 14, 13, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hide);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], _component_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_4__["InputTextComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _component_input_date_input_date_component__WEBPACK_IMPORTED_MODULE_6__["InputDateComponent"], _component_input_text_area_input_text_area_component__WEBPACK_IMPORTED_MODULE_7__["InputTextAreaComponent"], _component_input_select_input_select_component__WEBPACK_IMPORTED_MODULE_8__["InputSelectComponent"], _component_input_radio_input_radio_component__WEBPACK_IMPORTED_MODULE_9__["InputRadioComponent"], _component_input_modal_input_modal_component__WEBPACK_IMPORTED_MODULE_10__["InputModalComponent"], _component_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_11__["InputNumberComponent"], _component_input_address_input_address_component__WEBPACK_IMPORTED_MODULE_12__["InputAddressComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], FormControllerComponent, _component_non_input_non_input_component__WEBPACK_IMPORTED_MODULE_13__["NonInputComponent"], _component_multiple_checkbox_multiple_checkbox_component__WEBPACK_IMPORTED_MODULE_14__["MultipleCheckboxComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb3JtL2Zvcm0tY29udHJvbGxlci9mb3JtLWNvbnRyb2xsZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormControllerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-form-controller',
                templateUrl: './form-controller.component.html',
                styleUrls: ['./form-controller.component.css']
            }]
    }], function () { return [{ type: _service_api_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] }]; }, { input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], formGroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], formGroupEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], isCheckboxVertical: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/form/template/form-template/form-template.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/form/template/form-template/form-template.component.ts ***!
  \*******************************************************************************/
/*! exports provided: FormTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormTemplateComponent", function() { return FormTemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _modal_modal_confirmation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../modal/modal-confirmation.component */ "./src/app/shared/modal/modal-confirmation.component.ts");
/* harmony import */ var _validator_insert_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../validator/insert-validator */ "./src/app/shared/form/validator/insert-validator.ts");
/* harmony import */ var src_app_data_api_data_master_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/data-api/data-master.api */ "./src/app/data-api/data-master.api.ts");
/* harmony import */ var _service_api_shared_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/api-shared/shared.service */ "./src/app/shared/service/api-shared/shared.service.ts");
/* harmony import */ var _modal_modal_controller_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../modal/modal-controller.service */ "./src/app/shared/modal/modal-controller.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _form_controller_form_controller_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../form-controller/form-controller.component */ "./src/app/shared/form/form-controller/form-controller.component.ts");














function FormTemplateComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Memuat Data....");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormTemplateComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Gagal Memuat Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormTemplateComponent_form_2_app_form_controller_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-form-controller", 19);
} if (rf & 2) {
    const input_r6 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("input", input_r6)("formGroup", ctx_r3.formGroup)("isCheckboxVertical", ctx_r3.isCheckboxVertical);
} }
function FormTemplateComponent_form_2_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Cari");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r4.formGroup.valid || !ctx_r4.formGroup.dirty);
} }
function FormTemplateComponent_form_2_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Repost");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r5.formGroup.valid || !ctx_r5.formGroup.dirty);
} }
function FormTemplateComponent_form_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormTemplateComponent_form_2_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FormTemplateComponent_form_2_app_form_controller_2_Template, 1, 3, "app-form-controller", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FormTemplateComponent_form_2_div_7_Template, 4, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormTemplateComponent_form_2_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Batal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FormTemplateComponent_form_2_div_12_Template, 4, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.formTemplate.inputList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.formType == "get");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.formType == "post");
} }
class FormTemplateComponent {
    constructor(SharedService, ModalController, modalService, cookieService, Router) {
        this.SharedService = SharedService;
        this.ModalController = ModalController;
        this.modalService = modalService;
        this.cookieService = cookieService;
        this.Router = Router;
        this.dataTable = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.status = 'loading';
        //Edit Panel
        this.editDataMaster = [
            {
                jsonName: 'isactive',
                required: true,
                value: 'false',
                label: 'Status',
                type: 'radio',
                option: [
                    {
                        key: 'Active',
                        value: 'true',
                    },
                    {
                        key: 'Inactive',
                        value: 'false',
                    },
                ],
            },
            {
                jsonName: 'createddate',
                value: '',
                label: 'Created Date',
                type: 'non-input',
            },
            {
                jsonName: 'createdby',
                value: '',
                label: 'Created By',
                type: 'non-input',
            },
            {
                jsonName: 'modifieddate',
                value: '',
                label: 'Modified Date',
                type: 'non-input',
            },
            {
                jsonName: 'modifiedby',
                value: '',
                label: 'Modified By',
                type: 'non-input',
            },
        ];
    }
    ngOnChanges() {
        if (this.formTemplate != null && this.formGroup == null) {
            if (this.id != null && this.id != 0) {
                this.formTemplate.getDataUrl = this.formTemplate.getDataUrl + this.id + ";;";
                this.formTemplate.putDataUrl = this.formTemplate.putDataUrl + this.id;
            }
            else {
                this.status = 'success';
            }
            this.formTemplateInit();
        }
    }
    getOne() {
        this.SharedService.getData(this.formTemplate.getOneUrl).subscribe((response) => {
            if (response && response.status == '200') {
                this.status = 'success';
                var data = response.body.content[0];
                this.formTemplate.inputList = this.formTemplate.inputList.concat(this.editDataMaster);
                this.formTemplate.inputList.forEach((formData) => {
                    this.insertValueGetOne(formData, data);
                    if (formData.children && formData.children[formData.value]) {
                        formData.children[formData.value].forEach((child) => {
                            this.insertValueGetOne(child, data);
                        });
                    }
                });
                this.formTemplateInit();
            }
            else {
                this.status = 'failed';
            }
        });
    }
    formTemplateInit() {
        var group = {};
        this.formTemplate.inputList.forEach((input) => {
            this.addToGroup(group, input);
            if (input.children && input.children[input.value]) {
                input.children[input.value].forEach((child) => {
                    this.addToGroup(group, child);
                });
            }
        });
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](group);
        console.log('formgroup value', this.formGroup.value);
    }
    addToGroup(group, input) {
        if (typeof input.jsonName != 'object') {
            group[input.jsonName] = new _validator_insert_validator__WEBPACK_IMPORTED_MODULE_3__["InsertValidator"](input, this.SharedService);
        }
        else {
            input.jsonName.forEach((jName) => {
                group[jName] = new _validator_insert_validator__WEBPACK_IMPORTED_MODULE_3__["InsertValidator"](input, this.SharedService, jName);
            });
        }
    }
    cancel() {
        if (this.formGroup.dirty) {
            const alert = this.modalService.open(_modal_modal_confirmation_component__WEBPACK_IMPORTED_MODULE_2__["ModalConfirmationComponent"]);
            alert.componentInstance.content =
                'Apakah anda yakin tidak ingin menyimpan perubahan?';
            alert.result.then((result) => {
                result == 'Ok'
                    ? this.Router.navigate([this.formTemplate.backUrl])
                    : null;
            }, () => { });
        }
        else {
            this.Router.navigate([this.formTemplate.backUrl]);
        }
    }
    // getOne()
    // {
    //   this.SharedService.getData(this.formTemplate.getOneUrl).subscribe((response) =>
    //   {
    //     if(response && (response.status == '200'))
    //     {
    //       this.status = 'success';
    //       var data = response.body.content[0];
    //       this.formTemplate.inputList = this.formTemplate.inputList.concat(this.editDataMaster);
    //       this.formTemplate.inputList.forEach((formData) =>
    //       {
    //         this.insertValueGetOne(formData, data);
    //         if(formData.children && formData.children[formData.value])
    //         {
    //           formData.children[formData.value].forEach((child) =>
    //           {
    //             this.insertValueGetOne(child, data);
    //           })
    //         }
    //       })
    //       this.formTemplateInit();
    //     }
    //     else
    //     {
    //       this.status = 'failed';
    //     }
    //   });
    // }
    insertValueGetOne(formData, data) {
        if (typeof formData.jsonName == 'string') {
            data[formData.jsonName] != null
                ? (formData.value = data[formData.jsonName].toString())
                : (formData.value = data[formData.jsonName]);
        }
        else if (typeof formData.jsonName == 'object') {
            var value = {};
            formData.jsonName.forEach((jsonName) => {
                value[jsonName] = data[jsonName];
            });
            formData.value = value;
        }
        if (formData.modalConfiguration) {
            formData.modalConfiguration.displayInit =
                data[formData.modalConfiguration.displayKey];
            formData.modalConfiguration.displayInit2
                ? (formData.modalConfiguration.displayInit2 =
                    data[formData.modalConfiguration.displayKey2])
                : null;
        }
    }
    //
    //Save Data Panel
    save() {
        // this.ModalController.openLoading("Sedang Menyimpan Data...");
        console.log("aaaaaaasasasas" + this.formType + "abed");
        var userInfo = JSON.parse(localStorage.getItem('userInfo'));
        if (this.formType == "get") {
            this.getData();
        }
        else if (this.formType == "post") {
            this.ModalController.openLoading("Sedang Mengirim Request Resend...");
            this.postData();
        }
        // if(this.formType == "edit")
        // {
        //   this.updateData(userInfo ? userInfo.userData.userName : null);
        // }
        // else
        // {
        //   this.postData(userInfo ? userInfo.userData.userName : null);
        // }
    }
    postData() {
        console.log("post");
        this.SharedService.postData(src_app_data_api_data_master_api__WEBPACK_IMPORTED_MODULE_4__["POST_RESEND_CMR"], this.formGroup.value).subscribe((response) => {
            this.responseController(response);
            if (response && response.status == '200') {
                // this.ModalController.closeAlert();
            }
            else {
                this.status = 'failed';
            }
        });
    }
    queryParamGetMerchant() {
        if (this.formGroup.get('value').value == null) {
            return;
        }
        if (this.formGroup.get('Cari Berdasarkan').value == null) {
            return;
        }
        return ('?' +
            this.formGroup.get('Cari Berdasarkan').value +
            '=' +
            this.formGroup.get('value').value);
    }
    getData() {
        console.log('dfghjk');
        console.log(this.formGroup.get('value').value);
        this.SharedService.getData(src_app_data_api_data_master_api__WEBPACK_IMPORTED_MODULE_4__["GET_CLIENT_CMR"], this.queryParamGetMerchant()).subscribe((response) => {
            if (response && response.status == '200') {
                console.log('bbbbbb' + response.body);
                this.dataTable.emit(Object.assign({}, response));
                this.status = 'success';
                console.log('AKWOKAWPOEAHNnw');
                // this.ModalController.closeAlert();
                // this.responseController(response);
            }
            else {
                this.status = 'failed';
            }
        });
    }
    updateData(user) {
        this.formGroup.get('modifiedby').setValue(user);
        this.formGroup.addControl('modifiedbyname', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](user));
        this.formGroup.addControl('modifiedterminal', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](user));
        console.log(this.formGroup.value);
        this.SharedService.putData(this.formTemplate.putDataUrl, this.formGroup.value).subscribe((response) => {
            this.responseController(response);
        });
    }
    responseController(response) {
        this.ModalController.closeLoading();
        console.log('response', response);
        console.log("gagal");
        if (response != null) {
            console.log('response', response);
            if (response.status == 200 || response.status == 201) {
                this.ModalController.openAlert('Laporan sedang diproses', this.formTemplate.backUrl);
            }
        }
        else {
            this.ModalController.openAlert('Data tidak dapat dimasukan kedalam server');
        }
    }
}
FormTemplateComponent.ɵfac = function FormTemplateComponent_Factory(t) { return new (t || FormTemplateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_api_shared_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modal_modal_controller_service__WEBPACK_IMPORTED_MODULE_6__["ModalControllerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"])); };
FormTemplateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormTemplateComponent, selectors: [["app-form-template"]], inputs: { formTemplate: "formTemplate", formType: "formType", id: "id", isCheckboxVertical: "isCheckboxVertical" }, outputs: { dataTable: "dataTable" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 3, consts: [[4, "ngIf"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "block-content"], [1, "d-flex", "justify-content-center"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "sr-only"], [1, "text-center", "mt-2"], [1, "text-center", "text-danger", "mt-2"], [3, "formGroup", "ngSubmit"], [1, "block-content", "color-gray"], [3, "input", "formGroup", "isCheckboxVertical", 4, "ngFor", "ngForOf"], [1, "row", "mb-3"], [1, "col-md-3"], [1, "col-md-6"], [1, "d-flex", "flex-row"], ["class", "p-1", 4, "ngIf"], [1, "p-1"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "fas", "fa-chevron-left", "left"], [3, "input", "formGroup", "isCheckboxVertical"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "fas", "fa-save", "left"]], template: function FormTemplateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FormTemplateComponent_div_0_Template, 8, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormTemplateComponent_div_1_Template, 4, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FormTemplateComponent_form_2_Template, 13, 4, "form", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.formGroup && ctx.status == "loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.formGroup && ctx.status == "failed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroup);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _form_controller_form_controller_component__WEBPACK_IMPORTED_MODULE_11__["FormControllerComponent"]], styles: [".block-header[_ngcontent-%COMP%] {\r\n    padding: 12px 15px 10px;\r\n    min-height: 40px;\r\n    border-top: 2px solid #ece7ea;\r\n    background-color: #fff;\r\n    color : #6c676a;\r\n}\r\n\r\n.block-content[_ngcontent-%COMP%] {\r\n    border-top: 1px solid #ece7ea;\r\n    background-color: #fff;\r\n    padding: 15px;\r\n}\r\n\r\n.main[_ngcontent-%COMP%] {\r\n    font-weight: 500;\r\n  \r\n}\r\n\r\n.color-gray[_ngcontent-%COMP%]\r\n{\r\n    color: #6c676a;\r\n}\r\n\r\n@media(max-width: 768px) \r\n{\r\n.label-text[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n  }\r\n}\r\n\r\n@media(min-width: 768px) \r\n{\r\n.label-text[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Zvcm0vdGVtcGxhdGUvZm9ybS10ZW1wbGF0ZS9mb3JtLXRlbXBsYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3QixzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixzQkFBc0I7SUFDdEIsYUFBYTtBQUNqQjs7QUFHQTtJQUNJLGdCQUFnQjs7QUFFcEI7O0FBRUE7O0lBRUksY0FBYztBQUNsQjs7QUFFQTs7QUFFQTtJQUNJLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBOztBQUVBO0lBQ0ksaUJBQWlCO0VBQ25CO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZm9ybS90ZW1wbGF0ZS9mb3JtLXRlbXBsYXRlL2Zvcm0tdGVtcGxhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibG9jay1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMTJweCAxNXB4IDEwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNlY2U3ZWE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgY29sb3IgOiAjNmM2NzZhO1xyXG59XHJcblxyXG4uYmxvY2stY29udGVudCB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VjZTdlYTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG5cclxuLm1haW4ge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBcclxufVxyXG5cclxuLmNvbG9yLWdyYXlcclxue1xyXG4gICAgY29sb3I6ICM2YzY3NmE7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KSBcclxue1xyXG4ubGFiZWwtdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhKG1pbi13aWR0aDogNzY4cHgpIFxyXG57XHJcbi5sYWJlbC10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormTemplateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-form-template',
                templateUrl: './form-template.component.html',
                styleUrls: ['./form-template.component.css'],
            }]
    }], function () { return [{ type: _service_api_shared_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] }, { type: _modal_modal_controller_service__WEBPACK_IMPORTED_MODULE_6__["ModalControllerService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }]; }, { formTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], formType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dataTable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], isCheckboxVertical: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/form/validator/duplicate.validator.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/form/validator/duplicate.validator.ts ***!
  \**************************************************************/
/*! exports provided: duplicate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "duplicate", function() { return duplicate; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");

class duplicate {
    duplicateAsyncValidator(SharedService, urlDuplicate, valueBefore) {
        return (control) => {
            return SharedService.getData(urlDuplicate, control.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((result) => result ?
                (result.body.content.status == 204 || control.value == valueBefore) ? null : { 'duplicate': true } :
                { 'errorService': true }));
        };
    }
}


/***/ }),

/***/ "./src/app/shared/form/validator/insert-validator.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/form/validator/insert-validator.ts ***!
  \***********************************************************/
/*! exports provided: InsertValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertValidator", function() { return InsertValidator; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _validator_duplicate_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../validator/duplicate.validator */ "./src/app/shared/form/validator/duplicate.validator.ts");


class InsertValidator {
    constructor(input, SharedService, jsonName) {
        var ValidatorsArray = [];
        var AsyncValidatorsArray = [];
        var regex = "";
        switch (input.type) {
            case "number":
                regex = input.isNegative ? `^-?[0-9]{0,${input.maxlength}}$` : `^[0-9]{0,${input.maxlength}}$`;
                ValidatorsArray.push(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(regex));
                input.maxValue ? ValidatorsArray.push(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].max(input.maxValue)) : null;
                input.minValue ? ValidatorsArray.push(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(input.minValue)) : null;
                input.minlength ? ValidatorsArray.push(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(input.minlength)) : null;
                input.required ? ValidatorsArray.push(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required) : null;
                return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](input.value != null ? input.value : '', ValidatorsArray);
            case "select":
                if (jsonName) {
                    input.option.forEach((option) => {
                        var value = '';
                        value = option.value[jsonName].toString().replace("(", '\\(');
                        value = value.replace(")", '\\)');
                        regex = regex + `^${value}$|`;
                    });
                    regex = regex.slice(0, regex.length - 1);
                    ValidatorsArray.push(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(regex));
                    input.required ? ValidatorsArray.push(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required) : null;
                    return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](input.value && input.value[jsonName] ? input.value[jsonName] : '', ValidatorsArray);
                }
                else {
                    input.option.forEach((option) => {
                        var value = '';
                        value = option.value.toString().replace("(", '\\(');
                        value = value.replace(")", '\\)');
                        regex = regex + `^${value}$|`;
                    });
                    regex = regex.slice(0, regex.length - 1);
                    ValidatorsArray.push(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(regex));
                    input.required ? ValidatorsArray.push(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required) : null;
                    return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](input.value ? input.value : '', ValidatorsArray);
                }
            case "select-children":
                if (jsonName) {
                    input.option.forEach((option) => {
                        var value = '';
                        value = option.value[jsonName].toString().replace("(", '\\(');
                        value = value.replace(")", '\\)');
                        regex = regex + `^${value}$|`;
                    });
                    regex = regex.slice(0, regex.length - 1);
                    ValidatorsArray.push(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(regex));
                    input.required ? ValidatorsArray.push(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required) : null;
                    return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](input.value && input.value[jsonName] ? input.value[jsonName] : '', ValidatorsArray);
                }
                else {
                    input.option.forEach((option) => {
                        var value = '';
                        value = option.value.toString().replace("(", '\\(');
                        value = value.replace(")", '\\)');
                        regex = regex + `^${value}$|`;
                    });
                    regex = regex.slice(0, regex.length - 1);
                    ValidatorsArray.push(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(regex));
                    input.required ? ValidatorsArray.push(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required) : null;
                    return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](input.value ? input.value : '', ValidatorsArray);
                }
            case "radio":
                input.option.forEach((option) => {
                    regex = regex + `^${option.value}$|`;
                });
                regex = regex.slice(0, regex.length - 1);
                ValidatorsArray.push(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(regex));
                input.required ? ValidatorsArray.push(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required) : null;
                return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](input.value ? input.value : '', ValidatorsArray);
            case "radio-children":
                input.option.forEach((option) => {
                    regex = regex + `^${option.value}$|`;
                });
                regex = regex.slice(0, regex.length - 1);
                ValidatorsArray.push(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(regex));
                input.required ? ValidatorsArray.push(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required) : null;
                return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](input.value ? input.value : '', ValidatorsArray);
            case "text": {
                input.maxlength ? ValidatorsArray.push(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(input.maxlength)) : null;
                input.minlength ? ValidatorsArray.push(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(input.minlength)) : null;
                input.required ? ValidatorsArray.push(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required) : null;
                input.duplicateUrl ? AsyncValidatorsArray.push(new _validator_duplicate_validator__WEBPACK_IMPORTED_MODULE_1__["duplicate"]().duplicateAsyncValidator(SharedService, input.duplicateUrl, input.value ? input.value : '')) : null;
                return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](input.value ? input.value : '', ValidatorsArray, AsyncValidatorsArray);
            }
            case "date": {
                input.required ? ValidatorsArray.push(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required) : null;
                input.duplicateUrl ? AsyncValidatorsArray.push(new _validator_duplicate_validator__WEBPACK_IMPORTED_MODULE_1__["duplicate"]().duplicateAsyncValidator(SharedService, input.duplicateUrl, input.value ? input.value : '')) : null;
                return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](input.value ? input.value : '', ValidatorsArray, AsyncValidatorsArray);
            }
            case "multiple-checkbox": {
                input.maxlength ? ValidatorsArray.push(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(input.maxlength)) : null;
                input.minlength ? ValidatorsArray.push(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(input.minlength)) : null;
                input.required ? ValidatorsArray.push(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required) : null;
                input.duplicateUrl ? AsyncValidatorsArray.push(new _validator_duplicate_validator__WEBPACK_IMPORTED_MODULE_1__["duplicate"]().duplicateAsyncValidator(SharedService, input.duplicateUrl, input.value ? input.value : '')) : null;
                return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](input.value ? input.value : '', ValidatorsArray, AsyncValidatorsArray);
            }
            case "text-area": {
                input.maxlength ? ValidatorsArray.push(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(input.maxlength)) : null;
                input.minlength ? ValidatorsArray.push(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(input.minlength)) : null;
                input.required ? ValidatorsArray.push(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required) : null;
                return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](input.value ? input.value : '', ValidatorsArray);
            }
            case "modal": {
                input.required ? ValidatorsArray.push(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required) : null;
                return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](input.value ? input.value[jsonName] ? input.value[jsonName] : '' : '', ValidatorsArray);
            }
            case "address": {
                input.required ? ValidatorsArray.push(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required) : null;
                return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](input.value ? input.value[jsonName] ? input.value[jsonName] : '' : '', ValidatorsArray);
            }
            case "non-input":
                {
                    return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](input.value ? input.value : '');
                }
            case "hidden":
                {
                    input.required ? ValidatorsArray.push(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required) : null;
                    return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](input.value ? input.value : '', ValidatorsArray);
                }
        }
    }
}


/***/ }),

/***/ "./src/app/shared/modal/modal-alert.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/modal/modal-alert.component.ts ***!
  \*******************************************************/
/*! exports provided: ModalAlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalAlertComponent", function() { return ModalAlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");



class ModalAlertComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
    }
}
ModalAlertComponent.ɵfac = function ModalAlertComponent_Factory(t) { return new (t || ModalAlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"])); };
ModalAlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalAlertComponent, selectors: [["ngbd-modal-content"]], inputs: { content: "content" }, decls: 11, vars: 1, consts: [[1, "modal-header", "text-center"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", "btn", "btn-danger", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function ModalAlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalAlertComponent_Template_button_click_3_listener() { return ctx.activeModal.dismiss("Cross click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalAlertComponent_Template_button_click_9_listener() { return ctx.activeModal.close("Close click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.content, " ");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalAlertComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngbd-modal-content',
                template: `


    <div class="modal-header text-center">
    <h5 class="modal-title " id="modal-basic-title">Alert</h5>
        <button type="button" class="close btn btn-danger" aria-label="Close"  (click)="activeModal.dismiss('Cross click')">
    <span aria-hidden="true">&times;</span>
    </button>
    </div>
    <div class="modal-body">
        {{content}}
    </div>
    <div class="modal-footer">
    <button type="button" class="btn btn-primary" (click)="activeModal.close('Close click')">Ok</button>
    </div>
  `
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }]; }, { content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/modal/modal-confirmation.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/modal/modal-confirmation.component.ts ***!
  \**************************************************************/
/*! exports provided: ModalConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalConfirmationComponent", function() { return ModalConfirmationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");



class ModalConfirmationComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
    }
}
ModalConfirmationComponent.ɵfac = function ModalConfirmationComponent_Factory(t) { return new (t || ModalConfirmationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"])); };
ModalConfirmationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalConfirmationComponent, selectors: [["ngbd-modal-content"]], inputs: { content: "content" }, decls: 13, vars: 1, consts: [[1, "modal-header", "text-center"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", "btn", "btn-danger", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function ModalConfirmationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalConfirmationComponent_Template_button_click_3_listener() { return ctx.activeModal.dismiss("Cross click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalConfirmationComponent_Template_button_click_9_listener() { return ctx.activeModal.close("Ok"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalConfirmationComponent_Template_button_click_11_listener() { return ctx.activeModal.close("Close click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.content, " ");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalConfirmationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngbd-modal-content',
                template: `


    <div class="modal-header text-center">
    <h5 class="modal-title " id="modal-basic-title">Alert</h5>
        <button type="button" class="close btn btn-danger" aria-label="Close"  (click)="activeModal.dismiss('Cross click')">
    <span aria-hidden="true">&times;</span>
    </button>
    </div>
    <div class="modal-body">
        {{content}}
    </div>
    <div class="modal-footer">
    <button type="button" class="btn btn-primary" (click)="activeModal.close('Ok')">Ok</button>
    <button type="button" class="btn btn-danger" (click)="activeModal.close('Close click')">Cancel</button>
    </div>
  `
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }]; }, { content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/modal/modal-controller.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/modal/modal-controller.service.ts ***!
  \**********************************************************/
/*! exports provided: ModalControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalControllerService", function() { return ModalControllerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _modal_loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-loading.component */ "./src/app/shared/modal/modal-loading.component.ts");
/* harmony import */ var _modal_alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-alert.component */ "./src/app/shared/modal/modal-alert.component.ts");
/* harmony import */ var _modal_confirmation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-confirmation.component */ "./src/app/shared/modal/modal-confirmation.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







class ModalControllerService {
    constructor(modalService, Router) {
        this.modalService = modalService;
        this.Router = Router;
    }
    openLoading(content) {
        this.loading = this.modalService.open(_modal_loading_component__WEBPACK_IMPORTED_MODULE_1__["ModalLoadingComponent"], { size: 'sm', centered: true, backdrop: 'static', keyboard: false, windowClass: 'transparant' });
        this.loading.componentInstance.content = content;
    }
    closeLoading() {
        this.loading.close();
    }
    openAlert(content, backUrl) {
        this.alert = this.modalService.open(_modal_alert_component__WEBPACK_IMPORTED_MODULE_2__["ModalAlertComponent"]);
        this.alert.componentInstance.content = content;
        if (backUrl != null) {
            this.alert.result.then(() => { this.Router.navigate([backUrl]); }, () => { this.Router.navigate([backUrl]); });
        }
        return 1;
    }
    closeAlert() {
        this.alert.close();
    }
    openConfirmation(content, backUrl) {
        this.confirm = this.modalService.open(_modal_confirmation_component__WEBPACK_IMPORTED_MODULE_3__["ModalConfirmationComponent"]);
        this.confirm.componentInstance.content = content;
        if (backUrl != null) {
            this.confirm.result.then((result) => { result == "Ok" ? this.Router.navigate([backUrl]) : null; }, () => { });
        }
    }
    closeConfirmation() {
        this.confirm.close();
    }
}
ModalControllerService.ɵfac = function ModalControllerService_Factory(t) { return new (t || ModalControllerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
ModalControllerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ModalControllerService, factory: ModalControllerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalControllerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/modal/modal-loading.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/modal/modal-loading.component.ts ***!
  \*********************************************************/
/*! exports provided: ModalLoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalLoadingComponent", function() { return ModalLoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");



class ModalLoadingComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
    }
}
ModalLoadingComponent.ɵfac = function ModalLoadingComponent_Factory(t) { return new (t || ModalLoadingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"])); };
ModalLoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalLoadingComponent, selectors: [["ngbd-modal-content"]], inputs: { content: "content" }, decls: 9, vars: 1, consts: [[1, "modal-body", "text-primary"], [1, "d-flex", "justify-content-center"], ["role", "status", 1, "spinner-border", 2, "width", "50px", "height", "50px"], [1, "sr-only"], [1, "modal-body", "text-secondary"]], template: function ModalLoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.content);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalLoadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngbd-modal-content',
                template: `
    <div class="modal-body text-primary" >
        <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status" style="width:50px; height:50px;">
            <span class="sr-only">Loading...</span>
            </div>
        </div>
    </div>
    <div class="modal-body text-secondary">
        <div class="d-flex justify-content-center">
            <strong>{{content}}</strong>
        </div>
    </div>

  `
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }]; }, { content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");



class NavbarComponent {
    constructor() {
        this.openSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    clickSidebarButton() {
        this.openSidebar.emit(!this.sidebarState);
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], inputs: { sidebarState: "sidebarState" }, outputs: { openSidebar: "openSidebar" }, decls: 17, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", "border-bottom", "sticky-top"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "fas", "fa-bars", 2, "color", "white"], [1, "navbar-toggler", "navbar-text", "li-text"], ["href", "#", 2, "text-decoration", "none", "color", "#777777"], ["id", "navbarText", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "navbar-nav"], [1, "nav-item", "navbar-text", "li-text"], [1, "text-primary"], [1, "navbar-text", "li-text"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_1_listener() { return ctx.clickSidebarButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Anda berada di ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " MAGENTA - Registration ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"]], styles: [".li-text[_ngcontent-%COMP%]\r\n{\r\n    padding-left: 0.5em; \r\n    padding-right: 0.5em;\r\n    font-size: 14px;\r\n}\r\n\r\n.navbar-toggler[_ngcontent-%COMP%]  {\r\n    border: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBOzs7Ozs7R0FNRyIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGktdGV4dFxyXG57XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNWVtOyBcclxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNWVtO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4ubmF2YmFyLXRvZ2dsZXIgIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLyogLmFuaW1hdGlvblxyXG57XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG1hcmdpbiAuMjVzIGVhc2Utb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBtYXJnaW4gLjI1cyBlYXNlLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IG1hcmdpbiAuMjVzIGVhc2Utb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogbWFyZ2luIC4yNXMgZWFzZS1vdXQ7XHJcbn0gKi8iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return []; }, { sidebarState: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], openSidebar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/pipe/change-value/change-value.pipe.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/pipe/change-value/change-value.pipe.ts ***!
  \***************************************************************/
/*! exports provided: ChangeValuePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeValuePipe", function() { return ChangeValuePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



class ChangeValuePipe {
    constructor(datePipe, decimalPipe) {
        this.datePipe = datePipe;
        this.decimalPipe = decimalPipe;
    }
    ;
    transform(data, detail, jsonName) {
        var jsonNameTemp = jsonName ? jsonName : detail.jsonName;
        var value = '';
        if (this.checkTypeJsonNameDetail(jsonNameTemp)) {
            if (detail.hidden && this.checkValue(data, detail, jsonNameTemp) == '-') {
                value = '-';
            }
            else {
                value = this.checkPrepend(detail, jsonNameTemp) + this.checkValue(data, detail, jsonNameTemp) + this.checkAppend(detail, jsonNameTemp);
            }
        }
        else {
            var index = 1;
            jsonNameTemp.forEach((jsonName) => {
                if (detail.hidden && this.checkValue(data, detail, jsonName) == '-') {
                    value = value;
                }
                else {
                    value = value + this.checkSeperator(detail, index) + this.checkPrepend(detail, jsonName) + this.checkValue(data, detail, jsonName) + this.checkAppend(detail, jsonName);
                    index++;
                }
            });
        }
        return value;
    }
    checkValue(data, detail, jsonName) {
        if (detail.booleanValue && detail.booleanValue[jsonName]) {
            return data[jsonName] ? detail.booleanValue[jsonName].trueValue : detail.booleanValue[jsonName].falseValue;
        }
        else if (detail.altValue && detail.altValue[jsonName] && detail.altValue[jsonName][data[jsonName]]) {
            return data[jsonName] ? detail.altValue[jsonName][data[jsonName]] : '-';
        }
        else if (detail.isDate && detail.isDate[jsonName]) {
            if (jsonName == "createdDate" || jsonName == "modifiedDate") {
                return data[jsonName] ? this.datePipe.transform(data[jsonName], 'dd-MM-yyyy HH:mm:ss') : '-';
            }
            else {
                return data[jsonName] ? this.datePipe.transform(data[jsonName], 'dd-MMM-yyyy') : '-';
            }
        }
        else if (detail.isNumber && detail.isNumber[jsonName]) {
            return data[jsonName] != null ? this.decimalPipe.transform(data[jsonName]) : '-';
        }
        else {
            return data[jsonName] != null ? data[jsonName] : '-';
        }
    }
    checkPrepend(detail, jsonName) {
        if (detail.prepend && detail.prepend[jsonName]) {
            return detail.prepend[jsonName];
        }
        else {
            return '';
        }
    }
    checkAppend(detail, jsonName) {
        if (detail.append && detail.append[jsonName]) {
            return detail.append[jsonName];
        }
        else {
            return '';
        }
    }
    checkSeperator(detail, index) {
        if (detail.seperator && index > 1) {
            return detail.seperator;
        }
        else if (!detail.seperator && index > 1) {
            return ', ';
        }
        else {
            return '';
        }
    }
    checkTypeJsonNameDetail(jsonName) {
        return typeof jsonName === 'string';
    }
}
ChangeValuePipe.ɵfac = function ChangeValuePipe_Factory(t) { return new (t || ChangeValuePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"])); };
ChangeValuePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "changeValue", type: ChangeValuePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangeValuePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'changeValue'
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/pipe/custom-table/custom-table.pipe.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/pipe/custom-table/custom-table.pipe.ts ***!
  \***************************************************************/
/*! exports provided: CustomTablePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomTablePipe", function() { return CustomTablePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _change_value_change_value_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../change-value/change-value.pipe */ "./src/app/shared/pipe/change-value/change-value.pipe.ts");




class CustomTablePipe {
    constructor(datePipe, decimalPipe, changeValue) {
        this.datePipe = datePipe;
        this.decimalPipe = decimalPipe;
        this.changeValue = changeValue;
    }
    ;
    transform(data, tableData) {
        var value;
        if (tableData.customPipe) {
            switch (tableData.customPipe) {
                case 'reverse':
                    value = data[tableData.jsonName].split(tableData.splitBy)[1] + tableData.splitBy + data[tableData.jsonName].split(tableData.splitBy)[0];
                    break;
                case 'list':
                    if (data[tableData.jsonName] && data[tableData.jsonName] != " ") {
                        var array = data[tableData.jsonName].split(tableData.splitBy);
                        value = '<ul class="mb-0 mt-0 pl-3 w-100">';
                        array.forEach(dt => {
                            value = value + '<li>' + dt + '</li>';
                        });
                        value = value + '</ul>';
                    }
                    else {
                        value = "";
                    }
                    break;
            }
        }
        else {
            value = this.changeValue.transform(data, tableData);
        }
        return value;
    }
}
CustomTablePipe.ɵfac = function CustomTablePipe_Factory(t) { return new (t || CustomTablePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_change_value_change_value_pipe__WEBPACK_IMPORTED_MODULE_2__["ChangeValuePipe"])); };
CustomTablePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "customTable", type: CustomTablePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomTablePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'customTable'
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"] }, { type: _change_value_change_value_pipe__WEBPACK_IMPORTED_MODULE_2__["ChangeValuePipe"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/pipe/data-terminal-custom/data-terminal-custom.pipe.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/pipe/data-terminal-custom/data-terminal-custom.pipe.ts ***!
  \*******************************************************************************/
/*! exports provided: DataTerminalCustomPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTerminalCustomPipe", function() { return DataTerminalCustomPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DataTerminalCustomPipe {
    transform(data) {
        var fac = data.odFacilities.find(facility => facility.name == 'QRIS');
        return fac != null && fac.isActive;
    }
}
DataTerminalCustomPipe.ɵfac = function DataTerminalCustomPipe_Factory(t) { return new (t || DataTerminalCustomPipe)(); };
DataTerminalCustomPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "dataTerminalCustom", type: DataTerminalCustomPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTerminalCustomPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'dataTerminalCustom'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/service/access-token/access-token.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/service/access-token/access-token.service.ts ***!
  \*********************************************************************/
/*! exports provided: AccessTokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessTokenService", function() { return AccessTokenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_data_api_host_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/data-api/host.api */ "./src/app/data-api/host.api.ts");




class AccessTokenService {
    constructor() {
        this.accessToken$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.parentUrl = src_app_data_api_host_api__WEBPACK_IMPORTED_MODULE_2__["SHELLAPP_HOST"];
        this.tokenNotFound = {
            messageType: "tokenNotFound"
        };
    }
    getAccessToken() {
        // var token = localStorage.getItem("accessToken");
        // if(token) 
        // {
        //   console.log('punya token') 
        //   return of(token);
        // } 
        // else 
        // {
        console.log('gk punya token');
        window.parent.postMessage(JSON.stringify(this.tokenNotFound), this.parentUrl);
        console.log('message tokenNotFound sudah terkirim');
        return this.accessToken$.pipe();
        // }
    }
}
AccessTokenService.ɵfac = function AccessTokenService_Factory(t) { return new (t || AccessTokenService)(); };
AccessTokenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AccessTokenService, factory: AccessTokenService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccessTokenService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/service/api-shared/shared.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/service/api-shared/shared.service.ts ***!
  \*************************************************************/
/*! exports provided: SharedService, HttpResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResult", function() { return HttpResult; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _modal_modal_alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modal/modal-alert.component */ "./src/app/shared/modal/modal-alert.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");







class SharedService {
    constructor(http, modalService) {
        this.http = http;
        this.modalService = modalService;
    }
    getData(url, queryparam) {
        // var accessTokenBef = localStorage.getItem('accessToken');
        if (queryparam != null && queryparam != "") {
            url = url + queryparam;
        }
        console.log('lewat sini gk??', url);
        return this.http.get(url, { observe: "response" })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => { return new HttpResult(response.status, response.body); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retryWhen"])(errors => errors.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])((error, count) => {
            console.error('errorrrr in intercept', error);
            // if (error.status == 401 && !accessTokenBef) {
            //     accessTokenBef = localStorage.getItem('accessToken');
            //     return of(error.status);
            // }
            // else if(error.status == 401 && accessTokenBef)
            // {
            //   console.log('Send Invalid Token')
            // }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
            ;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getData')));
    }
    getDataImage(url, queryparam) {
        var accessTokenBef = localStorage.getItem('accessToken');
        if (queryparam != null && queryparam != "") {
            url = url + queryparam;
        }
        return this.http.get(url, { responseType: 'blob' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retryWhen"])(errors => errors.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])((error, count) => {
            if (error.status == 401 && !accessTokenBef) {
                accessTokenBef = localStorage.getItem('accessToken');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(error.status);
            }
            else if (error.status == 401 && accessTokenBef) {
                console.log('Send Invalid Token');
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
            ;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => {
            console.log('Caught in CatchError. Returning 0');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(0);
        }));
    }
    postData(url, data) {
        return this.http.post(url, data, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => { return new HttpResult(response.status, response.body); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError("postData")));
    }
    putData(url, data) {
        return this.http.put(url, data, { observe: "response" })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => { return new HttpResult(response.status, response.body); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError("putData")));
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            if (operation == 'getData') {
                const alert = this.modalService.open(_modal_modal_alert_component__WEBPACK_IMPORTED_MODULE_3__["ModalAlertComponent"]);
                alert.componentInstance.content = "Error Code " + error.status + " : " + error.statusText;
                alert.result.then((result) => { result == "Ok" ? '' : null; }, () => { });
            }
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    }
}
SharedService.ɵfac = function SharedService_Factory(t) { return new (t || SharedService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"])); };
SharedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SharedService, factory: SharedService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] }]; }, null); })();
class HttpResult {
    constructor(status, body) {
        this.status = status;
        this.body = body;
    }
}


/***/ }),

/***/ "./src/app/shared/service/auth-guard/auth-guard.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/service/auth-guard/auth-guard.service.ts ***!
  \*****************************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_data_api_host_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/data-api/host.api */ "./src/app/data-api/host.api.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AuthGuardService {
    constructor(router) {
        this.router = router;
        this.parentUrl = src_app_data_api_host_api__WEBPACK_IMPORTED_MODULE_1__["SHELLAPP_HOST"];
    }
    canActivate(route, state) {
        // var userInfo = JSON.parse(localStorage.getItem('userInfo'));
        // console.log('AuthGuardService', route, this.router, state);
        // // // Check to see if a user has a valid token
        // if (userInfo && userInfo.userFeatures.some(fitur => fitur.accessLink == route.routeConfig.path) &&
        //      window.location != window.parent.location && window.location.ancestorOrigins[0] == this.parentUrl
        //    ) 
        // {
        //    return true;
        // }
        // this.router.navigate(['/forbidden']);
        return true;
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/service/http-interceptor/http-interceptor.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/service/http-interceptor/http-interceptor.service.ts ***!
  \*****************************************************************************/
/*! exports provided: HttpInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpInterceptorService", function() { return HttpInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _access_token_access_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../access-token/access-token.service */ "./src/app/shared/service/access-token/access-token.service.ts");




class HttpInterceptorService {
    constructor(AccessTokenService) {
        this.AccessTokenService = AccessTokenService;
    }
    intercept(req, next) {
        ;
        //   if(!localStorage.getItem('accessToken'))
        //   {
        //     this.AccessTokenService.getAccessToken();
        //   }
        //   const authReq = req.clone({
        //     headers: new HttpHeaders({
        //     'Content-Type' : 'application/json',
        //     // 'Authorization' : `Bearer ${localStorage.getItem('accessToken')}`,
        //     })
        //   });
        //  console.log('authReq', authReq);
        //  return next.handle(authReq);
        //
        //////////////////////////////////////////////////
        // Mr. Anton's Code:
        //////////////////////////////////////////////////
        // return this.AccessTokenService.getAccessToken().pipe(take(1), mergeMap(accessToken => {
        // console.log('accessToken in intercept', accessToken)
        const authReq = req.clone({
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        });
        console.log(authReq);
        return next.handle(authReq);
    }
}
HttpInterceptorService.ɵfac = function HttpInterceptorService_Factory(t) { return new (t || HttpInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_access_token_access_token_service__WEBPACK_IMPORTED_MODULE_2__["AccessTokenService"])); };
HttpInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpInterceptorService, factory: HttpInterceptorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _access_token_access_token_service__WEBPACK_IMPORTED_MODULE_2__["AccessTokenService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const _c0 = function () { return ["active"]; };
const _c1 = function () { return { exact: true }; };
function SidebarComponent_a_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebar_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1))("routerLink", sidebar_r1.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", sidebar_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sidebar_r1.label);
} }
class SidebarComponent {
    constructor() {
        this.sidebarList = [{
                label: "Data Master",
                icon: "fas fa-book tabs",
                url: "/data-master"
            },
            {
                label: "Inquiry Data Merchant",
                icon: "fas fa-book tabs",
                url: "/inquiry-data-merchant"
            },
            {
                label: "Parameter Scoring",
                icon: "fas fa-book tabs",
                url: "/parameter-scoring"
            },
            {
                label: "Tabel Hasil Scoring",
                icon: "fas fa-book tabs",
                url: "/maintenance-scoring"
            },
            {
                label: "Tracking Pengajuan",
                icon: "fas fa-map-marker-alt tabs",
                url: "/tracking-pengajuan"
            },
        ];
    }
    ngOnInit() {
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 12, vars: 1, consts: [["id", "sidebar-wrapper"], [1, "sidebar-heading"], [1, "img"], ["src", "assets\\image\\logo-magenta-6070fa8209d1a5d539905dd6aff41636.png", 1, "img-header-sidebar"], ["href", "/", 2, "text-decoration", "none"], [1, "name"], [1, "title"], [1, "caret"], [1, "list-group", "list-group-flush"], ["class", "list-group-item list-group-item-action", "draggable", "false", 3, "routerLinkActive", "routerLinkActiveOptions", "routerLink", 4, "ngFor", "ngForOf"], ["draggable", "false", 1, "list-group-item", "list-group-item-action", 3, "routerLinkActive", "routerLinkActiveOptions", "routerLink"], [3, "ngClass"], [1, "nav-label"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Magen_opr3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Kantor Pusat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SidebarComponent_a_11_Template, 4, 7, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sidebarList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["#sidebar-wrapper[_ngcontent-%COMP%] {\r\n    min-height: 100vh;\r\n    max-width: 220px;\r\n    margin-left: -15rem;\r\n    transition: margin .25s ease-out;\r\n    background-color: rgb(47,64,80);\r\n  }\r\n  \r\n  #sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-heading[_ngcontent-%COMP%] {\r\n    background-color:#263340 ; \r\n    margin-bottom: 3px;\r\n    padding: 1.875rem 1.5625rem;\r\n    font-size: 1.2rem;\r\n  }\r\n  \r\n  #sidebar-wrapper[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%] {\r\n    width: 220px;\r\n    background-color: rgb(47,64,80);\r\n  }\r\n  \r\n  #page-content-wrapper[_ngcontent-%COMP%] {\r\n    min-width: 100vw;\r\n  }\r\n  \r\n  #wrapper.toggled[_ngcontent-%COMP%]   #sidebar-wrapper[_ngcontent-%COMP%] {\r\n    margin-left: 0;\r\n  }\r\n  \r\n  @media (min-width: 550px) {\r\n    #sidebar-wrapper[_ngcontent-%COMP%] {\r\n      margin-left: 0;\r\n    }\r\n  \r\n    #page-content-wrapper[_ngcontent-%COMP%] {\r\n      min-width: 0;\r\n      width: 100%;\r\n    }\r\n  \r\n    #wrapper.toggled[_ngcontent-%COMP%]   #sidebar-wrapper[_ngcontent-%COMP%] {\r\n      margin-left: -15rem;\r\n    }\r\n  }\r\n  \r\n  @media (max-width: 550px) {\r\n    #sidebar-wrapper[_ngcontent-%COMP%] {\r\n      margin-left: 0;\r\n    }\r\n  \r\n    #page-content-wrapper[_ngcontent-%COMP%] {\r\n      min-width: 0;\r\n      width: 100%;\r\n    }\r\n  \r\n    #wrapper.toggled[_ngcontent-%COMP%]   #sidebar-wrapper[_ngcontent-%COMP%] {\r\n      margin-left: -15rem;\r\n    }\r\n  }\r\n  \r\n  .img-header-sidebar[_ngcontent-%COMP%]\r\n  {\r\n     margin-top: -10px;   \r\n    width: 165px; \r\n    height: auto;\r\n  }\r\n  \r\n  .img[_ngcontent-%COMP%] {\r\n    display: block;\r\n    overflow: hidden;\r\n    height: 48px;\r\n    margin-bottom: 3px;\r\n    line-height: 48px;\r\n    color: #eff2f5;\r\n}\r\n  \r\n  .caret[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    width: 0;\r\n    height: 0;\r\n    margin-left: 2px;\r\n    vertical-align: middle;\r\n    border-top: 4px dashed;\r\n    border-top: 4px solid\\9;\r\n    border-right: 4px solid transparent;\r\n    border-left: 4px solid transparent;\r\n}\r\n  \r\n  .list-group-item[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: block;\r\n    padding: .75rem 1.25rem;\r\n    cursor: pointer;\r\n    background-color: rgb(47,64,80);\r\n    border: 1px solid rgb(47,64,80);\r\n}\r\n  \r\n  .list-group-item[_ngcontent-%COMP%]:active {\r\n  color: #eff2f5;\r\n  background-color: rgb(38,51,64);\r\n  border: 1px solid rgb(38,51,64);\r\n}\r\n  \r\n  .list-group-item[_ngcontent-%COMP%]:hover {\r\n  color: #eff2f5;\r\n  background-color: rgb(38,51,64);\r\n  border: 1px solid rgb(38,51,64);\r\n}\r\n  \r\n  .list-group-item-action[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  color: #8ea6bd;\r\n  text-align: inherit;\r\n}\r\n  \r\n  .active[_ngcontent-%COMP%] \r\n{\r\n  border-left: 4px solid #00b7f1;\r\n  color: #eff2f5;\r\n  background-color: rgb(38,51,64);\r\n  border-top: 1px solid rgb(38,51,64);\r\n  border-bottom: 1px solid rgb(38,51,64);\r\n}\r\n  \r\n  .active[_ngcontent-%COMP%]:hover \r\n{\r\n  border-left: 4px solid #00b7f1;\r\n  color: #eff2f5;\r\n  background-color: rgb(38,51,64);\r\n}\r\n  \r\n  .active[_ngcontent-%COMP%]:active\r\n{\r\n  border-left: 4px solid #00b7f1;\r\n  color: #eff2f5;\r\n  background-color: rgb(38,51,64);\r\n}\r\n  \r\n  .name[_ngcontent-%COMP%]\r\n{\r\n  font-size: 0.678em; \r\n  color: #dfe5ec; \r\n  display: block; \r\n  margin-bottom: -0.5em;\r\n}\r\n  \r\n  .title[_ngcontent-%COMP%]\r\n{\r\n  font-weight: 400; \r\n  font-size: .61em; \r\n  color: #6e8daa;\r\n}\r\n  \r\n  .tabs[_ngcontent-%COMP%]\r\n{\r\n  width: 1em;\r\n  margin-right: 6px;\r\n}\r\n  \r\n  .nav-label[_ngcontent-%COMP%]\r\n{\r\n  font-size: 13px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUluQixnQ0FBZ0M7SUFDaEMsK0JBQStCO0VBQ2pDOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsWUFBWTtJQUNaLCtCQUErQjtFQUNqQzs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRTtNQUNFLGNBQWM7SUFDaEI7O0lBRUE7TUFDRSxZQUFZO01BQ1osV0FBVztJQUNiOztJQUVBO01BQ0UsbUJBQW1CO0lBQ3JCO0VBQ0Y7O0VBRUE7SUFDRTtNQUNFLGNBQWM7SUFDaEI7O0lBRUE7TUFDRSxZQUFZO01BQ1osV0FBVztJQUNiOztJQUVBO01BQ0UsbUJBQW1CO0lBQ3JCO0VBQ0Y7O0VBRUE7O0tBRUcsaUJBQWlCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0VBQ2Q7O0VBRUQ7SUFDRyxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0VBRUE7SUFDSSxxQkFBcUI7SUFDckIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUNBQW1DO0lBQ25DLGtDQUFrQztBQUN0Qzs7RUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZiwrQkFBK0I7SUFDL0IsK0JBQStCO0FBQ25DOztFQUVBO0VBQ0UsY0FBYztFQUNkLCtCQUErQjtFQUMvQiwrQkFBK0I7QUFDakM7O0VBR0E7RUFDRSxjQUFjO0VBQ2QsK0JBQStCO0VBQy9CLCtCQUErQjtBQUNqQzs7RUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztFQUVBOztFQUVFLDhCQUE4QjtFQUM5QixjQUFjO0VBQ2QsK0JBQStCO0VBQy9CLG1DQUFtQztFQUNuQyxzQ0FBc0M7QUFDeEM7O0VBQ0E7O0VBRUUsOEJBQThCO0VBQzlCLGNBQWM7RUFDZCwrQkFBK0I7QUFDakM7O0VBRUE7O0VBRUUsOEJBQThCO0VBQzlCLGNBQWM7RUFDZCwrQkFBK0I7QUFDakM7O0VBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztFQUVBOztFQUVFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7RUFFQTs7RUFFRSxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztFQUVBOztFQUVFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbiNzaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBtYXgtd2lkdGg6IDIyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xNXJlbTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbWFyZ2luIC4yNXMgZWFzZS1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IG1hcmdpbiAuMjVzIGVhc2Utb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogbWFyZ2luIC4yNXMgZWFzZS1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBtYXJnaW4gLjI1cyBlYXNlLW91dDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0Nyw2NCw4MCk7XHJcbiAgfVxyXG4gIFxyXG4gICNzaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItaGVhZGluZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMyNjMzNDAgOyBcclxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgIHBhZGRpbmc6IDEuODc1cmVtIDEuNTYyNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIH1cclxuICBcclxuICAjc2lkZWJhci13cmFwcGVyIC5saXN0LWdyb3VwIHtcclxuICAgIHdpZHRoOiAyMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0Nyw2NCw4MCk7XHJcbiAgfVxyXG4gIFxyXG4gICNwYWdlLWNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xyXG4gIH1cclxuICBcclxuICAjd3JhcHBlci50b2dnbGVkICNzaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA1NTBweCkge1xyXG4gICAgI3NpZGViYXItd3JhcHBlciB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgI3BhZ2UtY29udGVudC13cmFwcGVyIHtcclxuICAgICAgbWluLXdpZHRoOiAwO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICBcclxuICAgICN3cmFwcGVyLnRvZ2dsZWQgI3NpZGViYXItd3JhcHBlciB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMTVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcclxuICAgICNzaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIH1cclxuICBcclxuICAgICNwYWdlLWNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICAgIG1pbi13aWR0aDogMDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAjd3JhcHBlci50b2dnbGVkICNzaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTE1cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuaW1nLWhlYWRlci1zaWRlYmFyXHJcbiAge1xyXG4gICAgIG1hcmdpbi10b3A6IC0xMHB4OyAgIFxyXG4gICAgd2lkdGg6IDE2NXB4OyBcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcblxyXG4gLmltZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDhweDtcclxuICAgIGNvbG9yOiAjZWZmMmY1O1xyXG59XHJcblxyXG4uY2FyZXQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGJvcmRlci10b3A6IDRweCBkYXNoZWQ7XHJcbiAgICBib3JkZXItdG9wOiA0cHggc29saWRcXDk7XHJcbiAgICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAuNzVyZW0gMS4yNXJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0Nyw2NCw4MCk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNDcsNjQsODApO1xyXG59XHJcblxyXG4ubGlzdC1ncm91cC1pdGVtOmFjdGl2ZSB7XHJcbiAgY29sb3I6ICNlZmYyZjU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM4LDUxLDY0KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMzgsNTEsNjQpO1xyXG59XHJcblxyXG5cclxuLmxpc3QtZ3JvdXAtaXRlbTpob3ZlciB7XHJcbiAgY29sb3I6ICNlZmYyZjU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM4LDUxLDY0KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMzgsNTEsNjQpO1xyXG59XHJcblxyXG4ubGlzdC1ncm91cC1pdGVtLWFjdGlvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY29sb3I6ICM4ZWE2YmQ7XHJcbiAgdGV4dC1hbGlnbjogaW5oZXJpdDtcclxufVxyXG5cclxuLmFjdGl2ZSBcclxue1xyXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzAwYjdmMTtcclxuICBjb2xvcjogI2VmZjJmNTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzgsNTEsNjQpO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMzgsNTEsNjQpO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMzgsNTEsNjQpO1xyXG59XHJcbi5hY3RpdmU6aG92ZXIgXHJcbntcclxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICMwMGI3ZjE7XHJcbiAgY29sb3I6ICNlZmYyZjU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM4LDUxLDY0KTtcclxufVxyXG5cclxuLmFjdGl2ZTphY3RpdmVcclxue1xyXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzAwYjdmMTtcclxuICBjb2xvcjogI2VmZjJmNTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzgsNTEsNjQpO1xyXG59XHJcblxyXG4ubmFtZVxyXG57XHJcbiAgZm9udC1zaXplOiAwLjY3OGVtOyBcclxuICBjb2xvcjogI2RmZTVlYzsgXHJcbiAgZGlzcGxheTogYmxvY2s7IFxyXG4gIG1hcmdpbi1ib3R0b206IC0wLjVlbTtcclxufVxyXG5cclxuLnRpdGxlXHJcbntcclxuICBmb250LXdlaWdodDogNDAwOyBcclxuICBmb250LXNpemU6IC42MWVtOyBcclxuICBjb2xvcjogIzZlOGRhYTtcclxufVxyXG5cclxuLnRhYnNcclxue1xyXG4gIHdpZHRoOiAxZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbn1cclxuXHJcbi5uYXYtbGFiZWxcclxue1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/table/component/header-bar/header-bar.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shared/table/component/header-bar/header-bar.component.ts ***!
  \***************************************************************************/
/*! exports provided: HeaderBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderBarComponent", function() { return HeaderBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = ["app-header-bar", ""];
function HeaderBarComponent_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th");
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", ctx_r0.prepend);
} }
function HeaderBarComponent_th_2_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderBarComponent_th_2_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderBarComponent_th_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderBarComponent_th_2_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const i_r4 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.sortEvent.emit(i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderBarComponent_th_2_span_3_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeaderBarComponent_th_2_span_4_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const td_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", i_r4 == ctx_r1.sort.index);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", td_r3.headerName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.sort.direction == "asc" && i_r4 == ctx_r1.sort.index);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.sort.direction == "desc" && i_r4 == ctx_r1.sort.index);
} }
function HeaderBarComponent_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th");
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", ctx_r2.append);
} }
class HeaderBarComponent {
    constructor() {
        this.sortEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
}
HeaderBarComponent.ɵfac = function HeaderBarComponent_Factory(t) { return new (t || HeaderBarComponent)(); };
HeaderBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderBarComponent, selectors: [["", "app-header-bar", ""]], inputs: { tableData: "tableData", append: "append", prepend: "prepend", sort: "sort" }, outputs: { sortEvent: "sortEvent" }, attrs: _c0, decls: 4, vars: 3, consts: [[4, "ngIf"], [3, "active", 4, "ngFor", "ngForOf"], [1, "clickable", 3, "click"], [1, "fas", "fa-sort-alpha-down", "right"], [1, "fas", "fa-sort-alpha-up", "right"]], template: function HeaderBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderBarComponent_th_1_Template, 1, 1, "th", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderBarComponent_th_2_Template, 5, 5, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderBarComponent_th_3_Template, 1, 1, "th", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.prepend);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tableData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.append);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".clickable[_ngcontent-%COMP%]:hover {\r\n    color: #00b7f1;\r\n    cursor: pointer;\r\n}\r\n\r\n.clickable[_ngcontent-%COMP%]\r\n{\r\n    color: #6C676A;\r\n}\r\n\r\nth[_ngcontent-%COMP%] {\r\n    padding: 0.2rem 0.5rem  0.2rem 0.7rem;\r\n    vertical-align: middle;\r\n    border-top: 1px solid #dee2e6;\r\n    color: #6c676a;\r\n    font-size: 14.3px;\r\n}\r\n\r\n.active[_ngcontent-%COMP%]\r\n{\r\n    background-color: #f5f5f5;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3RhYmxlL2NvbXBvbmVudC9oZWFkZXItYmFyL2hlYWRlci1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBOztJQUVJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC90YWJsZS9jb21wb25lbnQvaGVhZGVyLWJhci9oZWFkZXItYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xpY2thYmxlOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMDBiN2YxO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2xpY2thYmxlXHJcbntcclxuICAgIGNvbG9yOiAjNkM2NzZBO1xyXG59XHJcblxyXG50aCB7XHJcbiAgICBwYWRkaW5nOiAwLjJyZW0gMC41cmVtICAwLjJyZW0gMC43cmVtO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgY29sb3I6ICM2YzY3NmE7XHJcbiAgICBmb250LXNpemU6IDE0LjNweDtcclxufSBcclxuXHJcbi5hY3RpdmVcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: '[app-header-bar]',
                templateUrl: './header-bar.component.html',
                styleUrls: ['./header-bar.component.css']
            }]
    }], function () { return []; }, { tableData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], append: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], prepend: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sortEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/table/component/loading-bar/loading-bar.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/table/component/loading-bar/loading-bar.component.ts ***!
  \*****************************************************************************/
/*! exports provided: LoadingBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingBarComponent", function() { return LoadingBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const _c0 = ["app-loading-bar", ""];
class LoadingBarComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoadingBarComponent.ɵfac = function LoadingBarComponent_Factory(t) { return new (t || LoadingBarComponent)(); };
LoadingBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingBarComponent, selectors: [["", "app-loading-bar", ""]], inputs: { length: "length" }, attrs: _c0, decls: 8, vars: 1, consts: [[1, "text-center"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "sr-only"], [1, "mt-2"]], template: function LoadingBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Memuat Data....");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", ctx.length);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC90YWJsZS9jb21wb25lbnQvbG9hZGluZy1iYXIvbG9hZGluZy1iYXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: '[app-loading-bar]',
                templateUrl: './loading-bar.component.html',
                styleUrls: ['./loading-bar.component.css']
            }]
    }], function () { return []; }, { length: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/table/component/notification-bar/notification-bar.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/shared/table/component/notification-bar/notification-bar.component.ts ***!
  \***************************************************************************************/
/*! exports provided: NotificationBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationBarComponent", function() { return NotificationBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = ["app-notification-bar", ""];
class NotificationBarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotificationBarComponent.ɵfac = function NotificationBarComponent_Factory(t) { return new (t || NotificationBarComponent)(); };
NotificationBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotificationBarComponent, selectors: [["", "app-notification-bar", ""]], inputs: { length: "length", class: "class", content: "content" }, attrs: _c0, decls: 4, vars: 3, consts: [[3, "ngClass"]], template: function NotificationBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", ctx.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.class);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.content);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["tr[_ngcontent-%COMP%], h5[_ngcontent-%COMP%] \r\n{\r\n    color: #6c676a;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3RhYmxlL2NvbXBvbmVudC9ub3RpZmljYXRpb24tYmFyL25vdGlmaWNhdGlvbi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3RhYmxlL2NvbXBvbmVudC9ub3RpZmljYXRpb24tYmFyL25vdGlmaWNhdGlvbi1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRyLCBoNSBcclxue1xyXG4gICAgY29sb3I6ICM2YzY3NmE7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: '[app-notification-bar]',
                templateUrl: './notification-bar.component.html',
                styleUrls: ['./notification-bar.component.css']
            }]
    }], function () { return []; }, { length: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], class: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/table/component/top-bar/top-bar.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/table/component/top-bar/top-bar.component.ts ***!
  \*********************************************************************/
/*! exports provided: TopBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopBarComponent", function() { return TopBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








const _c0 = ["app-top-bar", ""];
function TopBarComponent_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TopBarComponent_td_1_Template_input_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.checkboxChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TopBarComponent_td_2_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function TopBarComponent_td_2_div_1_ng_container_2_Template_input_keydown_enter_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const data_r6 = ctx_r14.$implicit; const i_r7 = ctx_r14.index; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.searchText(data_r6.search.value, i_r7); })("ngModelChange", function TopBarComponent_td_2_div_1_ng_container_2_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const data_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; return data_r6.search.value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopBarComponent_td_2_div_1_ng_container_2_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const data_r6 = ctx_r19.$implicit; const i_r7 = ctx_r19.index; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.searchText(data_r6.search.value, i_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", data_r6.search.value);
} }
function TopBarComponent_td_2_div_1_ng_container_3_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r22.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r22.key);
} }
function TopBarComponent_td_2_div_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TopBarComponent_td_2_div_1_ng_container_3_Template_select_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.searchSelect($event, i_r7); })("ngModelChange", function TopBarComponent_td_2_div_1_ng_container_3_Template_select_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const data_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; return data_r6.search.value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TopBarComponent_td_2_div_1_ng_container_3_option_3_Template, 2, 2, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", data_r6.search.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", data_r6.search.options);
} }
function TopBarComponent_td_2_div_1_ng_container_4_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" (+", data_r6.search.value.length - 1, " ", (data_r6.search.value == null ? null : data_r6.search.value.length) === 2 ? "other" : "others", ") ");
} }
function TopBarComponent_td_2_div_1_ng_container_4_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopBarComponent_td_2_div_1_ng_container_4_mat_option_8_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); const data_r6 = ctx_r34.$implicit; const i_r7 = ctx_r34.index; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r33.testSearch(data_r6.search.value, i_r7); return ctx_r33.updatePlaceholder(data_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r32.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r32.key);
} }
function TopBarComponent_td_2_div_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TopBarComponent_td_2_div_1_ng_container_4_Template_mat_select_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const data_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; return data_r6.search.value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select-trigger");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TopBarComponent_td_2_div_1_ng_container_4_span_5_Template, 2, 2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopBarComponent_td_2_div_1_ng_container_4_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const data_r6 = ctx_r40.$implicit; const i_r7 = ctx_r40.index; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.allSelect(data_r6, i_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TopBarComponent_td_2_div_1_ng_container_4_mat_option_8_Template, 2, 2, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", data_r6.search.value)("disableOptionCentering", "true")("placeholder", "Cari...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r12.placeholderMultipleSelect, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (data_r6.search.value == null ? null : data_r6.search.value.length) > 1 && (data_r6.search.value == null ? null : data_r6.search.value.length) != data_r6.search.options.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r6.search.value.length == data_r6.search.options.length ? "Unselect All" : "Select All");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", data_r6.search.options);
} }
const _c1 = function (a0) { return { "min-width": a0 }; };
function TopBarComponent_td_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TopBarComponent_td_2_div_1_ng_container_2_Template, 6, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TopBarComponent_td_2_div_1_ng_container_3_Template, 4, 2, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TopBarComponent_td_2_div_1_ng_container_4_Template, 9, 7, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, data_r6.width ? data_r6.width + "em" : "9em"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", data_r6.search.inputType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "multiple-selection");
} }
function TopBarComponent_td_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 6);
} if (rf & 2) {
    const data_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, data_r6.width ? data_r6.width + "em" : "9em"));
} }
function TopBarComponent_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TopBarComponent_td_2_div_1_Template, 5, 7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TopBarComponent_td_2_div_2_Template, 1, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r6.search);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !data_r6.search);
} }
function TopBarComponent_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Tambah");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TopBarComponent_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TopBarComponent {
    constructor() {
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.checkboxEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.searchArray = [];
        this.placeholderMultipleSelect = 'All';
    }
    ngOnInit() { }
    searchSelect(event, index) {
        this.testSearch(event.target.value.toString(), index);
    }
    searchText(event, index) {
        this.testSearch(event.toString().trim().toLowerCase(), index);
    }
    testSearch(value, index) {
        this.searchArray[index] = { index, value };
        this.search.emit(this.searchArray);
    }
    checkboxChange(event) {
        this.checkboxEvent.emit(event.target.checked);
    }
    searchMultipleSelection(event, index) {
        var options = this.tableData[index].search.options;
        const isAll = this.tableData[index].search.value.some((value) => value == "");
        if (isAll) {
            this.tableData[index].search.value = [];
            event.value = [];
            options.forEach(option => {
                this.tableData[index].search.value.push(option.value);
                event.value.push(option.value);
            });
        }
        this.testSearch(event.value, index);
    }
    allSelect(data, index) {
        if (data.search.value.length != data.search.options.length) {
            this.tableData[index].search.value = this.tableData[index].search.options.map(item => item.value);
            this.placeholderMultipleSelect = 'All';
        }
        else {
            this.tableData[index].search.value = [];
            this.placeholderMultipleSelect = '';
        }
        this.testSearch(this.tableData[index].search.value, index);
    }
    updatePlaceholder(data) {
        if (data.search.value.length == data.search.options.length) {
            this.placeholderMultipleSelect = 'All';
        }
        else if (data.search.value.length == 0) {
            this.placeholderMultipleSelect = '';
        }
        else {
            this.placeholderMultipleSelect = data.altValue ? data.altValue[data.search.value[0]] : data.search.value[0];
        }
    }
}
TopBarComponent.ɵfac = function TopBarComponent_Factory(t) { return new (t || TopBarComponent)(); };
TopBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopBarComponent, selectors: [["", "app-top-bar", ""]], inputs: { tableData: "tableData", addButton: "addButton", checkNewColumn: "checkNewColumn", checkbox: "checkbox" }, outputs: { search: "search", checkboxEvent: "checkboxEvent" }, attrs: _c0, decls: 5, vars: 4, consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "fixed-width-btn", 4, "ngIf"], [1, "form-check"], ["type", "checkbox", 1, "mt-2", "mx-auto", "form-check-input", 3, "change"], [3, "ngStyle", 4, "ngIf"], [3, "ngStyle"], [3, "ngSwitch"], [4, "ngSwitchCase"], [1, "input-group", "input-group-sm"], ["type", "text", "placeholder", "Cari...", 1, "form-control", 3, "ngModel", "keydown.enter", "ngModelChange"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-search", "form-control-feedback"], [1, "custom-select", 3, "ngModel", "change", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["appearance", "outline", 2, "margin-top", "-0.25em"], ["multiple", "", 3, "ngModel", "disableOptionCentering", "placeholder", "ngModelChange"], ["class", "example-additional-selection", 4, "ngIf"], [1, "custom-button", 3, "click"], [3, "value", "click", 4, "ngFor", "ngForOf"], [1, "example-additional-selection"], [3, "value", "click"], [1, "fixed-width-btn"], ["routerLink", "add", "role", "button", 1, "btn", "btn-outline-secondary", "btn-sm", "btn-block"], [1, "fas", "fa-plus"]], template: function TopBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TopBarComponent_td_1_Template, 3, 0, "td", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TopBarComponent_td_2_Template, 3, 2, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TopBarComponent_td_3_Template, 5, 0, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TopBarComponent_td_4_Template, 2, 0, "td", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkbox);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tableData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.addButton && ctx.checkNewColumn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelectTrigger"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatOption"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], styles: [".btn-white[_ngcontent-%COMP%] {\r\n    background-color: #fff;\r\n    box-shadow: none\r\n}\r\n\r\n\r\n.fixed-width-btn[_ngcontent-%COMP%]\r\n{\r\n    min-width: 8em;\r\n}\r\n\r\n\r\ninput[type=checkbox][_ngcontent-%COMP%]\r\n{\r\n  \r\n  -ms-transform: scale(1.5); \r\n  -moz-transform: scale(1.5); \r\n  -webkit-transform: scale(1.5); \r\n  -o-transform: scale(1.5); \r\n  cursor: pointer;\r\n}\r\n\r\n\r\ninput.form-control[_ngcontent-%COMP%]:focus, input[type=text][_ngcontent-%COMP%]:focus, [type=text].form-control[_ngcontent-%COMP%]:focus, button[type=button][_ngcontent-%COMP%]:focus, btn-outline-secondary[_ngcontent-%COMP%]:focus, btn[_ngcontent-%COMP%]:active, btn[_ngcontent-%COMP%]:focus, btn-outline-secondary[_ngcontent-%COMP%]:active, button[type=button][_ngcontent-%COMP%]:active, select[_ngcontent-%COMP%]:focus  {\r\n  box-shadow: none\r\n}\r\n\r\n\r\n  .mat-select-value\r\n{\r\n  color: #495057;\r\n}\r\n\r\n\r\n  .mat-form-field-wrapper\r\n{\r\n  background-color: white;\r\n  padding: 0;\r\n  border-radius: 5px\r\n}\r\n\r\n\r\n  .mat-form-field-appearance-outline .mat-form-field-infix \r\n{\r\n  padding: 0 0 0.5em 0;\r\n}\r\n\r\n\r\n  .mat-select-arrow-wrapper\r\n{\r\n  padding-top: 10px;\r\n}\r\n\r\n\r\n.custom-button[_ngcontent-%COMP%]\r\n{\r\n  width: 100%;\r\n  height: 42px;\r\n  text-align: left;\r\n  padding-left: 15px;\r\n  background-color: white;\r\n  border: none;\r\n  outline:none;\r\n\r\n}\r\n\r\n\r\n.custom-button[_ngcontent-%COMP%]:hover\r\n{\r\n  background-color: rgba(0,0,0,.04);\r\n}\r\n\r\n\r\n.custom-button[_ngcontent-%COMP%]:active\r\n{\r\n  background-color: rgba(0, 0, 0, 0.158);\r\n  color: #00b7f1;\r\n}\r\n\r\n\r\n.example-additional-selection[_ngcontent-%COMP%] {\r\n  opacity: 0.75;\r\n  font-size: 0.75em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3RhYmxlL2NvbXBvbmVudC90b3AtYmFyL3RvcC1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QjtBQUNKOzs7QUFHQTs7SUFFSSxjQUFjO0FBQ2xCOzs7QUFHQTs7RUFFRSw0QkFBNEI7RUFDNUIseUJBQXlCLEVBQUUsT0FBTztFQUNsQywwQkFBMEIsRUFBRSxPQUFPO0VBQ25DLDZCQUE2QixFQUFFLHNCQUFzQjtFQUNyRCx3QkFBd0IsRUFBRSxVQUFVO0VBQ3BDLGVBQWU7QUFDakI7OztBQUVBOzs7Ozs7Ozs7RUFTRTtBQUNGOzs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCOzs7QUFHQTs7RUFFRSx1QkFBdUI7RUFDdkIsVUFBVTtFQUNWO0FBQ0Y7OztBQUVBOztFQUVFLG9CQUFvQjtBQUN0Qjs7O0FBRUE7O0VBRUUsaUJBQWlCO0FBQ25COzs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixZQUFZOztBQUVkOzs7QUFFQTs7RUFFRSxpQ0FBaUM7QUFDbkM7OztBQUVBOztFQUVFLHNDQUFzQztFQUN0QyxjQUFjO0FBQ2hCOzs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvdGFibGUvY29tcG9uZW50L3RvcC1iYXIvdG9wLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi13aGl0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZVxyXG59XHJcblxyXG5cclxuLmZpeGVkLXdpZHRoLWJ0blxyXG57XHJcbiAgICBtaW4td2lkdGg6IDhlbTtcclxufVxyXG5cclxuXHJcbmlucHV0W3R5cGU9Y2hlY2tib3hdXHJcbntcclxuICAvKiBEb3VibGUtc2l6ZWQgQ2hlY2tib3hlcyAqL1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuNSk7IC8qIElFICovXHJcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuNSk7IC8qIEZGICovXHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuNSk7IC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXHJcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjUpOyAvKiBPcGVyYSAqL1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaW5wdXQuZm9ybS1jb250cm9sOmZvY3VzLCBcclxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cywgXHJcblt0eXBlPXRleHRdLmZvcm0tY29udHJvbDpmb2N1cyxcclxuYnV0dG9uW3R5cGU9YnV0dG9uXTpmb2N1cyxcclxuYnRuLW91dGxpbmUtc2Vjb25kYXJ5OmZvY3VzLFxyXG5idG46YWN0aXZlLCBidG46Zm9jdXMsXHJcbmJ0bi1vdXRsaW5lLXNlY29uZGFyeTphY3RpdmUsXHJcbmJ1dHRvblt0eXBlPWJ1dHRvbl06YWN0aXZlLFxyXG5zZWxlY3Q6Zm9jdXMgIHtcclxuICBib3gtc2hhZG93OiBub25lXHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXNlbGVjdC12YWx1ZVxyXG57XHJcbiAgY29sb3I6ICM0OTUwNTc7XHJcbn1cclxuXHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1pbmZpeCBcclxue1xyXG4gIHBhZGRpbmc6IDAgMCAwLjVlbSAwO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1zZWxlY3QtYXJyb3ctd3JhcHBlclxyXG57XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5jdXN0b20tYnV0dG9uXHJcbntcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQycHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6bm9uZTtcclxuXHJcbn1cclxuXHJcbi5jdXN0b20tYnV0dG9uOmhvdmVyXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC4wNCk7XHJcbn1cclxuXHJcbi5jdXN0b20tYnV0dG9uOmFjdGl2ZVxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE1OCk7XHJcbiAgY29sb3I6ICMwMGI3ZjE7XHJcbn1cclxuXHJcbi5leGFtcGxlLWFkZGl0aW9uYWwtc2VsZWN0aW9uIHtcclxuICBvcGFjaXR5OiAwLjc1O1xyXG4gIGZvbnQtc2l6ZTogMC43NWVtO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: '[app-top-bar]',
                templateUrl: './top-bar.component.html',
                styleUrls: ['./top-bar.component.css']
            }]
    }], function () { return []; }, { tableData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], addButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], checkNewColumn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], checkbox: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], search: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], checkboxEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/table/template/table-api/table-api.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/table/template/table-api/table-api.component.ts ***!
  \************************************************************************/
/*! exports provided: TableApiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableApiComponent", function() { return TableApiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _service_api_shared_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/api-shared/shared.service */ "./src/app/shared/service/api-shared/shared.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _component_header_bar_header_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../component/header-bar/header-bar.component */ "./src/app/shared/table/component/header-bar/header-bar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _component_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../component/top-bar/top-bar.component */ "./src/app/shared/table/component/top-bar/top-bar.component.ts");
/* harmony import */ var _component_loading_bar_loading_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../component/loading-bar/loading-bar.component */ "./src/app/shared/table/component/loading-bar/loading-bar.component.ts");
/* harmony import */ var _component_notification_bar_notification_bar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../component/notification-bar/notification-bar.component */ "./src/app/shared/table/component/notification-bar/notification-bar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pipe_custom_table_custom_table_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../pipe/custom-table/custom-table.pipe */ "./src/app/shared/pipe/custom-table/custom-table.pipe.ts");
















function TableApiComponent_tbody_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("search", function TableApiComponent_tbody_8_Template_tbody_search_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.filter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tableData", ctx_r0.tableModel.tableData)("addButton", ctx_r0.tableModel.addButton)("checkNewColumn", ctx_r0.newColumn);
} }
function TableApiComponent_tbody_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tbody", 13);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx_r1.newColumn ? ctx_r1.tableModel.tableData.length + 1 : ctx_r1.tableModel.tableData.length);
} }
function TableApiComponent_tbody_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tbody", 14);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("text-danger text-center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx_r2.length)("content", "Gagal memuat data!");
} }
function TableApiComponent_tbody_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tbody", 14);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("text-center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx_r3.length)("content", "Tidak ada data!");
} }
function TableApiComponent_tbody_13_tr_1_td_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "customTable");
} if (rf & 2) {
    const tableData_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const data_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 1, data_r11, tableData_r15), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function TableApiComponent_tbody_13_tr_1_td_1_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "customTable");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tableData_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const data_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", tableData_r15.link + data_r11[tableData_r15.linkIdKey]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, data_r11, tableData_r15), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function TableApiComponent_tbody_13_tr_1_td_1_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableApiComponent_tbody_13_tr_1_td_1_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const data_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16); return ctx_r24.openModal(_r6, data_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "customTable");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tableData_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const data_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, data_r11, tableData_r15), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function TableApiComponent_tbody_13_tr_1_td_1_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "customTable");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tableData_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const data_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, data_r11, tableData_r15), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function TableApiComponent_tbody_13_tr_1_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableApiComponent_tbody_13_tr_1_td_1_div_1_Template, 2, 4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableApiComponent_tbody_13_tr_1_td_1_a_2_Template, 3, 5, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TableApiComponent_tbody_13_tr_1_td_1_a_3_Template, 3, 4, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TableApiComponent_tbody_13_tr_1_td_1_a_4_Template, 3, 4, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tableData_r15 = ctx.$implicit;
    const data_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r11["isactive"] != null && !data_r11["isactive"] || data_r11["isActive"] != null && !data_r11["isActive"] ? "text-danger" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !tableData_r15.link && !tableData_r15.linkModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tableData_r15.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tableData_r15.linkModal && data_r11[tableData_r15.jsonName] && data_r11["jenisOutlet"] == "QRIS Statis");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tableData_r15.linkModal && !data_r11[tableData_r15.jsonName] || tableData_r15.linkModal && data_r11[tableData_r15.jsonName] && data_r11["jenisOutlet"] != "QRIS Statis");
} }
function TableApiComponent_tbody_13_tr_1_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Ubah");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r13.tableModel.editId ? "edit/" + data_r11[ctx_r13.tableModel.editId] : "edit/" + data_r11["id"]);
} }
function TableApiComponent_tbody_13_tr_1_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableApiComponent_tbody_13_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableApiComponent_tbody_13_tr_1_td_1_Template, 5, 5, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableApiComponent_tbody_13_tr_1_td_2_Template, 5, 1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TableApiComponent_tbody_13_tr_1_td_3_Template, 2, 0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.tableModel.tableData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.tableModel.editButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r10.tableModel.editButton && ctx_r10.tableModel.addButton);
} }
function TableApiComponent_tbody_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableApiComponent_tbody_13_tr_1_Template, 4, 3, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.dataList);
} }
function TableApiComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ngb-pagination", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function TableApiComponent_div_14_Template_ngb_pagination_pageChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.pagination.page = $event; })("pageChange", function TableApiComponent_div_14_Template_ngb_pagination_pageChange_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.paginate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" Baris ", ctx_r5.row.start, " - ", ctx_r5.row.end, " dari ", ctx_r5.tableModel.totalrows, " data. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", ctx_r5.tableModel.totalrows)("page", ctx_r5.pagination.page)("maxSize", 5)("rotate", true)("ellipses", false)("boundaryLinks", true);
} }
function TableApiComponent_ng_template_15_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Memuat... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function TableApiComponent_ng_template_15_ng_container_2_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r40.imageToShow, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TableApiComponent_ng_template_15_ng_container_2_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Silakan hubungi Tim Halo ITX A MSE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " (halo_itx_a_mse@intra.bca)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Image QR MID ", ctx_r41.dataModal["mid"], " Tidak Ditemukan! ");
} }
function TableApiComponent_ng_template_15_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "MID:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Nama Outlet:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "NMID:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TableApiComponent_ng_template_15_ng_container_2_ng_container_22_Template, 5, 1, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, TableApiComponent_ng_template_15_ng_container_2_ng_container_23_Template, 9, 1, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r38.dataModal["mid"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r38.dataModal["name"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r38.dataModal["nmid"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r38.imageToShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r38.imageToShow);
} }
function TableApiComponent_ng_template_15_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableApiComponent_ng_template_15_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r42.downloadImage(ctx_r42.dataModal); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableApiComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableApiComponent_ng_template_15_ng_container_1_Template, 2, 0, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableApiComponent_ng_template_15_ng_container_2_Template, 24, 5, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TableApiComponent_ng_template_15_button_4_Template, 3, 0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableApiComponent_ng_template_15_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.isImageLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r7.isImageLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.imageToShow);
} }
class TableApiComponent {
    constructor(SharedService, modalService, sanitizer) {
        this.SharedService = SharedService;
        this.modalService = modalService;
        this.sanitizer = sanitizer;
        this.queryParam = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cancelRequest = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.imageModal = null;
        this.pagination = {
            page: 1,
            size: 10,
            orderby: "",
            query: "",
        };
        this.sort = {
            index: -1,
            direction: ""
        };
        this.row = {
            start: 1,
            end: 10
        };
    }
    ngOnInit() {
        if (this.tableModel.paginationInit) {
            this.pagination = this.tableModel.paginationInit;
            this.pagination.queryMandatory = this.tableModel.paginationInit.queryMandatory ? this.tableModel.paginationInit.queryMandatory : "";
            this.sort.index = this.tableModel.tableData.findIndex(table => table.jsonName == this.pagination.orderby.split(" ")[0]);
            this.sort.direction = this.pagination.orderby.split(" ")[1];
        }
        console.log("abi" + this.pagination);
        this.checkNewColumn();
        this.paginate();
    }
    getList(queryParam) {
        this.status = "loading";
        this.cancelRequest.next();
        this.SharedService.getData(this.tableModel.getListUrl, queryParam).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.cancelRequest)).subscribe((response) => {
            console.log('response', response);
            if (response != null) {
                if (response.body == null) {
                    this.status = "no content";
                }
                else {
                    if (response.status == 200) {
                        this.status = "success";
                        var data = response.body;
                        this.tableModel.totalrows = 30;
                        // this.tableModel.totalrows = data.total_rows ;
                        this.dataList = data.content;
                        this.paging();
                    }
                    else if ((response.status == 200 && response.body.info.code == 204) || (response.status == 200 && response.body.info.status == 204) || response.status == 204) {
                        this.status = "no content";
                    }
                }
            }
            else {
                this.status = "failed";
            }
        });
    }
    sorting(index) {
        if (this.sort.index != index || this.sort.direction == "desc") {
            this.sort.direction = "asc";
        }
        else {
            this.sort.direction = "desc";
        }
        this.sort.index = index;
        if (typeof this.tableModel.tableData[index].jsonName == 'string') {
            this.pagination.orderby = this.tableModel.tableData[index].jsonName + " " + this.sort.direction;
        }
        else {
            this.pagination.orderby = this.tableModel.tableData[index].jsonName[0] + " " + this.sort.direction;
        }
        this.paginate();
    }
    filter(event) {
        this.pagination.query = "";
        this.tableModel.tableData.forEach((data) => {
            if (data != null && data.search != null) {
                if (data.search.inputType != "" && data.search.value) {
                    const trimmedSearchDataValue = data.search.value.trim(); // FDW => 1 Dec 2021 => trim search data value
                    if (typeof data.jsonName == 'string') {
                        this.pagination.query = this.pagination.query + data.jsonName + ";" + data.search.inputQuery + ";" + trimmedSearchDataValue + ";;";
                    }
                    else {
                        data.jsonName.forEach((jsonName, index) => {
                            if (index == data.jsonName.length - 1) {
                                this.pagination.query = this.pagination.query + jsonName + ";" + data.search.inputQuery + ";" + trimmedSearchDataValue;
                            }
                            else {
                                this.pagination.query = this.pagination.query + jsonName + ";" + data.search.inputQuery + ";" + trimmedSearchDataValue + "||";
                            }
                        });
                    }
                }
            }
        });
        if (this.pagination.query.slice(-2) == ";;" && !this.pagination.queryMandatory) {
            this.pagination.query = this.pagination.query.slice(0, -2);
        }
        this.pagination.page = 1;
        this.paginate();
    }
    paging() {
        this.row.start = 1 + (10 * (this.pagination.page - 1));
        this.row.end = 10 * this.pagination.page;
        if (this.row.end > this.tableModel.totalrows) {
            this.row.end = this.tableModel.totalrows;
        }
    }
    paginate() {
        const queryParam = "?page=" + this.pagination.page +
            "&orderby=" + this.pagination.orderby +
            "&size=" + this.pagination.size +
            "&query=" + this.pagination.query + this.pagination.queryMandatory;
        this.getList(queryParam);
    }
    checkNewColumn() {
        this.newColumn = this.tableModel.addButton || this.tableModel.editButton ? 1 : 0;
        this.length = this.newColumn ? this.tableModel.tableData.length + 1 : this.tableModel.tableData.length;
    }
    openModal(content, data, pathParam) {
        // FDW - 02072022
        this.dataModal = $.extend({}, data);
        if (pathParam) {
            this.dataModal.getListUrl = data.getListUrl + pathParam;
        }
        this.imageModal = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'xl', windowClass: 'modal-document' });
        // if (data.mid) { this.getImage(data.mid); }
    }
    // getImage(mid) {
    //   this.isImageLoading = true;
    //   this.SharedService.getDataImage(GET_QRIS_IMAGE, mid).subscribe((response) =>
    //   {
    //     if(response)
    //     {
    //       let url = URL.createObjectURL(response);
    //       this.imageResponse = response;
    //       this.imageToShow = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    //       this.isImageLoading = false;
    //     }
    //     else
    //     {
    //       this.imageToShow = null;
    //       this.isImageLoading = false;
    //     }
    //   })
    // }
    downloadImage(data) {
        var date = new Date();
        var currentYear = date.getFullYear();
        var currentMonth = (date.getMonth() + 1).toString();
        currentMonth = ("0" + currentMonth).slice(-2);
        var currentDate = ("0" + date.getDate()).slice(-2);
        var currentHours = ("0" + date.getHours()).slice(-2);
        var currentMinutes = ("0" + date.getMinutes()).slice(-2);
        var blob = new Blob([this.imageResponse], { type: "data:image/png;base64" });
        var filename = data.mid + "_" + data.nmid + "_QR_IMAGE_" + currentYear + currentMonth + currentDate + "_" + currentHours + currentMinutes + ".png";
        file_saver__WEBPACK_IMPORTED_MODULE_3__["saveAs"](blob, filename);
    }
    closeModal() {
        this.imageModal.close();
    }
    /* FDW => 19-NOV-2021 => add Export/Import Button */
    // exportExcel(): void { /* Export current table to Excel */
    //   Swal.fire({
    //     title: 'Do you want to export this current table?',
    //     text: 'This table will downloaded as xlsx file into your system!',
    //     icon: 'info',
    //     showCancelButton: true,
    //     confirmButtonColor: '#3085d6',
    //     cancelButtonColor: '#d33',
    //     confirmButtonText: 'Yes'
    //   }).then((result) => {
    //     if (result.isConfirmed) {
    //       try {
    //         const excelTitle = 'List ' + this.tableModel.title.charAt(0).toUpperCase() + this.tableModel.title.slice(1) + '.xlsx';
    //         /* convert json to excel */
    //         const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.dataList);
    //         /* generate workbook and add the worksheet */
    //         const wb: XLSX.WorkBook = XLSX.utils.book_new();
    //         XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    //         /* download file */
    //         XLSX.writeFile(wb, excelTitle);
    //         Swal.fire(
    //           'Success!',
    //           'File downloaded!',
    //           'success'
    //         );
    //       } catch (e) {
    //         Swal.fire(
    //           'Oops!',
    //           'Something went wrong!',
    //           'error'
    //         );
    //       }
    //     }
    //   });
    // }
    getClick(tableData, data) {
        if (tableData.click == "downloadFile") {
            this.downloadFile(data);
        }
    }
    downloadFile(data) {
        //modal loading
        //save excel
    }
}
TableApiComponent.ɵfac = function TableApiComponent_Factory(t) { return new (t || TableApiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_api_shared_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"])); };
TableApiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableApiComponent, selectors: [["app-table-api"]], inputs: { tableModel: "tableModel", dataList: "dataList", excelButton: "excelButton" }, outputs: { queryParam: "queryParam" }, decls: 17, vars: 12, consts: [[3, "expanded"], [1, "clickable"], [1, "table-responsive"], [1, "table", "table-striped", "table-hover"], ["app-header-bar", "", 3, "tableData", "sort", "append", "sortEvent"], ["app-top-bar", "", 3, "tableData", "addButton", "checkNewColumn", "search", 4, "ngIf"], [3, "ngSwitch"], ["app-loading-bar", "", 3, "length", 4, "ngSwitchCase"], ["app-notification-bar", "", 3, "length", "content", "class", 4, "ngSwitchCase"], [4, "ngSwitchCase"], ["class", "row mt-4 ", 4, "ngIf"], ["content", ""], ["app-top-bar", "", 3, "tableData", "addButton", "checkNewColumn", "search"], ["app-loading-bar", "", 3, "length"], ["app-notification-bar", "", 3, "length", "content"], [4, "ngFor", "ngForOf"], [3, "ngClass", 4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "ngClass"], [3, "innerHTML", 4, "ngIf"], [3, "routerLink", 4, "ngIf"], ["href", "javascript:;", 3, "click", 4, "ngIf"], [3, "innerHTML"], [3, "routerLink"], ["href", "javascript:;", 3, "click"], [1, "fixed-width-btn"], [1, "btn", "btn-primary", "btn-block", "btn-sm", 3, "routerLink"], [1, "fas", "fa-edit"], [1, "row", "mt-4"], [1, "col-lg-6", "mt-2"], [1, "pagination-responsive"], [1, "col-lg-6"], [1, "pagination-responsive", "d-flex", "justify-content-end"], [3, "collectionSize", "page", "maxSize", "rotate", "ellipses", "boundaryLinks", "pageChange"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "table", 2, "width", "100%", "table-layout", "fixed", "background-color", "#fff", "text-align", "center"], [2, "text-align", "right"], [2, "text-align", "left"], ["id", "carouselExampleControls", 1, "carousel", "slide"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["crossOrigin", "anonymous", 1, "bg-white", "img-thumbnail", 2, "width", "100vw", 3, "src"], [2, "text-align", "center"], [1, "fas", "fa-download"]], template: function TableApiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sortEvent", function TableApiComponent_Template_thead_sortEvent_7_listener($event) { return ctx.sorting($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TableApiComponent_tbody_8_Template, 1, 3, "tbody", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TableApiComponent_tbody_10_Template, 1, 1, "tbody", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TableApiComponent_tbody_11_Template, 1, 4, "tbody", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TableApiComponent_tbody_12_Template, 1, 4, "tbody", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TableApiComponent_tbody_13_Template, 2, 1, "tbody", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TableApiComponent_div_14_Template, 7, 9, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TableApiComponent_ng_template_15_Template, 7, 3, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.tableModel.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tableData", ctx.tableModel.tableData)("sort", ctx.sort)("append", ctx.newColumn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.tableModel.removeTopBar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "failed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "no content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.status == "success" && !ctx.tableModel.removePagination);
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanelTitle"], _component_header_bar_header_bar_component__WEBPACK_IMPORTED_MODULE_8__["HeaderBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitchCase"], _component_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_10__["TopBarComponent"], _component_loading_bar_loading_bar_component__WEBPACK_IMPORTED_MODULE_11__["LoadingBarComponent"], _component_notification_bar_notification_bar_component__WEBPACK_IMPORTED_MODULE_12__["NotificationBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbPagination"]], pipes: [_pipe_custom_table_custom_table_pipe__WEBPACK_IMPORTED_MODULE_14__["CustomTablePipe"]], styles: [".clickable[_ngcontent-%COMP%]:hover {\r\n    color: #00b7f1;\r\n    cursor: pointer;\r\n}\r\n\r\n.clickable[_ngcontent-%COMP%]\r\n{\r\n    color: #6C676A;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n    padding: 0.2rem 0.5rem  0.2rem 0.7rem;\r\n    vertical-align: middle;\r\n    border-top: 1px solid #dee2e6;\r\n    color: #6c676a;\r\n    word-wrap: break-word;\r\n    font-size: 13px;\r\n}\r\n\r\n.fixed-width-btn[_ngcontent-%COMP%]\r\n{\r\n    min-width: 7em;\r\n}\r\n\r\n@media(max-width: 990px)\r\n{\r\n    .pagination-responsive[_ngcontent-%COMP%]\r\n    {\r\n        color: #6c676a!important;\r\n        width: -moz-fit-content!important;\r\n        width: fit-content!important;\r\n        text-align: center!important;\r\n        display: block!important;\r\n        margin: 0 auto!important;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3RhYmxlL3RlbXBsYXRlL3RhYmxlLWFwaS90YWJsZS1hcGkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBOztJQUVJLGNBQWM7QUFDbEI7O0FBR0E7SUFDSSxxQ0FBcUM7SUFDckMsc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksY0FBYztBQUNsQjs7QUFFQTs7SUFFSTs7UUFFSSx3QkFBd0I7UUFDeEIsaUNBQTRCO1FBQTVCLDRCQUE0QjtRQUM1Qiw0QkFBNEI7UUFDNUIsd0JBQXdCO1FBQ3hCLHdCQUF3QjtJQUM1QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3RhYmxlL3RlbXBsYXRlL3RhYmxlLWFwaS90YWJsZS1hcGkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbGlja2FibGU6aG92ZXIge1xyXG4gICAgY29sb3I6ICMwMGI3ZjE7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jbGlja2FibGVcclxue1xyXG4gICAgY29sb3I6ICM2QzY3NkE7XHJcbn1cclxuXHJcblxyXG4udGFibGUgdGR7XHJcbiAgICBwYWRkaW5nOiAwLjJyZW0gMC41cmVtICAwLjJyZW0gMC43cmVtO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgY29sb3I6ICM2YzY3NmE7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn0gXHJcblxyXG4uZml4ZWQtd2lkdGgtYnRuXHJcbntcclxuICAgIG1pbi13aWR0aDogN2VtO1xyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA5OTBweClcclxue1xyXG4gICAgLnBhZ2luYXRpb24tcmVzcG9uc2l2ZVxyXG4gICAge1xyXG4gICAgICAgIGNvbG9yOiAjNmM2NzZhIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQhaW1wb3J0YW50O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlciFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2shaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableApiComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-table-api',
                templateUrl: './table-api.component.html',
                styleUrls: ['./table-api.component.css']
            }]
    }], function () { return [{ type: _service_api_shared_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] }]; }, { tableModel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], queryParam: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], dataList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], excelButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/table/template/table-non-api/table-non-api.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared/table/template/table-non-api/table-non-api.component.ts ***!
  \********************************************************************************/
/*! exports provided: TableNonApiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableNonApiComponent", function() { return TableNonApiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _component_header_bar_header_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/header-bar/header-bar.component */ "./src/app/shared/table/component/header-bar/header-bar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _component_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../component/top-bar/top-bar.component */ "./src/app/shared/table/component/top-bar/top-bar.component.ts");
/* harmony import */ var _component_notification_bar_notification_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../component/notification-bar/notification-bar.component */ "./src/app/shared/table/component/notification-bar/notification-bar.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");








function TableNonApiComponent_tbody_8_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("checkboxEvent", function TableNonApiComponent_tbody_8_Template_tbody_checkboxEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.checkboxEvent($event); })("search", function TableNonApiComponent_tbody_8_Template_tbody_search_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.filter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checkbox", ctx_r0.tableModel.checkbox)("tableData", ctx_r0.tableModel.tableData);
} }
function TableNonApiComponent_tbody_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tbody", 10);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("text-center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx_r1.length)("content", "Tidak ada data!");
} }
function TableNonApiComponent_tbody_10_tr_1_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TableNonApiComponent_tbody_10_tr_1_td_1_Template_input_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const data_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.checkboxChange($event, data_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", data_r8.checked);
} }
function TableNonApiComponent_tbody_10_tr_1_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tableData_r15 = ctx.$implicit;
    const data_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tableData_r15.altValue && tableData_r15.altValue[data_r8[tableData_r15.jsonName]] ? tableData_r15.altValue[data_r8[tableData_r15.jsonName]] : data_r8[tableData_r15.jsonName], " ");
} }
function TableNonApiComponent_tbody_10_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableNonApiComponent_tbody_10_tr_1_td_1_Template, 3, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableNonApiComponent_tbody_10_tr_1_td_2_Template, 3, 1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.tableModel.checkbox);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.tableModel.tableData);
} }
function TableNonApiComponent_tbody_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableNonApiComponent_tbody_10_tr_1_Template, 3, 2, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 1, ctx_r2.filterList, (ctx_r2.page - 1) * ctx_r2.pageSize, (ctx_r2.page - 1) * ctx_r2.pageSize + ctx_r2.pageSize));
} }
function TableNonApiComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ngb-pagination", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function TableNonApiComponent_div_11_Template_ngb_pagination_pageChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.page = $event; })("pageChange", function TableNonApiComponent_div_11_Template_ngb_pagination_pageChange_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.paging(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" Baris ", ctx_r3.row.start, " - ", ctx_r3.row.end, " dari ", ctx_r3.filterList.length, " data. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", ctx_r3.filterList.length)("page", ctx_r3.page)("pageSize", ctx_r3.pageSize)("maxSize", 5)("rotate", true)("ellipses", false)("boundaryLinks", true);
} }
class TableNonApiComponent {
    constructor() {
        this.filterEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageSize = 10;
        this.page = 1;
        this.row = {
            start: 1,
            end: 10
        };
        this.sort = {
            index: -1,
            direction: ""
        };
    }
    ngOnInit() {
        console.log(this.dataList);
        console.log(this.tableModel);
        this.filterList = this.dataList;
        this.filterEvent.emit(this.filterList);
        this.newColumn = this.tableModel.checkbox ? 1 : 0;
        this.length = this.tableModel.checkbox ? this.tableModel.tableData.length + 1 : this.tableModel.tableData.length;
        this.paging();
    }
    sorting(index) {
        if (this.sort.index != index || this.sort.direction == "desc") {
            this.sort.direction = "asc";
            this.filterList = this.filterList.sort((a, b) => this.compare(a, b, index));
        }
        else {
            this.sort.direction = "desc";
            this.filterList = this.filterList.sort((b, a) => this.compare(a, b, index));
        }
        this.sort.index = index;
        this.filterEvent.emit(this.filterList);
    }
    compare(a, b, index) {
        var start = a[this.tableModel.tableData[index].jsonName] ? a[this.tableModel.tableData[index].jsonName] : "";
        var end = b[this.tableModel.tableData[index].jsonName] ? b[this.tableModel.tableData[index].jsonName] : "";
        return start.localeCompare(end);
    }
    filter(event) {
        this.filterList = this.dataList;
        this.tableModel.tableData.forEach((data) => {
            if (data != null) {
                if (typeof data.search.value == 'string' && data.search.inputType != "" && data.search.value) {
                    this.filterList = this.filterList.filter((filterData) => filterData[data.jsonName] ? filterData[data.jsonName].toLowerCase().match(data.search.value.toLowerCase()) : "".match(data.search.value.toLowerCase()));
                }
                else if (typeof data.search.value == 'object' && data.search.inputType != "") {
                    this.filterList = this.filterList.filter((filterData) => data.search.value.some((selection) => filterData[data.jsonName] ? filterData[data.jsonName].toLowerCase().match(selection.toLowerCase()) :
                        "".match(selection.toLowerCase())));
                }
            }
        });
        this.page = 1;
        this.filterEvent.emit(this.filterList);
        this.paging();
    }
    paging() {
        this.row.start = 1 + (10 * (this.page - 1));
        this.row.end = 10 * this.page;
        if (this.row.end > this.filterList.length) {
            this.row.end = this.filterList.length;
        }
    }
    checkboxChange(event, data) {
        data.checked = event.target.checked;
    }
    checkboxEvent(event) {
        this.filterList.forEach((data) => {
            data.checked = event;
        });
    }
}
TableNonApiComponent.ɵfac = function TableNonApiComponent_Factory(t) { return new (t || TableNonApiComponent)(); };
TableNonApiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableNonApiComponent, selectors: [["app-table-non-api"]], inputs: { tableModel: "tableModel", dataList: "dataList", filterList: "filterList" }, outputs: { filterEvent: "filterEvent" }, decls: 12, vars: 9, consts: [[1, "mb-3", 3, "expanded"], [1, "clickable"], [1, "table-responsive"], [1, "table", "table-striped", "table-hover"], ["app-header-bar", "", 3, "tableData", "sort", "prepend", "sortEvent"], ["app-top-bar", "", 3, "checkbox", "tableData", "checkboxEvent", "search", 4, "ngIf"], ["app-notification-bar", "", 3, "length", "content", "class", 4, "ngIf"], [4, "ngIf"], ["class", "row mt-4", 4, "ngIf"], ["app-top-bar", "", 3, "checkbox", "tableData", "checkboxEvent", "search"], ["app-notification-bar", "", 3, "length", "content"], [4, "ngFor", "ngForOf"], [1, "form-check"], ["type", "checkbox", 3, "checked", "change"], [1, "min-height"], [1, "row", "mt-4"], [1, "col-lg-6", "mt-2"], [1, "pagination-responsive"], [1, "col-lg-6"], [1, "pagination-responsive", "d-flex", "justify-content-end"], [3, "collectionSize", "page", "pageSize", "maxSize", "rotate", "ellipses", "boundaryLinks", "pageChange"]], template: function TableNonApiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sortEvent", function TableNonApiComponent_Template_thead_sortEvent_7_listener($event) { return ctx.sorting($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TableNonApiComponent_tbody_8_Template, 1, 2, "tbody", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TableNonApiComponent_tbody_9_Template, 1, 4, "tbody", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TableNonApiComponent_tbody_10_Template, 3, 5, "tbody", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TableNonApiComponent_div_11_Template, 7, 10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.tableModel.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tableData", ctx.tableModel.tableData)("sort", ctx.sort)("prepend", ctx.newColumn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.tableModel.removeTopBar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filterList.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filterList.length != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filterList.length != 0);
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelTitle"], _component_header_bar_header_bar_component__WEBPACK_IMPORTED_MODULE_2__["HeaderBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _component_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_4__["TopBarComponent"], _component_notification_bar_notification_bar_component__WEBPACK_IMPORTED_MODULE_5__["NotificationBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbPagination"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["SlicePipe"]], styles: [".clickable[_ngcontent-%COMP%]:hover {\r\n    color: #00b7f1;\r\n    cursor: pointer;\r\n}\r\n\r\n.clickable[_ngcontent-%COMP%]\r\n{\r\n    color: #6C676A;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n    padding: 0.2rem 0.5rem  0.2rem 0.7rem;\r\n    vertical-align: middle;\r\n    border-top: 1px solid #dee2e6;\r\n    color: #6c676a;\r\n    max-width: -moz-fit-content;\r\n    max-width: fit-content;\r\n    word-wrap: break-word;\r\n    font-size: 13px;\r\n}\r\n\r\n.min-height[_ngcontent-%COMP%]\r\n{\r\n    min-height: 35px;\r\n}\r\n\r\n.fixed-width-btn[_ngcontent-%COMP%]\r\n{\r\n    min-width: 7em;\r\n}\r\n\r\n@media(max-width: 990px)\r\n{\r\n    .pagination-responsive[_ngcontent-%COMP%]\r\n    {\r\n        color: #6c676a!important;\r\n        width: -moz-fit-content!important;\r\n        width: fit-content!important;\r\n        text-align: center!important;\r\n        display: block!important;\r\n        margin: 0 auto!important;\r\n    }\r\n}\r\n\r\ninput[type=checkbox][_ngcontent-%COMP%]\r\n{\r\n  \r\n  -ms-transform: scale(1.5); \r\n  -moz-transform: scale(1.5); \r\n  -webkit-transform: scale(1.5); \r\n  -o-transform: scale(1.5); \r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3RhYmxlL3RlbXBsYXRlL3RhYmxlLW5vbi1hcGkvdGFibGUtbm9uLWFwaS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksY0FBYztBQUNsQjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLGNBQWM7SUFDZCwyQkFBc0I7SUFBdEIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFDQTs7SUFFSSxjQUFjO0FBQ2xCOztBQUVBOztJQUVJOztRQUVJLHdCQUF3QjtRQUN4QixpQ0FBNEI7UUFBNUIsNEJBQTRCO1FBQzVCLDRCQUE0QjtRQUM1Qix3QkFBd0I7UUFDeEIsd0JBQXdCO0lBQzVCO0FBQ0o7O0FBR0E7O0VBRUUsNEJBQTRCO0VBQzVCLHlCQUF5QixFQUFFLE9BQU87RUFDbEMsMEJBQTBCLEVBQUUsT0FBTztFQUNuQyw2QkFBNkIsRUFBRSxzQkFBc0I7RUFDckQsd0JBQXdCLEVBQUUsVUFBVTtFQUNwQyxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3RhYmxlL3RlbXBsYXRlL3RhYmxlLW5vbi1hcGkvdGFibGUtbm9uLWFwaS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsaWNrYWJsZTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzAwYjdmMTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNsaWNrYWJsZVxyXG57XHJcbiAgICBjb2xvcjogIzZDNjc2QTtcclxufVxyXG5cclxuLnRhYmxlIHRke1xyXG4gICAgcGFkZGluZzogMC4ycmVtIDAuNXJlbSAgMC4ycmVtIDAuN3JlbTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcclxuICAgIGNvbG9yOiAjNmM2NzZhO1xyXG4gICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLm1pbi1oZWlnaHRcclxue1xyXG4gICAgbWluLWhlaWdodDogMzVweDtcclxufVxyXG4uZml4ZWQtd2lkdGgtYnRuXHJcbntcclxuICAgIG1pbi13aWR0aDogN2VtO1xyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA5OTBweClcclxue1xyXG4gICAgLnBhZ2luYXRpb24tcmVzcG9uc2l2ZVxyXG4gICAge1xyXG4gICAgICAgIGNvbG9yOiAjNmM2NzZhIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQhaW1wb3J0YW50O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlciFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2shaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmlucHV0W3R5cGU9Y2hlY2tib3hdXHJcbntcclxuICAvKiBEb3VibGUtc2l6ZWQgQ2hlY2tib3hlcyAqL1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuNSk7IC8qIElFICovXHJcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuNSk7IC8qIEZGICovXHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuNSk7IC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXHJcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjUpOyAvKiBPcGVyYSAqL1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableNonApiComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-table-non-api',
                templateUrl: './table-non-api.component.html',
                styleUrls: ['./table-non-api.component.css']
            }]
    }], function () { return []; }, { tableModel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dataList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], filterList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], filterEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Work\CMR\iris.web.non-core.report\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map