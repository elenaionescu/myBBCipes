'use strict';

var app = angular.module('myBbcipesApp');

// ng-src equivalent for a background-image
// also useful to avoid 404 error when browser 
// tries to load the page before angular loaded.
// http://stackoverflow.com/a/13782311/1515819
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

// Need a factory here because $http can't do PUT
// and we need to star a recipe
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

app.controller('RecipeCtrl', ['$scope', '$stateParams', '$http', '$state', 'User', 'Auth', '$cookieStore', '$resource', 'Recipes',
  function($scope, $stateParams, $http, $state, User, Auth, $cookieStore, $resource, Recipes) {
    // The recipe to display
    $scope.awesomeRecipe = Recipes.get({
      recipeId: $stateParams.recipeId
    });

    // Get user information
    $scope.getCurrentUser = Auth.getCurrentUser;
    $scope.isLoggedIn = Auth.isLoggedIn;

    // When the star button is clicked
    // could be "Star" or "Unstar" actions
    $scope.starAction = function() {
      if ($scope.isLoggedIn()) {
        if (wasStarredByUser()) {
          $scope.awesomeRecipe.stars--;
        } else {
          $scope.awesomeRecipe.stars++;
        }
        User.updateRecipes($scope.getCurrentUser());
        Recipes.update({
          recipeId: $stateParams.recipeId
        }, $scope.awesomeRecipe);
      } else {
        $state.go('login');
      }
    }

    // Called by page to know whether the recipe is starred or not
    $scope.getStarStatus = function() {
      var recipes = $scope.getCurrentUser().recipes.toString().split(',');
      return recipes.indexOf($stateParams.recipeId) > -1;
    }

    // Negative current star status
    // returns:
    //  true if recipe was previously starred and has been unstarred
    //  false if recipe was previously unstarred and has been starred
    function wasStarredByUser() {
      var recipes = $scope.getCurrentUser().recipes.toString().split(',');
      var index = recipes.indexOf($stateParams.recipeId);
      if (index > -1) {
        recipes.splice(index, 1);
        $scope.getCurrentUser().recipes = recipes;
        return true;
      } else {
        recipes.unshift($stateParams.recipeId);
        $scope.getCurrentUser().recipes = recipes;
        return false;
      }
    }
  }
]);