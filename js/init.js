var app = angular.module('app', ['ngRoute', 'ngResource']);

app.config(function($routeProvider) {

	$routeProvider.when("/quem-sou-eu", {
		controller: "QuemSouEuCtrl",
		templateUrl: "/quem-sou-eu/quem-sou-eu.html"
	});

	$routeProvider.when("/blog", {
		controller: "BlogCtrl",
		templateUrl: "/blog/blog.html"
	});

	$routeProvider.when("/contato", {
		controller: "ContatoCtrl",
		templateUrl: "/contato/contato.html"
	});

	$routeProvider.otherwise({redirectTo: "/quem-sou-eu"});

});