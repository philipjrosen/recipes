angular.module('app.recipeList', [])

.controller('recipeListCtrl', ['$scope', "recipeFactory", function ($scope, recipeFactory) {

  var ingredientLists = {};
  $scope.distinctList = [];

  var addToIngredientsList = function(index, name) {
    ingredientLists[name] = $scope.recipes[index].ingredients;
  };

  var removeFromIngredientsList = function(name) {
    delete ingredientLists[name];
  };

  var makeDistinctList = function(obj) {
    var selected = [];

    _.forEach(obj, function(elem){
      selected.push(elem);
    });

    return _.union.apply(null, selected);
  };

  $scope.updateIngredientLists = function(include,index) {
    var name = $scope.recipes[index].name;

    include ?
      addToIngredientsList(index, name) :
      removeFromIngredientsList(name);

    $scope.distinctList = makeDistinctList(ingredientLists);
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
