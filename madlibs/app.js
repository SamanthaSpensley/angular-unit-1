var app = angular.module('app', []);

app.controller('MainController', function($scope) {
  $scope.boy = '';
  $scope.adjective = '';
  $scope.noun1 = '';
  $scope.noun2 = '';
  $scope.noun3 = '';
  $scope.insect = '';
  $scope.verb = '';
  $scope.submit = function() {
    $scope.boy = boy;
    $scope.adjective = adjective;
    $scope.noun1 = noun1;
    $scope.noun2 = noun2;
    $scope.noun3 = noun3;
    $scope.insect = insect;
    $scope.verb = verb;
  };
  $scope.reset = function() {
    $scope.boy = '';
    $scope.adjective = '';
    $scope.noun1 = '';
    $scope.noun2 = '';
    $scope.noun3 = '';
    $scope.insect = '';
    $scope.verb = '';
  };
})
