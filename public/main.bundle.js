webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#root {\n\tbackground: #2c2c2f;\n}\n\n#navbar-main {\n\tfont-size: 1em;\n\tfont-weight:bold;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"root\">\n\t<div class=\"navbar navbar-inverse\">\n\t\t<div class=\"container\">\n\t\t\t<div id=\"navbar-main\">\n\n\t\t\t\t<ul class=\"nav navbar-nav\">\n\t\t\t\t\t<li><a routerLink=\"/find\">Find</a></li>\n\t\t\t\t\t<li><a routerLink=\"/post\">Post</a></li>\n\t\t\t\t</ul>\n\n\t\t\t\t<ul class=\"nav navbar-nav navbar-right\">\n\t\t\t\t\t<li *ngIf=\"!auth.isLoggedIn()\"><a routerLink=\"/register\">Register</a></li>\n\t\t\t\t\t<li *ngIf=\"!auth.isLoggedIn()\"><a routerLink=\"/login\">Log In</a></li>\n\t\t\t\t\t<li *ngIf=\"auth.isLoggedIn()\"><a routerLink=\"/profile\">My Profile</a></li>\n\t\t\t\t\t<li *ngIf=\"auth.isLoggedIn()\"><a routerLink=\"/\" (click)=\"auth.logout()\">Logout</a></li>\n\t\t\t\t</ul>\n\t\t\t\t\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__postjob_postjob_component__ = __webpack_require__("../../../../../src/app/postjob/postjob.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__findjob_findjob_component__ = __webpack_require__("../../../../../src/app/findjob/findjob.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__auth_guard_service__ = __webpack_require__("../../../../../src/app/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__job_service__ = __webpack_require__("../../../../../src/app/job.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__job_job_component__ = __webpack_require__("../../../../../src/app/job/job.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__comments_comments_component__ = __webpack_require__("../../../../../src/app/comments/comments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__comment_service__ = __webpack_require__("../../../../../src/app/comment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__blockexplorer_service__ = __webpack_require__("../../../../../src/app/blockexplorer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular_confirmation_popover__ = __webpack_require__("../../../../angular-confirmation-popover/fesm5/angular-confirmation-popover.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__transaction_transaction_component__ = __webpack_require__("../../../../../src/app/transaction/transaction.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_12__findjob_findjob_component__["a" /* FindJobComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_9__register_register_component__["a" /* RegisterComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_7__profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'post', component: __WEBPACK_IMPORTED_MODULE_11__postjob_postjob_component__["a" /* PostJobComponent */] },
    { path: 'find', component: __WEBPACK_IMPORTED_MODULE_12__findjob_findjob_component__["a" /* FindJobComponent */] },
    { path: 'job/:id', component: __WEBPACK_IMPORTED_MODULE_16__job_job_component__["a" /* JobComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__postjob_postjob_component__["a" /* PostJobComponent */],
                __WEBPACK_IMPORTED_MODULE_12__findjob_findjob_component__["a" /* FindJobComponent */],
                __WEBPACK_IMPORTED_MODULE_16__job_job_component__["a" /* JobComponent */],
                __WEBPACK_IMPORTED_MODULE_17__comments_comments_component__["a" /* CommentsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__transaction_transaction_component__["a" /* TransactionComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */].forRoot(routes),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_20_angular_confirmation_popover__["a" /* ConfirmationPopoverModule */].forRoot({ confirmButtonType: 'danger' })
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_14__auth_guard_service__["a" /* AuthGuardService */],
                __WEBPACK_IMPORTED_MODULE_15__job_service__["a" /* JobService */],
                __WEBPACK_IMPORTED_MODULE_18__comment_service__["a" /* CommentService */],
                __WEBPACK_IMPORTED_MODULE_19__blockexplorer_service__["a" /* BlockExplorerService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.auth.isLoggedIn()) {
            this.router.navigateByUrl('/');
            return false;
        }
        return true;
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__ = __webpack_require__("../../../../rxjs/_esm5/operators/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var apiUrl = 'https://lancerapp.herokuapp.com/api';
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthenticationService.prototype.saveToken = function (token) {
        localStorage.setItem('mean-token', token);
        this.token = token;
    };
    AuthenticationService.prototype.getToken = function () {
        if (!this.token) {
            this.token = localStorage.getItem('mean-token');
        }
        return this.token;
    };
    AuthenticationService.prototype.getUserDetails = function () {
        var token = this.getToken();
        // console.log("getuserdetails: " + token);
        var payload;
        if (token) {
            payload = token.split('.')[1];
            payload = window.atob(payload);
            return JSON.parse(payload);
        }
        else {
            return null;
        }
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        var user = this.getUserDetails();
        // console.log("isloggedin: " + user);
        if (user) {
            return user.exp > Date.now() / 1000;
        }
        else {
            return false;
        }
    };
    AuthenticationService.prototype.request = function (method, type, user) {
        var _this = this;
        var base;
        if (method === 'post') {
            base = this.http.post(apiUrl + "/" + type, user);
        }
        else {
            base = this.http.get(apiUrl + "/" + type, { headers: { Authorization: "Bearer " + this.getToken() } });
        }
        var request = base.pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__["a" /* map */])(function (data) {
            if (data.token) {
                _this.saveToken(data.token);
            }
            return data;
        }));
        return request;
    };
    AuthenticationService.prototype.register = function (user) {
        return this.request('post', 'register', user);
    };
    AuthenticationService.prototype.login = function (user) {
        return this.request('post', 'login', user);
    };
    AuthenticationService.prototype.profile = function () {
        return this.request('get', 'profile');
    };
    AuthenticationService.prototype.transaction = function (user, destination, quantity) {
        var _this = this;
        var base = this.http.get(apiUrl + "/maketx", {
            headers: {
                Authorization: "Bearer " + this.getToken()
            },
            params: {
                user: "" + user,
                destination: "" + destination,
                quantity: "" + quantity
            }
        });
        var request = base.pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__["a" /* map */])(function (data) {
            if (data.token) {
                _this.saveToken(data.token);
            }
            return data;
        }));
        return request;
    };
    AuthenticationService.prototype.jobComplete = function (job, destination) {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + this.getToken()
            })
        };
        var data = {
            job: "" + job,
            destination: "" + destination
        };
        return this.http.post(apiUrl + "/job/" + job + "/complete", data, httpOptions).map(function (res) {
            return { res: res };
        });
    };
    AuthenticationService.prototype.logout = function () {
        this.token = '';
        window.localStorage.removeItem('mean-token');
        this.router.navigateByUrl('/');
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "../../../../../src/app/blockexplorer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockExplorerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';




var BlockExplorerService = /** @class */ (function () {
    function BlockExplorerService(http, router) {
        this.http = http;
        this.router = router;
        this.api_url = 'https://testnet.blockexplorer.com/api/';
        this.address_url = this.api_url + "addr/";
    }
    BlockExplorerService.prototype.get_addr = function (address) {
        return this.http.get(this.address_url + address).map(function (res) { return res.json(); });
    };
    //Default Error handling method.
    BlockExplorerService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    BlockExplorerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], BlockExplorerService);
    return BlockExplorerService;
}());



