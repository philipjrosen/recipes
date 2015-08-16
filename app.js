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
  return {
    scope: {
      datasource: "="
    },
    templateUrl: 'ingredientsListView.html'
  };
})
;
