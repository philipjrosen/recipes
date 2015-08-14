angular.module('app.recipeList', [])

.controller('recipeListCtrl', ['$scope', "recipeFactory", function ($scope, recipeFactory) {

  $scope.getRecipes = function() {
    recipeFactory.getRecipes()
    .then(function (recipes) {
      $scope.recipes = recipes;
    });
  };

  var init = function() {
    $scope.getRecipes();
  };

  init();

}])
;
