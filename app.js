var app = angular.module('introApp', []);

app.controller=('EventsController', function($scope) {
  $scope.view = {};
  $scope.view.number = 5;
})
