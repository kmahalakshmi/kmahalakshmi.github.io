(function withAngular(angular){

'use strict';

angular.module("MahaBlog",[
	"ngRoute"
]).config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider) {	
	$locationProvider.html5Mode({
		enable: true,
		requireBase: false
	})

}]).controller('HomeController', ['$scope', function($scope, $window){
	$scope.state = "home";

	$scope.changeRoute = function(route) {
		$scope.state = route
		//$window.location.href(route);
	}

	$scope.nav = [
		{name:"About", slug: "#about"},
		{name:"Blog", slug: "https://medium.com/@Mahalakshmi_K"},
		{name:"Projects", slug: "#projects"},
		{name:"Contact", slug: "#contact"}
	];
}])


})(angular)