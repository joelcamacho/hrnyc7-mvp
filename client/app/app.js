angular.module('app', [
	'app.services',
	'app.players',
	'app.crimes',
	'ngRoute'
])

.config(function($routeProvider) {
	$routeProvider
	.when('/crimes', {
		templateUrl: 'app/crimes/crimes.html',
		controller: 'CrimesController'
	})
	.when('/players', {
		templateUrl: 'app/players/players.html',
		controller: 'PlayersController'
	})
});