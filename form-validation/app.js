var app = angular.module('formApp', []);

app.controller('MainController', function($scope) {
  $scope.users = [];
  $scope.user = {};
  $scope.submitUser = function() {
    $scope.users.push({
      username: $scope.user.username,
      password: $scope.user.password,
      email: $scope.user.email,
      zip: $scope.user.zip
    });
    $scope.userForm.$setPristine();
  };

  $scope.submit = function(isValid) {
    if(isValid) {
      alert('form is valid');
    } else {
      alert('form is not valid');
    }
  }
});
