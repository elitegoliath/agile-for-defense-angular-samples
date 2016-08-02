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
    
    countryModule.service('CountryService', ['$q', 'COUNTRIES', function ($q, COUNTRIES) {
        this.getCountries = function () {
            return $q.when(COUNTRIES);
        }
    }]);
    
    countryModule.directive('countryInfo', function () {
        return {
            restrict: 'E',
            templateUrl: 'country-info.html',
            controller: 'CountryInfoCtrl',
            controllerAs: 'cictrl',
            scope: {
                country: '=value'
            },
            link: function (scope) {
                scope.expanded = false;
                scope.starred = false;
            }
        };
    });
    
    countryModule.controller('CountryInfoCtrl', ['$scope', function ($scope) {
        $scope.toggleStar = function () {
            $scope.starred = !$scope.starred;
        };
        
        $scope.toggleExpand = function () {
            $scope.expanded = !$scope.expanded;
        };
    }]);
})()