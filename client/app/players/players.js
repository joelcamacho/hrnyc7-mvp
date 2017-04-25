angular.module('app.players', [])

.controller('PlayersController', function($scope, Players) {

	$scope.data = {};

	var showPlayers = function() {
		Players.getAllPlayers()
		.then(function(players) {
			$scope.data.players = players;
		})
		.catch(function(err) {
			console.log(error);
		});
	};
	showPlayers();
});