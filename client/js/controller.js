var controllers = angular.module('myApp.controllers', []);



controllers.controller('welcomeController', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.save = function(){
        $rootScope.username = $scope.username;
        window.location.href = '#/tweets';
    };
}]);

controllers.controller('tweetsController', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {
    var myUser = $rootScope.username;

    $scope.getPost = function(){
        $http.get('/messages').success(function(data) {
            $scope.tweets = data;
        });
    };

    $scope.sendPost = function() {
        var textObj = {
            "user": myUser,
            "text": $scope.textModel,
            "createdAt": '1/1/1'
        };
        $http.post('/messages', textObj)
        .then(function(){
            $scope.getPost();    
    });
    }
}]);

//  $http.get('/messages').success(function(data) {
//         $scope.tweets = data;
//     });