/***/ }),

/***/ "../../../../../src/app/comment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommentService = /** @class */ (function () {
    function CommentService(http) {
        this.http = http;
        this.api_url = 'https://lancerapp.herokuapp.com';
        this.jobUrl = this.api_url + "/api/job";
    }
    CommentService.prototype.postComment = function (comment) {
        var jobId = comment.jobId;
        return this.http.post(this.jobUrl + "/" + jobId + "/comments/submit", comment)
            .map(function (res) {
            return { commentId: res["data"]._id, };
        });
    };
    CommentService.prototype.getComments = function (jobId) {
        return this.http.get(this.jobUrl + "/" + jobId + "/comments")
            .map(function (res) {
            return { commentList: res["data"] };
        });
    };
    //Default Error handling method.
    CommentService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    CommentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], CommentService);
    return CommentService;
}());



/***/ }),

/***/ "../../../../../src/app/comments/comments.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".post {\n\tmargin: .5em 0;\n\tpadding: .5em 1em;\n}\n\n.btn-comment {\n\tmargin-top: 2px;\n}\n\n.comment-list {\n\tlist-style: none;\n\tmargin-left: -40px;\n}\n\n.comment-item {\n\tborder: 1px solid #CCCCCC;\n\tbackground: #d0ecd9;\n\tmargin: .5em 0;\n\tpadding: .5em 1em;\n}\n\n.comment-content p {\n\tfont-size:18px;\n\tpadding-left: 1em;\n}\n\n.comment-bar {\n\tborder-top: 1px solid #EEEEEE;\n\tmargin-top: -20px;\n}\n\ntable {\n\twidth: 100%;\n}\n\n.tleft {\n\ttext-align: left;\n}\n\n.tright {\n\ttext-align: right;\n}\n\n#comments-frame {\n\t/*background: #edf8f0;*/\n\tmargin-top:2em;\n\tborder: 2px solid #CCCCCC;\n}\n\n.authorSelect {\n\tcursor: pointer;\n\tfont-weight: bold;\n/*\tcolor: gold;\n\tfont-weight: bold;\n\ttext-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;*/\n}\n\n#post {\n\tmargin-top:1em;\n\t\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/comments/comments.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n\t  <div class=\"col-md-1\"></div>\n\t  <div class=\"col-md-10\">\n\t  \t<div id=\"comments-frame\">\n      \n\t  \t<form [formGroup]=\"form\" class=\"post\" (submit)=\"onSubmit()\">\n\t        <label for=\"\">New Comment</label>\n\t        <div *ngIf=\"!isLoggedIn\" class=\"message-login\" >\n    \t\t\t<p>To post a comment, you must <a routerLink=\"/login\">log in</a> or <a routerLink=\"/register\">register</a>.</p>\n  \t\t\t</div>\n  \t\t\t<div *ngIf=\"isLoggedIn\">\n  \t\t\t\t<div class=\"form-group\">\n\t\t        \t<textarea type=\"text\" class=\"form-control\" name=\"content\" placeholder=\"Enter Your Comment\" formControlName=\"content\"></textarea>\n\t\t    \t</div>\n\t\t        <div class=\"form-group\">\n\t\t        \t<input type=\"file\" id=\"image\" (change)=\"onFileChange($event)\" #fileInput>\n\t\t        \t<button id=\"post\" type=\"submit\" class=\"btn btn-default btn-comment\">Post Comment</button>\n    \t\t\t</div>\n\t    \t</div>\n      \t</form>\n\n\n\t    <div class=\"comments\">\n\t\t    <ul class=\"comment-list\">\n\t\t\t\t<li class=\"comment-item\" *ngFor=\"let comment of commentList\">\n\t\t\t\t\t\n\t\t\t\t\t<img\n\t\t\t\t\t*ngIf=\"comment.image && comment.image.length > 0\"\n\t\t\t\t\t[src]=\"showImage(comment)\"\n\t\t\t\t    alt=\"(submission image)\">\n\n\t\t\t\t\t<div [innerHtml]=\"comment.content\"></div>\n\t\t\t\t\t<br>\n\t\t\t\t\t<div class=\"comment-bar\">\n\t\t\t\t\t\t<table>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td class=\"tleft\">\n\t\t\t\t\t\t\t\t\t- {{comment.author}}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td class=\"tright\">\n\t\t\t\t\t\t\t\t\t<button class=\"select\" type=\"submit\" class=\"btn btn-default\" (click)=\"select()\" [disabled]=\"confirmed\"\n\t\t\t\t\t\t\t\t\t*ngIf=\"isJobAuthor\"\n\t\t\t\t\t\t\t\t\tmwlConfirmationPopover\n\t\t\t\t\t\t\t\t\t[popoverTitle]=\"popoverTitle\"\n\t\t\t\t\t\t\t\t\t[popoverMessage]=\"popoverMessage\"\n\t\t\t\t\t\t\t\t\tplacement=\"left\"\n\t\t\t\t\t\t\t\t\t(confirm)=\"paySubmission(comment)\"\n\t\t\t\t\t\t\t\t\t(cancel)=\"cancelClicked = true\">Pay</button>\n\n\t\t\t\t\t\t\t\t\t<span class=\"reply\"> Reply </span>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t    </ul>\n\t    </div>\n\n\t  </div>\n\t</div>\n\t</div>\n  <div class=\"col-md-1\"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/comments/comments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__comment_service__ = __webpack_require__("../../../../../src/app/comment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__job_service__ = __webpack_require__("../../../../../src/app/job.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_comment__ = __webpack_require__("../../../../../src/app/models/comment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CommentsComponent = /** @class */ (function () {
    function CommentsComponent(auth, commentService, jobService, router, route, fb) {
        this.auth = auth;
        this.commentService = commentService;
        this.jobService = jobService;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.isLoggedIn = this.auth.isLoggedIn();
        this.isJobAuthor = false;
        this.newComment = new __WEBPACK_IMPORTED_MODULE_3__models_comment__["a" /* default */]();
        this.isSelecting = false;
        this.api_data_job_addr = {};
        this.popoverTitle = 'Select For Payment';
        this.popoverMessage = "Are you sure you want this user to recieve your job's funds (" + this.api_data_job_addr.balance + " tBTC)?\n Your job will be marked complete.";
        this.confirmClicked = false;
        this.cancelClicked = false;
        this.createForm();
        this.newComment = new __WEBPACK_IMPORTED_MODULE_3__models_comment__["a" /* default */]();
    }
    CommentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.jobId = params['id'];
            _this.jobService.getJob(_this.jobId).subscribe(function (params) {
                _this.job = params.job;
                if (_this.isLoggedIn) {
                    _this.newComment.jobId = _this.jobId;
                    _this.newComment.author = _this.auth.getUserDetails().name;
                    if (_this.newComment.author == _this.job.author) {
                        _this.isJobAuthor = true;
                    }
                }
            });
        });
        this.commentService.getComments(this.jobId)
            .subscribe(function (comments) {
            _this.commentList = comments.commentList;
        });
    };
    CommentsComponent.prototype.createForm = function () {
        this.form = this.fb.group({
            content: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* Validators */].required]
        });
    };
    CommentsComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            var file_1 = event.target.files[0];
            reader.readAsDataURL(file_1);
            reader.onload = function () {
                console.log(file_1.type);
                _this.newComment.image_type = file_1.type;
                _this.newComment.image = reader.result.split(',')[1];
            };
        }
    };
    CommentsComponent.prototype.onSubmit = function () {
        this.newComment.content = this.form.get('content').value;
        this.postComment();
    };
    CommentsComponent.prototype.postComment = function () {
        var _this = this;
        this.commentService.postComment(this.newComment)
            .subscribe(function (res) {
            _this.commentList.push(_this.newComment);
        });
        this.commentService.getComments(this.jobId)
            .subscribe(function (comments) {
            _this.commentList = comments.commentList;
        });
    };
    CommentsComponent.prototype.showImage = function (comment) {
        return 'data:' + comment.image_type + ';base64,' + comment.image;
    };
    CommentsComponent.prototype.select = function () {
        this.isSelecting = !this.isSelecting;
        console.log(this.api_data_job_addr);
        this.popoverMessage = "Are you sure you want this user to recieve your job's funds (" + this.api_data_job_addr.balance + " tBTC)?\n Your job will be marked complete.";
    };
    CommentsComponent.prototype.paySubmission = function (selectedComment) {
        this.auth.jobComplete(this.job._id, selectedComment.author)
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.error(err);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], CommentsComponent.prototype, "api_data_job_addr", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_9" /* ViewChild */])('fileInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_core__["t" /* ElementRef */])
    ], CommentsComponent.prototype, "fileInput", void 0);
    CommentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
            selector: 'app-comments',
            template: __webpack_require__("../../../../../src/app/comments/comments.component.html"),
            styles: [__webpack_require__("../../../../../src/app/comments/comments.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_0__comment_service__["a" /* CommentService */],
            __WEBPACK_IMPORTED_MODULE_1__job_service__["a" /* JobService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */]])
    ], CommentsComponent);
    return CommentsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/findjob/findjob.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".job-list {\n\tlist-style: none;\n\tmargin-left: -40px;\n\tfont-size: 30px;\n}\n.job-item {\n\tborder: 2px solid #CCCCCC;\n\tbackground: #edf8f0;\n\tmargin: .5em 0;\n\tpadding: .5em 1em;\n}\n.job-description {\n\tfont-size:18px;\n\tpadding-left: 1em;\n}\n.page-number {\t\n\tdisplay:inline-block;\n\ttext-align:center;\n\tborder:1px solid #CCCCCC;\n\tbackground: #FAFAFA;\n\tmargin-right:5px;\n\tpadding:0 5px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/findjob/findjob.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n\t  <div class=\"col-md-1\"></div>\n\t  <div class=\"col-md-10\">\n\t\t\n\t\t<div class=\"pages\">\n\t\t\tPage: {{pageNumber}}\n\t\t\t<span class=\"page-number\" *ngFor=\"let page of countPages()\" (click)=\"changePage(page)\">\n\t\t\t\t{{page}}\n\t\t\t</span>\n\t\t</div>\n\n\t\t<div class=\"jobs\">\n\t\t\t<ul class=\"job-list\">\n\t\t\t\t<li class=\"job-item\" *ngFor=\"let job of jobList\">\n\t\t\t\t\t<a (click)=\"goToJob(job._id)\">\n\t\t\t\t\t\t{{job.title}}\n\t\t\t\t\t</a>\n\t\t\t\t\t<br>\n\t\t\t\t\t<span class=\"job-description\" [innerHtml]=\"job.description\">\n\t\t\t\t\t</span>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\n\t  </div>\n\t</div>\n  <div class=\"col-md-1\"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/findjob/findjob.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindJobComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__job_service__ = __webpack_require__("../../../../../src/app/job.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FindJobComponent = /** @class */ (function () {
    function FindJobComponent(jobService, router) {
        this.jobService = jobService;
        this.router = router;
        this.pageNumber = 1;
    }
    FindJobComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jobService.getJobs(this.pageNumber)
            .subscribe(function (jobs) {
            _this.jobList = jobs.jobList;
            _this.pageCount = jobs.pageCount;
        });
    };
    FindJobComponent.prototype.goToJob = function (jobId) {
        this.router.navigate(['/job/' + jobId]);
    };
    FindJobComponent.prototype.changePage = function (newPage) {
        var _this = this;
        this.jobService.getJobs(newPage)
            .subscribe(function (jobs) {
            _this.jobList = jobs.jobList;
            _this.pageCount = jobs.pageCount;
        });
        this.pageNumber = newPage;
    };
    FindJobComponent.prototype.countPages = function () {
        var pages = [];
        for (var i = 0; i < this.pageCount; i++) {
            pages.push(i + 1);
        }
        return pages;
    };
    FindJobComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-findjob',
            template: __webpack_require__("../../../../../src/app/findjob/findjob.component.html"),
            styles: [__webpack_require__("../../../../../src/app/findjob/findjob.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__job_service__["a" /* JobService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], FindJobComponent);
    return FindJobComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\">\n\t<div class=\"row\">\n\t<div class=\"col-md-2\"></div>\n\t<div class=\"col-md-8\">\n  \t\t<h1>this is the home page</h1>\n  \t</div>\n  \t<div class=\"col-md-2\"></div>\n</div> -->"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/home/home.component.html")
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/job.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JobService = /** @class */ (function () {
    function JobService(http) {
        this.http = http;
        this.api_url = 'https://lancerapp.herokuapp.com';
        this.postUrl = this.api_url + "/api/post";
        this.findUrl = this.api_url + "/api/find";
        this.jobUrl = this.api_url + "/api/job";
    }
    JobService.prototype.createJob = function (job) {
        return this.http.post(this.postUrl + "/submit", job)
            .map(function (res) {
            return { jobId: res["data"]._id, };
        });
    };
    JobService.prototype.getJob = function (id) {
        return this.http.get(this.jobUrl + "/" + id)
            .map(function (res) {
            return { job: res["data"] };
        });
    };
    JobService.prototype.getJobs = function (page) {
        return this.http.get(this.findUrl + "?page=" + page)
            .map(function (res) {
            return { jobList: res["data"].docs, pageCount: res["data"].pages };
        });
    };
    //Default Error handling method.
    JobService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    JobService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], JobService);
    return JobService;
}());



/***/ }),

