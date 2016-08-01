(function () {
    'use strict';
    
    var countryModule = angular.module('myApp.country', []);
    
    countryModule.value('COUNTRIES', [
        { id: 11, name: 'USA' },
        { id: 12, name: 'India' },
        { id: 13, name: 'China' },
        { id: 14, name: 'United Kingdom' },
        { id: 15, name: 'Australia' }
    ]);
    
    countryModule.service('CountryService', function CountryService($q, COUNTRIES) {
        this.getCountries = function () {
            return $q.when(COUNTRIES);
        }
    });
})()