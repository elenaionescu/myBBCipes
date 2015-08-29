'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var RecipeSchema = new Schema({
  name: String,
  minutes: Number,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Recipe', RecipeSchema);