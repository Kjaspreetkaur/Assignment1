angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,Logins) {
  $scope.login = {}; 
  $scope.addlogin = function(){
     if(!Logins.exists($scope.login.email))
      {
        Logins.save({
          id :0,
          name: $scope.login.name,
          email: $scope.login.email,
        });
      }
      else
      {
        alert("This account already Exists");
      }
    }
})

.controller('DashCtrl', function($scope) {})

.controller('ChartsCtrl', function($scope, Charts) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.totalCallories = 0;
  $scope.charts = Charts.all();
  $scope.add = function(chart) {
    $scope.totalCallories+=parseFloat(chart.Calorie);
  };
})

.controller('ChartDetailCtrl', function($scope, $stateParams, Charts) {
  $scope.chart = Charts.get($stateParams.chartId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
