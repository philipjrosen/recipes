angular.module('app.recipeList', [])

.controller('recipeListCtrl', ['$scope', "recipeFactory", function ($scope, recipeFactory) {

  $scope.ingredientLists = {};

  var addToIngredientsList = function(index, name) {
    $scope.ingredientLists[name] = $scope.recipes[index].ingredients;
  };

  var removeFromIngredientsList = function(name) {
    delete $scope.ingredientLists[name];
  };

  $scope.updateIngredientLists = function(include,index) {
    var name = $scope.recipes[index].name;
    include ?
      addToIngredientsList(index, name) :
      removeFromIngredientsList(name);
  };

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
