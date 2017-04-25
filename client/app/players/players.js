angular.module('app.players', [])

.controller('PlayersController', function($scope, Players) {

	$scope.data = {};

	$scope.showPlayers = function() {
		Players.getAllPlayers()
		.then(function(players) {
			$scope.searchResults = undefined;
			$scope.data.players = players;
		})
		.catch(function(err) {
			console.log(error);
		});
	};
	$scope.showPlayers();

	$scope.searchPlayer = function() {
		$scope.player = $scope.search;
		
		var name = $scope.player.replace(/ /g, '%20');

		Players.searchPlayerCrimes(name)
		.then(function(player) {
			$scope.searchResults = player;
			$scope.search = "";
		})
		.catch(function(err) {
			console.log(error);
		});
	};
});