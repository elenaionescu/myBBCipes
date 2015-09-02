/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Recipe = require('../api/recipe/recipe.model');
var User = require('../api/user/user.model');

Recipe.find({}).remove(function() {
  Recipe.create({
    name: 'Lemon Chicken',
    minutes: 30,
    ingredients: [{
      "name": "Chicken",
      "qty": "1"
    }, {
      "name": "Lemon",
      "qty": "2"
    }, {
      "name": "Thyme",
      "qty": "1 tsp"
    }],
    imageUrl: 'recipes/lemon_chicken.jpg',
    stars: 0
  }, {
    name: 'Beef Stroganoff',
    minutes: 30,
    ingredients: [{
      "name": "Beef",
      "qty": "1"
    }, {
      "name": "Mustard",
    }, {
      "name": "Mushrooms",
      "qty": "1 tsp"
    }],
    imageUrl: 'recipes/beef_stroganoff.jpg',
    stars: 0
  }, {
    name: 'Chicken Caesar Salad',
    minutes: 25,
    ingredients: [{
      "name": "Lettuce",
      "qty": "1"
    }, {
      "name": "Croutons",
      "qty": "1"
    }, {
      "name": "Parmesan",
      "qty": "1 tsp"
    }],
    imageUrl: 'recipes/chicken_caesar_salad.png',
    stars: 0
  }, {
    name: 'Lemon Chicken',
    minutes: 30,
    ingredients: [{
      "name": "Chicken",
      "qty": "1"
    }, {
      "name": "Lemon",
      "qty": "2"
    }, {
      "name": "Thyme",
      "qty": "1 tsp"
    }],
    imageUrl: 'recipes/lemon_chicken.jpg',
    stars: 0
  }, {
    name: 'Beef Stroganoff',
    minutes: 30,
    ingredients: [{
      "name": "Beef",
      "qty": "1"
    }, {
      "name": "Mustard",
    }, {
      "name": "Mushrooms",
      "qty": "1 tsp"
    }],
    imageUrl: 'recipes/beef_stroganoff.jpg',
    stars: 0
  }, {
    name: 'Chicken Caesar Salad',
    minutes: 25,
    ingredients: [{
      "name": "Lettuce",
      "qty": "1"
    }, {
      "name": "Croutons",
      "qty": "1"
    }, {
      "name": "Parmesan",
      "qty": "1 tsp"
    }],
    imageUrl: 'recipes/chicken_caesar_salad.png',
    stars: 0
  }, {
    name: 'Lemon Chicken',
    minutes: 30,
    ingredients: [{
      "name": "Chicken",
      "qty": "1"
    }, {
      "name": "Lemon",
      "qty": "2"
    }, {
      "name": "Thyme",
      "qty": "1 tsp"
    }],
    imageUrl: 'recipes/lemon_chicken.jpg',
    stars: 0
  }, {
    name: 'Beef Stroganoff',
    minutes: 30,
    ingredients: [{
      "name": "Beef",
      "qty": "1"
    }, {
      "name": "Mustard",
    }, {
      "name": "Mushrooms",
      "qty": "1 tsp"
    }],
    imageUrl: 'recipes/beef_stroganoff.jpg',
    stars: 0
  }, {
    name: 'Chicken Caesar Salad',
    minutes: 25,
    ingredients: [{
      "name": "Lettuce",
      "qty": "1"
    }, {
      "name": "Croutons",
      "qty": "1"
    }, {
      "name": "Parmesan",
      "qty": "1 tsp"
    }],
    imageUrl: 'recipes/chicken_caesar_salad.png',
    stars: 0
  }, {
    name: 'Lemon Chicken',
    minutes: 30,
    ingredients: [{
      "name": "Chicken",
      "qty": "1"
    }, {
      "name": "Lemon",
      "qty": "2"
    }, {
      "name": "Thyme",
      "qty": "1 tsp"
    }],
    imageUrl: 'recipes/lemon_chicken.jpg',
    stars: 0
  }, {
    name: 'Beef Stroganoff',
    minutes: 30,
    ingredients: [{
      "name": "Beef",
      "qty": "1"
    }, {
      "name": "Mustard",
    }, {
      "name": "Mushrooms",
      "qty": "1 tsp"
    }],
    imageUrl: 'recipes/beef_stroganoff.jpg',
    stars: 0
  }, {
    name: 'Chicken Caesar Salad',
    minutes: 25,
    ingredients: [{
      "name": "Lettuce",
      "qty": "1"
    }, {
      "name": "Croutons",
      "qty": "1"
    }, {
      "name": "Parmesan",
      "qty": "1 tsp"
    }],
    imageUrl: 'recipes/chicken_caesar_salad.png',
    stars: 0
  }, {
    name: 'Lemon Chicken',
    minutes: 30,
    ingredients: [{
      "name": "Chicken",
      "qty": "1"
    }, {
      "name": "Lemon",
      "qty": "2"
    }, {
      "name": "Thyme",
      "qty": "1 tsp"
    }],
    imageUrl: 'recipes/lemon_chicken.jpg',
    stars: 0
  }, {
    name: 'Beef Stroganoff',
    minutes: 30,
    ingredients: [{
      "name": "Beef",
      "qty": "1"
    }, {
      "name": "Mustard",
    }, {
      "name": "Mushrooms",
      "qty": "1 tsp"
    }],
    imageUrl: 'recipes/beef_stroganoff.jpg',
    stars: 0
  }, {
    name: 'Chicken Caesar Salad',
    minutes: 25,
    ingredients: [{
      "name": "Lettuce",
      "qty": "1"
    }, {
      "name": "Croutons",
      "qty": "1"
    }, {
      "name": "Parmesan",
      "qty": "1 tsp"
    }],
    imageUrl: 'recipes/chicken_caesar_salad.png',
    stars: 0
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
    console.log('finished populating users');
  });
});