"use strict";

/**
 * Created by apizzimenti on 5/8/16.
 */

/**
 * @summary Deletes all specified value(s) in an array.
 *
 * @param value {Number | Array} value or list of values to be deleted
 *
 * @this {Array} current array object
 *
 * @throws ReferenceError
 *
 * @returns {Array}
 *
 * @since 1.0.1
 *
 * @example
 * var a = [1, 2, 3, 4, 5];
 * a.removeValue(3);
 * // [ 1, 2, 4, 5 ]
 *
 * var b = [1, 2, 3, 4, 5];
 * b.removeValue([2, 3, 5]);
 * // [ 1, 4 ]
 *
 * var c = [1, 2, 3, 4, 5],
 *     d = c.removeValue(3);
 * // [ 1, 2, 4, 5 ]
 *
 */

var removeValue = function removeValue(value) {
    var vals = Array.isArray(value) ? value : [value],
        indices = [];

    for (var i = 0; i < vals.length; i++) {
        for (var j = 0; j < this.length; j++) {
            if (vals[i] === this[j]) {
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
                length = this.length;

            for (var l = index; l < length; l++) {
                this[l] = this[l + 1];
            }

            delete this[length - 1];
            this.length = length - 1;
            amount_gone++;
        }
    }

    return this;
};

Array.prototype.removeValue = removeValue;
