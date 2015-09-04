'use strict';

angular.module('myBbcipesApp')
  .controller('StarsCtrl', function($scope, Auth, Recipes) {
    $scope.starredRecipes = [];

    if (Auth.isLoggedIn()) {
      var starredRecipesId = Auth.getCurrentUser().recipes.toString().split(',');
      $scope.allRecipes = Recipes.query(function() {
        starredRecipesId.forEach(function(recipeId) {
          $scope.allRecipes.forEach(function(recipe) {
            if (recipe._id === recipeId) {
              $scope.starredRecipes.unshift(recipe);
            }
          });
        });
      });
    }
  });