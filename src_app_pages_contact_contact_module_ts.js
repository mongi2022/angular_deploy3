"use strict";
(self["webpackChunkhousekey"] = self["webpackChunkhousekey"] || []).push([["src_app_pages_contact_contact_module_ts"],{

/***/ 45996:
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _contact_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.component.html?ngResource */ 77421);
/* harmony import */ var _contact_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.component.scss?ngResource */ 25502);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/theme/utils/app-validators */ 38955);






let ContactComponent = class ContactComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.lat = 40.678178;
        this.lng = -73.944158;
        this.zoom = 12;
    }
    ngOnInit() {
        this.contactForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_2__.emailValidator])],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
        });
    }
    onContactFormSubmit(values) {
        if (this.contactForm.valid) {
            console.log(values);
        }
    }
};
ContactComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder }
];
ContactComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-contact',
        template: _contact_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_contact_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ContactComponent);



/***/ }),

/***/ 17213:
/*!*************************************************!*\
  !*** ./src/app/pages/contact/contact.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactModule": () => (/* binding */ ContactModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ 93333);
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.component */ 45996);







const routes = [
    { path: '', component: _contact_component__WEBPACK_IMPORTED_MODULE_1__.ContactComponent, pathMatch: 'full' }
];
let ContactModule = class ContactModule {
};
ContactModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_contact_component__WEBPACK_IMPORTED_MODULE_1__.ContactComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _agm_core__WEBPACK_IMPORTED_MODULE_6__.AgmCoreModule
        ]
    })
], ContactModule);



/***/ }),

/***/ 25502:
/*!*****************************************************************!*\
  !*** ./src/app/pages/contact/contact.component.scss?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = ".contact-map .sebm-google-map-container {\n  height: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0oiLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWN0LW1hcCAuc2VibS1nb29nbGUtbWFwLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG59Il19 */";

/***/ }),

/***/ 77421:
/*!*****************************************************************!*\
  !*** ./src/app/pages/contact/contact.component.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "<app-header-image [backgroundImage]=\"'assets/images/others/contact.jpg'\" \r\n                  [bgImageAnimate]=\"false\" \r\n                  [contentOffsetToTop]=\"true\"                \r\n                  [title]=\"'Contact Us'\"\r\n                  [desc]=\"'Tu as une question? Nous vous donnerons une réponse directe'\">\r\n</app-header-image>\r\n\r\n<div class=\"px-3\">\r\n\r\n    <div class=\"theme-container\">\r\n        <mat-card class=\"main-content-header mb-5\">\r\n            \r\n            <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-around\">\r\n                <div fxFlex=\"100\" fxFlex.gt-xs=\"33.3\">\r\n                    <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"text-center\">\r\n                        <mat-icon color=\"primary\" class=\"mat-icon-lg\">home</mat-icon>\r\n                        <h3 class=\"primary-color py-1\">ADDRESSE :</h3>\r\n                        <span>Elmaita Chenini Gabes 6041 tunisie</span>\r\n                    </div>\r\n                </div>\r\n                <div fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" ngClass.xs=\"mt-2\">\r\n                    <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                        <mat-icon color=\"primary\" class=\"mat-icon-lg\">call</mat-icon>\r\n                        <h3 class=\"primary-color py-1\">TEL :</h3>\r\n                        <span>+21651860088</span>\r\n                        <span>+21651860088</span>\r\n                    </div>\r\n                </div>\r\n                <div fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" ngClass.xs=\"mt-2\">\r\n                    <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                        <mat-icon color=\"primary\" class=\"mat-icon-lg\">mail_outline</mat-icon>\r\n                        <h3 class=\"primary-color py-1\">E-MAIL :</h3>\r\n                        <span>contact@barsha.io</span>\r\n                        <span>contact@barsha.io</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"divider w-100 mt-3\"></div>\r\n                <h3 class=\"w-100 text-center py-3\">CONTACTEZ NOUS</h3>\r\n                \r\n                <form [formGroup]=\"contactForm\" (ngSubmit)=\"onContactFormSubmit(contactForm.value)\" fxLayout=\"row wrap\">\r\n                    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\" ngClass.sm=\"mt-1\" ngClass.xs=\"mt-1\">\r\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label>Nom</mat-label>\r\n                            <input matInput placeholder=\"Name\" formControlName=\"name\" required>\r\n                            <mat-error *ngIf=\"contactForm.controls.name.errors?.required\">Name is required</mat-error>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\" ngClass.sm=\"mt-1\" ngClass.xs=\"mt-1\">\r\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label>Email</mat-label>\r\n                            <input matInput placeholder=\"Email\" formControlName=\"email\" required>\r\n                            <mat-error *ngIf=\"contactForm.controls.email.errors?.required\">Email is required</mat-error>\r\n                            <mat-error *ngIf=\"contactForm.controls.email.hasError('invalidEmail')\">Invalid email address</mat-error>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\" ngClass.sm=\"mt-1\" ngClass.xs=\"mt-1\">\r\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label>Tel</mat-label>\r\n                            <input matInput placeholder=\"Phone\" formControlName=\"phone\" required>\r\n                            <mat-error *ngIf=\"contactForm.controls.phone.errors?.required\">Phone is required</mat-error>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div fxFlex=\"100\" class=\"px-1 mt-1\">\r\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label>Message</mat-label> \r\n                            <textarea matInput placeholder=\"Message\" formControlName=\"message\" required rows=\"7\"></textarea> \r\n                            <mat-error *ngIf=\"contactForm.controls.message.errors?.required\">Message is required</mat-error>\r\n                        </mat-form-field>\r\n                    </div> \r\n                    <div class=\"w-100 py-2 text-center\">\r\n                        <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\">Submit</button>\r\n                    </div> \r\n                </form> \r\n            \r\n            </div> \r\n            \r\n            <div class=\"mt-5 contact-map\">\r\n                <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [mapTypeControl]=\"true\" [fullscreenControl]=\"true\">\r\n                    <agm-marker [latitude]=\"lat\" [longitude]=\"lng\" [markerDraggable]=\"false\" ></agm-marker>\r\n                </agm-map>\r\n            </div>\r\n\r\n        </mat-card>  \r\n    </div>\r\n\r\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_contact_contact_module_ts.js.map