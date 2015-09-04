'use strict';

angular.module('myBbcipesApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('stars', {
        url: '/stars',
        templateUrl: 'app/stars/stars.html',
        controller: 'StarsCtrl',
        controllerAs: 'stars',
      });
  });