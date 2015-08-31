'use strict';

angular.module('myBbcipesApp')
  .controller('RecipeCtrl', function($scope, $stateParams, $http) {

    $http.get('/api/recipes/' + $stateParams.recipeId).then(function(awesomeRecipe) {
      $scope.awesomeRecipe = awesomeRecipe.data;
    }, function(response) {});

  });