/***/ "../../../../../src/app/job/job.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".listing {\n\tborder: 2px solid #CCCCCC;\n\tbackground: #edf8f0;\n\tpadding: 1em;\n}\n\n.job-title {\n\tfont-size: 2em;\n}\n\n#fundMe {\n\tmargin-top:1em;\n}\n\n.red-text {\n\tcolor:red;\n}\n\n.comments {\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/job/job.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-1\"></div>\n\t\t<div class=\"col-md-10\">\t      \n\t\t\t<div class=\"listing\">\n\n\t\t\t\t<div class=\"job-title\">\n\t\t\t\t\t<p> {{job?.title}} </p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"job-description\" [innerHtml]=\"job?.description\"></div>\n\n\t\t\t\t<hr>\n\n\t\t\t\t<p> Date created: {{job?.date_created}} </p>\n\t\t\t\t<p> Created by: {{job?.author}} </p>\n\t\t\t\t<p> Address: {{job?.address}} </p>\n\t\t\t\t<p>\n\t\t\t\t\tBalance: \n\t\t\t\t\t\t<span *ngIf=\"api_data_job_addr\">{{ api_data_job_addr.balance }} tBTC</span>\n\t\t\t\t\t\t<span *ngIf=\"!api_data_job_addr\"></span>\n\t\t\t\t</p>\n\t\t\t\t<div id=\"jobAdmin\" *ngIf=\"isJobAuthor\">\n\t\t\t\t\t<p>this is your job</p>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div id=\"fundMe\">\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-default\" (click)=\"fundMe()\" [disabled]=\"confirmed\">Fund Me</button>\n\t\t\t\t\t<app-transaction *ngIf =\"isFundingOpen\" [destination]=\"job.address\"></app-transaction>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\n\n\t\t</div>\n\t<div class=\"col-md-1\"></div>\n  </div>\n</div>\n\n<div class=\"comments\">\n\t<app-comments [api_data_job_addr]=\"api_data_job_addr\"></app-comments>\n</div>"

/***/ }),

