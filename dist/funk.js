"use strict";

/**
 * Created by apizzimenti on 5/8/16.
 */

/**
 * @summary Groups the values of the array in place by step; groups array values into groups of size step.
 *
 * @param a {*[]} Array to be grouped.
 * @param step {Number} Group size.
 *
 * @returns {Array}
 *
 * @example
 * var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 * groupByStep(a, 3)
 * // [ [1, 2, 3], [4, 5, 6], [7, 8, 9], [10] ]
 *
 * var b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
 *     c = groupByStep(b, 2)
 * // [ [1, 2], [3, 4], [5, 6], [7, 8], [9, 10] ]
 */

var groupBy = function groupBy(a, step) {

    var right = a.length % step,
        last_length = a.length - right;

    var step_array = [],
        last_array = [],
        index = 0;

    for (var i = 0; i < last_length; i++) {

        step_array.push(a[i]);
        index = Math.floor((i + 1) / step) - 1;

        if ((i + 1) % step === 0) {

            a[index] = step_array;
            step_array = [];
        }
    }

    for (var j = last_length; j < a.length; j++) {
        last_array.push(a[j]);
        delete a[j];
    }

    a.length = last_length;

    for (var k = last_length - last_array.length; k < last_length; k++) {
        delete a[k];
    }

    a.length = a.length / step;

    if (last_array.length < 0) {
        a.push(last_array);
    }

    return a;
};

f.groupBy;

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

"use strict";

/**
 * Created by apizzimenti on 5/8/16.
 */

/**
 * @summary Deletes all specified value(s) in an array.
 *
 * @param a {*[]} Array to have value removed.
 * @param value {Number | Array} value or list of values to be deleted
 *
 * @throws ReferenceError
 *
 * @returns {Array}
 *
 * @since 1.0.1
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

var removeValue = function removeValue(a, value) {
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

f.removeValue = removeValue;

"use strict";

/**
 * Created by apizzimenti on 5/8/16.
 */

/**
 * @summary Groups the values of the array by step; groups array values into groups of size step.
 *
 * @param step {Number} size of group
 *
 * @this {Array} current Array object
 *
 * @returns {Array}
 *
 * @since 1.0.6
 *
 * @example
 * var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 * a.groupByStep(3)
 * // [ [1, 2, 3], [4, 5, 6], [7, 8, 9], [10] ]
 *
 * var b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
 *     c = b.groupByStep(2)
 * // [ [1, 2], [3, 4], [5, 6], [7, 8], [9, 10] ]
 */

var groupByStep = function groupByStep(step) {

    var right = this.length % step,
        last_length = this.length - right;

    var step_array = [],
        last_array = [],
        index = 0;

    for (var i = 0; i < last_length; i++) {

        step_array.push(this[i]);
        index = Math.floor((i + 1) / step) - 1;

        if ((i + 1) % step === 0) {

            this[index] = step_array;
            step_array = [];
        }
    }

    for (var j = last_length; j < this.length; j++) {
        last_array.push(this[j]);
        delete this[j];
    }

    this.length = last_length;

    for (var k = last_length - last_array.length; k < last_length; k++) {
        delete this[k];
    }

    this.length = this.length / step;

    if (last_array.length < 0) {
        this.push(last_array);
    }

    return this;
};

Array.prototype.groupByStep = groupByStep;

"use strict";

/**
 * Created by apizzimenti on 9/1/16.
 */

/**
 * @author Anthony Pizzimenti
 *
 * @desc Parent object for all funk methods.
 *
 * @property removeValue {function} Removes the specified value (or list of values) from the specified array.
 *
 * @type {{}}
 * @global
 */

var f = {};

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

Array.prototype.removeIndex = removeIndex;

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

"use strict";

/**
 * Created by apizzimenti on 4/4/16.
 */

/**
 * @summary compartmentalized swap method for _quicksort
 *
 * @param array {Array} array to have values swapped
 * @param first {Number} index of lower value
 * @param second {Number} index of higher value
 *
 * @since 1.0.4
 *
 * @private
 */

function _swap(array, first, second) {
    var temp = array[first];
    array[first] = array[second];
    array[second] = temp;
}

/**
 * @summary sorts partitions of inputted array
 * @param array {Array} array (or partition) to be sorted
 * @param l {Number} lower index
 * @param r {Number} upper index
 *
 * @returns {Number}
 *
 * @since 1.0.4
 *
 * @private
 */

function _partition(array, l, r) {

    var piv = array[Math.floor((l + r) / 2)],
        i = l,
        j = r;

    while (i <= j) {

        while (array[i] < piv) {
            i++;
        }

        while (array[j] > piv) {
            j--;
        }

        if (i <= j) {
            _swap(array, i, j);
            i++;
            j--;
        }
    }

    return i;
}

/**
 * @summary an implementation of quicksort used in removeIndex() to sort the array of indices
 *
 * @see removeIndex()
 *
 * @param array {Array} array to be sorted
 * @param l {Number} leftmost index in current sort range
 * @param r {Number} rightmost index in current sort range
 *
 * @returns {Array}
 *
 * @since 1.0.4
 *
 * @private
 */

function _quicksort(array, l, r) {

    var index;

    if (array.length > 1) {

        index = _partition(array, l, r);

        if (l < index - 1) {
            _quicksort(array, l, index - 1);
        }

        if (index < r) {
            _quicksort(array, index, r);
        }
    }

    return array;
}
