angular.module('app.crimes', [])

.controller('CrimesController', function($scope, Crimes) {

	$scope.data = {};

	var showCrimes = function() {
		Crimes.getAllCrimes()
		.then(function(crimes) {
			$scope.data.crimes = crimes;
		})
		.catch(function(err) {
			console.log(error);
		});
	};
	showCrimes();
});