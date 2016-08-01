(function () {
    'use strict';

    // Declare app level module which depends on views, and components
    var app = angular.module('myApp', [
      'myApp.country'
    ]);

    app.controller('AppController', function AppController($scope, CountryService) {
        var vm = this;

        $scope.title = 'Angular1 Example - Country Details';
        $scope.countries = [];

        CountryService.getCountries().then(function (countries) {
            $scope.countries = countries;
        });
    });
})();