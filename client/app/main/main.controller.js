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

    $scope.typeOptions = [{
      name: 'Any',
      value: '999'
    }, {
      name: '30 minutes',
      value: '30'
    }, {
      name: '25 minutes',
      value: '25'
    }];

    $scope.form = {
      type: $scope.typeOptions[0].value
    };


  })
  .filter('lowerThan', function() {
    return function(ar, maxPrice) {
      return ar.filter(function(e) {
        return e.minutes <= maxPrice;
      });
    };
  });