'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var RecipeSchema = new Schema({
  name: String,
  minutes: Number,
  info: String,
  active: Boolean,
  imageUrl: String,
  ingredients: Array,
  stars: Number
});

module.exports = mongoose.model('Recipe', RecipeSchema);