/***/ "../../../../../src/app/job/job.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blockexplorer_service__ = __webpack_require__("../../../../../src/app/blockexplorer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__job_service__ = __webpack_require__("../../../../../src/app/job.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var JobComponent = /** @class */ (function () {
    function JobComponent(jobService, route, blockexplorer, fb, auth) {
        this.jobService = jobService;
        this.route = route;
        this.blockexplorer = blockexplorer;
        this.fb = fb;
        this.auth = auth;
        this.api_data_job_addr = {};
        this.isJobAuthor = false;
        this.isFundingOpen = false;
        this.submitted = false;
        this.confirmed = false;
        this.txid = 0;
        this.isLoggedIn = this.auth.isLoggedIn();
    }
    JobComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.jobId = params['id'];
        });
        this.jobService.getJob(this.jobId)
            .subscribe(function (params) {
            _this.job = params.job;
            _this.blockexplorer.get_addr(_this.job.address).subscribe(function (res) {
                _this.api_data_job_addr = res;
            });
        });
        if (this.isLoggedIn) {
            this.auth.profile().subscribe(function (user) {
                _this.user = user;
                if (_this.user.name == _this.job.author) {
                    _this.isJobAuthor = true;
                }
            });
        }
    };
    JobComponent.prototype.fundMe = function () {
        if (!this.submitted) {
            this.isFundingOpen = !this.isFundingOpen;
        }
    };
    JobComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-job',
            template: __webpack_require__("../../../../../src/app/job/job.component.html"),
            styles: [__webpack_require__("../../../../../src/app/job/job.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__job_service__["a" /* JobService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__blockexplorer_service__["a" /* BlockExplorerService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__authentication_service__["a" /* AuthenticationService */]])
    ], JobComponent);
    return JobComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-2\"></div>\n\t\t<div class=\"col-md-8\">\n\n\t\t\t<h1 class=\"form-signin-heading\">Sign in</h1>\n\t\t\t<p class=\"lead\">Not a member? <a routerLink=\"/register\">Register</a> an account.</p>\n\t\n\t\t\t<form (submit)=\"login()\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"name\">Username</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Enter your username\" [(ngModel)]=\"credentials.name\">\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"password\">Password</label>\n\t\t\t\t\t<input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Enter your password\" [(ngModel)]=\"credentials.password\">\n\t\t\t\t</div>\n\n\t\t\t\t<button type=\"submit\" class=\"btn btn-default\">Sign in!</button>\n\t\t\t</form>\n\n\t\t</div>\n\t\t<div class=\"col-md-2\"></div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.credentials = {
            name: '',
            password: ''
        };
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.auth.login(this.credentials).subscribe(function () {
            _this.router.navigateByUrl('/profile');
        }, function (err) {
            console.error(err);
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/login/login.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/comment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Comment = /** @class */ (function () {
    function Comment() {
        this.jobId = "";
        this.parentId = "";
        this.content = "";
        this.author = "";
        this.date_created = new Date();
        this.image = "";
        this.image_type = "";
    }
    return Comment;
}());
/* harmony default export */ __webpack_exports__["a"] = (Comment);


/***/ }),

