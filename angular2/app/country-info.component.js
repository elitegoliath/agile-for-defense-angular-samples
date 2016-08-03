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
// Imports from Angular2 core library.
// The core library is one of the dependencies that are installed through 
// the package.json file.
// 
// Here we are importing Component, so we can define our app's root component.
// We also import OnInit, one of the component lifecycle interfaces so that
// we can override our components default lifecycle behavior during the OnInit
// stage. If you've done any Android development, this type of thing should be
// familiar to you.
// TODO: describe Input
var core_1 = require('@angular/core');
// TODO: describe
var common_1 = require('@angular/common');
// We also import the Country class, which is a simple JavaScript class. We bring this
// in since we are going to be working on a Country[]. TypeScript provides optional,
// Strong typing to JavaScript, so we help ourselves out by giving variables type 
// annotations.
var country_1 = require('./country');
// Component is simply an annotation on a JavaScript class.
var CountryInfoComponent = (function () {
    function CountryInfoComponent() {
        this.starred = false;
        this.expanded = false;
    }
    CountryInfoComponent.prototype.toggleStar = function () {
        this.starred = !this.starred;
    };
    CountryInfoComponent.prototype.toggleExpand = function () {
        this.expanded = !this.expanded;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', country_1.Country)
    ], CountryInfoComponent.prototype, "country", void 0);
    CountryInfoComponent = __decorate([
        core_1.Component({
            // selector is what the html element name will be.
            selector: 'country-info',
            // Template defines the component's html.
            templateUrl: 'app/country-info.html',
            directives: [common_1.NgClass]
        }), 
        __metadata('design:paramtypes', [])
    ], CountryInfoComponent);
    return CountryInfoComponent;
}());
exports.CountryInfoComponent = CountryInfoComponent;
//# sourceMappingURL=country-info.component.js.map