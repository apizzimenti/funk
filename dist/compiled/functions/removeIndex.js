"use strict";

/**
 * Created by apizzimenti on 5/8/16.
 */

/**
 * @summary Deletes value(s) from the specified index or list of indices.
 *
 * @param index {Number | Number[]} index or list of indices to be deleted
 *
 * @this {Array} current array object
 *
 * @throws RangeError
 *
 * @returns {Array}
 *
 * @since 1.0.1
 *
 * @example
 * var a = [1, 2, 3, 4, 5];
 * a.removeIndex(2)
 * // [ 1, 2, 4, 5 ]
 *
 * var b = [1, 2, 3, 4, 5];
 * b.removeIndex([0, 1, 2]);
 * // [ 4, 5 ]
 *
 * var c = [1, 2, 3, 4, 5],
 *     d = c.removeIndex(2);
 * // [ 1, 2, 4, 5 ]
 */

var removeIndex = function removeIndex(index) {
    var indices = Array.isArray(index) ? index : [index],
        greatest_val = _quicksort(indices, 0, indices.length - 1)[indices.length - 1];

    if (indices.length > this.length || greatest_val > this.length - 1) {

        throw new RangeError();
    } else {

        var amount_gone = 0;

        for (var i = 0; i < indices.length; i++) {
            var curr_index = indices[i] - amount_gone,
                length = this.length;

            for (var k = curr_index; k < length - 1; k++) {
                this[k] = this[k + 1];
            }

            delete this[length - 1];
            this.length = length - 1;
            amount_gone++;
        }
    }

    return this;
};
