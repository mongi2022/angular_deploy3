"use strict";
(self["webpackChunkhousekey"] = self["webpackChunkhousekey"] || []).push([["src_app_pages_properties_properties_module_ts"],{

/***/ 67839:
/*!**********************************************************!*\
  !*** ./src/app/pages/properties/properties.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertiesComponent": () => (/* binding */ PropertiesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _properties_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./properties.component.html?ngResource */ 43557);
/* harmony import */ var _properties_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties.component.scss?ngResource */ 69789);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ 44658);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 71989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 98977);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.settings */ 1182);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.service */ 70900);
/* harmony import */ var _app_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.models */ 5396);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);











let PropertiesComponent = class PropertiesComponent {
    constructor(appSettings, appService, mediaObserver, platformId) {
        this.appSettings = appSettings;
        this.appService = appService;
        this.mediaObserver = mediaObserver;
        this.platformId = platformId;
        this.sidenavOpen = true;
        this.psConfig = {
            wheelPropagation: true
        };
        this.viewType = 'grid';
        this.viewCol = 33.3;
        this.count = 12;
        this.pagination = new _app_models__WEBPACK_IMPORTED_MODULE_4__.Pagination(1, this.count, null, 2, 0, 0);
        this.settings = this.appSettings.settings;
        this.watcher = mediaObserver.asObservable()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)((changes) => changes.length > 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((changes) => changes[0]))
            .subscribe((change) => {
            if (change.mqAlias == 'xs') {
                this.sidenavOpen = false;
                this.viewCol = 100;
            }
            else if (change.mqAlias == 'sm') {
                this.sidenavOpen = false;
                this.viewCol = 50;
            }
            else if (change.mqAlias == 'md') {
                this.viewCol = 50;
                this.sidenavOpen = true;
            }
            else {
                this.viewCol = 33.3;
                this.sidenavOpen = true;
            }
        });
    }
    ngOnInit() {
        // this.getProperties();
        this.getProperties();
    }
    ngOnDestroy() {
        this.watcher.unsubscribe();
    }
    getProperties() {
        this.appService.getProperties().subscribe(data => {
            /*  console.log(data);
             this.properties=data */
            let result = this.filterData(data);
            if (result.data.length == 0) {
                this.properties.length = 0;
                this.pagination = new _app_models__WEBPACK_IMPORTED_MODULE_4__.Pagination(1, this.count, null, 2, 0, 0);
                this.message = 'Pas de Resultats';
                return false;
            }
            this.properties = result.data;
            this.pagination = result.pagination;
            this.message = null;
        });
    }
    /*   public getProperties(){
        this.appService.getProperties().subscribe(data => {
          console.log(data);
    
          let result = this.filterData(data);
          if(result.data.length == 0){
            this.properties.length = 0;
            this.pagination = new Pagination(1, this.count, null, 2, 0, 0);
            this.message = 'Pas de Resultats';
            return false;
          }
          this.properties = result.data;
          this.pagination = result.pagination;
          this.message = null;
        })
      } */
    resetPagination() {
        if (this.paginator) {
            this.paginator.pageIndex = 0;
        }
        this.pagination = new _app_models__WEBPACK_IMPORTED_MODULE_4__.Pagination(1, this.count, null, null, this.pagination.total, this.pagination.totalPages);
    }
    filterData(data) {
        return this.appService.filterData(data, this.searchFields, this.sort, this.pagination.page, this.pagination.perPage);
    }
    searchClicked() {
        this.properties.length = 0;
        this.getProperties();
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.isPlatformBrowser)(this.platformId)) {
            window.scrollTo(0, 0);
        }
    }
    searchChanged(event) {
        event.valueChanges.subscribe(() => {
            this.resetPagination();
            this.searchFields = event.value;
            setTimeout(() => {
                this.removedSearchField = null;
            });
            if (!this.settings.searchOnBtnClick) {
                this.properties.length = 0;
            }
        });
        event.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)()).subscribe(() => {
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
        this.properties.length = 0;
        this.resetPagination();
        this.getProperties();
    }
    changeSorting(sort) {
        this.sort = sort;
        this.properties.length = 0;
        this.getProperties();
    }
    changeViewType(obj) {
        this.viewType = obj.viewType;
        this.viewCol = obj.viewCol;
    }
    onPageChange(e) {
        this.pagination.page = e.pageIndex + 1;
        this.getProperties();
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.isPlatformBrowser)(this.platformId)) {
            window.scrollTo(0, 0);
        }
    }
};
PropertiesComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_2__.AppSettings },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_3__.AppService },
    { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__.MediaObserver },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Inject, args: [_angular_core__WEBPACK_IMPORTED_MODULE_11__.PLATFORM_ID,] }] }
];
PropertiesComponent.propDecorators = {
    sidenav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['sidenav',] }],
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginator,] }]
};
PropertiesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-properties',
        template: _properties_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_properties_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PropertiesComponent);



/***/ }),

/***/ 29506:
/*!*******************************************************!*\
  !*** ./src/app/pages/properties/properties.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertiesModule": () => (/* binding */ PropertiesModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ 93333);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _properties_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties.component */ 67839);
/* harmony import */ var _property_property_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./property/property.component */ 36692);








