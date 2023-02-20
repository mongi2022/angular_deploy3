"use strict";
(self["webpackChunkhousekey"] = self["webpackChunkhousekey"] || []).push([["src_app_pages_about_about_module_ts"],{

/***/ 73794:
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _about_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.component.html?ngResource */ 92230);
/* harmony import */ var _about_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.component.scss?ngResource */ 13020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent.ctorParameters = () => [];
AboutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-about',
        template: _about_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_about_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AboutComponent);



/***/ }),

/***/ 18114:
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutModule": () => (/* binding */ AboutModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.component */ 73794);






const routes = [
    { path: '', component: _about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, pathMatch: 'full' }
];
let AboutModule = class AboutModule {
};
AboutModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ]
    })
], AboutModule);



/***/ }),

/***/ 13020:
/*!*************************************************************!*\
  !*** ./src/app/pages/about/about.component.scss?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 92230:
/*!*************************************************************!*\
  !*** ./src/app/pages/about/about.component.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "<app-header-image [backgroundImage]=\"'assets/images/others/about.jpg'\" \r\n                  [bgImageAnimate]=\"false\" \r\n                  [contentOffsetToTop]=\"true\"                \r\n                  [title]=\"'Qui sommes-nous?'\"\r\n                  [desc]=\"'Nous vous aidons à trouver votre bien'\">\r\n</app-header-image>\r\n\r\n\r\n<div class=\"theme-container\">\r\n    <mat-card class=\"main-content-header\">\r\n        \r\n        <div class=\"section pt-2\">\r\n            <div class=\"px-3\">\r\n                <div class=\"theme-container\">\r\n                    <h1 class=\"section-title\">Notre story</h1>\r\n\r\n                    <p class=\"px-3\">Nam enim diam, euismod in tincidunt in, euismod nec ligula. Aliquam erat volutpat. Integer vulputate lacus a volutpat aliquet. Mauris suscipit sollicitudin purus, et congue lectus dignissim vel. Vestibulum purus arcu, eleifend a odio non, bibendum dictum lectus. Nam vulputate accumsan quam facilisis aliquet. Cras accumsan et elit a consequat.</p>\r\n\r\n                    <div fxLayout=\"row wrap\">\r\n\r\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"p-3\"> \r\n                            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                <mat-icon class=\"mat-icon-xlg\" color=\"primary\">business</mat-icon>\r\n                                <h2 class=\"capitalize fw-600 mx-2\">A propos de notre agence</h2>\r\n                            </div>                            \r\n                            <p class=\"mt-2\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper lobortis quam, id imperdiet mi feugiat quis. Cras a odio posuere, rhoncus quam vitae, commodo neque. Nunc mollis velit vulputate, volutpat diam vitae, egestas turpis. In posuere tempor lorem, sit amet pulvinar nunc accumsan a. Quisque sem tellus, congue at eleifend sit amet, consectetur sit amet est. Integer sodales quam quis elit commodo consequat. Aenean posuere augue a justo gravida elementum laoreet tincidunt enim. Nullam sagittis mauris id dui scelerisque, eget dignissim est hendrerit. Praesent fringilla commodo egestas. Suspendisse bibendum purus vitae mi mattis laoreet.</p>\r\n                        </div>\r\n\r\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"p-3\"> \r\n                            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                <mat-icon class=\"mat-icon-xlg\" color=\"primary\">list_alt</mat-icon>\r\n                                <h2 class=\"capitalize fw-600 mx-2\">Vision</h2>\r\n                            </div> \r\n                            <p class=\"mt-2\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper lobortis quam, id imperdiet mi feugiat quis. Cras a odio posuere, rhoncus quam vitae, commodo neque. Nunc mollis velit vulputate, volutpat diam vitae, egestas turpis. In posuere tempor lorem, sit amet pulvinar nunc accumsan a. Quisque sem tellus, congue at eleifend sit amet, consectetur sit amet est. Integer sodales quam quis elit commodo consequat. Aenean posuere augue a justo gravida elementum laoreet tincidunt enim. Nullam sagittis mauris id dui scelerisque, eget dignissim est hendrerit. Praesent fringilla commodo egestas. Suspendisse bibendum purus vitae mi mattis laoreet.</p>\r\n                        </div>\r\n\r\n                    </div>\r\n            \r\n                    \r\n                </div>\r\n            </div>   \r\n        </div> \r\n\r\n    </mat-card> \r\n \r\n</div>\r\n\r\n<app-mission></app-mission>\r\n\r\n<app-our-services></app-our-services>\r\n\r\n<!-- <app-testimonials></app-testimonials>  \r\n -->\r\n<!-- <app-our-agents></app-our-agents>\r\n -->      \r\n<app-clients></app-clients>\r\n\r\n<app-get-in-touch></app-get-in-touch>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_about_about_module_ts.js.map