/**
 * Created by apizzimenti on 9/1/16.
 */

var functions = require("./functions"),
    f;

/**
 * @author Anthony Pizzimenti
 * @description Parent object for all.
 * @property {Array} lastArray Last array to be modified (in case you want the original back).
 * @property {object} methods Container for all methods.
 * @property {object} objects Factory methods for all objects.
 */
f = {
    lastArray: [],

    methods: {},
    objects: {}
};

f.methods = functions.methods;
f.objects = functions.objects;

module.exports = f;
