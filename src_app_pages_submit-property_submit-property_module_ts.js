"use strict";
(self["webpackChunkhousekey"] = self["webpackChunkhousekey"] || []).push([["src_app_pages_submit-property_submit-property_module_ts"],{

/***/ 98912:
/*!********************************************************************!*\
  !*** ./src/app/pages/submit-property/submit-property.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubmitPropertyComponent": () => (/* binding */ SubmitPropertyComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _submit_property_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./submit-property.component.html?ngResource */ 4319);
/* harmony import */ var _submit_property_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submit-property.component.scss?ngResource */ 70906);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ 70900);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @agm/core */ 93333);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 58987);



/// <reference types="@types/googlemaps" />





let SubmitPropertyComponent = class SubmitPropertyComponent {
    constructor(appService, fb, mapsAPILoader, ngZone, http) {
        this.appService = appService;
        this.fb = fb;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.http = http;
        this.features = [];
        this.featuresTerrain = [];
        this.featuresCommerce = [];
        this.propertyTypes = [];
        this.propertyStatuses = [];
        this.cities = [];
        this.neighborhoods = [];
        this.streets = [];
        this.lat = 33.8933;
        this.lng = 10.1029;
        this.zoom = 12;
        this.progress = 0;
        this.message = '';
        this.urls = [];
        this.files = [];
        this.myFiles = [];
        this.datax = [];
        this.listfeatures = [];
        this.type = false;
        this.status = '';
        this.featureValue = '';
    }
    ngOnInit() {
        this.getProperties();
        // this.getFeaturedList()
        this.features = this.appService.getFeatures();
        this.featuresTerrain = this.appService.getFeaturesTerrain();
        this.featuresCommerce = this.appService.getFeaturesCommerce();
        this.propertyTypes = this.appService.getPropertyTypes();
        this.propertyStatuses = this.appService.getPropertyStatuses();
        this.getCities();
        this.streets = this.appService.getStreets();
        this.submitForm = this.fb.group({
            basic: this.fb.group({
                title: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
                desc: null,
                priceDollar: null,
                priceEuro: null,
                propertyType: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
                propertyStatus: null,
                gallery: null
            }),
            address: this.fb.group({
                location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
                city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
                zipCode: '',
                neighborhood: '',
                adresse: ''
            }),
            additional: this.fb.group({
                bedrooms: '',
                bathrooms: '',
                garages: '',
                area: '',
                yearBuilt: '',
                features: this.buildFeatures(this.datax)
            }),
            media: this.fb.group({
                videos: this.fb.array([this.createVideo()]),
                plans: this.fb.array([this.createPlan()]),
                additionalFeatures: this.fb.array([this.createFeature()]),
                featured: false
            })
        });
        this.setCurrentPosition();
        this.placesAutocomplete();
    }
    getFeaturedProperties() {
        this.appService.getFeaturedProperties().subscribe(data => {
            // const res= this.property.features.map((x:any)=>x.desc)
            //  console.log(data);
        });
    }
    getCities() {
        this.appService.getCities().subscribe(data => {
            this.cities = data;
        });
    }
    selectFile(event) {
        /*       if (event.target.files && event.target.files[0]) {
                  var filesAmount = event.target.files.length;
                  for (let i = 0; i < filesAmount; i++) {
                          var reader = new FileReader();
          
                          reader.onload = (event:any) => {
                             this.urls.push(event.target.result);
                          }
          
                          reader.readAsDataURL(event.target.files[i]);
                  }
              }
            
           this.selectedFiles = event.target.files; */
        //console.log(this.currentFile);
        for (var i = 0; i < event.target.files.length; i++) {
            this.files.push(event.target.files[i]);
            console.log(this.files);
        }
    }
    getNeighborhoods(id) {
        this.appService.getNeighborhoodByCityId(id).subscribe(data => {
            this.neighborhoods = data;
        });
    }
    addProperty(e) {
        const userId = parseInt(localStorage.getItem('userId'));
        const propertyType = Object.values(this.submitForm.get('basic').value)[4]['name'];
        const title = Object.values(this.submitForm.get('basic').value)[0];
        const priceDollar = parseInt(`${Object.values(this.submitForm.get('basic').value)[2]}`);
        const propertyStatus = Object.values(this.submitForm.get('basic').value)[5][0]['name'];
        const desc = Object.values(this.submitForm.get('basic').value)[1];
        //const gallery = Object.values(this.submitForm.get('basic').value)[3]
        const basicfinal = { title, propertyType, propertyStatus, desc };
        const adresse = Object.values(this.submitForm.get('address').value)[4];
        //const location = Object.values(this.submitForm.get('address').value)[0]
        const city = Object.values(this.submitForm.get('address').value)[1]['name'];
        const zipCode = Object.values(this.submitForm.get('address').value)[2];
        const neighborhood = Object.values(this.submitForm.get('address').value)[3][0]['name'];
        const addressfinal = { city, zipCode, neighborhood, adresse };
        const bedrooms = parseInt(`${Object.values(this.submitForm.get('additional').value)[0]}`);
        const bathrooms = parseInt(`${Object.values(this.submitForm.get('additional').value)[1]}`);
        const yearBuilt = parseInt(`${Object.values(this.submitForm.get('additional').value)[4]}`);
        const garages = parseInt(`${Object.values(this.submitForm.get('additional').value)[2]}`);
        const area = parseInt(`${Object.values(this.submitForm.get('additional').value)[3]}`);
        // console.log(Object.values(features));
        const additionalfinal = { garages, area, yearBuilt, bathrooms, bedrooms };
        const name = Object.values(this.submitForm.get('media').value)[0][0]['name'];
        const link = Object.values(this.submitForm.get('media').value)[0][0]['link'];
        const mediafinal = { name, link };
        const data = { ...basicfinal, ...additionalfinal, ...addressfinal };
        this.appService.addProperties(userId, data).subscribe(data => {
            //console.log(data.id);
            const lastid = data.id;
            for (let index = 0; index < this.listfeatures.length; index++) {
                this.appService.addFeature(lastid, { desc: `${this.listfeatures[index]}` }).subscribe(data => {
                    console.log(data);
                });
            }
            if (propertyStatus == "A vendre") {
                this.appService.addPrice(lastid, { rent: null, sale: priceDollar }).subscribe(data => {
                    // console.log("price=",data);
                });
            }
            else {
                this.appService.addPrice(lastid, { rent: priceDollar, sale: null }).subscribe(data => {
                    // console.log("price=",data);
                });
            }
            this.appService.addLocation(lastid, { lat: 30, lng: 10 }).subscribe(data => {
                // console.log("area=",data);
            });
            this.appService.addArea(lastid, { value: area, unit: "m²" }).subscribe(data => {
                // console.log("area=",data);
            });
            // const features =Object.values((Object.values(this.submitForm.get('additional').value))[5])
            //  console.log(features);
            //console.log("frrrg",e);
            //  console.log(e.source.value);
            /*  let arr=Array(this.listfeatures.push(e.source.value)) */
            this.appService.addVideo(lastid, mediafinal).subscribe(data => {
            });
            this.uploadImages(lastid);
            //const small=`assets/images/${lastid}small-1366-${file.originalname}`
            //console.log(this.listfeatures);
        });
        //console.log(data);
    }
    onFileChange(event) {
        for (var i = 0; i < event.target.files.length; i++) {
            this.files.push(event.target.files[i]);
        }
    }
    uploadImages(id) {
        const formData = new FormData();
        for (var i = 0; i < this.files.length; i++) {
            formData.append("file[]", this.files[i]);
        }
        this.appService.addGallery2(id, formData).subscribe(res => {
            for (var i = 0; i < this.files.length; i++) {
                //let originalname=buffer.from(res[i].originalname, 'latin1').toString('utf8');
                // Uint8Array[98, 101, 101, 114, 33, 240, 159, 141, 187]
                //  console.log(decoder.decode(new Uint8Array([98, 101, 101, 114, 33, 240, 159, 141, 187])));
                // let originalname=Buffer.from((res[i].originalname), 'latin1').toString('utf8');
                // console.log(originalname);
                var decodedMessage = ((`${res[i].originalname}`));
                console.log("decode=", decodedMessage);
                let big = (`assets/images/${id}/big-1366-${res[i].originalname}`);
                let medium = (`assets/images/${id}/medium-640-${res[i].originalname}`);
                let small = (`assets/images/${id}/small-240-${res[i].originalname}`);
                this.appService.addGallery(id, { small: small, medium: medium, big: big }).subscribe(data => {
                    console.log(data);
                });
            }
        });
    }
    getProperties() {
        this.appService.getProperties().subscribe(data => {
            this.properties = data;
        });
    }
    addFeatures() {
        this.appService.addFeatures(this.submitForm).subscribe(data => {
            // console.log('data2=',data);
        });
    }
    onSelectionChange(e) {
        if (e.selectedIndex == 4) {
            this.horizontalStepper._steps.forEach(step => step.editable = false);
            // console.log(this.submitForm.value);      
        }
    }
    reset() {
        this.listfeatures = [];
        this.horizontalStepper.reset();
        const videos = this.submitForm.controls.media.get('videos');
        while (videos.length > 1) {
            videos.removeAt(0);
        }
        const plans = this.submitForm.controls.media.get('plans');
        while (plans.length > 1) {
            plans.removeAt(0);
        }
        const additionalFeatures = this.submitForm.controls.media.get('additionalFeatures');
        while (additionalFeatures.length > 1) {
            additionalFeatures.removeAt(0);
        }
        this.submitForm.reset({
            additional: {
                features: this.features
            },
            media: {
                featured: false
            }
        });
    }
    // -------------------- Address ---------------------------  
    onSelectCity() {
        this.submitForm.controls.address.get('neighborhood').setValue(null, { emitEvent: false });
        this.getNeighborhoods(this.submitForm.value.address.city.id);
    }
    onSelectNeighborhood() {
        //this.submitForm.controls.address.get('adresse').setValue(null, {emitEvent: false}); 
    }
    setCurrentPosition() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.lat = position.coords.latitude;
                this.lng = position.coords.longitude;
            });
        }
    }
    placesAutocomplete() {
        this.mapsAPILoader.load().then(() => {
            let autocomplete = new google.maps.places.Autocomplete(this.addressAutocomplete.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", () => {
                this.ngZone.run(() => {
                    let place = autocomplete.getPlace();
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    ;
                    this.lat = place.geometry.location.lat();
                    this.lng = place.geometry.location.lng();
                    this.getAddress();
                });
            });
        });
    }
    // public getAddress(){    
    //   this.mapsAPILoader.load().then(() => {
    //     let geocoder = new google.maps.Geocoder();
    //     let latlng = new google.maps.LatLng(this.lat, this.lng); 
    //     geocoder.geocode({'location': latlng}, (results, status) => {
    //       if(status === google.maps.GeocoderStatus.OK) {
    //         console.log(results); 
    //         //this.addresstext.nativeElement.focus();  
    //         let address = results[0].formatted_address; 
    //         this.submitForm.controls.location.setValue(address); 
    //         this.setAddresses(results[0]);          
    //       }
    //     });
    //   });
    // }
    getAddress() {
        this.appService.getAddress(this.lat, this.lng).subscribe(response => {
            // console.log(response);
            if (response['results'].length) {
                let address = response['results'][0].formatted_address;
                this.submitForm.controls.address.get('location').setValue(address);
                this.setAddresses(response['results'][0]);
            }
        });
    }
    onMapClick(e) {
        this.lat = e.coords.lat;
        this.lng = e.coords.lng;
        this.getAddress();
    }
    onMarkerClick(e) {
        //console.log(e);
    }
    setAddresses(result) {
        this.submitForm.controls.address.get('city').setValue(null);
        this.submitForm.controls.address.get('zipCode').setValue(null);
        this.submitForm.controls.address.get('adresse').setValue(null);
        var newCity, newStreet, newNeighborhood;
        result.address_components.forEach(item => {
            if (item.types.indexOf('locality') > -1) {
                if (this.cities.filter(city => city.name == item.long_name)[0]) {
                    newCity = this.cities.filter(city => city.name == item.long_name)[0];
                }
                else {
                    newCity = { id: this.cities.length + 1, name: item.long_name };
                    this.cities.push(newCity);
                }
                this.submitForm.controls.address.get('city').setValue(newCity);
            }
            if (item.types.indexOf('postal_code') > -1) {
                this.submitForm.controls.address.get('zipCode').setValue(item.long_name);
            }
        });
        if (!newCity) {
            result.address_components.forEach(item => {
                if (item.types.indexOf('administrative_area_level_1') > -1) {
                    if (this.cities.filter(city => city.name == item.long_name)[0]) {
                        newCity = this.cities.filter(city => city.name == item.long_name)[0];
                    }
                    else {
                        newCity = {
                            id: this.cities.length + 1,
                            name: item.long_name
                        };
                        this.cities.push(newCity);
                    }
                    this.submitForm.controls.address.get('city').setValue(newCity);
                }
            });
        }
        if (newCity) {
            result.address_components.forEach(item => {
                if (item.types.indexOf('neighborhood') > -1) {
                    let neighborhood = this.neighborhoods.filter(n => n.name == item.long_name && n.cityId == newCity.id)[0];
                    if (neighborhood) {
                        newNeighborhood = neighborhood;
                    }
                    else {
                        newNeighborhood = {
                            id: this.neighborhoods.length + 1,
                            name: item.long_name,
                            cityId: newCity.id
                        };
                        this.neighborhoods.push(newNeighborhood);
                    }
                    this.neighborhoods = [...this.neighborhoods];
                    this.submitForm.controls.address.get('neighborhood').setValue([newNeighborhood]);
                }
            });
        }
        if (newCity) {
            result.address_components.forEach(item => {
                if (item.types.indexOf('route') > -1) {
                    if (this.streets.filter(adresse => adresse.name == item.long_name && adresse.cityId == newCity.id)[0]) {
                        newStreet = this.streets.filter(adresse => adresse.name == item.long_name && adresse.cityId == newCity.id)[0];
                    }
                    else {
                        newStreet = {
                            id: this.streets.length + 1,
                            name: item.long_name,
                            cityId: newCity.id,
                            neighborhoodId: (newNeighborhood) ? newNeighborhood.id : null
                        };
                        this.streets.push(newStreet);
                    }
                    this.streets = [...this.streets];
                    this.submitForm.controls.address.get('adresse').setValue([newStreet]);
                }
            });
        }
    }
    // -------------------- Additional ---------------------------  
    buildFeatures(data) {
        const arr = data.map(feature => {
            return this.fb.group({
                id: feature.id,
                name: feature.name,
                selected: feature.selected
            });
        });
        // console.log(arr);
        return this.fb.array(arr);
    }
    // -------------------- Media --------------------------- 
    createVideo() {
        return this.fb.group({
            id: null,
            name: null,
            link: null
        });
    }
    addVideo() {
        const videos = this.submitForm.controls.media.get('videos');
        videos.push(this.createVideo());
    }
    deleteVideo(index) {
        const videos = this.submitForm.controls.media.get('videos');
        videos.removeAt(index);
    }
    createPlan() {
        return this.fb.group({
            id: null,
            name: null,
            desc: null,
            area: null,
            rooms: null,
            baths: null,
            image: null
        });
    }
    addPlan() {
        const plans = this.submitForm.controls.media.get('plans');
        plans.push(this.createPlan());
    }
    deletePlan(index) {
        const plans = this.submitForm.controls.media.get('plans');
        plans.removeAt(index);
    }
    createFeature() {
        return this.fb.group({
            id: null,
            name: null,
            value: null
        });
    }
    addFeature() {
        const features = this.submitForm.controls.media.get('additionalFeatures');
        features.push(this.createFeature());
    }
    deleteFeature(index) {
        const features = this.submitForm.controls.media.get('additionalFeatures');
        features.removeAt(index);
    }
    changeFeature(e) {
        console.log(e.source.value);
        console.log(e.checked);
        // this.featureValue=e.source.value
        //    const features =Object.values((Object.values(this.submitForm.get('additional').value))[5])
        //   console.log(e.source.);
        // this.listfeatures.push(e.source.value)
        (this.listfeatures.push(e.source.value));
        console.log(this.listfeatures);
        /* var children =<HTMLElement>document.getElementById("mat-checkbox-1")[0].innerHTML;
       console.log(children); */
        //  console.log(this.lastid2);
        // 
        /*
          if (this.featureValue!=null ) {
      
            this.appService.addFeature(this.lastid2,{name:this.featureValue,propertyId:this.lastid2}).subscribe(data=>{
         console.log(this.featureValue);
        
          })
          }  */
    }
    change(e) {
        this.status = this.submitForm.get('basic')['controls'].propertyType.value.name;
        //  submitForm.get('additional')['controls'].features['controls']
        if (e.value.name === "Terrain") {
            this.status = 'Terrain';
            this.submitForm.get('additional')['controls'].features = this.buildFeatures(this.featuresTerrain);
        }
        else if (e.value.name === "Maison") {
            this.status = 'Maison';
            console.log(this.submitForm.get('additional')['controls'].features);
            this.submitForm.get('additional')['controls'].features = this.buildFeatures(this.features);
        }
        else if (e.value.name === "Appartement") {
            this.status = 'Maison';
            this.submitForm.get('additional')['controls'].features = this.buildFeatures(this.features);
        }
        else if (e.value.name === "Commerce") {
            this.status = 'Commerce';
            this.submitForm.get('additional')['controls'].features = this.buildFeatures(this.featuresCommerce);
        }
    }
};
SubmitPropertyComponent.ctorParameters = () => [
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder },
    { type: _agm_core__WEBPACK_IMPORTED_MODULE_4__.MapsAPILoader },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient }
];
SubmitPropertyComponent.propDecorators = {
    horizontalStepper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['horizontalStepper',] }],
    addressAutocomplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['addressAutocomplete',] }]
};
SubmitPropertyComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-submit-property',
        template: _submit_property_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_submit_property_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SubmitPropertyComponent);



