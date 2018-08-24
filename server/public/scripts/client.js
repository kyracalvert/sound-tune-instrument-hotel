const myApp = angular.module('myApp', ['ngRoute', 'ngMaterial']);
console.log('Angular is working');

myApp.config(['$routeProvider', function ($routeProvider) {
    console.log('Route config loaded');
    $routeProvider
        .when('/', {
            redirectTo: '/dash'
        })
        .when('/dash', {
            templateUrl: 'views/dash.html',
            controller: 'DashController as vm'
        })
        .when('/owners', {
            templateUrl: 'views/owners.html',
            controller: 'OwnersController as vm'
        })
        .otherwise({ template: '<h1>Oops! 404</h1>' });

}]);