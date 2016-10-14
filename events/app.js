var app = angular.module('myApp', []);

app.controller('MainController', function($scope){
  $scope.view = {};
  $scope.view.number = 5;
  $scope.view.word = "";

  // Pick random number
  $scope.pickRandomNumber = function() {
    $scope.view.number = Math.floor(Math.random() * 10) + 1;
  };

  // Reverse word
  $scope.reverseWord = function(str) {
    $scope.view.word = str.split('').reverse().join('');
  }

  // Ping Pong
  $scope.view.player1Score = 0;
  $scope.view.player2Score = 0;
  $scope.view.server = false;
  $scope.view.serveCount = 1;
  $scope.view.winner = '';
  $scope.view.gameover = false;

  $scope.addScore1 = function() {
    if($scope.view.gameover === false) {
      $scope.view.player1Score++;
      $scope.view.serveCount++;
      if($scope.view.serveCount % 2 === 1) {
        $scope.view.server = true;
      } else {
        $scope.view.server = false;
      }
      if($scope.view.player1Score >= 11) {
        $scope.view.winner = 'player1';
        $scope.view.gameover = true;
        $scope.view.server = false;
      }
    }
  };

  $scope.addScore2 = function() {
    if($scope.view.gameover === false) {
      $scope.view.player2Score++;
      $scope.view.serveCount++;
      if($scope.view.serveCount % 2 === 1) {
        $scope.view.server = true;
      } else {
        $scope.view.server = false;
      }
      if($scope.view.player2Score >= 11) {
        $scope.view.winner = 'player2';
        $scope.view.gameover = true;
        $scope.view.server = false;
      }
    }
  };

  $scope.reset = function() {
    $scope.view.player1Score = 0;
    $scope.view.player2Score = 0;
    $scope.view.server = true;
    $scope.view.serveCount = 0;
    $scope.view.winner = '';
    $scope.view.gameover = false;
  }

  // ng-mouseenter
  $scope.view.enterCount = 0;
  $scope.enterCount = function() {
    $scope.view.entercount += 1;
  };

  //Random color
  $scope.randomColor = function() {
    var x = Math.round(0xffffff * Math.random()).toString(16);
    var y = (6-x.length);
    var z = "000000";
    var z1 = z.substring(0,y);
    var color = "#" + z1 + x;
    return color;
  }

  // forms
  $scope.favoriteForm = {};
  $scope.submitFav = function() {
    var favPi = parseFloat($scope.favoriteForm.favoritePie);
    // Special output if the favorite pie is a certain number
    if (!isNaN(favPi) && favPi >= 3.14 && favPi <= 3.142) {
      $scope.favoriteForm.favoritePie = "\u03A0";
    }
    console.log("Your favorite pie is: ", $scope.favoriteForm.favoritePie);
  };

  // address form
  $scope.addressForm = {};
  $scope.submitAddress = function() {
    $scope.addressForm.street1 = "";
    $scope.addressForm.street2 = "";
    $scope.addressForm.city = "";
    $scope.addressForm.state= "";
    $scope.addressForm.zip = "";
  }


});