/***/ "../../../../../src/app/models/job.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Job = /** @class */ (function () {
    function Job() {
        this._id = "";
        this.title = "";
        this.description = "";
        this.author = "";
        this.date_created = new Date();
        this.address = "";
    }
    Job.prototype.setAuthor = function (author) {
        this.author = author;
    };
    return Job;
}());
/* harmony default export */ __webpack_exports__["a"] = (Job);


/***/ }),

/***/ "../../../../../src/app/postjob/postjob.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-invalid {\n\tcolor: red;\n}\n\n#message-login {\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/postjob/postjob.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-2\"></div>\n\t\t<div class=\"col-md-8\">\n\n\t\t\t<div class=\"message-login\" *ngIf=\"!isLoggedIn\">\n\t\t\t\t<p>To make a submission, you must <a routerLink=\"/login\">log in</a> or <a routerLink=\"/register\">register</a>.</p>\n\t\t\t</div>\n\n\t\t\t<div class=\"form-newjob\" *ngIf=\"isLoggedIn\">\n\t\t\t\t<h1 class=\"form-newjob-heading\">New Submission</h1>\n\n\t\t\t\t<form [formGroup]=\"form\" (submit)=\"onSubmit()\">\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"Title\">Title</label>\n\t\t\t\t\t\t<input class=\"form-control\" name=\"title\" placeholder=\"Title of the job\" formControlName=\"title\">\n\t\t\t\t\t\t<p class=\"form-invalid\" *ngIf=\"form.controls.title.errors?.required && (form.controls.title.dirty || form.controls.title.touched)\">Submission title is required.</p>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"description\">Description</label>\n\t\t\t\t\t\t<textarea class=\"form-control\" name=\"description\" placeholder=\"Description of the job\" formControlName=\"description\"></textarea>\n\t\t\t\t\t\t<p class=\"form-invalid\" *ngIf=\"form.controls.description.errors?.required && (form.controls.description.dirty || form.controls.description.touched)\">Submission description is required.</p>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!form.valid\">Create Job</button>\n\t\t\t\t</form>\n\n\t\t\t</div>\n\t\t\t<div class=\"col-md-2\"></div>\n\t\t</div>\n\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/postjob/postjob.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostJobComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__job_service__ = __webpack_require__("../../../../../src/app/job.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_job__ = __webpack_require__("../../../../../src/app/models/job.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_markdown__ = __webpack_require__("../../../../markdown/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_markdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_markdown__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PostJobComponent = /** @class */ (function () {
    function PostJobComponent(auth, jobService, router, http, fb) {
        this.auth = auth;
        this.jobService = jobService;
        this.router = router;
        this.http = http;
        this.fb = fb;
        this.submitted = false;
        this.newJob = new __WEBPACK_IMPORTED_MODULE_4__models_job__["a" /* default */]();
        this.isLoggedIn = this.auth.isLoggedIn();
        this.jobId = String;
        this.createForm();
    }
    PostJobComponent.prototype.createForm = function () {
        this.form = this.fb.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* Validators */].required],
            description: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* Validators */].required]
        });
    };
    PostJobComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        this.postJob();
    };
    PostJobComponent.prototype.postJob = function () {
        var _this = this;
        this.newJob.author = this.auth.getUserDetails().name;
        this.newJob.title = this.form.get('title').value;
        this.newJob.description = __WEBPACK_IMPORTED_MODULE_7_markdown__["markdown"].toHTML(this.form.get('description').value);
        this.jobService.createJob(this.newJob)
            .subscribe(function (res) {
            _this.jobId = res.jobId;
            _this.router.navigate(['/job/' + _this.jobId]);
        });
    };
    PostJobComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/postjob/postjob.component.html"),
            styles: [__webpack_require__("../../../../../src/app/postjob/postjob.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_3__job_service__["a" /* JobService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */]])
    ], PostJobComponent);
    return PostJobComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n\tmargin-bottom: .75em;\n}\n\n.form-control-static-red {\n\tcolor:red;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-2\"></div>\n\t\t <div class=\"col-md-8\">\n\n\t\t\t<h1 class=\"form-signin-heading\">My Profile</h1>\n\n\t\t\t<div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"col-sm-3 control-label\">Username:</label>\n\t\t\t\t\t<p class=\"form-control-static\">{{ profile?.name }}</p>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"col-sm-3 control-label\">Public Address:</label>\n\t\t\t\t\t<p class=\"form-control-static\">{{ profile?.address }}</p>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"col-sm-3 control-label\">WIF lol:</label>\n\t\t\t\t\t<p class=\"form-control-static\">{{ profile?.WIF }}</p>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"col-sm-3 control-label\">Balance: </label>\n\t\t\t\t\t<p class=\"form-control-static\" *ngIf=\"api_data.balance\">{{ api_data.balance }} tBTC</p>\n\t\t\t\t\t<!-- <p class=\"form-control-static-red\" *ngIf=\"!api_data.balance\">Error: Could not connect to Blockexplorer.</p> -->\n\t\t\t\t</div>\n\n\t\t\t\t<div id=\"withdrawal\">\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-default\" (click)=\"withdrawal()\" [disabled]=\"confirmed\">Withdraw</button>\n\t\t\t\t\t<app-transaction *ngIf =\"isWithdrawing\"></app-transaction>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\t\t<div class=\"col-md-2\"></div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blockexplorer_service__ = __webpack_require__("../../../../../src/app/blockexplorer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(auth, blockexplorer) {
        this.auth = auth;
        this.blockexplorer = blockexplorer;
        this.isWithdrawing = false;
        this.api_data = {};
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.profile().subscribe(function (res) {
            _this.profile = res.profile;
            // console.log("profile: " + JSON.stringify(this.profile));
            // console.log("profile_address: " + this.profile.address);
            _this.blockexplorer.get_addr(_this.profile.address).subscribe(function (res) {
                _this.api_data = res;
            });
        }, function (err) {
            console.error(err);
        });
    };
    ProfileComponent.prototype.withdrawal = function () {
        this.isWithdrawing = !this.isWithdrawing;
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_2__blockexplorer_service__["a" /* BlockExplorerService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-invalid {\n\tcolor: red;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-2\"></div>\n\t\t<div class=\"col-md-8\">\n\n\t\t\t<h1>Register</h1>\n\t\t\t<p class=\"lead\">Already a member? <a routerLink=\"/login\">Log in</a> instead.</p>\n\n\t\t\t<form [formGroup]=\"form\" (submit)=\"onSubmit()\">\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"name\">Username</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Enter your username\" formControlName=\"name\">\n\t\t\t\t\t<p class=\"form-invalid\" *ngIf=\"form.controls.name.errors?.required && (form.controls.name.dirty || form.controls.name.touched)\">Username is required.</p>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"password\">Password</label>\n\t\t\t\t\t<input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Enter your password\"  formControlName=\"password\">\n\t\t\t\t\t<p class=\"form-invalid\" *ngIf=\"form.controls.password.errors?.required && (form.controls.password.dirty || form.controls.password.touched)\">Password is required</p>\n\t\t\t\t</div>\n\n\t\t\t\t<button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!form.valid\">Register!</button>\n\t\t\t</form>\n\t\t</div>\n\n\t\t<div class=\"col-md-2\"></div>\n\t</div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth, router, fb) {
        this.auth = auth;
        this.router = router;
        this.fb = fb;
        this.submitted = false;
        // credentials will recieve values from formbuilder after submit
        this.credentials = {
            name: '',
            password: ''
        };
        this.createForm();
    }
    RegisterComponent.prototype.createForm = function () {
        this.form = this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required]
        });
    };
    RegisterComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        this.register();
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.credentials.name = this.form.get('name').value;
        this.credentials.password = this.form.get('password').value;
        this.auth.register(this.credentials).subscribe(function () {
            _this.router.navigateByUrl('/profile');
        }, function (err) {
            console.error(err);
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/transaction/transaction.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#transaction {\n\tborder: 2px solid #CCCCCC;\n\tpadding: 2em;\n\tmargin-top: 1em;\n\tbackground: #d0ecd9;\n}\n\n.form-invalid {\n\tcolor: red;\n}\n\n.form-success {\n\tcolor: green;\n}\n\n.confirmation {\n\tmargin-top: .5em;\n}\n\n.red-text {\n\tcolor: red;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/transaction/transaction.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"transaction\">\n\t<div *ngIf=\"!isLoggedIn\" class=\"message-login\">\n\t\t<p>To make a contribution, you must <a routerLink=\"/login\">log in</a> or <a routerLink=\"/register\">register</a>.</p>\n\t</div>\n\n\t<div *ngIf=\"!api_data_user_addr.balance\">\n\t\t<p class=\"red-text\">Error: User account data could not be loaded.</p>\n\t</div>\n\n\t<div *ngIf=\"isLoggedIn && api_data_user_addr.balance\">\n\n\t<form [formGroup]=\"form\" (submit)=\"onSubmit()\">\n\n\t\t<p class=\"form-control-static\" *ngIf=\"api_data_user_addr.balance\">Your account balance: {{api_data_user_addr.balance}} tBTC</p>\n\t\t<p class=\"form-control-static-red\" *ngIf=\"!api_data_user_addr.balance\"> Error: Check internet connection.</p>\n\n\t\t<div *ngIf=\"isDestinationLocked\">\n\t\t\t<p> <b>Destination Address:</b> {{destination}} </p>\n\t\t</div>\n\n\t\t<div *ngIf=\"!isDestinationLocked\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"tx_destination\">Destination Address:</label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"tx_destination\" formControlName=\"tx_destination\">\n\t\t\t\t<p class=\"red-text\" *ngIf=\"form.controls.tx_destination.errors?.required && (form.controls.tx_destination.dirty || form.controls.tx_destination.touched)\">Destination is required</p>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"tx_value\">Amount to send (in tBTC):</label>\n\t\t\t<input type=\"text\" class=\"form-control\" name=\"tx_value\" placeholder=\"1\"  formControlName=\"tx_value\">\n\t\t\t<p class=\"red-text\" *ngIf=\"form.controls.tx_value.errors?.required && (form.controls.tx_value.dirty || form.controls.tx_value.touched)\">Amount is required</p>\n\t\t\t<p class=\"red-text\" *ngIf=\"api_data_user_addr.balance < form.controls.tx_value.value\">Amount cannot be greater than your account balance.</p>\n\t\t</div>\n\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"tx_fees\">Transaction fees:</label>\n\t\t\t<input type=\"text\" class=\"form-control\" name=\"tx_fees\" placeholder=\".0001\"  formControlName=\"tx_fees\">\n\t\t\t<p class=\"red-text\" *ngIf=\".01 < form.controls.tx_fees.value\">Fees must be < .01</p>\n\t\t\t<p class=\"red-text\" *ngIf=\".00002 >= form.controls.tx_fees.value\">Fees must be > .00002</p>\n\t\t</div>\n\n\t\t<button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!form.valid\">Send Transaction</button>\n\n\t\t<div class=\"confirmation\">\n\t\t\t<p class=\"red-text\" *ngIf=\"confirmed && txid == 0\">Your transaction could not be sent.</p>\n\t\t\t<p class=\"form-success\" *ngIf=\"confirmed && txid != 0\">Success! txid: {{txid}}</p>\n\t\t</div>\n\t</form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/transaction/transaction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blockexplorer_service__ = __webpack_require__("../../../../../src/app/blockexplorer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TransactionComponent = /** @class */ (function () {
    function TransactionComponent(route, blockexplorer, fb, auth) {
        this.route = route;
        this.blockexplorer = blockexplorer;
        this.fb = fb;
        this.auth = auth;
        this.isDestinationLocked = false;
        this.api_data_user_addr = {};
        this.destination = "";
        this.submitted = false;
        this.confirmed = false;
        this.txid = 0;
        this.createForm();
        this.isLoggedIn = this.auth.isLoggedIn();
    }
    TransactionComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.destination != "") {
            this.form.controls.tx_destination.setValue(this.destination);
            this.isDestinationLocked = true;
        }
        if (this.isLoggedIn) {
            this.auth.profile().subscribe(function (res) {
                _this.user = res.profile;
                _this.blockexplorer.get_addr(_this.user.address).subscribe(function (res) {
                    _this.api_data_user_addr = res;
                });
            });
        }
    };
    TransactionComponent.prototype.createForm = function () {
        this.form = this.fb.group({
            tx_destination: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            tx_value: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            tx_fees: ['.0002', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required]
        });
    };
    TransactionComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        if (this.api_data_user_addr.balance < this.form.controls.tx_value.value) {
            return;
        }
        this.auth.transaction(this.user._id, this.form.controls.tx_destination.value, this.form.controls.tx_value.value)
            .subscribe(function (res) {
            console.log(res);
            _this.txid = JSON.parse(res).txid;
            _this.confirmed = true;
        }, function (err) {
            console.error(err);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], TransactionComponent.prototype, "destination", void 0);
    TransactionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-transaction',
            template: __webpack_require__("../../../../../src/app/transaction/transaction.component.html"),
            styles: [__webpack_require__("../../../../../src/app/transaction/transaction.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__blockexplorer_service__["a" /* BlockExplorerService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__authentication_service__["a" /* AuthenticationService */]])
    ], TransactionComponent);
    return TransactionComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map