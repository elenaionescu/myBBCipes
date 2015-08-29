/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /recipes              ->  index
 * POST    /recipes              ->  create
 * GET     /recipes/:id          ->  show
 * PUT     /recipes/:id          ->  update
 * DELETE  /recipes/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var recipe = require('./recipe.model');

// Get list of recipes
exports.index = function(req, res) {
    recipe.find(function(err, recipes) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(200).json(recipes);
    });
};

// Get a single recipe
exports.show = function(req, res) {
    recipe.findById(req.params.id, function(err, recipe) {
        if (err) {
            return handleError(res, err);
        }
        if (!recipe) {
            return res.status(404).send('Not Found');
        }
        return res.json(recipe);
    });
};

// Creates a new recipe in the DB.
exports.create = function(req, res) {
    recipe.create(req.body, function(err, recipe) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(201).json(recipe);
    });
};

// Updates an existing recipe in the DB.
exports.update = function(req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    recipe.findById(req.params.id, function(err, recipe) {
        if (err) {
            return handleError(res, err);
        }
        if (!recipe) {
            return res.status(404).send('Not Found');
        }
        var updated = _.merge(recipe, req.body);
        updated.save(function(err) {
            if (err) {
                return handleError(res, err);
            }
            return res.status(200).json(recipe);
        });
    });
};

// Deletes a recipe from the DB.
exports.destroy = function(req, res) {
    recipe.findById(req.params.id, function(err, recipe) {
        if (err) {
            return handleError(res, err);
        }
        if (!recipe) {
            return res.status(404).send('Not Found');
        }
        recipe.remove(function(err) {
            if (err) {
                return handleError(res, err);
            }
            return res.status(204).send('No Content');
        });
    });
};

function handleError(res, err) {
    return res.status(500).send(err);
}