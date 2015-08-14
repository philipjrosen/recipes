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
;
