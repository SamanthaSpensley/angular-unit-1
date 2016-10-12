var app = angular.module('firstApp', []);

app.controller('MyFirstController', function($scope){
  $scope.name = "Servus Snape"
});


app.controller('ExercisesController', function($scope) {
  $scope.FavColor = "blue";
  $scope.secondsInACentury = 60*60*24*365.25*100;
  $scope.rightNow = Date.now()
});
