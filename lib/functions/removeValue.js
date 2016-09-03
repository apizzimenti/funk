/**
 * Created by apizzimenti on 5/8/16.
 */

/**
 * @author Anthony Pizzimenti
 *
 * @desc Deletes all specified value(s) in an array.
 *
 * @param a {Array} Array to have value removed.
 * @param value {Number | Array} value or list of values to be deleted
 *
 * @throws ReferenceError
 *
 * @this f
 *
 * @returns {Array}
 *
 * @example
 * var a = [1, 2, 3, 4, 5];
 * f.removeValue(a, 3);
 * // [ 1, 2, 4, 5 ]
 *
 * var b = [1, 2, 3, 4, 5];
 * f.removeValue(b, [2, 3, 5]);
 * // [ 1, 4 ]
 *
 * var c = [1, 2, 3, 4, 5],
 *     d = f.removeValue(c, 3);
 * // [ 1, 2, 4, 5 ]
 *
 */

f.removeValue = function (a, value) {
    
    this.throwError(a);
    this.lastArray = a.slice();
    
    var vals = Array.isArray(value) ? value : [value],
        indices = [];

    for (var i = 0; i < vals.length; i++) {
        for (var j = 0; j < a.length; j++) {
            if (vals[i] === a[j]) {
                indices.push(j);
            }
        }
    }

    if (indices.length === 0) {

        throw new ReferenceError();

    } else {

        var amount_gone = 0;

        for (var k = 0; k < indices.length; k++) {
            var index = indices[k] - amount_gone,
                length = a.length;

            for (var l = index; l < length; l++) {
                a[l] = a[l + 1];
            }

            delete a[length - 1];
            a.length = length - 1;
            amount_gone++;
        }
    }

    return a;
};
