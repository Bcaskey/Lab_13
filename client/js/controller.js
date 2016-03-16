var controllers = angular.module('myApp.controllers', []);
controllers.controller('LoginMessage', ['$scope', function($scope){
    $scope.hdrText = "Twitter, I'm mocking you too...";
    $scope.usrReq = "Please submit your User Name";
    $scope.user = "Brian";   //submitUser()
}])


controllers.controller('welcomeController', ['$scope', function($scope) {
    $scope.welcomeMessage = 'Welcome To My Mock Twitter!';
    $scope.weather = "It's sunny and 85 degrees outside!";
}]);

controllers.controller('tweetsController', ['$scope', '$http', function($scope, $http) {
    $http.get('/messages').success(function(data) {
        $scope.tweets = data;
        console.log($scope.tweets);
    });
    var sendPost = function() {
        $http.post('/messages', $scope.textModel) .success(function($scope, $interval) {
            console.log($scope.textModel);
            $interval (function(){
                $scope.theTime = new Date().toLocaleTimeString();
            });
        });
    }
}]);


// <div class="page-header">
// 				<h3 >Twitter, I'm mocking you too...</h3>
//                 Please submit your user name:
//                 <input type="text" ng-model="user">{{user}}
//                 <button ng-click="submitUser()"></button>
// 			</div>



