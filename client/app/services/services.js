angular.module('app.services', [])

.factory('Crimes', function($http) {

	var getAllCrimes = function() {
		return $http({
			method: 'GET',
			url: '/api/crimes'
		})
		.then(function(resp) {
			return resp.data;
		});
	};
	return {
		getAllCrimes: getAllCrimes
	};
})

.factory('Players', function($http) {

	var getAllPlayers = function() {
		return $http({
			method: 'GET',
			url: '/api/players'
		})
		.then(function(resp) {
			return resp.data;
		});
	};

	var searchPlayerCrimes = function(name) {

		return $http({
			method: 'POST',
			url: '/api/players',
			data: {
				player : name
			}
		})
		.then(function(resp) {
			return resp.data;
		});
	};

	return {
		getAllPlayers: getAllPlayers,
		searchPlayerCrimes: searchPlayerCrimes
	};
});