'use strict';

angular.module('myBbcipesApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('recipe', {
        url: '/recipe/:recipeId',
        templateUrl: 'app/recipe/recipe.html',
        controller: 'RecipeCtrl',
        controllerAs: 'recipe',
      });
  });