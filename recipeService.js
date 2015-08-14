angular.module('app.recipeService', [])

.factory('recipeFactory', ['$http', '$q', function ($http, $q) {
  var factory = {};

  factory.getRecipes = function () {
    var deferred = $q.defer();

    $http.get('recipes.json')
      .success(function (data, status) {
        deferred.resolve(data);
      })
      .error(function (error, status) {
        console.log("error", status);
        deferred.reject();
      });

    return deferred.promise;
  };

  return factory;
}]);
