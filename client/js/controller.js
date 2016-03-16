var controllers = angular.module('myApp.controllers', []);



controllers.controller('welcomeController', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.save = function(){
        $rootScope.username = $scope.username;
        window.location.href = '#/tweets';
    };
}]);

controllers.controller('tweetsController', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {
    var myUser = $rootScope.username;
    $http.get('/messages').then(function(data) {
        $scope.tweets = data;
    });
    $scope.sendPost = function() {
        console.log($rootScope.username);
        var textObj = {
            "user": myUser,
            "text": $scope.textModel,
            "createdAt": '1/1/1'
        };
        console.log(textObj);
        $http.post('/messages', textObj)
        .then(function(){
           console.log('success'); 
        });
    }
}]);

