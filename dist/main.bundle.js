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
exports.push([module.i, "/* Add a black background color to the top navigation */\n.topnav {\n/*     background-color: #FFEA6F; */\n    background-color: #1F3357;\n    overflow: hidden;\n}\n/* Style the links inside the navigation bar */\n.topnav a {\n    float: left;\n    display: block;\n    color: #f2f2f2;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n    font-size: 17px;\n}\n/* Add an active class to highlight the current page */\n.active {\n    background-color: #3D78BB;\n    color: white;\n}\n/* Hide the link that should open and close the topnav on small screens */\n.topnav .icon {\n    display: none;\n}\n/* Dropdown container - needed to position the dropdown content */\n.dropdown {\n    float: left;\n    overflow: hidden;\n}\n/* Style the dropdown button to fit inside the topnav */\n.dropdown .dropbtn {\n    font-size: 17px; \n    border: none;\n    outline: none;\n    color: white;\n    padding: 14px 16px;\n    background-color: inherit;\n    font-family: inherit;\n    margin: 0;\n}\n/* Style the dropdown content (hidden by default) */\n.dropdown-content {\n    display: none;\n    position: absolute;\n    background-color: #f9f9f9;\n    min-width: 160px;\n    -webkit-box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index: 1;\n}\n/* Style the links inside the dropdown */\n.dropdown-content a {\n    float: none;\n    color: black;\n    padding: 12px 16px;\n    text-decoration: none;\n    display: block;\n    text-align: left;\n}\n/* Add a dark background on topnav links and the dropdown button on hover */\n.topnav a:hover, .dropdown:hover .dropbtn {\n    background-color: #909AAC;\n    color: #FFEA6F;\n}\n/* Add a grey background to dropdown links on hover */\n.dropdown-content a:hover {\n    background-color: #ddd;\n    color: black;\n}\n/* Show the dropdown menu when the user moves the mouse over the dropdown button */\n.dropdown:hover .dropdown-content {\n    display: block;\n}\n/* When the screen is less than 600 pixels wide, hide all links, except for the first one (\"Home\"). Show the link that contains should open and close the topnav (.icon) */\n@media screen and (max-width: 650px) {\n  .topnav a:not(:first-child), .dropdown .dropbtn {\n    display: none;\n  }\n  .topnav a.icon {\n    float: right;\n    display: block;\n  }\n}\n/* The \"responsive\" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */\n@media screen and (max-width: 650px) {\n  .topnav.responsive {position: relative;}\n  .topnav.responsive a.icon {\n    position: absolute;\n    right: 0;\n    top: 0;\n  }\n  .topnav.responsive a {\n    float: none;\n    display: block;\n    text-align: left;\n  }\n  .topnav.responsive .dropdown {float: none;}\n  .topnav.responsive .dropdown-content {position: relative;}\n  .topnav.responsive .dropdown .dropbtn {\n    display: block;\n    width: 100%;\n    text-align: left;\n  }\n}\n.login {\n\tfloat: right !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n<!-- <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.5.0/css/all.css\"> -->\n\n<div class=\"topnav\" id=\"myTopnav\">\n  <a class=\"active\" href=\"#\"><i class=\"fa fa-fw fa-home\"></i> Home</a> \n<!--   <a href=\"#\"><i class=\"fa fa-fw fa-search\"></i> Search</a>  -->\n  <a href=\"#\"><i class=\"fa fa-fw fa-envelope\"></i> Contact</a> \n<!--   <div class=\"dropdown\"> -->\n<!--     <button class=\"dropbtn\">Dropdown  -->\n<!--       <i class=\"fa fa-caret-down\"></i> -->\n<!--     </button> -->\n<!--     <div class=\"dropdown-content\"> -->\n<!--       <a href=\"#\">Link 1</a> -->\n<!--       <a href=\"#\">Link 2</a> -->\n<!--       <a href=\"#\">Link 3</a> -->\n<!--     </div> -->\n<!--   </div>    -->\n  <a href=\"#about\"><i class=\"fa fa-fw fa-bolt\"></i>About</a>\n  <a href=\"javascript:void(0);\" class=\"icon\" (click)=\"myFunction()\">\n    <i class=\"fa fa-bars\"></i>\n  </a>\n    <a href=\"#\" class=\"login\"><i class=\"fa fa-fw fa-user\"></i> Login</a>\n</div>\n\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}! - We are under construction\n  </h1>\n  \n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
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
    function AppComponent(appService, titleService) {
        this.appService = appService;
        this.titleService = titleService;
        this.title = 'Rolling Thunder';
    }
    AppComponent.prototype.ngOnInit = function () {
        //      this.showData();
        this.appService.changeFavicon('https://royaleapi.com/static/img/badge/gold-3/Bolt_03.png');
        this.setTitle('Rolling Thunder');
    };
    AppComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    AppComponent.prototype.showData = function () {
        var _this = this;
        this.appService.getData()
            .subscribe(function (res) {
            _this.data = JSON.stringify(res);
            //            console.log(this.data);
        });
    };
    AppComponent.prototype.myFunction = function () {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        }
        else {
            x.className = "topnav";
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* Title */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
        this.url = 'https://api.royaleapi.com/player/J8YL90U2';
        this.auth = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAzNCwiaWRlbiI6IjI4NzEwODcxMDE1NTY4MTc5NCIsIm1kIjp7fSwidHMiOjE1NDI4MjY2Mzk0NTd9.FH8-yfk_eeIiLd1put1lSc6iY2K1QSlVBnjF73g-auI';
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'auth': this.auth
            })
        };
        this.changeFavicon = function (link) {
            var $favicon = document.querySelector('link[rel="icon"]');
            // If a <link rel="icon"> element already exists,
            // change its href to the given link.
            if ($favicon !== null) {
                $favicon.href = link;
                // Otherwise, create a new element and append it to <head>.
            }
            else {
                $favicon = document.createElement("link");
                $favicon.rel = "icon";
                $favicon.href = link;
                document.head.appendChild($favicon);
            }
        };
    }
    AppService.prototype.getData = function () {
        return this.http.get(this.url, this.httpOptions);
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AppService);
    return AppService;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
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