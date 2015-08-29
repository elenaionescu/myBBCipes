'use strict';

angular.module('myBbcipesApp')
  .controller('RecipeCtrl', function($scope, $stateParams, $http) {

    $http.get('/api/recipes/' + $stateParams.recipeId).success(function(awesomeRecipe) {
      $scope.awesomeRecipe = awesomeRecipe;
    });

  });