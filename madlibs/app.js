var app = angular.module('app', []);

app.controller('MainController', function($scope) {

  $scope.ShowHide = function() {
    $scope.IsVisible = $scope.IsVisible ? false: true;
  }

  $scope.ShowHideAndEmpty = function() {
    $scope.IsVisible = $scope.IsVisible ? false: true;
    $scope.boy = '';
    $scope.adjective = '';
    $scope.noun1 = '';
    $scope.noun2 = '';
    $scope.noun3 = '';
    $scope.insect = '';
    $scope.verb = '';
  };
})