/***/ }),

/***/ 18070:
/*!*****************************************************************!*\
  !*** ./src/app/pages/submit-property/submit-property.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubmitPropertyModule": () => (/* binding */ SubmitPropertyModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ 93333);
/* harmony import */ var ngx_input_file__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-input-file */ 89618);
/* harmony import */ var _submit_property_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submit-property.component */ 98912);








const routes = [
    { path: '', component: _submit_property_component__WEBPACK_IMPORTED_MODULE_1__.SubmitPropertyComponent, pathMatch: 'full' }
];
let SubmitPropertyModule = class SubmitPropertyModule {
};
SubmitPropertyModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_submit_property_component__WEBPACK_IMPORTED_MODULE_1__.SubmitPropertyComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _agm_core__WEBPACK_IMPORTED_MODULE_6__.AgmCoreModule,
            ngx_input_file__WEBPACK_IMPORTED_MODULE_7__.InputFileModule
        ]
    })
], SubmitPropertyModule);



/***/ }),

/***/ 70906:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/submit-property/submit-property.component.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = ".flex {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.card img {\n  width: 100px;\n  height: 100px;\n  border: 1px solid #D9D9D9;\n  border-radius: 5px;\n  margin-right: 1px;\n}\n\n.add {\n  width: 100px;\n  height: 100px;\n  border: 1px solid #D9D9D9;\n  border-radius: 5px;\n}\n\n.add .fa {\n  cursor: pointer;\n  padding: 32px;\n  font-size: 3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Ym1pdC1wcm9wZXJ0eS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0U7RUFDQSxlQUFBO0VBQ0MsYUFBQTtFQUNDLGNBQUE7QUFFSiIsImZpbGUiOiJzdWJtaXQtcHJvcGVydHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxuICBcbiAgLmNhcmQgaW1ne1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEOUQ5RDk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMXB4O1xuICB9XG4gIFxuICAuYWRke1xuICAgIHdpZHRoOjEwMHB4O1xuICAgIGhlaWdodDoxMDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDlEOUQ5O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgfVxuICAuYWRkIC5mYXtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAgcGFkZGluZzogMzJweDtcbiAgICBmb250LXNpemU6IDNlbTtcbiAgfSJdfQ== */";

