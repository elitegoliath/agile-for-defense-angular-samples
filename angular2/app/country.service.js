"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Here we import Injectable so that we can use Angular's built in Dependency
 * injection framework.
 */
var core_1 = require('@angular/core');
/**
 * We also import the COUNTRIES mock data defined in our mock-countries file.
 */
var mock_countries_1 = require('./mock-countries');
/**
 * Annotate the class with Injectable let's Angular know that we want to be
 * able to inject this into Components.
 */
var CountryService = (function () {
    function CountryService() {
    }
    /**
     * Get the Countries data. Notice, it returns a Promise here.
     * This is so that we don't break our API when we implement a real
     * web service.
     *
     * @return {Promise} A promise that will resolve with a list of Countries.
     */
    CountryService.prototype.getCountries = function () {
        return Promise.resolve(mock_countries_1.COUNTRIES);
    };
    CountryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CountryService);
    return CountryService;
}());
exports.CountryService = CountryService;
//# sourceMappingURL=country.service.js.map