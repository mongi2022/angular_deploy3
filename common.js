"use strict";
(self["webpackChunkhousekey"] = self["webpackChunkhousekey"] || []).push([["common"],{

/***/ 5396:
/*!*******************************!*\
  !*** ./src/app/app.models.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdditionalFeature": () => (/* binding */ AdditionalFeature),
/* harmony export */   "Area": () => (/* binding */ Area),
/* harmony export */   "Gallery": () => (/* binding */ Gallery),
/* harmony export */   "Location": () => (/* binding */ Location),
/* harmony export */   "Pagination": () => (/* binding */ Pagination),
/* harmony export */   "Plan": () => (/* binding */ Plan),
/* harmony export */   "Price": () => (/* binding */ Price),
/* harmony export */   "Property": () => (/* binding */ Property),
/* harmony export */   "Testimonial": () => (/* binding */ Testimonial),
/* harmony export */   "Video": () => (/* binding */ Video)
/* harmony export */ });
class Property {
    constructor(id, title, desc, propertyType, propertyStatus, city, zipCode, neighborhood, street, location, formattedAddress, features, featured, priceDollar, priceEuro, bedrooms, bathrooms, garages, area, yearBuilt, ratingsCount, ratingsValue, additionalFeatures, gallery, plans, videos, published, lastUpdate, views) {
        this.id = id;
        this.title = title;
        this.desc = desc;
        this.propertyType = propertyType;
        this.propertyStatus = propertyStatus;
        this.city = city;
        this.zipCode = zipCode;
        this.neighborhood = neighborhood;
        this.street = street;
        this.location = location;
        this.formattedAddress = formattedAddress;
        this.features = features;
        this.featured = featured;
        this.priceDollar = priceDollar;
        this.priceEuro = priceEuro;
        this.bedrooms = bedrooms;
        this.bathrooms = bathrooms;
        this.garages = garages;
        this.area = area;
        this.yearBuilt = yearBuilt;
        this.ratingsCount = ratingsCount;
        this.ratingsValue = ratingsValue;
        this.additionalFeatures = additionalFeatures;
        this.gallery = gallery;
        this.plans = plans;
        this.videos = videos;
        this.published = published;
        this.lastUpdate = lastUpdate;
        this.views = views;
    }
}
class Area {
    constructor(id, value, unit) {
        this.id = id;
        this.value = value;
        this.unit = unit;
    }
}
class AdditionalFeature {
    constructor(id, name, value) {
        this.id = id;
        this.name = name;
        this.value = value;
    }
}
class Location {
    constructor(propertyId, lat, lng) {
        this.propertyId = propertyId;
        this.lat = lat;
        this.lng = lng;
    }
}
class Price {
}
class Gallery {
    constructor(id, small, medium, big) {
        this.id = id;
        this.small = small;
        this.medium = medium;
        this.big = big;
    }
}
class Plan {
    constructor(id, name, desc, area, rooms, baths, image) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.area = area;
        this.rooms = rooms;
        this.baths = baths;
        this.image = image;
    }
}
class Video {
    constructor(id, name, link) {
        this.id = id;
        this.name = name;
        this.link = link;
    }
}
class Pagination {
    constructor(page, perPage, prePage, nextPage, total, totalPages) {
        this.page = page;
        this.perPage = perPage;
        this.prePage = prePage;
        this.nextPage = nextPage;
        this.total = total;
        this.totalPages = totalPages;
    }
}
class Testimonial {
    constructor(text, author, position, image) { }
}


/***/ })

}]);
//# sourceMappingURL=common.js.map