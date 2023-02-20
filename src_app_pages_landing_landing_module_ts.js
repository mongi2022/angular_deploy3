"use strict";
(self["webpackChunkhousekey"] = self["webpackChunkhousekey"] || []).push([["src_app_pages_landing_landing_module_ts"],{

/***/ 72768:
/*!****************************************************!*\
  !*** ./src/app/pages/landing/landing.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingComponent": () => (/* binding */ LandingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _landing_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing.component.html?ngResource */ 54461);
/* harmony import */ var _landing_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing.component.scss?ngResource */ 44085);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.settings */ 1182);






let LandingComponent = class LandingComponent {
    constructor(appSettings, router) {
        this.appSettings = appSettings;
        this.router = router;
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        document.getElementById('preloader').classList.add('hide');
    }
    getDemo(number) {
        if (number == 1) {
            this.settings.toolbar = 1;
            this.settings.header = 'default';
            this.settings.theme = 'blue';
            this.settings.rtl = false;
        }
        if (number == 2) {
            this.settings.toolbar = 1;
            this.settings.header = 'image';
            this.settings.theme = 'blue';
            this.settings.rtl = false;
        }
        if (number == 3) {
            this.settings.toolbar = 1;
            this.settings.header = 'carousel';
            this.settings.theme = 'blue';
            this.settings.rtl = false;
        }
        if (number == 4) {
            this.settings.toolbar = 1;
            this.settings.header = 'video';
            this.settings.theme = 'blue';
            this.settings.rtl = false;
        }
        if (number == 5) {
            this.settings.toolbar = 1;
            this.settings.header = 'map';
            this.settings.theme = 'blue';
            this.settings.rtl = false;
        }
        if (number == 6) {
            this.settings.toolbar = 1;
            this.settings.header = 'map';
            this.settings.theme = 'orange-dark';
            this.settings.rtl = false;
        }
        if (number == 7) {
            this.settings.toolbar = 2;
            this.settings.header = 'image';
            this.settings.theme = 'blue';
            this.settings.rtl = false;
        }
        if (number == 8) {
            this.settings.toolbar = 2;
            this.settings.header = 'image';
            this.settings.theme = 'orange-dark';
            this.settings.rtl = false;
        }
        if (number == 9) {
            this.settings.toolbar = 1;
            this.settings.header = 'image';
            this.settings.theme = 'blue';
            this.settings.rtl = true;
        }
        this.router.navigate(['/']);
    }
    getSkin(num) {
        if (num == 1) {
            this.settings.theme = 'blue';
            this.settings.header = "carousel";
        }
        if (num == 2) {
            this.settings.theme = 'green';
            this.settings.header = "carousel";
        }
        if (num == 3) {
            this.settings.theme = 'red';
            this.settings.header = "carousel";
        }
        if (num == 4) {
            this.settings.theme = 'pink';
            this.settings.header = "carousel";
        }
        if (num == 5) {
            this.settings.theme = 'purple';
            this.settings.header = "carousel";
        }
        if (num == 6) {
            this.settings.theme = 'grey';
            this.settings.header = "carousel";
        }
        this.settings.toolbar = 1;
        this.settings.rtl = false;
        this.router.navigate(['/']);
    }
    scrollToDemos() {
        var elmnt = document.getElementById("demos");
        elmnt.scrollIntoView({ behavior: "smooth" });
    }
    goToTop() {
        var elmnt = document.getElementById("top");
        elmnt.scrollIntoView({ behavior: "smooth" });
    }
};
LandingComponent.ctorParameters = () => [
    { type: src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__.AppSettings },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
LandingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-landing',
        template: _landing_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_landing_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LandingComponent);



/***/ }),

/***/ 97241:
/*!*************************************************!*\
  !*** ./src/app/pages/landing/landing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingModule": () => (/* binding */ LandingModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _landing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing.component */ 72768);






const routes = [
    { path: '', component: _landing_component__WEBPACK_IMPORTED_MODULE_1__.LandingComponent, pathMatch: 'full' }
];
let LandingModule = class LandingModule {
};
LandingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_landing_component__WEBPACK_IMPORTED_MODULE_1__.LandingComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        ]
    })
], LandingModule);



/***/ }),

