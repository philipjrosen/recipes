angular.module('app.recipeList', [])

.controller('recipeListCtrl', ['$scope', "recipeFactory", function ($scope, recipeFactory) {

  var addCheckedProperty = function(arr) {
    _.forEach(arr, function(obj) {
      obj.checked = false;
    });
  };

  $scope.updateCheckedProperty = function(checked, index) {
    checked ?
      $scope.recipes[index].checked = true :
      $scope.recipes[index].checked = false;
  };

  $scope.getRecipes = function() {
    recipeFactory.getRecipes()
    .then(function (recipes) {
      $scope.recipes = recipes;
      addCheckedProperty($scope.recipes);
    });
  };

  var init = function() {
    $scope.getRecipes();
  };

  init();

}])
;
