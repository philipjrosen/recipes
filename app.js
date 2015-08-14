angular.module('app', [
  'ui.router',
  'app.recipeList'
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