/***/ 44085:
/*!*****************************************************************!*\
  !*** ./src/app/pages/landing/landing.component.scss?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = ".landing-page .header-section {\n  position: relative;\n  overflow: hidden;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  background-image: url('1-big.jpg');\n}\n.landing-page .header-section:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.81);\n}\n.landing-page .header-section .content {\n  position: relative;\n  z-index: 9;\n  color: #fff;\n  text-align: center;\n}\n.landing-page .header-section .content h1 {\n  font-size: 36px;\n  font-weight: 400;\n}\n.landing-page .header-section .content h4 {\n  font-size: 16px;\n  font-weight: 300;\n  max-width: 700px;\n  margin: 0 auto;\n}\n.landing-page .main-wrapper {\n  margin: -16px;\n}\n.landing-page .main-wrapper .box {\n  text-align: center;\n  padding: 16px;\n  margin-bottom: 24px;\n}\n.landing-page .main-wrapper .box h2 {\n  padding: 16px 0;\n  font-weight: 500;\n}\n.landing-page .main-wrapper .box .mat-card {\n  background-size: cover;\n  height: 300px;\n  background-position: top;\n  transition: 5s;\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);\n}\n.landing-page .main-wrapper .box:hover .mat-card {\n  background-position: bottom;\n}\n.landing-page p {\n  font-size: 16px;\n}\n.landing-page .copyright {\n  margin-top: 36px;\n  height: 64px;\n}\n.landing-page .copyright p {\n  font-size: 13px;\n  font-weight: 400;\n  margin-bottom: 0;\n  line-height: 1.2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0NBQUE7QUFBUjtBQUNRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7QUFDWjtBQUNRO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ1o7QUFBWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUVoQjtBQUFZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRWhCO0FBRUk7RUFDSSxhQUFBO0FBQVI7QUFDUTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ1o7QUFBWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUVoQjtBQUFZO0VBQ0ksc0JBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0EseUhBQUE7QUFFaEI7QUFHZ0I7RUFDSSwyQkFBQTtBQURwQjtBQU9JO0VBQ0ksZUFBQTtBQUxSO0FBT0k7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUFMUjtBQU1RO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUpaIiwiZmlsZSI6ImxhbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFuZGluZy1wYWdleyBcclxuICAgIC5oZWFkZXItc2VjdGlvbnsgXHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3Byb3BzL29mZmljZS0yLzEtYmlnLmpwZycpOyAgICAgICBcclxuICAgICAgICAmOmJlZm9yZXsgICAgICAgIFxyXG4gICAgICAgICAgICBjb250ZW50OiAnJzsgICAgICAgIFxyXG4gICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTsgXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsIDAuODEpOyAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250ZW50e1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDk7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGgxe1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoNHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICBcclxuICAgIH1cclxuICAgIC5tYWluLXdyYXBwZXJ7XHJcbiAgICAgICAgbWFyZ2luOiAtMTZweDtcclxuICAgICAgICAuYm94e1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7ICBcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDsgICAgICAgICBcclxuICAgICAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNnB4IDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tYXQtY2FyZHsgXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDVzOyBcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggM3B4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBweCAzcHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBweCAxcHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAubWF0LWNhcmR7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gICAgLmNvcHlyaWdodHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzNnB4O1xyXG4gICAgICAgIGhlaWdodDogNjRweDtcclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */";

/***/ }),

