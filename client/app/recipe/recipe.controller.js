'use strict';

var app = angular.module('myBbcipesApp');

app.factory("Recipes", ['$resource',
  function($resource) {
    return $resource('/api/recipes/:recipeId', {
      recipeId: '@_id',
    }, {
      foo: {
        method: 'PUT',
        params: {
          recipeId: "@recipeId"
        }
      }
    });
  }
]);

app.controller('RecipeCtrl', ['$scope', '$stateParams', '$http', 'User', '$cookieStore', '$resource', 'Recipes',
  function($scope, $stateParams, $http, User, $cookieStore, $resource, Recipes) {
    // get user information
    var currentUser = {};
    if ($cookieStore.get('token')) {
      currentUser = User.get();
    }

    Recipes.foo({
      recipeId: $stateParams.recipeId
    }, function(recipe) {
      console.log(recipe);
      recipe.$save(function(u, putResponseHeaders) {
        alert(putResponseHeaders);
      });
    });

    // get recipe information to display
    $http.get('/api/recipes/' + $stateParams.recipeId).then(function(awesomeRecipe) {
      $scope.awesomeRecipe = awesomeRecipe.data;
    }, function(response) {

    });
    $scope.starred = "star";
  }
]);