'use strict';

angular.module('app.quem-sou-eu', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/quem-sou-eu', {
    templateUrl: 'quem-sou-eu/quem-sou-eu.html',
    controller: 'QuemSouEuCtrl'
  });
}])

.controller('QuemSouEuCtrl', [function() {

}]);