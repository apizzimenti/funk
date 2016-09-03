/**
 * Created by apizzimenti on 9/1/16.
 */


/**
 * @author Anthony Pizzimenti
 *
 * @desc Parent object for all funk methods. Each time a method is run, funk keeps a reference to the last array it was
 * fed before it was modified.
 *
 * @property lastArray {*[]} A copy of the last array modified by funk.
 * @property throwError {function} Throws an error if any of the first function parameters aren't arrays, since strings
 * can also be spliced.
 *
 * @type {{}}
 * @global
 */

var f = {
    lastArray: [],
    throwError: function (a) {
        if (!Array.isArray(a)) {
            throw new Error("First parameter is not of type Array.");
        }
    }
};