const routes = [
    { path: '', component: _properties_component__WEBPACK_IMPORTED_MODULE_1__.PropertiesComponent, pathMatch: 'full' },
    { path: ':id', component: _property_property_component__WEBPACK_IMPORTED_MODULE_2__.PropertyComponent }
];
let PropertiesModule = class PropertiesModule {
};
PropertiesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [
            _properties_component__WEBPACK_IMPORTED_MODULE_1__.PropertiesComponent,
            _property_property_component__WEBPACK_IMPORTED_MODULE_2__.PropertyComponent
        ],
        exports: [
            _properties_component__WEBPACK_IMPORTED_MODULE_1__.PropertiesComponent,
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes),
            _agm_core__WEBPACK_IMPORTED_MODULE_7__.AgmCoreModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ]
    })
], PropertiesModule);



/***/ }),

/***/ 36692:
/*!*****************************************************************!*\
  !*** ./src/app/pages/properties/property/property.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertyComponent": () => (/* binding */ PropertyComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _property_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./property.component.html?ngResource */ 7906);
/* harmony import */ var _property_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./property.component.scss?ngResource */ 96810);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ 70900);
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-swiper-wrapper */ 70598);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.settings */ 1182);
/* harmony import */ var src_app_shared_compare_overview_compare_overview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/compare-overview/compare-overview.component */ 42764);
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-embed-video */ 81015);
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_embed_video__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/theme/utils/app-validators */ 38955);












let PropertyComponent = class PropertyComponent {
    constructor(appSettings, appService, activatedRoute, embedService, fb) {
        this.appSettings = appSettings;
        this.appService = appService;
        this.activatedRoute = activatedRoute;
        this.embedService = embedService;
        this.fb = fb;
        this.psConfig = {
            wheelPropagation: true
        };
        this.sidenavOpen = true;
        this.config = {};
        this.config2 = {};
        this.status = '';
        this.statusVideo = '';
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.sub = this.activatedRoute.params.subscribe(params => {
            this.getPropertyById(params['id']);
        });
        //this.getAllAgents()
        this.getUserById();
        this.getRelatedProperties();
        this.getFeaturedProperties();
        // this.getAgent(1);
        if (window.innerWidth < 960) {
            this.sidenavOpen = false;
            if (this.sidenav) {
                this.sidenav.close();
            }
        }
        ;
        this.mortgageForm = this.fb.group({
            principalAmount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            downPayment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            interestRate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            period: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
        });
        this.contactForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_6__.emailValidator])],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    onWindowResize() {
        (window.innerWidth < 960) ? this.sidenavOpen = false : this.sidenavOpen = true;
    }
    getPropertyById(id) {
        this.appService.getPropertyById(id).subscribe(data => {
            this.property = data;
            this.status = data.propertyType;
            console.log(data);
            this.embedVideo = this.embedService.embed(this.property.videos[0].link);
            this.statusVideo = this.property.videos[0].link;
            setTimeout(() => {
                this.config.observer = true;
                this.config2.observer = true;
                this.swipers.forEach(swiper => {
                    if (swiper) {
                        swiper.setIndex(0);
                    }
                });
            });
        });
    }
    ngAfterViewInit() {
        this.config = {
            observer: false,
            slidesPerView: 1,
            spaceBetween: 0,
            keyboard: true,
            navigation: true,
            pagination: false,
            grabCursor: true,
            loop: false,
            preloadImages: false,
            lazy: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            }
        };
        this.config2 = {
            observer: false,
            slidesPerView: 4,
            spaceBetween: 16,
            keyboard: true,
            navigation: false,
            pagination: false,
            grabCursor: true,
            loop: false,
            preloadImages: false,
            lazy: true,
            breakpoints: {
                200: {
                    slidesPerView: 2
                },
                480: {
                    slidesPerView: 3
                },
                600: {
                    slidesPerView: 4
                }
            }
        };
    }
    onOpenedChange() {
        this.swipers.forEach(swiper => {
            if (swiper) {
                swiper.update();
            }
        });
    }
    getUserById() {
        const id = localStorage.getItem('userId');
        this.appService.getUserById(+id).subscribe(data => {
            this.image = data.photo;
            this.name = data.name;
            this.tel = data.tel;
        });
    }
    selectImage(index) {
        this.swipers.forEach(swiper => {
            if (swiper['elementRef'].nativeElement.id == 'main-carousel') {
                swiper.setIndex(index);
            }
        });
    }
    onIndexChange(index) {
        this.swipers.forEach(swiper => {
            let elem = swiper['elementRef'].nativeElement;
            if (elem.id == 'small-carousel') {
                swiper.setIndex(index);
                for (let i = 0; i < elem.children[0].children.length; i++) {
                    const element = elem.children[0].children[i];
                    if (element.classList.contains('thumb-' + index)) {
                        element.classList.add('active-thumb');
                    }
                    else {
                        element.classList.remove('active-thumb');
                    }
                }
            }
        });
    }
    addToCompare() {
        this.appService.addToCompare(this.property, src_app_shared_compare_overview_compare_overview_component__WEBPACK_IMPORTED_MODULE_4__.CompareOverviewComponent, (this.settings.rtl) ? 'rtl' : 'ltr');
    }
    onCompare() {
        return this.appService.Data.compareList.filter(item => item.id == this.property.id)[0];
    }
    addToFavorites() {
        this.appService.addToFavorites(this.property, (this.settings.rtl) ? 'rtl' : 'ltr');
    }
    onFavorites() {
        return this.appService.Data.favorites.filter(item => item.id == this.property.id)[0];
    }
    getRelatedProperties() {
        this.appService.getRelatedProperties().subscribe(properties => {
            this.relatedProperties = properties;
        });
    }
    getFeaturedProperties() {
        this.appService.getFeaturedProperties().subscribe(properties => {
            this.featuredProperties = properties.slice(0, 3);
            const res = this.property.features.map((x) => x.desc);
            this.featureList = res;
        });
    }
    getAllAgents() {
        this.appService.getAgents().subscribe(data => {
            this.agents = data;
            this.ids = data.map(x => x.id);
        });
    }
    getAgent(agentId) {
        var ids = [3, 4, 5, 6]; //agent ids 
        agentId = ids[Math.floor(Math.random() * ids.length)]; //random agent id 
        this.appService.getAgentById(agentId).subscribe(data => {
            this.agent = data;
        });
    }
    onContactFormSubmit(values) {
        if (this.contactForm.valid) {
            //  console.log(values);
        }
    }
    onMortgageFormSubmit(values) {
        if (this.mortgageForm.valid) {
            var principalAmount = values['principalAmount'];
            var down = values['downPayment'];
            var interest = values['interestRate'];
            var term = values['period'];
            this.monthlyPayment = this.calculateMortgage(principalAmount, down, interest / 100 / 12, term * 12).toFixed(2);
        }
    }
    calculateMortgage(principalAmount, downPayment, interestRate, period) {
        return ((principalAmount - downPayment) * interestRate) / (1 - Math.pow(1 + interestRate, -period));
    }
};
PropertyComponent.ctorParameters = () => [
    { type: src_app_app_settings__WEBPACK_IMPORTED_MODULE_3__.AppSettings },
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: ngx_embed_video__WEBPACK_IMPORTED_MODULE_5__.EmbedVideoService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormBuilder }
];
PropertyComponent.propDecorators = {
    sidenav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: ['sidenav',] }],
    swipers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChildren, args: [ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_10__.SwiperDirective,] }],
    onWindowResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.HostListener, args: ['window:resize',] }]
};
PropertyComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-property',
        template: _property_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_property_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PropertyComponent);