/***/ 54461:
/*!*****************************************************************!*\
  !*** ./src/app/pages/landing/landing.component.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "<mat-drawer-container class=\"landing-page\">\r\n       \r\n    <div class=\"p-3 header-section\" id=\"top\">\r\n        <div class=\"theme-container\">\r\n            <div fxLayout=\"row wrap\" class=\"content\">\r\n                <div fxFlex=\"100\" class=\"mb-5 py-3\"> \r\n                    <app-logo></app-logo>\r\n                </div>\r\n                <div fxFlex=\"100\" class=\"py-5\"> \r\n                    <h1>Angular Material Design Real Estate Template</h1>\r\n                    <h4 class=\"mt-3\">Housekey implements the official Angular Material Design components and built with Angular CLI. No Bootstrap!, No jQuery! and Only TypeScript! Start creating your app with Housekey template, 9 layouts, 7 color styles, 20+ pages</h4>\r\n                    <div class=\"py-5\">\r\n                        <button mat-raised-button color=\"primary\" class=\"uppercase mx-2\" (click)=\"scrollToDemos()\">View demos</button>\r\n                        <a mat-raised-button color=\"accent\" href=\"http://themeseason.com/\" target=\"_blank\" class=\"uppercase mx-2\">Purchase now</a> \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div> \r\n\r\n    <div class=\"p-3\">\r\n        <div class=\"theme-container\">\r\n\r\n            <div fxLayout=\"row wrap\" fxLayoutAlign=\"center\" id=\"demos\">\r\n                <div fxFlex=\"100\" class=\"text-center py-4\"> \r\n                    <h1 class=\"fw-500\">Check out our demo styles</h1>\r\n                    <p>Fully responsive, organized folder structure, clean & customizable code, easy to use and much more...</p>\r\n                </div>\r\n                <div fxFlex=\"100\" class=\"main-wrapper\">\r\n\r\n                    <div fxLayout=\"row wrap\">\r\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"box\">\r\n                            <mat-card [style.background-image]=\"'url(assets/images/demos/header-default.jpg)'\"></mat-card>\r\n                            <h2>Header default</h2>\r\n                            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\" (click)=\"getDemo(1)\">View demo</button>\r\n                        </div>\r\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"box\">\r\n                            <mat-card [style.background-image]=\"'url(assets/images/demos/header-image.jpg)'\"></mat-card>\r\n                            <h2>Header image</h2>\r\n                            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\" (click)=\"getDemo(2)\">View demo</button>\r\n                        </div>\r\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"box\">\r\n                            <mat-card [style.background-image]=\"'url(assets/images/demos/header-carousel.jpg)'\"></mat-card>\r\n                            <h2>Header carousel</h2>\r\n                            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\" (click)=\"getDemo(3)\">View demo</button>\r\n                        </div>\r\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"box\">\r\n                            <mat-card [style.background-image]=\"'url(assets/images/demos/header-video.jpg)'\"></mat-card>\r\n                            <h2>Header video</h2>\r\n                            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\" (click)=\"getDemo(4)\">View demo</button>\r\n                        </div>\r\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"box\">\r\n                            <mat-card [style.background-image]=\"'url(assets/images/demos/header-map.jpg)'\"></mat-card>\r\n                            <h2>Header map</h2>\r\n                            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\" (click)=\"getDemo(5)\">View demo</button>\r\n                        </div>\r\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"box\">\r\n                            <mat-card [style.background-image]=\"'url(assets/images/demos/dark-map.jpg)'\"></mat-card>\r\n                            <h2>Dark map</h2>\r\n                            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\" (click)=\"getDemo(6)\">View demo</button>\r\n                        </div> \r\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"box\">\r\n                            <mat-card [style.background-image]=\"'url(assets/images/demos/toolbar-2.jpg)'\"></mat-card>\r\n                            <h2>Toolbar version 2</h2>\r\n                            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\" (click)=\"getDemo(7)\">View demo</button>\r\n                        </div>\r\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"box\">\r\n                            <mat-card [style.background-image]=\"'url(assets/images/demos/dark.jpg)'\"></mat-card>\r\n                            <h2>Dark version</h2>\r\n                            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\" (click)=\"getDemo(8)\">View demo</button>\r\n                        </div>\r\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"box\">\r\n                            <mat-card [style.background-image]=\"'url(assets/images/demos/rtl.jpg)'\"></mat-card>\r\n                            <h2>RTL</h2>\r\n                            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\" (click)=\"getDemo(9)\">View demo</button>\r\n                        </div>\r\n\r\n                        <div fxFlex=\"100\" class=\"mt-5\">                               \r\n                            <h1 class=\"text-center\">Skins</h1> \r\n                        </div>\r\n\r\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"box\">\r\n                            <mat-card [style.background-image]=\"'url(assets/images/demos/blue.jpg)'\"></mat-card>\r\n                            <h2>Blue</h2>\r\n                            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\" (click)=\"getSkin(1)\">View demo</button>\r\n                        </div>\r\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"box\">\r\n                            <mat-card [style.background-image]=\"'url(assets/images/demos/green.jpg)'\"></mat-card>\r\n                            <h2>Green</h2>\r\n                            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\" (click)=\"getSkin(2)\">View demo</button>\r\n                        </div>\r\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"box\">\r\n                            <mat-card [style.background-image]=\"'url(assets/images/demos/red.jpg)'\"></mat-card>\r\n                            <h2>Red</h2>\r\n                            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\" (click)=\"getSkin(3)\">View demo</button>\r\n                        </div>\r\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"box\">\r\n                            <mat-card [style.background-image]=\"'url(assets/images/demos/pink.jpg)'\"></mat-card>\r\n                            <h2>Pink</h2>\r\n                            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\" (click)=\"getSkin(4)\">View demo</button>\r\n                        </div>\r\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"box\">\r\n                            <mat-card [style.background-image]=\"'url(assets/images/demos/purple.jpg)'\"></mat-card>\r\n                            <h2>Purple</h2>\r\n                            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\" (click)=\"getSkin(5)\">View demo</button>\r\n                        </div>\r\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"box\">\r\n                            <mat-card [style.background-image]=\"'url(assets/images/demos/grey.jpg)'\"></mat-card>\r\n                            <h2>Grey</h2>\r\n                            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\" (click)=\"getSkin(6)\">View demo</button>\r\n                        </div>\r\n\r\n                        <div fxFlex=\"100\" class=\"py-4 px-3 text-right\">\r\n                            <button mat-mini-fab (click)=\"goToTop()\">\r\n                                <mat-icon>keyboard_arrow_up</mat-icon>\r\n                            </button>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div> \r\n            </div> \r\n\r\n        </div>\r\n    </div>\r\n\r\n    <mat-toolbar class=\"copyright\">\r\n        <div class=\"theme-container\"> \r\n            <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between center\">\r\n                <p ngClass.xs=\"mt-1\">Copyright © 2021 All Rights Reserved</p>\r\n                <p>Designed & Developed by <a mat-button href=\"https://barsha.io\" target=\"_blank\">TheBarsha Technology</a></p>\r\n            </div>\r\n        </div>\r\n    </mat-toolbar> \r\n\r\n</mat-drawer-container>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_landing_landing_module_ts.js.map