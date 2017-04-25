angular.module('app.players', [])

.controller('PlayersController', function($scope, Players) {

	$scope.data = {};

	var showPlayers = function() {
		Players.getAllPlayers()
		.then(function(players) {
			$scope.searchResults = undefined;
			$scope.data.players = players;
		})
		.catch(function(err) {
			console.log(error);
		});
	};
	showPlayers();

	$scope.searchPlayer = function() {
		var name = $scope.player.replace(/ /g, '%20');

		Players.searchPlayerCrimes(name)
		.then(function(player) {
			$scope.searchResults = player;
			$scope.player = "";
		})
		.catch(function(err) {
			console.log(error);
		});
	};
});