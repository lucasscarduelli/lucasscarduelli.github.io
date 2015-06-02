'use strict';

var app = angular.module('app', []);

// Declare app level module which depends on views, and components
angular.module('app', [
  'ngRoute',
  'app.quem-sou-eu',
  'app.blog',
  'app.contato'
]).

config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/quem-sou-eu'});
}]);