/***/ }),

/***/ 69789:
/*!***********************************************************************!*\
  !*** ./src/app/pages/properties/properties.component.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9wZXJ0aWVzLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 96810:
/*!******************************************************************************!*\
  !*** ./src/app/pages/properties/property/property.component.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = ".center {\n  justify-content: center !important;\n}\n\n.success {\n  color: #1DB954 !important;\n  font-weight: 400 !important;\n}\n\n.main-carousel .swiper-slide {\n  text-align: center;\n  padding-bottom: 66.25%;\n  position: relative;\n  overflow: hidden;\n  background: rgba(0, 0, 0, 0.04);\n}\n\n.main-carousel img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: auto;\n  max-width: 100%;\n}\n\n.main-carousel .control-icons {\n  position: absolute;\n  z-index: 2;\n  top: 24px;\n  right: 20px;\n}\n\n.main-carousel .control-icons button.mat-button {\n  min-width: 36px;\n  width: 36px;\n  padding: 0;\n  margin: 0 4px;\n  background: rgba(255, 252, 252, 0.6);\n  transition: 0.2s;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.main-carousel .control-icons button.mat-button:disabled {\n  color: rgba(0, 0, 0, 0.26);\n}\n\n.main-carousel .control-icons button.mat-button:hover:enabled {\n  background: rgb(255, 252, 252);\n}\n\n.small-carousel .swiper-slide img {\n  display: block;\n  opacity: 0.3;\n}\n\n.small-carousel .swiper-slide.active-thumb img {\n  border-width: 3px;\n  border-style: solid;\n  box-sizing: border-box;\n  opacity: 1;\n}\n\n.small-carousel .swiper-slide .swiper-lazy-preloader {\n  margin-top: 10px;\n}\n\n.widget {\n  margin-bottom: 40px;\n}\n\n.widget .widget-title {\n  margin: 0 -16px 16px;\n  padding: 8px 16px;\n  text-transform: uppercase;\n  font-weight: 500;\n}\n\n.widget:first-child .widget-title {\n  margin: -16px -16px 16px;\n  padding: 8px 16px;\n  text-transform: uppercase;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3BlcnR5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFJO0VBQ0ksa0NBQUE7QUFDUjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFFSTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7QUFDUjs7QUFDSTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFDUjs7QUFDSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBQ1I7O0FBQVE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FBRVo7O0FBRFk7RUFDSSwwQkFBQTtBQUdoQjs7QUFEWTtFQUNJLDhCQUFBO0FBR2hCOztBQUlRO0VBQ0ksY0FBQTtFQUNBLFlBQUE7QUFEWjs7QUFJWTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QUFGaEI7O0FBS1E7RUFDSSxnQkFBQTtBQUhaOztBQVFBO0VBQ0ksbUJBQUE7QUFMSjs7QUFNSTtFQUNJLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBSlI7O0FBT1E7RUFDSSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQUxaIiwiZmlsZSI6InByb3BlcnR5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgIC5jZW50ZXJ7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIH0gICAgICAgICAgICAgICAgICAgIFxyXG5cclxuLnN1Y2Nlc3N7XHJcbiAgICBjb2xvcjogIzFEQjk1NCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xyXG59XHJcbi5tYWluLWNhcm91c2VseyBcclxuICAgIC5zd2lwZXItc2xpZGV7ICAgICAgICAgICAgICBcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDY2LjI1JTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgIFxyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNCk7ICAgICAgICAgXHJcbiAgICB9XHJcbiAgICBpbWd7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB9IFxyXG4gICAgLmNvbnRyb2wtaWNvbnN7IFxyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiAyOyBcclxuICAgICAgICB0b3A6IDI0cHg7XHJcbiAgICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgYnV0dG9uLm1hdC1idXR0b257XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMzZweDtcclxuICAgICAgICAgICAgd2lkdGg6IDM2cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCA0cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTIsIDI1MiwgMC42KTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4yczsgXHJcbiAgICAgICAgICAgIGNvbG9yOnJnYmEoMCwgMCwgMCwgMC44Nyk7XHJcbiAgICAgICAgICAgICY6ZGlzYWJsZWR7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI2KTsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpob3ZlcjplbmFibGVke1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1MiwgMjUyLCAxKTtcclxuICAgICAgICAgICAgfSAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLnNtYWxsLWNhcm91c2VseyBcclxuICAgIC5zd2lwZXItc2xpZGV7ICBcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuYWN0aXZlLXRodW1ie1xyXG4gICAgICAgICAgICBpbWd7IFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAzcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgIFxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgLnN3aXBlci1sYXp5LXByZWxvYWRlcntcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH0gXHJcbn1cclxuIFxyXG4ud2lkZ2V0eyBcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAud2lkZ2V0LXRpdGxle1xyXG4gICAgICAgIG1hcmdpbjogMCAtMTZweCAxNnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgICY6Zmlyc3QtY2hpbGR7ICBcclxuICAgICAgICAud2lkZ2V0LXRpdGxle1xyXG4gICAgICAgICAgICBtYXJnaW46IC0xNnB4IC0xNnB4IDE2cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH1cclxuICAgIH0gXHJcbn0gIl19 */";

