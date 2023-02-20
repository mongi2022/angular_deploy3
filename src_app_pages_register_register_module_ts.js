"use strict";
(self["webpackChunkhousekey"] = self["webpackChunkhousekey"] || []).push([["src_app_pages_register_register_module_ts"],{

/***/ 46698:
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.component.html?ngResource */ 59434);
/* harmony import */ var _register_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.component.scss?ngResource */ 90053);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/theme/utils/app-validators */ 38955);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.service */ 70900);









let RegisterComponent = class RegisterComponent {
    constructor(fb, router, snackBar, appService) {
        this.fb = fb;
        this.router = router;
        this.snackBar = snackBar;
        this.appService = appService;
        this.hide = true;
        this.email = '';
        this.userTypes = [
            { id: 1, name: 'Particulier' },
            { id: 2, name: 'Professionel' },
            // { id: 3, name: 'Buyer' }
        ];
    }
    ngOnInit() {
        this.registerForm = this.fb.group({
            userType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(6)])],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_2__.emailValidator])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            receiveNewsletter: false
        }, { validator: (0,src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_2__.matchingPasswords)('password', 'confirmPassword') });
    }
    register() {
        //console.log(this.registerForm.value.email);
        this.appService.register({ name: this.registerForm.value.username, email: this.registerForm.value.email,
            password: this.registerForm.value.password }).subscribe(data => {
            localStorage.setItem('accessToken', data.accessToken);
            console.log(data);
            this.router.navigate(['/login']);
        }, error => {
            console.log(error.error.message);
            alert(error.error.message);
        });
    }
    /*
         this.appService.register({name:this.registerForm.value.username,email:this.registerForm.value.email,
        password:this.registerForm.value.password}).subscribe(data=>{
         
          localStorage.setItem('accessToken',data.accessToken)
          console.log(data);
          
        }) */
    onRegisterFormSubmit(values) {
        if (this.registerForm.valid) {
            // console.log(values);
            this.snackBar.open('You registered successfully!', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
        }
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar },
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_3__.AppService }
];
RegisterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-register',
        template: _register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_register_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterComponent);



/***/ }),

/***/ 60207:
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterModule": () => (/* binding */ RegisterModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.component */ 46698);






const routes = [
    { path: '', component: _register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent, pathMatch: 'full' }
];
let RegisterModule = class RegisterModule {
};
RegisterModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ]
    })
], RegisterModule);



/***/ }),

