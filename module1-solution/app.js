(function () {
  'use strict';

  angular.module("LunchCheck", [])

  .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ["$scope"];
  function LunchCheckController($scope) {
    $scope.lunchCheck = function () {
      var quantity = checkLunchMenuQuantity($scope);
      if (quantity == 0) {
        $scope.message = "Please enter data first"
      } else if (quantity <= 3) {
        $scope.message = "Enjoy!"
      } else {
        $scope.message = "Too much!"
      }
    }
  }

  function checkLunchMenuQuantity($scope) {
    if (angular.isDefined($scope.lunchMenu) && $scope.lunchMenu != "") {
      return $scope.lunchMenu.split(',').length;
    } else {
      return 0;
    }
  }

})();
