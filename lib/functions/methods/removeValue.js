/**
 * Created by apizzimenti on 5/8/16.
 */

/**
 * @memberof methods
 */

var _throwError = require("./throwError");

/**
 * @author Anthony Pizzimenti
 * @desc Deletes all specified value(s) in an array in place.
 * @param {Array} a Array to have value removed.
 * @param {number | Array} value Value or list of values to be deleted.
 * @throws ReferenceError
 * @returns {Array} Array with specified value(s) removed.\
 * @memberof methods
 */
function removeValue (a, value) {
    
    _throwError(a);
    this.lastArray = a.slice();
    
    var vals = Array.isArray(value) ? value : [value],
        indices = [],
        i, j, k, l, amount_gone, index, length;

    for (i = 0; i < vals.length; i++) {
        for (j = 0; j < a.length; j++) {
            if (vals[i] === a[j]) {
                indices.push(j);
            }
        }
    }

    if (indices.length === 0) {

        throw new ReferenceError();

    } else {

        amount_gone = 0;

        for (k = 0; k < indices.length; k++) {
            index = indices[k] - amount_gone;
            length = a.length;

            for (l = index; l < length; l++) {
                a[l] = a[l + 1];
            }

            delete a[length - 1];
            a.length = length - 1;
            amount_gone++;
        }
    }

    return a;
}

module.exports = removeValue;
