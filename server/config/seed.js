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
    minutes: 30
  }, {
    name: 'Beef Stroganoff',
    minutes: 30
  }, {
    name: 'Chicken Caesar Salad',
    minutes: 25
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