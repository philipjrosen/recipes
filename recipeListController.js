angular.module('app.recipeList', [])

.controller('recipeListCtrl', ['$scope', 'recipeFactory', 'localStorageService', function ($scope, recipeFactory, localStorageService) {

  var addCheckedProperty = function(arr) {
    _.forEach(arr, function(obj) {
      obj.checked = false;
    });
  };

  $scope.getRecipes = function() {
    recipeFactory.getRecipes()
    .then(function (recipes) {
      $scope.recipes = recipes;
      addCheckedProperty($scope.recipes);
    });
  };

  var init = function() {
    if (localStorageService.isSupported) {
      var recipesInStore = localStorageService.get('recipes');
      var ingredientInStore = localStorageService.get('ingredient');

      $scope.recipes = recipesInStore || $scope.getRecipes();
      $scope.ingredient = ingredientInStore || "";

      $scope.$watch('recipes', function () {
        localStorageService.set('recipes', $scope.recipes);
      }, true);

      $scope.$watch('ingredient', function () {
        localStorageService.set('ingredient', $scope.ingredient);
      }, true);
    }
  };

  init();

}])
;
