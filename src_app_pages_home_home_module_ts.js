"use strict";
(self["webpackChunkhousekey"] = self["webpackChunkhousekey"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 24273:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/home/featured-properties/featured-properties.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeaturedPropertiesComponent": () => (/* binding */ FeaturedPropertiesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _featured_properties_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./featured-properties.component.html?ngResource */ 80544);
/* harmony import */ var _featured_properties_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./featured-properties.component.scss?ngResource */ 37381);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




let FeaturedPropertiesComponent = class FeaturedPropertiesComponent {
    constructor() { }
    ngOnInit() {
    }
};
FeaturedPropertiesComponent.ctorParameters = () => [];
FeaturedPropertiesComponent.propDecorators = {
    featuredProperties: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input, args: ['properties',] }]
};
FeaturedPropertiesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-featured-properties',
        template: _featured_properties_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_featured_properties_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FeaturedPropertiesComponent);



/***/ }),

/***/ 25245:
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _home_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component.html?ngResource */ 8916);
/* harmony import */ var _home_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component.scss?ngResource */ 45759);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.settings */ 1182);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.service */ 70900);
/* harmony import */ var _app_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.models */ 5396);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ 44658);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 71989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 98977);










let HomeComponent = class HomeComponent {
    constructor(appSettings, appService, mediaObserver) {
        this.appSettings = appSettings;
        this.appService = appService;
        this.mediaObserver = mediaObserver;
        this.activeMediaQuery = '';
        this.slides = [];
        this.viewType = 'grid';
        this.viewCol = 25;
        this.count = 8;
        this.pagination = new _app_models__WEBPACK_IMPORTED_MODULE_4__.Pagination(1, 8, null, 2, 0, 0);
        this.settings = this.appSettings.settings;
        this.watcher = mediaObserver.asObservable()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)((changes) => changes.length > 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((changes) => changes[0]))
            .subscribe((change) => {
            // console.log(change)
            if (change.mqAlias == 'xs') {
                this.viewCol = 100;
            }
            else if (change.mqAlias == 'sm') {
                this.viewCol = 50;
            }
            else if (change.mqAlias == 'md') {
                this.viewCol = 33.3;
            }
            else {
                this.viewCol = 25;
            }
        });
    }
    ngOnInit() {
        this.getSlides();
        this.getLocations();
        this.getProperties();
        this.getFeaturedProperties();
    }
    ngDoCheck() {
        if (this.settings.loadMore.load) {
            this.settings.loadMore.load = false;
            this.getProperties();
        }
    }
    ngOnDestroy() {
        this.resetLoadMore();
        this.watcher.unsubscribe();
    }
    getSlides() {
        this.appService.getHomeCarouselSlides().subscribe(res => {
            this.slides = res;
        });
    }
    getLocations() {
        this.appService.getLocations().subscribe(res => {
            this.locations = res;
        });
    }
    getProperties() {
        //console.log('get properties by : ', this.searchFields);  
        this.appService.getProperties().subscribe(data => {
            if (this.properties && this.properties.length > 0) {
                this.settings.loadMore.page++;
                this.pagination.page = this.settings.loadMore.page;
            }
            let result = this.filterData(data);
            if (result.data.length == 0) {
                this.properties.length = 0;
                this.pagination = new _app_models__WEBPACK_IMPORTED_MODULE_4__.Pagination(1, this.count, null, 2, 0, 0);
                this.message = 'Pas de resultats';
                return false;
            }
            if (this.properties && this.properties.length > 0) {
                this.properties = this.properties.concat(result.data);
            }
            else {
                this.properties = result.data;
            }
            this.pagination = result.pagination;
            this.message = null;
            if (this.properties.length == this.pagination.total) {
                this.settings.loadMore.complete = true;
                this.settings.loadMore.result = this.properties.length;
            }
            else {
                this.settings.loadMore.complete = false;
            }
            if (this.settings.header == 'map') {
                this.locations.length = 0;
                this.properties.forEach(p => {
                    let loc = new _app_models__WEBPACK_IMPORTED_MODULE_4__.Location(p.id, p.location.lat, p.location.lng);
                    this.locations.push(loc);
                });
                this.locations = [...this.locations];
            }
        });
    }
    resetLoadMore() {
        this.settings.loadMore.complete = false;
        this.settings.loadMore.start = false;
        this.settings.loadMore.page = 1;
        this.pagination = new _app_models__WEBPACK_IMPORTED_MODULE_4__.Pagination(1, this.count, null, null, this.pagination.total, this.pagination.totalPages);
    }
    filterData(data) {
        return this.appService.filterData(data, this.searchFields, this.sort, this.pagination.page, this.pagination.perPage);
    }
    searchClicked() {
        this.properties.length = 0;
        this.getProperties();
    }
    searchChanged(event) {
        event.valueChanges.subscribe(() => {
            this.resetLoadMore();
            this.searchFields = event.value;
            setTimeout(() => {
                this.removedSearchField = null;
            });
            if (!this.settings.searchOnBtnClick) {
                this.properties.length = 0;
            }
        });
        event.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.distinctUntilChanged)()).subscribe(() => {
            if (!this.settings.searchOnBtnClick) {
                this.getProperties();
            }
        });
    }
    removeSearchField(field) {
        this.message = null;
        this.removedSearchField = field;
    }
    changeCount(count) {
        this.count = count;
        this.resetLoadMore();
        this.properties.length = 0;
        this.getProperties();
    }
    changeSorting(sort) {
        this.sort = sort;
        this.resetLoadMore();
        this.properties.length = 0;
        this.getProperties();
    }
    changeViewType(obj) {
        this.viewType = obj.viewType;
        this.viewCol = obj.viewCol;
    }
    getFeaturedProperties() {
        this.appService.getFeaturedProperties().subscribe(properties => {
            this.featuredProperties = properties;
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_2__.AppSettings },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_3__.AppService },
    { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__.MediaObserver }
];
HomeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-home',
        template: _home_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomeComponent);