/***/ }),

/***/ 4319:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/submit-property/submit-property.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"p-3\">\r\n    <div class=\"theme-container\">\r\n  \r\n      <mat-card ngClass.lt-lg=\"p-0\" [formGroup]=\"submitForm\">\r\n  \r\n        <mat-stepper #horizontalStepper orientation=\"horizontal\" linear=\"true\" class=\"submit-property\" (selectionChange)=\"onSelectionChange($event)\">\r\n\r\n            <mat-step [stepControl]=\"submitForm.get('basic')\" label=\"Basique\">\r\n              <div class=\"step-content\">\r\n\r\n                  <form formGroupName=\"basic\" fxLayout=\"row wrap\">\r\n\r\n                      <div fxFlex=\"100\" class=\"p-3\">\r\n                        <h1 class=\"fw-500 text-center\">Basique</h1>\r\n                      </div>\r\n                              \r\n                      <div fxFlex=\"100\" class=\"px-2\">\r\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label  >Titre</mat-label>\r\n                            <input matInput placeholder=\"Titre\" formControlName=\"title\" required autocomplete=\"off\">\r\n                            <mat-error *ngIf=\"submitForm.get('basic')['controls'].title.errors?.required\">Title is required</mat-error>\r\n                        </mat-form-field>\r\n                      </div>  \r\n                  \r\n                      <div fxFlex=\"100\" class=\"px-2\">\r\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label>Description</mat-label> \r\n                            <textarea matInput placeholder=\"Description\" formControlName=\"desc\" rows=\"7\"></textarea> \r\n                        </mat-form-field> \r\n                      </div> \r\n                  \r\n                      <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\r\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label>Prix (TND)</mat-label>\r\n                            <input matInput placeholder=\"Entrer prix\" formControlName=\"priceDollar\"  autocomplete=\"off\"> \r\n                        </mat-form-field>\r\n                      </div> \r\n                  \r\n                  \r\n                  \r\n                      <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\r\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label>Catégorie</mat-label> \r\n                            <mat-select (selectionChange)=\"change($event)\"  placeholder=\"Select Property Type\" formControlName=\"propertyType\" required>\r\n                                <mat-option *ngFor=\"let propertyType of propertyTypes\" [value]=\"propertyType\">\r\n                                    {{propertyType.name}}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                            <mat-error *ngIf=\"submitForm.get('basic')['controls'].propertyType.errors?.required\">Property Type is required</mat-error>                               \r\n                        </mat-form-field>\r\n                      </div>\r\n                  \r\n                      <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\r\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label>Type Offre</mat-label>\r\n                            <mat-select placeholder=\"Select Property Status\" formControlName=\"propertyStatus\"  aria-required=\"true\" multiple>\r\n                                <mat-option  *ngFor=\"let propertyStatus of propertyStatuses;let index=index\"  [value]=\"propertyStatus\">\r\n                                    {{propertyStatus.name}}\r\n                                </mat-option>\r\n                            </mat-select>                             \r\n                        </mat-form-field>\r\n                      </div>    \r\n                      \r\n\r\n                      <div fxFlex=\"100\" class=\"step-section pb-2\">\r\n                      <div class='flex'>\r\n                        <span class=\"card\">\r\n                          <img *ngFor='let url of urls'  [src]=\"url\" height=\"200\">\r\n                      </span>\r\n                      \r\n                        <span class=\"add\">\r\n                            <label for=\"upload\">\r\n                              <span class=\"fa fa-plus\"></span>\r\n                        <input type='file'  (change)=\"selectFile($event)\"  formControlName=\"gallery\"  multiple hidden id=\"upload\">\r\n                            </label>\r\n                        </span>\r\n                      </div>  \r\n</div>\r\n<!-- \r\n                      <div fxFlex=\"100\" class=\"step-section pb-2\">\r\n                          <p class=\"mb-0\"><span class=\"uppercase fw-500\">Gallery</span><span class=\"text-muted mx-3\">(max 8 images)</span></p>  \r\n                          <input-file multiple=\"true\"    (change)=\"selectFile($event)\"   formControlName=\"gallery\" fileLimit=\"8\" fileAccept=\"image/*\"></input-file>  \r\n                      </div>  -->\r\n\r\n                      <div fxFlex=\"100\" class=\"mt-3 p-2\" fxLayoutAlign=\"end center\">\r\n                        <button  mat-raised-button color=\"primary\" matStepperNext fxLayout=\"row\" fxLayoutAlign=\"center center\" type=\"button\">\r\n                          <span class=\"mx-1 uppercase\">Suivant</span>                    \r\n                          <mat-icon>navigate_next</mat-icon>\r\n                        </button> \r\n                      \r\n                      </div> \r\n                  \r\n                  </form>\r\n               \r\n              </div>\r\n            </mat-step>\r\n            \r\n            <mat-step [stepControl]=\"submitForm.get('address')\" label=\"Adresse\">\r\n              <div class=\"step-content\">\r\n\r\n                  <form formGroupName=\"address\" fxLayout=\"row wrap\">\r\n            \r\n                      <div fxFlex=\"100\" class=\"p-3\">\r\n                        <h1 class=\"fw-500 text-center\">Adresse</h1>\r\n                      </div>\r\n                                \r\n                      <div fxFlex=\"100\" class=\"px-2\">\r\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-icon matPrefix class=\"mr-1 text-muted\">location_on</mat-icon>\r\n                            <mat-label>Localisation</mat-label>\r\n                            <input matInput placeholder=\"Enter a location\" formControlName=\"location\" autocomplete=\"off\" #addressAutocomplete> \r\n                            <button *ngIf=\"submitForm.get('address')['controls'].location.value\" mat-button matSuffix mat-icon-button (click)=\"submitForm.get('address')['controls'].location.setValue(null)\" type=\"button\">\r\n                              <mat-icon>close</mat-icon>\r\n                            </button>\r\n                            <mat-error *ngIf=\"submitForm.get('address')['controls'].location.errors?.required\">Location is required</mat-error>   \r\n                        </mat-form-field>\r\n                      </div> \r\n                    \r\n                      <div fxFlex=\"100\" class=\"px-2 mb-4\">\r\n                          <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [mapTypeControl]=\"true\" [fullscreenControl]=\"true\" (mapClick)=\"onMapClick($event)\">\r\n                              <agm-marker [latitude]=\"lat\" [longitude]=\"lng\" [markerDraggable]=\"true\" (markerClick)=\"onMarkerClick($event)\"></agm-marker>\r\n                          </agm-map>\r\n                      </div>\r\n                    \r\n                      <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\r\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label>Ville</mat-label>\r\n                            <mat-select placeholder=\"Select City...\" formControlName=\"city\" (selectionChange)=\"onSelectCity()\" required> \r\n                              <mat-option *ngFor=\"let city of cities\" [value]=\"city\">\r\n                                {{city.name}}\r\n                              </mat-option>\r\n                            </mat-select> \r\n                            <mat-error *ngIf=\"submitForm.get('address')['controls'].city.errors?.required\">City is required</mat-error>                    \r\n                        </mat-form-field>\r\n                      </div> \r\n                    \r\n                      <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\r\n                          <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label>Code postal</mat-label>\r\n                            <input matInput placeholder=\"exp. 98104\" autocomplete=\"off\" formControlName=\"zipCode\">                  \r\n                          </mat-form-field>\r\n                      </div>\r\n                    \r\n                      <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\r\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                          <mat-label>Région</mat-label>\r\n                          <mat-select placeholder=\"Select Région...\" formControlName=\"neighborhood\" multiple (selectionChange)=\"onSelectNeighborhood()\">\r\n                            <mat-option *ngFor=\"let neighborhood of neighborhoods | filterNeighborhoods: submitForm.get('address')['controls'].city.value?.id\" [value]=\"neighborhood\">\r\n                              {{neighborhood.name}}\r\n                            </mat-option>\r\n                          </mat-select>   \r\n                        </mat-form-field>\r\n                      </div> \r\n                    \r\n\r\n                      <div fxFlex=\"100\" class=\"px-2\">\r\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label>Adresse</mat-label>\r\n                            <input matInput placeholder=\"Adresse\" formControlName=\"adresse\"  autocomplete=\"off\">\r\n                            <mat-error *ngIf=\"submitForm.get('address')['controls'].adresse.value\">Title is required</mat-error>\r\n                        </mat-form-field>\r\n                      </div> \r\n                    <!--                                 <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\r\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                          <mat-label>Adresse</mat-label>\r\n                          <mat-select placeholder=\"Select Adresse...\" formControlName=\"street\" multiple> \r\n                            \r\n                            <mat-option *ngFor=\"let street of streets | filterStreets : { neighborhoods: submitForm.get('address')['controls'].neighborhood.value?.id, cityId:submitForm.get('address')['controls'].city.value?.id } \" [value]=\"street\">\r\n                              {{adresse.name}}\r\n                            </mat-option>\r\n                          </mat-select>  \r\n                        </mat-form-field>\r\n                      </div>   -->\r\n                    \r\n                      <div fxFlex=\"100\" class=\"mt-3 p-2\" fxLayoutAlign=\"space-between center\">\r\n                        <button mat-raised-button color=\"primary\" matStepperPrevious fxLayout=\"row\" fxLayoutAlign=\"center center\" type=\"button\">\r\n                          <mat-icon>navigate_before</mat-icon>\r\n                          <span class=\"mx-1 uppercase\">Précédent</span>  \r\n                        </button>\r\n                        <button mat-raised-button color=\"primary\" matStepperNext fxLayout=\"row\" fxLayoutAlign=\"center center\" type=\"button\">\r\n                          <span class=\"mx-1 uppercase\">Suivant</span>                    \r\n                          <mat-icon>navigate_next</mat-icon>\r\n                        </button> \r\n                      </div>  \r\n                    \r\n                  </form>\r\n                \r\n              </div> \r\n            </mat-step>\r\n\r\n            <mat-step [stepControl]=\"submitForm.get('additional')\" label=\"Caractéristiques\">\r\n              <div class=\"step-content\">\r\n\r\n                  <form formGroupName=\"additional\" fxLayout=\"row wrap\">\r\n    \r\n                      <div fxFlex=\"100\" class=\"p-3\">\r\n                        <h1 class=\"fw-500 text-center\">Caractéristiques</h1>\r\n                      </div>\r\n                  \r\n                      <div *ngIf=\"status=='Maison'  || status==''\" fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" class=\"px-2\">\r\n                          <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label>Chambres</mat-label>\r\n                            <input matInput placeholder=\"bedrooms\" autocomplete=\"off\" formControlName=\"bedrooms\" onlyNumber maxlength=\"2\">                  \r\n                          </mat-form-field>\r\n                      </div>\r\n                  \r\n                      <div *ngIf=\"status=='Maison'  || status==''\" fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" class=\"px-2\">\r\n                          <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label>Salles de bain</mat-label>\r\n                            <input matInput placeholder=\"bathrooms\" autocomplete=\"off\" formControlName=\"bathrooms\" onlyNumber maxlength=\"2\">                  \r\n                          </mat-form-field>\r\n                      </div>\r\n                  \r\n                      <div *ngIf=\"status=='Maison'  || status==''\" fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" class=\"px-2\">\r\n                          <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label>Garages</mat-label>\r\n                            <input matInput placeholder=\"Garages\" autocomplete=\"off\" formControlName=\"garages\" onlyNumber maxlength=\"2\">                  \r\n                          </mat-form-field>\r\n                      </div>\r\n                      \r\n                      <div  fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\r\n                          <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label>Surface (m²)</mat-label>\r\n                            <input matInput placeholder=\"Area\" autocomplete=\"off\" required formControlName=\"area\" onlyNumber>                  \r\n                          </mat-form-field>\r\n                      </div>\r\n                      \r\n                      <div *ngIf=\"status=='Maison'  || status=='' || status=='Commerce'\" fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\r\n                          <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                            <mat-label>Année de construction</mat-label>\r\n                            <input matInput placeholder=\"Année de construction\" autocomplete=\"off\" formControlName=\"yearBuilt\" onlyNumber  maxlength=\"4\">                  \r\n                          </mat-form-field>\r\n                      </div>\r\n                  \r\n                      <div *ngIf=\"status=='Maison'\" fxFlex=\"100\" class=\"mb-2\"> \r\n                          <p class=\"uppercase m-2 fw-500\">Supplémentaire</p> \r\n                          <div formArrayName=\"features\" fxLayout=\"row wrap\">\r\n                            <div [formGroupName]=\"i\" *ngFor=\"let control of submitForm.get('additional')['controls'].features['controls']; index as i\" class=\"p-2\">\r\n                              <mat-checkbox [value]=\"features[i].name\"  (change)=\"changeFeature($event)\"  formControlName=\"selected\">{{features[i].name}}</mat-checkbox>                         \r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                    \r\n                      <div  *ngIf=\"status=='Appartement'\" fxFlex=\"100\" class=\"mb-2\"> \r\n                        <p class=\"uppercase m-2 fw-500\">Supplémentaire</p> \r\n                        <div formArrayName=\"features\" fxLayout=\"row wrap\">\r\n                          <div [formGroupName]=\"i\" *ngFor=\"let control of submitForm.get('additional')['controls'].features['controls']; index as i\" class=\"p-2\">\r\n                            <mat-checkbox [value]=\"features[i].name\" (change)=\"changeFeature($event)\" formControlName=\"selected\">{{features[i].name}}</mat-checkbox>                         \r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div  *ngIf=\"status=='Terrain'\" fxFlex=\"100\" class=\"mb-2\"> \r\n                      <p class=\"uppercase m-2 fw-500\">Supplémentaire</p> \r\n                      <div formArrayName=\"features\" fxLayout=\"row wrap\">\r\n                        <div [formGroupName]=\"i\" *ngFor=\"let control of submitForm.get('additional')['controls'].features['controls']; index as i\" class=\"p-2\">\r\n                          <mat-checkbox  [value]=\"featuresTerrain[i].name\" (change)=\"changeFeature($event)\" formControlName=\"selected\">{{featuresTerrain[i].name}}</mat-checkbox>                         \r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n                  \r\n                  <div  *ngIf=\"status=='Commerce'\" fxFlex=\"100\" class=\"mb-2\"> \r\n                    <p class=\"uppercase m-2 fw-500\">Supplémentaire</p> \r\n                    <div formArrayName=\"features\" fxLayout=\"row wrap\">\r\n                      <div [formGroupName]=\"i\" *ngFor=\"let control of submitForm.get('additional')['controls'].features['controls']; index as i\" class=\"p-2\">\r\n                        <mat-checkbox  [value]=\"featuresCommerce[i].name\"  (change)=\"changeFeature($event)\" formControlName=\"selected\">{{featuresCommerce[i].name}}</mat-checkbox>                         \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                      <div fxFlex=\"100\" class=\"mt-3 p-2\" fxLayoutAlign=\"space-between center\">\r\n                        <button mat-raised-button color=\"primary\" matStepperPrevious fxLayout=\"row\" fxLayoutAlign=\"center center\" type=\"button\">\r\n                          <mat-icon>navigate_before</mat-icon>\r\n                          <span class=\"mx-1 uppercase\">Précédent</span>  \r\n                        </button>\r\n                        <button mat-raised-button color=\"primary\" matStepperNext fxLayout=\"row\" fxLayoutAlign=\"center center\" type=\"button\">\r\n                          <span class=\"mx-1 uppercase\">Suivant</span>                    \r\n                          <mat-icon>navigate_next</mat-icon>\r\n                        </button> \r\n                      </div>  \r\n                  \r\n                  \r\n                  </form>\r\n                  \r\n                \r\n              </div> \r\n            </mat-step>\r\n\r\n            <mat-step [stepControl]=\"submitForm.get('media')\" label=\"Media\">\r\n              <div class=\"step-content\">\r\n\r\n                  <form formGroupName=\"media\"  enctype='multipart/form-data' fxLayout=\"row wrap\">    \r\n                   \r\n                      <div fxFlex=\"100\" class=\"p-3\">\r\n                        <h1 class=\"fw-500 text-center\">Media</h1>\r\n                      </div>\r\n                  \r\n                      <div fxFlex=\"100\" fxLayoutAlign=\"start center\" class=\"my-3 px-2\"> \r\n                          <p class=\"mb-0\"><span class=\"uppercase fw-500\">Videos</span><span class=\"text-muted mx-3\">(video link to .mp4)</span></p>                            \r\n                          <button type=\"button\" mat-icon-button color=\"primary\" (click)=\"addVideo()\" matTooltip=\"Add New Video\" matTooltipPosition=\"after\">\r\n                          </button>\r\n                      </div> \r\n                      <div formArrayName=\"videos\" fxFlex=\"100\" fxLayout=\"row wrap\">  \r\n                          <div *ngFor=\"let item of submitForm.get('media')['controls'].videos['controls']; let i = index;\" fxFlex=\"100\" class=\"step-section\">\r\n                              <div fxFlex=\"4\" class=\"fw-500 text-center pt-3\">{{i+1}}.</div>\r\n                              <div [formGroupName]=\"i\" fxFlex=\"90\" fxLayout=\"row wrap\">\r\n                                  <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"40\" class=\"px-2\">\r\n                                      <mat-label>Nom</mat-label>\r\n                                      <input matInput placeholder=\"Video name\" formControlName=\"name\" autocomplete=\"off\">     \r\n                                  </mat-form-field> \r\n                                  <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"60\" class=\"px-2\">\r\n                                      <mat-label>Lien</mat-label>\r\n                                      <input matInput placeholder=\"Link to video\" formControlName=\"link\" autocomplete=\"off\">     \r\n                                  </mat-form-field>                                                 \r\n                              </div>\r\n                              <div fxFlex=\"6\" class=\"text-center pt-2\">\r\n                                  <button mat-icon-button color=\"warn\" (click)=\"deleteVideo(i)\" matTooltip=\"Delete Video\">\r\n                                  </button>\r\n                              </div>                            \r\n                          </div>        \r\n                      </div>\r\n\r\n\r\n                    \r\n             <!--      \r\n                      <div fxFlex=\"100\" fxLayoutAlign=\"start center\" class=\"my-3 px-2\"> \r\n                          <p class=\"uppercase fw-500 mb-0\">Plans</p>                            \r\n                          <button type=\"button\" mat-icon-button color=\"primary\" (click)=\"addPlan()\" matTooltip=\"Add New Plan\" matTooltipPosition=\"after\" class=\"mx-3\">\r\n                              <mat-icon>add_circle</mat-icon>\r\n                          </button>\r\n                      </div>  -->\r\n                   <!--    <div formArrayName=\"plans\" fxFlex=\"100\" fxLayout=\"row wrap\">  \r\n                          <div *ngFor=\"let item of submitForm.get('media')['controls'].plans['controls']; let i = index;\" fxFlex=\"100\" class=\"step-section pb-2\">\r\n                              <div fxFlex=\"4\" class=\"fw-500 text-center pt-3\">{{i+1}}.</div>\r\n                              <div [formGroupName]=\"i\" fxFlex=\"90\" fxLayout=\"row wrap\">\r\n                                  <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"40\" class=\"px-2\">\r\n                                      <mat-label>Name</mat-label>\r\n                                      <input matInput placeholder=\"Plan name\" formControlName=\"name\" autocomplete=\"off\">     \r\n                                  </mat-form-field>\r\n                                  <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"60\" class=\"px-2\">\r\n                                      <mat-label>Desc</mat-label>\r\n                                      <input matInput placeholder=\"Description\" formControlName=\"desc\" autocomplete=\"off\">     \r\n                                  </mat-form-field> \r\n                                  <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" class=\"px-2\">\r\n                                      <mat-label>Area (ft²)</mat-label>\r\n                                      <input matInput placeholder=\"Area\" formControlName=\"area\" autocomplete=\"off\" onlyNumber>     \r\n                                  </mat-form-field>\r\n                                  <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" class=\"px-2\">\r\n                                      <mat-label>Rooms</mat-label>\r\n                                      <input matInput placeholder=\"Rooms\" formControlName=\"rooms\" autocomplete=\"off\" onlyNumber>     \r\n                                  </mat-form-field>\r\n                                  <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" class=\"px-2\">\r\n                                      <mat-label>Baths</mat-label>\r\n                                      <input matInput placeholder=\"Baths\" formControlName=\"baths\" autocomplete=\"off\" onlyNumber>     \r\n                                  </mat-form-field>\r\n                                  <div fxFlex=\"100\" class=\"px-2\">  \r\n                                      <input-file placeholder=\"Image (or link to image)\" formControlName=\"image\" fileLimit=\"1\" fileAccept=\"image/*\" [linkEnabled]=\"true\"></input-file>  \r\n                                  </div>                \r\n                              </div>\r\n                              <div fxFlex=\"6\" class=\"text-center pt-2\">\r\n                                  <button mat-icon-button color=\"warn\" (click)=\"deletePlan(i)\" matTooltip=\"Delete Plan\">\r\n                                      <mat-icon>cancel</mat-icon>\r\n                                  </button>\r\n                              </div>  \r\n                          </div>        \r\n                      </div> \r\n                   -->\r\n          <!--             \r\n                      <div fxFlex=\"100\" fxLayoutAlign=\"start center\" class=\"my-3 px-2\"> \r\n                          <p class=\"mb-0 uppercase fw-500\">Additional features</p>                            \r\n                          <button type=\"button\" mat-icon-button color=\"primary\" (click)=\"addFeature()\" matTooltip=\"Add New Feature\" matTooltipPosition=\"after\">\r\n                              <mat-icon>add_circle</mat-icon>\r\n                          </button>\r\n                      </div> \r\n                      <div formArrayName=\"additionalFeatures\" fxFlex=\"100\" fxLayout=\"row wrap\">  \r\n                          <div *ngFor=\"let item of submitForm.get('media')['controls'].additionalFeatures['controls']; let i = index;\" fxFlex=\"100\" class=\"step-section\">\r\n                              <div fxFlex=\"4\" class=\"fw-500 text-center pt-3\">{{i+1}}.</div>\r\n                              <div [formGroupName]=\"i\" fxFlex=\"90\" fxLayout=\"row wrap\">\r\n                                  <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"40\" class=\"px-2\">\r\n                                      <mat-label>Name</mat-label>\r\n                                      <input matInput placeholder=\"Feature name\" formControlName=\"name\" autocomplete=\"off\">     \r\n                                  </mat-form-field>\r\n                                  <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"60\" class=\"px-2\">\r\n                                      <mat-label>Value</mat-label>\r\n                                      <input matInput placeholder=\"Feature value\" formControlName=\"value\" autocomplete=\"off\">     \r\n                                  </mat-form-field>                                                 \r\n                              </div>\r\n                              <div fxFlex=\"6\" class=\"text-center pt-2\">\r\n                                  <button mat-icon-button color=\"warn\" (click)=\"deleteFeature(i)\" matTooltip=\"Delete Feature\">\r\n                                      <mat-icon>cancel</mat-icon>\r\n                                  </button>\r\n                              </div>                            \r\n                          </div>        \r\n                      </div>\r\n                   -->\r\n               <!--    \r\n                      <div fxFlex=\"100\" class=\"py-3\">\r\n                          <mat-slide-toggle formControlName=\"featured\">Featured</mat-slide-toggle>\r\n                      </div> -->\r\n                  \r\n                     \r\n                      <div fxFlex=\"100\" class=\"mt-3 p-2\" fxLayoutAlign=\"space-between center\">\r\n                          <button mat-raised-button color=\"primary\" matStepperPrevious fxLayout=\"row\" fxLayoutAlign=\"center center\" type=\"button\">\r\n                              <mat-icon>navigate_before</mat-icon>\r\n                              <span class=\"mx-1 uppercase\">Précédent</span>  \r\n                          </button>\r\n                          <button (click)=\"addProperty()\"   mat-raised-button color=\"primary\" matStepperNext fxLayout=\"row\" fxLayoutAlign=\"center center\" type=\"submit\">\r\n                              <span class=\"mx-1 uppercase\">Submit</span>                    \r\n                              <mat-icon>navigate_next</mat-icon>\r\n                          </button> \r\n                      </div> \r\n                   \r\n                   \r\n                  </form>\r\n                \r\n              </div> \r\n            </mat-step>\r\n\r\n            <mat-step label=\"Confirmation\">\r\n              <div class=\"step-content\">\r\n                \r\n                  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"pt-5 text-center\"> \r\n                    <button mat-fab color=\"primary\"><mat-icon>check</mat-icon></button>\r\n                    <h2 class=\"mt-3 uppercase\">Congratulation!</h2>\r\n                    <h2 class=\"my-3\">Votre Bien <span class=\"primary-color\">\"{{submitForm.get('basic')['controls'].title.value}}\"</span> a été enregistré</h2>\r\n                    <p class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus dolor ante, ut luctus mi faucibus a. Ut eu tincidunt neque. Proin porttitor id ligula id placerat. Integer nec nulla varius, dapibus libero quis, semper eros. Aliquam erat volutpat. Proin volutpat tellus vel purus interdum euismod.</p>\r\n                  </div>\r\n                  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"pt-3\">  \r\n                    <button mat-raised-button color=\"accent\" (click)=\"reset()\" type=\"button\">Ajouter un autre bien</button>       \r\n                  </div>\r\n\r\n              </div> \r\n            </mat-step>\r\n\r\n        </mat-stepper>\r\n\r\n      </mat-card>\r\n\r\n\r\n    </div>\r\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_submit-property_submit-property_module_ts.js.map