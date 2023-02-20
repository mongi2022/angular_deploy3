"use strict";
(self["webpackChunkhousekey"] = self["webpackChunkhousekey"] || []).push([["src_app_pages_compare_compare_module_ts"],{

/***/ 9545:
/*!****************************************************!*\
  !*** ./src/app/pages/compare/compare.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompareComponent": () => (/* binding */ CompareComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _compare_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compare.component.html?ngResource */ 33004);
/* harmony import */ var _compare_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compare.component.scss?ngResource */ 45731);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ 70900);
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-swiper-wrapper */ 70598);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.settings */ 1182);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ 44658);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 50635);









let CompareComponent = class CompareComponent {
    constructor(appSettings, appService, mediaObserver) {
        this.appSettings = appSettings;
        this.appService = appService;
        this.mediaObserver = mediaObserver;
        this.config = {};
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.config = {
            observer: true,
            slidesPerView: 1,
            spaceBetween: 16,
            keyboard: false,
            navigation: false,
            pagination: false,
            simulateTouch: false,
            grabCursor: true,
            loop: false,
            preloadImages: true,
            lazy: false,
            breakpoints: {
                600: {
                    slidesPerView: 2
                },
                960: {
                    slidesPerView: 3,
                },
                1280: {
                    slidesPerView: 4,
                }
            }
        };
        this.watchForChanges();
    }
    ngOnDestroy() {
        this.watcher.unsubscribe();
    }
    disableSwiper() {
        setTimeout(() => {
            if (this.directiveRef) {
                this.config.keyboard = false;
                this.config.navigation = false;
                this.config.simulateTouch = false;
                this.directiveRef.update();
            }
        });
    }
    enableSwiper() {
        setTimeout(() => {
            if (this.directiveRef) {
                this.config.keyboard = true;
                this.config.navigation = { nextEl: '.carousel-next', prevEl: '.carousel-prev' };
                this.config.simulateTouch = true;
                this.directiveRef.update();
            }
        });
    }
    clear() {
        this.appService.Data.compareList.length = 0;
    }
    remove(property) {
        const index = this.appService.Data.compareList.indexOf(property);
        if (index !== -1) {
            this.appService.Data.compareList.splice(index, 1);
        }
        this.watchForChanges();
    }
    watchForChanges() {
        this.watcher = this.mediaObserver.asObservable()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)((changes) => changes.length > 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((changes) => changes[0]))
            .subscribe((change) => {
            if (change.mqAlias == 'xs' && this.appService.Data.compareList.length > 1) {
                this.enableSwiper();
            }
            else if (change.mqAlias == 'sm' && this.appService.Data.compareList.length > 2) {
                this.enableSwiper();
            }
            else if (change.mqAlias == 'md' && this.appService.Data.compareList.length > 3) {
                this.enableSwiper();
            }
            else if (change.mqAlias == 'lg' && this.appService.Data.compareList.length > 4) {
                this.enableSwiper();
            }
            else if (change.mqAlias == 'xl' && this.appService.Data.compareList.length > 4) {
                this.enableSwiper();
            }
            else {
                this.disableSwiper();
            }
        });
    }
};
CompareComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_3__.AppSettings },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_2__.AppService },
    { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__.MediaObserver }
];
CompareComponent.propDecorators = {
    directiveRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_8__.SwiperDirective,] }]
};
CompareComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-compare',
        template: _compare_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_compare_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CompareComponent);



/***/ }),

/***/ 14362:
/*!*************************************************!*\
  !*** ./src/app/pages/compare/compare.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompareModule": () => (/* binding */ CompareModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _compare_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compare.component */ 9545);






const routes = [
    { path: '', component: _compare_component__WEBPACK_IMPORTED_MODULE_1__.CompareComponent, pathMatch: 'full' }
];
let CompareModule = class CompareModule {
};
CompareModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_compare_component__WEBPACK_IMPORTED_MODULE_1__.CompareComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ]
    })
], CompareModule);



/***/ }),