/***/ }),

/***/ 57994:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": () => (/* binding */ HomeModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ 25245);
/* harmony import */ var _hot_offer_today_hot_offer_today_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hot-offer-today/hot-offer-today.component */ 54729);
/* harmony import */ var _featured_properties_featured_properties_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./featured-properties/featured-properties.component */ 24273);








const routes = [
    { path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent, pathMatch: 'full' }
];
let HomeModule = class HomeModule {
};
HomeModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [
            _home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent,
            _hot_offer_today_hot_offer_today_component__WEBPACK_IMPORTED_MODULE_2__.HotOfferTodayComponent,
            _featured_properties_featured_properties_component__WEBPACK_IMPORTED_MODULE_3__.FeaturedPropertiesComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ]
    })
], HomeModule);



/***/ }),

/***/ 54729:
/*!*************************************************************************!*\
  !*** ./src/app/pages/home/hot-offer-today/hot-offer-today.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HotOfferTodayComponent": () => (/* binding */ HotOfferTodayComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _hot_offer_today_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hot-offer-today.component.html?ngResource */ 66766);
/* harmony import */ var _hot_offer_today_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hot-offer-today.component.scss?ngResource */ 57600);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ 70900);





let HotOfferTodayComponent = class HotOfferTodayComponent {
    constructor(appService) {
        this.appService = appService;
    }
    ngOnInit() {
        this.appService.getPropertyById(this.propertyId).subscribe(property => {
            this.property = property;
        });
    }
};
HotOfferTodayComponent.ctorParameters = () => [
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService }
];
HotOfferTodayComponent.propDecorators = {
    propertyId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input, args: ['propertyId',] }]
};
HotOfferTodayComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-hot-offer-today',
        template: _hot_offer_today_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_hot_offer_today_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HotOfferTodayComponent);



/***/ }),

/***/ 37381:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/home/featured-properties/featured-properties.component.scss?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWF0dXJlZC1wcm9wZXJ0aWVzLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 45759:
/*!***********************************************************!*\
  !*** ./src/app/pages/home/home.component.scss?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 57600:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/home/hot-offer-today/hot-offer-today.component.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob3Qtb2ZmZXItdG9kYXkuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 80544:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/home/featured-properties/featured-properties.component.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- <div class=\"section mt-3\">\r\n  <div class=\"px-3\">\r\n      <div class=\"theme-container\">\r\n          <h1 class=\"section-title\">OFFRE d'AUJOURD'HUI</h1>\r\n\r\n          <app-properties-carousel [properties]=\"featuredProperties\"></app-properties-carousel>\r\n              \r\n      </div>\r\n  </div>   \r\n</div>  -->";

/***/ }),