/***/ }),

/***/ 43557:
/*!***********************************************************************!*\
  !*** ./src/app/pages/properties/properties.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "<app-header-image [backgroundImage]=\"'assets/images/carousel/slide-3.jpg'\" \r\n                  [bgImageAnimate]=\"false\" \r\n                  [contentOffsetToTop]=\"false\" \r\n                  [desc]=\"\"\r\n                  [contentMinHeight]=\"200\">\r\n</app-header-image>\r\n \r\n<div class=\"px-3\"> \r\n    \r\n  <div class=\"theme-container\">  \r\n\r\n    <mat-sidenav-container class=\"all-properties mt-3\"> \r\n      <mat-sidenav #sidenav [autoFocus]=\"false\" [opened]=\"sidenavOpen\" [mode]=\"sidenavOpen ? 'side' : 'over'\" class=\"search-sidenav\">         \r\n        <mat-card [perfectScrollbar]=\"psConfig\"> \r\n          <button fxHide=\"false\" fxHide.gt-xs mat-icon-button (click)=\"sidenav.toggle()\">\r\n              <mat-icon color=\"accent\">close</mat-icon>\r\n          </button>\r\n          <app-properties-search \r\n              [variant]=\"settings.searchPanelVariant\"\r\n              [vertical]=\"true\"\r\n              [searchOnBtnClick]=\"settings.searchOnBtnClick\"              \r\n              [removedSearchField]=\"removedSearchField\" \r\n              (onSearchChange)=\"searchChanged($event)\"\r\n              (onSearchClick)=\"searchClicked()\">\r\n          </app-properties-search>\r\n        </mat-card> \r\n      </mat-sidenav>\r\n\r\n      <mat-sidenav-content ngClass.gt-sm=\"distance\"> \r\n\r\n        <div fxLayout=\"row wrap\" class=\"properties-wrapper mt-0\">            \r\n           \r\n            <div fxFlex=\"100\" class=\"px-2 pb-2 pt-0\">                \r\n                <app-properties-toolbar [showSidenavToggle]=\"!sidenavOpen\"\r\n                                        (onSidenavToggle)=\"sidenav.toggle()\"\r\n                                        (onChangeCount)=\"changeCount($event)\"\r\n                                        (onChangeSorting)=\"changeSorting($event)\"\r\n                                        (onChangeViewType)=\"changeViewType($event)\">\r\n                </app-properties-toolbar>\r\n            </div>\r\n           \r\n            <div fxFlex=\"100\" fxLayoutAlign=\"start start\" class=\"p-2\"> \r\n                <mat-chip-list [ngClass]=\"(settings.rtl) ? 'ml-2' : 'mr-2'\">\r\n                    <mat-chip selected disableRipple=\"true\" color=\"warn\" class=\"uppercase ws-nowrap\">\r\n                        {{ pagination?.total }} trouvé\r\n                    </mat-chip> \r\n                </mat-chip-list>\r\n                <app-properties-search-results-filters \r\n                    [searchFields]=\"searchFields\" \r\n                    (onRemoveSearchField)=\"removeSearchField($event)\">\r\n                </app-properties-search-results-filters>                 \r\n            </div>\r\n\r\n            <div *ngFor=\"let property of properties\" [fxFlex]=\"(viewType=='grid') ? viewCol : 100\"  class=\"item\">                         \r\n                <app-property-item  [property]=\"property\" [viewType]=\"viewType\" [viewColChanged]=\"viewCol\" [fullWidthPage]=\"false\"></app-property-item>\r\n            </div>\r\n\r\n            <div *ngIf=\"properties?.length == 0\" fxFlex=\"100\" fxLayoutAlign=\"center center\" [style.min-height.px]=\"200\">                \r\n                <mat-spinner *ngIf=\"!message\"></mat-spinner>\r\n                <mat-chip-list *ngIf=\"message\">\r\n                    <mat-chip selected disableRipple=\"true\" color=\"warn\" class=\"uppercase ws-nowrap\">\r\n                        {{message}}\r\n                    </mat-chip> \r\n                </mat-chip-list> \r\n            </div>            \r\n\r\n            <div *ngIf=\"properties?.length > 0\" fxFlex=\"100\" fxLayoutAlign=\"center center\" class=\"p-2\">\r\n                <mat-paginator [length]=\"pagination?.total\"\r\n                              [pageSize]=\"pagination?.perPage\"\r\n                              (page)=\"onPageChange($event)\"\r\n                              class=\"w-100 mat-elevation-z1\">\r\n                </mat-paginator>\r\n            </div>          \r\n         \r\n        </div>\r\n\r\n        \r\n\r\n      </mat-sidenav-content>\r\n    </mat-sidenav-container>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n<app-clients></app-clients>\r\n\r\n<app-get-in-touch></app-get-in-touch>";

/***/ }),