/***/ 45731:
/*!*****************************************************************!*\
  !*** ./src/app/pages/compare/compare.component.scss?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = ".compare-carousel .compare-toolbar {\n  min-height: 72px;\n}\n.compare-carousel .compare-toolbar button.swipe-arrow {\n  position: relative;\n  margin-top: 0;\n  right: 0;\n  left: 0;\n  z-index: 2;\n}\n.compare-item .remove {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.compare-item .title {\n  text-align: center;\n}\n.compare-item .title a {\n  transition: 0.2s;\n  text-decoration: none;\n}\n.compare-item .address {\n  font-size: 12px;\n}\n.compare-item .details .item {\n  padding: 8px 0;\n}\n.compare-item .details .item span:first-child {\n  margin-right: 8px;\n  font-weight: 500;\n  min-width: 114px;\n}\n.compare-item .details .item .list span {\n  font-weight: normal;\n  min-width: auto;\n}\n.compare-item .details .item .list span:not(.last):after {\n  content: \",\";\n}\n.compare-item .details .item .list span.last:after {\n  content: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBhcmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxnQkFBQTtBQUFSO0FBQ1E7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7QUFDWjtBQUlJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtBQURSO0FBR0k7RUFDSSxrQkFBQTtBQURSO0FBRVE7RUFDSSxnQkFBQTtFQUNBLHFCQUFBO0FBQVo7QUFHSTtFQUNJLGVBQUE7QUFEUjtBQUlRO0VBQ0ksY0FBQTtBQUZaO0FBR1k7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFEaEI7QUFJZ0I7RUFDSSxtQkFBQTtFQUNBLGVBQUE7QUFGcEI7QUFHb0I7RUFDSSxZQUFBO0FBRHhCO0FBR29CO0VBQ0ksYUFBQTtBQUR4QiIsImZpbGUiOiJjb21wYXJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbXBhcmUtY2Fyb3VzZWx7ICAgIFxyXG4gICAgLmNvbXBhcmUtdG9vbGJhcntcclxuICAgICAgICBtaW4taGVpZ2h0OiA3MnB4O1xyXG4gICAgICAgIGJ1dHRvbi5zd2lwZS1hcnJvd3tcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgei1pbmRleDogMjsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5jb21wYXJlLWl0ZW17XHJcbiAgICAucmVtb3Zle1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICB9XHJcbiAgICAudGl0bGV7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGF7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYWRkcmVzc3tcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgICAuZGV0YWlsc3tcclxuICAgICAgICAuaXRlbXtcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4IDA7IFxyXG4gICAgICAgICAgICBzcGFuOmZpcnN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMTRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGlzdHtcclxuICAgICAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgJjpub3QoLmxhc3QpOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIixcIjsgXHJcbiAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICAmLmxhc3Q6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG5vbmU7IFxyXG4gICAgICAgICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxufSJdfQ== */";

/***/ }),