/***/ 90053:
/*!*******************************************************************!*\
  !*** ./src/app/pages/register/register.component.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 59434:
/*!*******************************************************************!*\
  !*** ./src/app/pages/register/register.component.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"p-3\">\r\n    <div class=\"theme-container\">\r\n  \r\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"my-3\">\r\n          <mat-card [style.max-width.px]=\"500\">\r\n            <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"text-center\">  \r\n              <h1 class=\"uppercase\">S'enregistrer</h1>  \r\n              <a mat-button routerLink=\"/login\" color=\"accent\" class=\"w-100\">Vous avez déjà un compte?&nbsp;&nbsp;&nbsp;&nbsp; Se connecter!</a>  \r\n            </div>\r\n            <form [formGroup]=\"registerForm\" > \r\n                <mat-form-field  appearance=\"outline\" class=\"w-100 mt-2\">\r\n                    <mat-icon matPrefix class=\"mr-1 text-muted\">group</mat-icon>\r\n                    <mat-label>Type de compte</mat-label>\r\n                    <mat-select placeholder=\"Choisissez le type de votre compte\" formControlName=\"userType\">\r\n                        <mat-option *ngFor=\"let type of userTypes\" [value]=\"type\">\r\n                            {{type.name}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                    <mat-error *ngIf=\"registerForm.controls.userType.errors?.required\">User type is required</mat-error>                   \r\n                </mat-form-field>\r\n                <mat-form-field  appearance=\"outline\" class=\"w-100 mt-2\">\r\n                    <mat-icon matPrefix class=\"mr-1 text-muted\">person</mat-icon>\r\n                    <mat-label>Username</mat-label>\r\n                    <input matInput placeholder=\"Username\" formControlName=\"username\" required>\r\n                    <mat-error *ngIf=\"registerForm.controls.username.errors?.required\">Username is required</mat-error>\r\n                    <mat-error *ngIf=\"registerForm.controls.username.hasError('minlength')\">Username isn't long enough, minimum of 6 characters</mat-error>\r\n                </mat-form-field>\r\n                <mat-form-field  appearance=\"outline\" class=\"w-100 mt-1\">\r\n                    <mat-icon matPrefix class=\"mr-1 text-muted\">email</mat-icon>\r\n                    <mat-label>Email</mat-label>\r\n                    <input matInput placeholder=\"Email\" formControlName=\"email\" required>\r\n                    <mat-error *ngIf=\"registerForm.controls.email.errors?.required\">Email is required</mat-error>\r\n                    <mat-error *ngIf=\"registerForm.controls.email.hasError('invalidEmail')\">Invalid email address</mat-error>\r\n                </mat-form-field>\r\n                <mat-form-field  appearance=\"outline\" class=\"w-100 mt-1\">\r\n                  <mat-icon matPrefix class=\"mr-1 text-muted\">lock</mat-icon>\r\n                  <mat-label>Mot de passe</mat-label>\r\n                  <input matInput placeholder=\"Password\" formControlName=\"password\" type=\"password\" minlength=\"6\" required [type]=\"hide ? 'password' : 'text'\">\r\n                  <mat-error *ngIf=\"registerForm.controls.password.errors?.required\">Password is required</mat-error>\r\n                  <mat-error *ngIf=\"registerForm.controls.password.hasError('minlength')\">Password isn't long enough, minimum of 6 characters</mat-error>\r\n                  <button mat-icon-button matSuffix (click)=\"hide = !hide\" type=\"button\" class=\"text-muted\">\r\n                      <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                  </button>\r\n                </mat-form-field> \r\n                <mat-form-field  appearance=\"outline\" class=\"w-100 mt-1\">\r\n                  <mat-icon matPrefix class=\"mr-1 text-muted\">lock</mat-icon>\r\n                  <mat-label>Confirmer mot de passe</mat-label>\r\n                  <input matInput placeholder=\"Confirm Password\" formControlName=\"confirmPassword\" type=\"password\" required [type]=\"hide ? 'password' : 'text'\">\r\n                  <mat-error *ngIf=\"registerForm.controls.confirmPassword.errors?.required\">Confirm Password is required</mat-error>\r\n                  <mat-error *ngIf=\"registerForm.controls.confirmPassword.hasError('mismatchedPasswords')\">Passwords do not match</mat-error>\r\n                  <button mat-icon-button matSuffix (click)=\"hide = !hide\" type=\"button\" class=\"text-muted\">\r\n                      <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                  </button>\r\n                </mat-form-field> \r\n<!--                 <mat-slide-toggle formControlName=\"receiveNewsletter\" class=\"my-2\">Recevoir Newsletter</mat-slide-toggle>\r\n -->                <div class=\"text-center mt-2\"> \r\n                    <button (click)=\"register()\" mat-raised-button color=\"accent\" class=\"uppercase\" type=\"submit\">\r\n                        Créer un compte\r\n                    </button>\r\n                </div> \r\n            </form>\r\n            <div class=\"divider mt-4\"></div> \r\n            <mat-card-actions fxLayoutAlign=\"center center\" class=\"text-center\">\r\n<!--              <small class=\"my-3\">By clicking the \"Create an Account\" button you agree with our <a mat-button routerLink=\"/terms-conditions\" color=\"primary\" class=\"mx-2\">Terms and conditions</a> </small>\r\n -->            </mat-card-actions>\r\n          </mat-card>\r\n      </div> \r\n  \r\n    </div>\r\n  </div>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_register_register_module_ts.js.map