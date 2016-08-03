(function () {
    'use strict';
    
    var countryModule = angular.module('myApp.country', []);
    
    countryModule.value('COUNTRIES', [
        {id: 11, name: 'USA', description: 'Best country in the universe.'},
        {id: 12, name: 'India', description: 'Spicy food, and math.'},
        {id: 13, name: 'China', description: 'Cheaply made toys.'},
        {id: 14, name: 'United Kingdom', description: 'Tea, salty gamers.'},
        {id: 15, name: 'Australia', description: 'Everything wants you dead.'}
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