/***/ 33004:
/*!*****************************************************************!*\
  !*** ./src/app/pages/compare/compare.component.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"px-3\">\r\n  <div class=\"theme-container\">\r\n\r\n    <div *ngIf=\"appService.Data.compareList.length == 0\" class=\"py-5\">  \r\n      <mat-chip-list>\r\n          <mat-chip color=\"warn\" selected=\"true\" class=\"uppercase\">Vous n'avez pas de bien à comparer\r\n            .</mat-chip>\r\n      </mat-chip-list>\r\n    </div>\r\n  \r\n    <div *ngIf=\"appService.Data.compareList.length > 0\" class=\"compare-carousel py-3\"> \r\n      \r\n      <mat-card fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"compare-toolbar\">      \r\n        <h3 class=\"uppercase\">Comparer: {{appService.Data.compareList.length}}</h3>      \r\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" *ngIf=\"config.simulateTouch\">\r\n            <button mat-mini-fab color=\"primary\" class=\"carousel-prev swiper-button-prev swipe-arrow mx-2\"><mat-icon>keyboard_arrow_left</mat-icon></button>\r\n            <button mat-mini-fab color=\"primary\" class=\"carousel-next swiper-button-next swipe-arrow mx-2\"><mat-icon>keyboard_arrow_right</mat-icon></button> \r\n        </div> \r\n        <button mat-mini-fab color=\"warn\" fxHide=\"false\" fxHide.gt-xs (click)=\"clear()\"><mat-icon>cancel</mat-icon></button>\r\n        <button mat-raised-button color=\"warn\" class=\"uppercase\" fxShow=\"false\" fxShow.gt-xs (click)=\"clear()\">Clear All</button>\r\n      </mat-card>\r\n      \r\n      <div class=\"swiper-container h-100 carousel-outer mt-3\" [swiper]=\"config\"> \r\n        <div class=\"swiper-wrapper h-100\">      \r\n          <div *ngFor=\"let property of appService.Data.compareList\" class=\"swiper-slide\">\r\n\r\n            <mat-card class=\"compare-item\">                 \r\n                <img mat-card-image [src]=\"property.gallery[0].medium\" alt=\"image\"> \r\n                <button mat-icon-button class=\"remove\" (click)=\"remove(property)\">\r\n                  <mat-icon color=\"warn\" class=\"mat-icon-lg\">highlight_off</mat-icon>\r\n                </button>              \r\n                <mat-card-content>\r\n                    <h2 class=\"title\"><a [routerLink]=\"['/properties', property.id]\">{{property.title}}</a></h2>\r\n                    <p fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"address\">\r\n                        <mat-icon class=\"text-muted\">location_on</mat-icon>\r\n                        <span>{{property.formattedAddress}}</span>\r\n                    </p>\r\n                    <mat-chip-list>\r\n                        <mat-chip color=\"primary\" selected=\"true\" class=\"w-100\">\r\n                            <h3 *ngIf=\"settings.currency == 'TND'\" class=\"w-100 text-center\">\r\n                                <span *ngIf=\"property.priceDollar.sale\">{{property.priceDollar.sale | currency : 'TND ' : 'symbol' : '1.0'}}</span>\r\n                                <span *ngIf=\"property.priceDollar.rent\">{{property.priceDollar.rent | currency : 'TND ' : 'symbol' : '1.0'}} /mois</span>\r\n                            </h3>\r\n                            <h3 *ngIf=\"settings.currency == 'EUR'\" class=\"w-100 text-center\">\r\n                                <span *ngIf=\"property.priceEuro.sale\">{{property.priceEuro.sale | currency : 'EUR' : 'symbol' : '1.0'}}</span>\r\n                                <span *ngIf=\"property.priceEuro.rent\">{{property.priceEuro.rent | currency : 'EUR' : 'symbol' : '1.0'}} /mois</span>\r\n                            </h3>\r\n                        </mat-chip>\r\n                    </mat-chip-list>\r\n                    <div class=\"details py-3\">\r\n                        <div fxLayout=\"row\" class=\"item\">\r\n                          <span>Catégorie:</span>\r\n                          <span>{{property.propertyType}}</span>\r\n                        </div> \r\n                        <div fxLayout=\"row\" class=\"item\">\r\n                          <span>Type Offre:</span>\r\n                          <div fxLayout=\"row wrap\" class=\"list\">\r\n                            <span *ngFor=\"let status of property.propertyStatus; let last=last\" [class.list-item]=\"property.propertyStatus.length > 1\" [class.last]=\"last\">{{status}}</span>\r\n                          </div>\r\n                        </div> \r\n                        <div fxLayout=\"row\" class=\"item\">\r\n                          <span>Ville:</span>\r\n                          <span>{{property.city}}</span>\r\n                        </div>\r\n                        <div fxLayout=\"row\" class=\"item\">\r\n                          <span>Code Postal:</span>\r\n                          <span>{{property.zipCode}}</span>\r\n                        </div>\r\n                        <div fxLayout=\"row\" class=\"item\">\r\n                            <span>Region:</span>\r\n                            <div fxLayout=\"row wrap\" class=\"list\">\r\n                              <span *ngFor=\"let neighborhood of property.neighborhood; let last=last\" [class.list-item]=\"property.neighborhood.length > 1\" [class.last]=\"last\">{{neighborhood}}</span>\r\n                            </div>\r\n                        </div>\r\n                  <!--       <div fxLayout=\"row\" class=\"item\">\r\n                            <span>Rue:</span>\r\n                            <div fxLayout=\"row wrap\" class=\"list\">\r\n                                <span *ngFor=\"let street of property.street; let last=last\" [class.list-item]=\"property.street.length > 1\" [class.last]=\"last\">{{street}}</span>\r\n                            </div>\r\n                        </div> -->\r\n                        <div fxLayout=\"row\" class=\"item\">\r\n                          <span>Chambres:</span>\r\n                          <span>{{property.bedrooms}}</span>\r\n                        </div>\r\n                        <div fxLayout=\"row\" class=\"item\">\r\n                          <span>Salles de bain:</span>\r\n                          <span>{{property.bathrooms}}</span>\r\n                        </div>\r\n                        <div fxLayout=\"row\" class=\"item\">\r\n                          <span>Garages:</span>\r\n                          <span>{{property.garages}}</span>\r\n                        </div>\r\n                        <div fxLayout=\"row\" class=\"item\">\r\n                          <span>Surface:</span>\r\n                          <span>{{property.area.value}} {{property.area.unit}}</span>\r\n                        </div>\r\n                        <div fxLayout=\"row\" class=\"item\">\r\n                          <span>Année de construction:</span>\r\n                          <span>{{property.yearBuilt}}</span>\r\n                        </div>\r\n                        <div fxLayout=\"row\" class=\"item\">\r\n                          <span>Supplémentaires:</span>\r\n                          <div fxLayout=\"row wrap\" class=\"list\">\r\n                            <span *ngFor=\"let feature of property.features; let last=last\" [class.list-item]=\"property.features.length > 1\" [class.last]=\"last\">{{feature}}</span>\r\n                          </div>\r\n                        </div> \r\n                        <div fxLayout=\"row\" class=\"item\">\r\n                          <span>Publié:</span>\r\n                          <span>{{property.published | date:\"dd MMMM, yyyy\" }}</span>\r\n                        </div>                         \r\n                    </div>\r\n                    <p class=\"uppercase text-center fw-500 mb-2\">description</p>\r\n                    <p>{{property.desc}}</p>                     \r\n                </mat-card-content> \r\n                <mat-card-actions class=\"text-center\">  \r\n                    <a [routerLink]=\"['/properties', property.id]\" mat-raised-button color=\"primary\" class=\"uppercase mb-3\">Plus d'infos</a>                     \r\n                </mat-card-actions>             \r\n            </mat-card> \r\n\r\n          </div>\r\n        </div>   \r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_compare_compare_module_ts.js.map