/***/ 7906:
/*!******************************************************************************!*\
  !*** ./src/app/pages/properties/property/property.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"px-3\">     \r\n    <div class=\"theme-container\"> \r\n    \r\n        <mat-sidenav-container class=\"single-property mt-3\">\r\n            <mat-sidenav #sidenav [opened]=\"sidenavOpen\" [mode]=\"sidenavOpen ? 'side' : 'over'\" position=\"end\" autoFocus=\"false\" (openedChange)=\"onOpenedChange()\">\r\n                <button fxHide=\"false\" fxHide.gt-sm=\"true\" mat-mini-fab color=\"warn\" class=\"close\" (click)=\"sidenav.close()\">\r\n                    <mat-icon>close</mat-icon>\r\n                </button>\r\n                <mat-card [perfectScrollbar]=\"psConfig\"> \r\n\r\n              <!--       <div class=\"widget\"> \r\n                        <mat-card *ngIf=\"agent\">\r\n                            <img mat-card-image [src]=\"agent.image\" [alt]=\"agent.fullName\"> \r\n                            <mat-card-content>\r\n                                <h2 class=\"fw-600\">Agent {{agent.fullName}}</h2>\r\n                                <app-rating [ratingsCount]=\"agent.ratingsCount\" [ratingsValue]=\"agent.ratingsValue\"></app-rating>\r\n                                <p class=\"mt-3\">{{agent.desc}}</p>                                    \r\n                                <p fxLayoutAlign=\"start center\"><mat-icon color=\"primary\" matTooltip=\"Organization\" matTooltipPosition=\"above\">business</mat-icon><span class=\"mx-2\">{{agent.organization}}</span></p>\r\n                                <p fxLayoutAlign=\"start center\"><mat-icon color=\"primary\">email</mat-icon><span class=\"mx-2\">{{agent.email}}</span></p>\r\n                                <p fxLayoutAlign=\"start center\"><mat-icon color=\"primary\">call</mat-icon><span class=\"mx-2\">{{agent.phone}}</span></p>\r\n                            </mat-card-content>\r\n                            <mat-divider></mat-divider>\r\n                            <mat-card-actions fxLayoutAlign=\"space-between center\">\r\n                                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"text-muted\">\r\n                                    <a [href]=\"'https://www.facebook.com/'+agent.social.facebook\" target=\"blank\" class=\"social-icon\">\r\n                                        <svg class=\"mat-icon\" viewBox=\"0 0 24 24\">\r\n                                        <path d=\"M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z\" />\r\n                                        </svg>\r\n                                    </a>\r\n                                    <a [href]=\"'https://twitter.com/'+agent.social.twitter\" target=\"blank\" class=\"social-icon\">\r\n                                        <svg class=\"mat-icon\" viewBox=\"0 0 24 24\">\r\n                                            <path d=\"M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M17.71,9.33C18.19,8.93 18.75,8.45 19,7.92C18.59,8.13 18.1,8.26 17.56,8.33C18.06,7.97 18.47,7.5 18.68,6.86C18.16,7.14 17.63,7.38 16.97,7.5C15.42,5.63 11.71,7.15 12.37,9.95C9.76,9.79 8.17,8.61 6.85,7.16C6.1,8.38 6.75,10.23 7.64,10.74C7.18,10.71 6.83,10.57 6.5,10.41C6.54,11.95 7.39,12.69 8.58,13.09C8.22,13.16 7.82,13.18 7.44,13.12C7.81,14.19 8.58,14.86 9.9,15C9,15.76 7.34,16.29 6,16.08C7.15,16.81 8.46,17.39 10.28,17.31C14.69,17.11 17.64,13.95 17.71,9.33Z\" />\r\n                                        </svg> \r\n                                    </a>\r\n                                    <a [href]=\"'https://www.linkedin.com/'+agent.social.linkedin\" target=\"blank\" class=\"social-icon\"> \r\n                                        <svg class=\"mat-icon\" viewBox=\"0 0 24 24\">\r\n                                        <path d=\"M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z\" />\r\n                                        </svg>\r\n                                    </a>\r\n                                    <a [href]=\"'https://instagram.com/'+agent.social.instagram\" target=\"blank\" class=\"social-icon\"> \r\n                                        <svg class=\"mat-icon\" viewBox=\"0 0 24 24\">\r\n                                            <path d=\"M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z\" />\r\n                                        </svg>\r\n                                    </a> \r\n                                    <a [href]=\"agent.social.website\" target=\"blank\" class=\"social-icon\"> \r\n                                        <svg class=\"mat-icon\" viewBox=\"0 0 24 24\">\r\n                                            <path d=\"M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z\" />\r\n                                        </svg>\r\n                                    </a>  \r\n                                </div>\r\n                                <div>\r\n                                    <a [routerLink]=\"['/agents', agent.id]\" mat-button color=\"primary\" class=\"uppercase\">Voir Profil</a>\r\n                                </div> \r\n                            </mat-card-actions>                              \r\n                        </mat-card>\r\n                    </div>  -->\r\n                    <div class=\"widget\">\r\n<!--                         <h3 class=\"widget-title bg-primary\">Mortgage Calculator</h3>\r\n -->                        <form [formGroup]=\"mortgageForm\" (ngSubmit)=\"onMortgageFormSubmit(mortgageForm.value)\">\r\n                           \r\n                            <div  class=\"text-center\">\r\n                                <img *ngIf=\"image==null\" width=\"100\" height=\"100\" src=\"assets/images/profile/profil.png\">\r\n            \r\n                                <img *ngIf=\"image!=null\" width=\"100\" height=\"100\" src={{image}}>\r\n                            </div>\r\n                            <div  class=\"text-center\">\r\n                                <mat-label>{{name}}</mat-label>\r\n                            </div>\r\n                           <!--  <div  class=\"text-center\">\r\n                                <mat-label>Localisation</mat-label>\r\n                            </div> -->\r\n\r\n                            <div class=\"text-center\">\r\n                                <button mat-raised-button mat-success class=\"success\" color=\"primary\" type=\"submit\"><mat-icon> phone</mat-icon> \r\n                                    &nbsp;  &nbsp;  &nbsp; \r\n                                    {{tel}} &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp; </button>\r\n                            </div>\r\n                        </form>\r\n                    </div> \r\n                    <div  class=\"text-center\">\r\n                        <mat-label></mat-label>\r\n                    </div>\r\n\r\n                    <div  class=\"text-center\">\r\n                        <mat-label></mat-label>\r\n                    </div>\r\n                    <div class=\"widget\">\r\n                        <h3 class=\"widget-title bg-primary\">CONTACTER L'ANNONCEUR                      </h3>\r\n                        <form [formGroup]=\"contactForm\" (ngSubmit)=\"onContactFormSubmit(contactForm.value)\">\r\n                            <p>\r\n                                Intéressé par la location ou l'achat de ce bien ? Alors envoyez-nous un e-mail.</p>\r\n                            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                                <mat-label>Nom</mat-label>\r\n                                <input matInput placeholder=\"Your Name\" autocomplete=\"off\" formControlName=\"name\">\r\n                                <mat-error *ngIf=\"contactForm.controls.name.errors?.required\">Name is required</mat-error>                   \r\n                            </mat-form-field>\r\n\r\n                            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                                <mat-label>E-mail</mat-label> \r\n                                <input matInput placeholder=\"Your Email\" autocomplete=\"off\" formControlName=\"email\">\r\n                                <mat-error *ngIf=\"contactForm.controls.email.errors?.required\">Email is required</mat-error>\r\n                                <mat-error *ngIf=\"contactForm.controls.email.hasError('invalidEmail')\">Invalid email address</mat-error>\r\n                            </mat-form-field>\r\n\r\n                            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                                <mat-label>Tel</mat-label>\r\n                                <input matInput placeholder=\"Your Phone\" autocomplete=\"off\" formControlName=\"phone\" type=\"number\"> \r\n                                <mat-error *ngIf=\"contactForm.controls.phone.errors?.required\">Phone is required</mat-error>                 \r\n                            </mat-form-field>\r\n\r\n                            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                                <mat-label>Message</mat-label> \r\n                                <textarea matInput placeholder=\"Your Message\" formControlName=\"message\" rows=\"6\"></textarea> \r\n                                <mat-error *ngIf=\"contactForm.controls.message.errors?.required\">Message is required</mat-error>\r\n                            </mat-form-field>  \r\n                            <div class=\"text-center\">\r\n                                <button mat-raised-button color=\"accent\" type=\"submit\">Contacter l'annonceur</button>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                   \r\n            \r\n\r\n                  <!--   <div fxLayout=\"column\" class=\"widget\">\r\n                        <h3 class=\"widget-title bg-primary\">Featured Properties</h3>\r\n                        <div *ngFor=\"let prop of featuredProperties\" class=\"mb-3\">\r\n                            <app-property-item [property]=\"prop\" [viewType]=\"'grid'\"></app-property-item> \r\n                        </div> \r\n                    </div> -->\r\n                   \r\n                </mat-card>\r\n            </mat-sidenav>\r\n            <mat-sidenav-content ngClass.gt-sm=\"distance\">\r\n                <mat-card fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between center\">             \r\n                    <div>\r\n                        <h2 class=\"uppercase\" ngClass.xs=\"text-center\">{{property?.title}}</h2>\r\n                        <p fxLayout=\"row\" fxLayoutAlign.xs=\"center\" class=\"address mb-0\">\r\n                            <mat-icon class=\"text-muted\">location_on</mat-icon>\r\n                            <span>{{property?.formattedAddress}}</span>\r\n                        </p>\r\n                    </div>\r\n                    <div fxLayout=\"column\" fxLayoutAlign.xs=\"center center\" class=\"mx-3\">                      \r\n                        <h2 *ngIf=\"settings.currency == 'TND'\" class=\"primary-color price\">\r\n                            <span *ngIf=\"property?.priceDollar.sale\">{{property?.priceDollar.sale | currency : 'TND ' : 'symbol' : '1.0'}}</span>\r\n                            <span *ngIf=\"property?.priceDollar.rent\">{{property?.priceDollar.rent | currency : 'TND ' : 'symbol' : '1.0'}} / mois</span>\r\n                        </h2>\r\n                        <h2 *ngIf=\"settings.currency == 'EUR'\" class=\"primary-color price\">\r\n                            <span *ngIf=\"property?.priceEuro.sale\">{{property?.priceEuro.sale | currency : 'EUR' : 'symbol' : '1.0'}}</span>\r\n                            <span *ngIf=\"property?.priceEuro.rent\">{{property?.priceEuro.rent | currency : 'EUR' : 'symbol' : '1.0'}} / mois</span>\r\n                        </h2>\r\n                        <app-rating [ratingsCount]=\"property?.ratingsCount\" [ratingsValue]=\"property?.ratingsValue\"></app-rating> \r\n                    </div>\r\n                    <button *ngIf=\"!sidenavOpen\" mat-icon-button (click)=\"sidenav.toggle()\">\r\n                        <mat-icon>more_vert</mat-icon>\r\n                    </button>                                  \r\n                </mat-card>\r\n\r\n                <mat-card class=\"mt-3\">\r\n                    <div class=\"main-carousel mb-3\"> \r\n                        <div *ngIf=\"property\" class=\"control-icons\">\r\n                            <button mat-button [disabled]=\"onFavorites()\" (click)=\"addToFavorites()\" matTooltip=\"Add To Favorite\">\r\n                                <mat-icon class=\"\">favorite_border</mat-icon>\r\n                            </button>\r\n                       <!--      <button mat-button [disabled]=\"onCompare()\" (click)=\"addToCompare()\" matTooltip=\"Add To Compare\">\r\n                                <mat-icon class=\"\">compare_arrows</mat-icon>\r\n                            </button>   -->\r\n                        </div>   \r\n                        <div id=\"main-carousel\" class=\"swiper-container\" [swiper]=\"config\" (indexChange)=\"onIndexChange($event)\"> \r\n                            <div class=\"swiper-wrapper\">      \r\n                                <div *ngFor=\"let image of property?.gallery\" class=\"swiper-slide\">\r\n                                    <img [attr.data-src]=\"image.big\" class=\"swiper-lazy\">\r\n                                    <div class=\"swiper-lazy\"></div>          \r\n                                </div>\r\n                            </div>                      \r\n                            <button mat-mini-fab color=\"primary\" class=\"swiper-button-prev swipe-arrow\"><mat-icon>keyboard_arrow_left</mat-icon></button>\r\n                            <button mat-mini-fab color=\"primary\" class=\"swiper-button-next swipe-arrow\"><mat-icon>keyboard_arrow_right</mat-icon></button> \r\n                        </div>\r\n\r\n\r\n                  <!--       <div id=\"main-carousel\" class=\"swiper-container\" [swiper]=\"config\" (indexChange)=\"onIndexChange($event)\"> \r\n                            <div class=\"swiper-wrapper\">      \r\n                                <div *ngFor=\"let image of property?.gallery\" class=\"swiper-slide\">\r\n                                    <img [attr.data-src]=\"image.big\" class=\"swiper-lazy\">\r\n                                    <div class=\"swiper-lazy-preloader\"></div>          \r\n                                </div>\r\n                            </div>                      \r\n                            <button mat-mini-fab color=\"primary\" class=\"swiper-button-prev swipe-arrow\"><mat-icon>keyboard_arrow_left</mat-icon></button>\r\n                            <button mat-mini-fab color=\"primary\" class=\"swiper-button-next swipe-arrow\"><mat-icon>keyboard_arrow_right</mat-icon></button> \r\n                        </div> -->\r\n\r\n\r\n                    </div>\r\n                    <div class=\"small-carousel\">   \r\n                        <div id=\"small-carousel\" class=\"swiper-container\" [swiper]=\"config2\"> \r\n                            <div class=\"swiper-wrapper\">      \r\n                                <div *ngFor=\"let image of property?.gallery; let i=index;\" class=\"swiper-slide\" [ngClass]=\"'thumb-'+i\" [class.active-thumb]=\"i == 0\">\r\n                                    <img [attr.data-src]=\"image.small\" class=\"swiper-lazy mw-100\" (click)=\"selectImage(i)\">\r\n                                    <div class=\"swiper-lazy\"></div>          \r\n                                </div>\r\n                            </div>  \r\n                        </div>\r\n                    </div>\r\n                </mat-card> \r\n                \r\n                \r\n                <mat-card *ngIf=\"property\" class=\"mt-3\">\r\n                    <mat-card-header fxLayoutAlign=\"center center\"> \r\n                        <mat-card-title class=\"uppercase\">Details</mat-card-title> \r\n                    </mat-card-header>\r\n                    <div fxLayout=\"row wrap\" class=\"details\">\r\n                        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxLayout=\"row\" class=\"item\">\r\n                            <span>Catégorie:</span>\r\n                            <span>{{property.propertyType}}</span>\r\n                        </div> \r\n                        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxLayout=\"row\" class=\"item\">\r\n                            <span>Type Offre:</span>\r\n                            <div fxLayout=\"row wrap\" class=\"list\">\r\n                                <span>{{property.propertyStatus}}</span>\r\n                            </div>\r\n                        </div> \r\n                        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxLayout=\"row\" class=\"item\">\r\n                            <span>Ville:</span>\r\n                            <span>{{property.city}}</span>\r\n                        </div>\r\n                        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxLayout=\"row\" class=\"item\">\r\n                            <span>Code Postal:</span>\r\n                            <span>{{property.zipCode}}</span>\r\n                        </div> \r\n                        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxLayout=\"row\" class=\"item\">\r\n                            <span>Région:</span>\r\n                            <div fxLayout=\"row wrap\" class=\"list\">\r\n                                <span >{{property.neighborhood}}</span>\r\n                            </div>\r\n                        </div>\r\n                    \r\n                        <div *ngIf=\"status=='Appartement' || status=='Maison'\"  fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxLayout=\"row\" class=\"item\">\r\n                            <span>Chambres:</span>\r\n                            <span>{{property.bedrooms}}</span>\r\n                        </div>\r\n                        <div *ngIf=\"status=='Appartement' || status=='Maison'\"  fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxLayout=\"row\" class=\"item\">\r\n                            <span>Salles de bain:</span>\r\n                            <span>{{property.bathrooms}}</span>\r\n                        </div>\r\n                        <div *ngIf=\"status=='Appartement' || status=='Maison'\" fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxLayout=\"row\" class=\"item\">\r\n                            <span>Garages:</span>\r\n                            <span>{{property.garages}}</span>\r\n                        </div>\r\n                        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxLayout=\"row\" class=\"item\">\r\n                            <span>Surface:</span>\r\n                            <span>{{property.area.value}} {{property.area.unit}}</span>\r\n                        </div>\r\n                        <div *ngIf=\"status=='Appartement' || status=='Maison' || status=='Commerce'\" fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxLayout=\"row\" class=\"item\">\r\n                            <span>Année de construction:</span>\r\n                            <span>{{property.yearBuilt}}</span>\r\n                        </div>\r\n                    </div>   \r\n                </mat-card>\r\n\r\n                <mat-card class=\"mt-3\"> \r\n                    <mat-card-header fxLayoutAlign=\"center center\"> \r\n                        <mat-card-title class=\"uppercase\">Suplémentaires</mat-card-title> \r\n                    </mat-card-header>\r\n                    <mat-card-content>\r\n                        <div fxLayout=\"row wrap\">\r\n                            <div *ngFor=\"let feature of featureList\" fxFlex=\"100\" fxFlex.gt-xs=\"33.3\">\r\n                                <mat-icon class=\"mat-icon-sm\" color=\"primary\">check</mat-icon>\r\n                                <span class=\"mx-2\">{{feature}}</span>\r\n                            </div>\r\n                        </div>\r\n                    </mat-card-content>\r\n                </mat-card>\r\n\r\n           \r\n\r\n                <mat-card class=\"mt-3\"> \r\n                    <mat-card-header fxLayoutAlign=\"center center\"> \r\n                        <mat-card-title class=\"uppercase\">Description</mat-card-title> \r\n                    </mat-card-header>\r\n                    <mat-card-content>\r\n                        <p>{{property?.desc}}</p>\r\n                      \r\n                    </mat-card-content>\r\n                </mat-card> \r\n\r\n                <mat-card class=\"mt-3\"> \r\n                    <mat-card-header fxLayoutAlign=\"center center\"> \r\n                        <mat-card-title class=\"uppercase\">Localisation</mat-card-title> \r\n                    </mat-card-header>\r\n                    <mat-card-content>\r\n                        <agm-map [latitude]=\"property?.location.lat\" [longitude]=\"property?.location.lng\" [mapTypeControl]=\"true\" [fullscreenControl]=\"true\">\r\n                            <agm-marker [latitude]=\"property?.location.lat\" [longitude]=\"property?.location.lng\" [markerDraggable]=\"false\"></agm-marker>\r\n                        </agm-map>\r\n                    </mat-card-content>                   \r\n                </mat-card>\r\n\r\n          \r\n                <mat-card  *ngIf=\"property\" class=\"mt-3\"> \r\n                    <mat-card-header fxLayoutAlign=\"center center\"> \r\n                        <mat-card-title class=\"uppercase\">Video</mat-card-title> \r\n                    </mat-card-header>\r\n                    <mat-card-content>\r\n                      \r\n                        <div class=\"mt-5\">\r\n                            <div [innerHtml]=\"embedVideo\" class=\"videoWrapper\"></div>                                    \r\n                        </div>                             \r\n                    </mat-card-content>\r\n                </mat-card>                \r\n\r\n                <mat-card class=\"mt-3\" fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\"> \r\n                    <span>ID:<span class=\"fw-500 mx-2\">{{property?.id}}</span></span>\r\n                    <span>Published:<span class=\"fw-500 mx-2\">{{property?.published  | date:\"dd/MM/yyyy\" }}</span></span>\r\n                    <span>Last Update:<span class=\"fw-500 mx-2\">{{property?.lastUpdate  | date:\"dd/MM/yyyy\" }}</span></span>\r\n                </mat-card>\r\n\r\n                <app-comments *ngIf=\"property\" [propertyId]=\"property.id\"></app-comments>  \r\n\r\n            </mat-sidenav-content>\r\n        </mat-sidenav-container>\r\n\r\n    </div>\r\n</div>\r\n \r\n<app-get-in-touch></app-get-in-touch>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_properties_properties_module_ts.js.map