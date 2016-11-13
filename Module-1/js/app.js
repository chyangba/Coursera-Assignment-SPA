(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchItems = "";
  $scope.message = "";
  $scope.messageStyle = {};
  $scope.inputStyle = {};

  // Function to check if the provided string is empty or not
  // Returns true for empty result
  $scope.checkIfEmpty = function (string) {
    if (string == "" || string == undefined) return true;
    else return false;
  };

  // Function to count items provided in the string (comma-separated list)
  $scope.countItems = function (list) {
    var items = list.split(',');
    var count = 0;
    for(var i = 0; i < items.length; i++) {
      // Check if value between commas is empty
      // increment count only for non-empty values
      if (!$scope.checkIfEmpty(items[i])) count++;
    }
    return count;
  }

  // Function triggered on clicking button
  // Checks if the provided lunch items are too much
  // Returns "Enjoy!" message for items less than or equal to 3
  // Returns "Too much!" for items more than 3
  $scope.checkIfTooMuch = function () {
    if ($scope.checkIfEmpty($scope.lunchItems)) {
      $scope.message = "Please enter data first";
      $scope.messageStyle.colorClass = "red-font";
      $scope.inputStyle.colorClass = "red-border";
    } else {
      $scope.messageStyle.colorClass = "green-font";
      $scope.inputStyle.colorClass = "green-border";
      if ($scope.countItems($scope.lunchItems) <= 3) $scope.message = "Enjoy!";
      else $scope.message = "Too much!";
    }
  };

}

})();
