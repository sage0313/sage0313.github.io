'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/intro', {templateUrl: 'partials/intro.html', controller: GenericViewCtrl});
    $routeProvider.when('/algorithm', {templateUrl: 'partials/algorithm.html', controller: GenericViewCtrl});
    $routeProvider.when('/macprotocol', {templateUrl: 'partials/macprotocol.html', controller: GenericViewCtrl});
    $routeProvider.when('/javascript', {templateUrl: 'partials/javascript.html', controller: ContactViewCtrl});    
    $routeProvider.otherwise({redirectTo: '/intro'});
  }]);
