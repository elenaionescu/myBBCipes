'use strict';

angular.module('myBbcipesApp')
  .factory('User', function($resource) {
    return $resource('/api/users/:id/:controller', {
      id: '@_id'
    }, {
      changePassword: {
        method: 'PUT',
        params: {
          controller: 'password'
        }
      },
      get: {
        method: 'GET',
        params: {
          id: 'me'
        }
      },
      // specifically added this method 
      // to update starred recipes of a user
      // used in recipe.controller.js
      updateRecipes: {
        method: 'PUT',
        params: {
          controller: 'recipes'
        }
      }
    });
  });