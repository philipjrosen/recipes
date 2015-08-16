angular.module('app', [
  'ui.router',
  'app.recipeList',
  'app.recipeService'
])

.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('recipeList', {
      url: '/',
      templateUrl: 'recipeListView.html',
      controller: 'recipeListCtrl'
    });
})

.filter('byIngredient', function () {
  return function (recipes, ingredient) {
    if (!recipes || !ingredient) return recipes;
    return _.filter(recipes, function(recipe) {
      return _.indexOf(recipe.ingredients, ingredient) > -1;
    });
  };
})

.directive('distinctIngredients', function () {

var obj = {};
  var controller = function ($scope) {

    $scope.distinctList = [];
    var ingredientLists = {};

    var updateIngredientLists = function(list) {
      var obj = {};
      _.forEach(list, function (recipe) {
        if (recipe.checked) {
          obj[recipe.name] = recipe.ingredients;
        } else {
          if (obj[recipe.name]) {
            delete obj[recipe.name];
          }
        }
      });
      return obj;
    };

    var makeDistinctList = function(obj) {
      var selected = [];

      _.forEach(obj, function(elem){
        selected.push(elem);
      });

      return _.union.apply(null, selected);
    };

    $scope.$watch('datasource', function(newValue, oldValue) {
      $scope.items = newValue;
      ingredientLists = updateIngredientLists($scope.items);
      $scope.distinctList = makeDistinctList(ingredientLists);
    }, true);

  };

  return {
    scope: {
      datasource: "="
    },
    templateUrl: 'ingredientsListView.html',
    controller: controller
  };

})
;
