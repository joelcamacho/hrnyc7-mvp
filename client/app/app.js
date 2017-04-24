angular.module('siphowhba', [
	'ngRoute'
])

.config(function($routeProvider, $httpProvider) {
	$routeProvider

	.when('crimes', {
		templateUrl: 'app/crimes.html',
		controller: 'CrimesController'
	})
	.when('players', {
		templateUrl: 'app/players.html',
		controller: 'PlayersController'
	})
});