/***/ 8916:
/*!***********************************************************!*\
  !*** ./src/app/pages/home/home.component.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "<app-header-image *ngIf=\"settings.header == 'carousel'\" \r\n                [backgroundImage]=\"'assets/images/others/homepage.jpg'\"\r\n                [bgImageAnimate]=\"true\"\r\n                [contentOffsetToTop]=\"true\"\r\n                [title]=\"'TROUVEZ VOTRE BIEN'\"\r\n                [desc]=\"'La Société immobilière leader\r\n                '\"\r\n                [isHomePage]=\"true\"\r\n                [fullscreen]=\"false\">\r\n</app-header-image> \r\n\r\n<app-header-carousel *ngIf=\"settings.header == 'image'\" \r\n                    [slides]=\"slides\" \r\n                    [contentOffsetToTop]=\"true\"\r\n                    [fullscreen]=\"false\">\r\n</app-header-carousel>\r\n\r\n<app-header-map *ngIf=\"settings.header == 'map'\" \r\n                [locations]=\"locations\" \r\n                [contentOffsetToTop]=\"true\"\r\n                [fullscreen]=\"false\">\r\n</app-header-map>\r\n\r\n<app-header-video *ngIf=\"settings.header == 'video'\" \r\n                [backgroundVideo]=\"'http://themeseason.com/data/videos/video-1.mp4'\" \r\n                [contentOffsetToTop]=\"true\"\r\n                [title]=\"'Find your house key'\"\r\n                [desc]=\"'Leading Real Estate Company'\"\r\n                [isHomePage]=\"true\"\r\n                [fullscreen]=\"true\">\r\n</app-header-video>\r\n\r\n<div class=\"px-3\">\r\n    <div class=\"theme-container\">\r\n                \r\n        <mat-card class=\"main-content-header\">\r\n\r\n            <app-properties-search \r\n                [variant]=\"settings.searchPanelVariant\"\r\n                [searchOnBtnClick]=\"settings.searchOnBtnClick\"\r\n                [removedSearchField]=\"removedSearchField\" \r\n                (onSearchChange)=\"searchChanged($event)\"\r\n                (onSearchClick)=\"searchClicked()\">\r\n            </app-properties-search>\r\n            \r\n        </mat-card>  \r\n    \r\n    </div>\r\n    \r\n    <div class=\"theme-container\"> \r\n\r\n        <div fxLayout=\"row wrap\" class=\"properties-wrapper\">\r\n            \r\n            <div fxFlex=\"100\" fxLayoutAlign=\"start start\" class=\"p-2\"> \r\n                <mat-chip-list [ngClass]=\"(settings.rtl) ? 'ml-2' : 'mr-2'\">\r\n                    <mat-chip selected disableRipple=\"true\" color=\"warn\" class=\"uppercase ws-nowrap\">\r\n                        {{ pagination?.total }} trouvé\r\n                    </mat-chip> \r\n                </mat-chip-list>\r\n                <app-properties-search-results-filters \r\n                    [searchFields]=\"searchFields\" \r\n                    (onRemoveSearchField)=\"removeSearchField($event)\">\r\n                </app-properties-search-results-filters>                 \r\n            </div>\r\n            <div fxFlex=\"100\" class=\"p-2\">                \r\n                <app-properties-toolbar [isHomePage]=\"true\" \r\n                                        (onChangeCount)=\"changeCount($event)\"\r\n                                        (onChangeSorting)=\"changeSorting($event)\"\r\n                                        (onChangeViewType)=\"changeViewType($event)\"></app-properties-toolbar>\r\n            </div>\r\n            <div *ngFor=\"let property of properties\" [fxFlex]=\"(viewType=='grid') ? viewCol : 100\" class=\"item\">                         \r\n                <app-property-item [property]=\"property\" [viewType]=\"viewType\" [viewColChanged]=\"viewCol\"></app-property-item>\r\n            </div>\r\n            <div *ngIf=\"properties?.length\" fxFlex=\"100\" fxLayoutAlign=\"center center\" class=\"p-2 mt-2\">                \r\n                <app-load-more [step]=\"2\"></app-load-more> \r\n            </div>\r\n\r\n            <div *ngIf=\"properties?.length == 0\" fxFlex=\"100\" fxLayoutAlign=\"center center\" [style.min-height.px]=\"200\">                \r\n                <mat-spinner *ngIf=\"!message\"></mat-spinner>\r\n                <mat-chip-list *ngIf=\"message\">\r\n                    <mat-chip selected disableRipple=\"true\" color=\"warn\" class=\"uppercase ws-nowrap\">\r\n                        {{message}}\r\n                    </mat-chip> \r\n                </mat-chip-list> \r\n            </div>\r\n\r\n        </div>\r\n\r\n        \r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<app-mission></app-mission>\r\n\r\n<app-our-services></app-our-services>\r\n\r\n<!-- <app-testimonials></app-testimonials> \r\n -->\r\n<app-hot-offer-today [propertyId]=\"4\"></app-hot-offer-today> \r\n\r\n<app-featured-properties [properties]=\"featuredProperties\"></app-featured-properties>\r\n\r\n<!-- <app-our-agents></app-our-agents>\r\n -->      \r\n<app-clients></app-clients>\r\n\r\n<app-get-in-touch></app-get-in-touch>";

/***/ }),

/***/ 66766:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/home/hot-offer-today/hot-offer-today.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- <div class=\"section mt-3\">\r\n    <div class=\"px-3\">\r\n        <div class=\"theme-container\">\r\n            <h1 class=\"section-title\">OFFRE d'AUJOURD'HUI\r\n            </h1>\r\n\r\n            <app-property-item *ngIf=\"property\" [property]=\"property\" [viewType]=\"'list'\"></app-property-item> \r\n                \r\n        </div>\r\n    </div>   \r\n</div> -->";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map