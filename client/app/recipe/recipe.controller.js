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

app.controller('RecipeCtrl', ['$scope', '$stateParams', '$http', 'User', 'Auth', '$cookieStore', '$resource', 'Recipes',
  function($scope, $stateParams, $http, User, Auth, $cookieStore, $resource, Recipes) {
    // the recipe to display
    $scope.awesomeRecipe = Recipes.get({
      recipeId: $stateParams.recipeId
    });

    $scope.getCurrentUser = Auth.getCurrentUser;
    $scope.isLoggedIn = Auth.isLoggedIn;

    // the action of tagging
    $scope.starAction = function() {
      if (!$scope.isLoggedIn()) {
        alert("you are not connected");
        return;
      }
      if (wasStarredByUser()) {
        $scope.awesomeRecipe.stars--;
      } else {
        $scope.awesomeRecipe.stars++;
      }

      alert(JSON.stringify($scope.getCurrentUser(), null, 4));
      Recipes.update({
        recipeId: $stateParams.recipeId
      }, $scope.awesomeRecipe);
    }

    $scope.getStarStatus = function() {
      return $scope.getCurrentUser().recipes.indexOf($stateParams.recipeId) > -1 ? "star" : "unstar";
    }

    function wasStarredByUser() {
      var index = $scope.getCurrentUser().recipes.indexOf($stateParams.recipeId);
      if (index > -1) {
        $scope.getCurrentUser().recipes.splice(index, 1);
        return true;
      } else {
        $scope.getCurrentUser().recipes.unshift($stateParams.recipeId);
        return false;
      }
    }

    //alert(JSON.stringify(YOUR_OBJECT_HERE, null, 4));
  }
]);