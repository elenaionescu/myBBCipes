'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var RecipeSchema = new Schema({
  name: String,
  minutes: Number,
  info: String,
  active: Boolean,
  ingredients: Array
});

module.exports = mongoose.model('Recipe', RecipeSchema);