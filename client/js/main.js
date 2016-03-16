var app = angular.module('myApp', ['myApp.controllers', 'ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/welcome', {
        templateUrl: 'views/welcome.html',
        controller: 'welcomeController'
    })
    .when('/tweets', {
        templateUrl: 'views/tweets.html',
        controller: 'tweetsController'
    })
    .otherwise({
        // templateUrl: 'views/tweets.html',
        // controller: 'LoginMessage',
        redirectTo: '/welcome'
    });
}])
   