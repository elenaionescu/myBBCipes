'use strict';

var app = angular.module('myBbcipesApp');

app.directive('backImg', function() {
  return function(scope, element, attrs) {
    attrs.$observe('backImg', function(value) {
      element.css({
        'background-image': 'url(assets/images/recipes/' + value + ')',
        'background-size': 'cover'
      });
    });
  };
});

app.factory("Recipes", ['$resource',
  function($resource) {
    return $resource('/api/recipes/:recipeId', {
      recipeId: '@_id',
    }, {
      update: {
        method: 'PUT'
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

    var recipe = Recipes.get({
      recipeId: $stateParams.recipeId
    });
    recipe.stars = 33;
    Recipes.update({
      recipeId: $stateParams.recipeId
    }, recipe);

    // get recipe information to display
    $http.get('/api/recipes/' + $stateParams.recipeId).then(function(awesomeRecipe) {
      $scope.awesomeRecipe = awesomeRecipe.data;
    }, function(response) {

    });
    $scope.starred = "star";
  }
]);