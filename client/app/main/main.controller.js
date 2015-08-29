'use strict';

angular.module('myBbcipesApp')
  .controller('MainCtrl', function($scope, $http) {
    $scope.awesomeRecipes = [];

    $http.get('/api/recipes').success(function(awesomeRecipes) {
      $scope.awesomeRecipes = awesomeRecipes;
    });

    $scope.addRecipe = function() {
      if ($scope.newRecipe === '') {
        return;
      }
      $http.post('/api/recipes', {
        name: $scope.newRecipe
      });
      $scope.newRecipe = '';
    };

    $scope.deleteRecipes = function(recipe) {
      $http.delete('/api/recipes/' + recipe._id);
    };
  });