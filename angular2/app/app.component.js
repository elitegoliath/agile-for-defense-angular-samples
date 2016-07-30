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
var core_1 = require('@angular/core');
// Here we import our CountryService from the country.service file in our project's
// root directory. We use this in the AppComponent to get the list of countries from
// our mock web service.
var country_service_1 = require('./country.service');
// Component is simply an annotation on a JavaScript class.
var AppComponent = (function () {
    /**
     * Constructor for our component. Defines how the component will be initialized with little boiler plate code.
     *
     * @param  {CountryService} countryService
     * @constructor
     */
    function AppComponent(countryService) {
        this.countryService = countryService;
        /**
         * The title of our application.
         * @type {String}
         */
        this.title = 'Angular2 Example - Country Details';
    }
    /**
     * Lifecycle method inherited from the OnInit interface. Override this allows us
     * to modify how our component behaves during the OnInit stage of Component lifecycles.
     */
    AppComponent.prototype.ngOnInit = function () {
        this.getCountries();
    };
    /**
     * Method to populate the countries array with countries from our countryService.
     */
    AppComponent.prototype.getCountries = function () {
        var _this = this;
        // Uses shorthand syntax for an anonymous function.
        this.countryService.getCountries().then(function (countries) { return _this.countries = countries; });
    };
    AppComponent = __decorate([
        core_1.Component({
            // selector is what the html element name will be.
            selector: 'my-app',
            // Template defines the component's html. We use an ES6 multiline string here for formatting purposes.
            template: "\n  \t<h1>{{title}}</h1>\n  \t<ul>\n  \t\t<!-- \n  \t\t\tngFor is a structural directive that lets us iterate over any array like object.\n  \t\t\tHere, we iterate out list of countries and create list items with the country name\n  \t\t\tas the content of the item.\n  \t\t -->\n  \t\t<li *ngFor=\"let country of countries\">\n  \t\t\t{{country.name}}\n  \t\t</li>\n  \t</ul>\n  \t",
            // Definition of which providers to use for dependency injection of other components.
            providers: [country_service_1.CountryService]
        }), 
        __metadata('design:paramtypes', [country_service_1.CountryService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map