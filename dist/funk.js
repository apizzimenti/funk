"use strict";

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
 *
 * @type {{}}
 * @global
 */

var f = {
  lastArray: []
};

"use strict";

/**
 * Created by apizzimenti on 9/2/16.
 */

/**
 * @author Anthony Pizzimenti
 *
 * @desc Intakes the provided array, sorts it, and checks its end indices for blank, undefined, or null members.
 *
 * @param a {*[]} Array to be searched.
 *
 * @returns {boolean} Does the array contain any blank, undefined, or null members?
 *
 * @memberOf f
 *
 * @this f
 */

f.containsBlank = function (a) {

    this.lastArray = a.slice();

    var blank = false;

    if (a.length < 23) {
        a.sort();
    } else {
        a = quicksort(a, 0, a.length - 1);
    }

    if (a[0] === "" || a[a.length - 1] === null || a[a.length - 1] === undefined) {
        blank = true;
    }

    return blank;
};

"use strict";

/**
 * Created by apizzimenti on 5/8/16.
 */

/**
 * @author Anthony Pizzimenti
 *
 * @desc Groups the values of the array in place by step; groups array values into groups of size step.
 *
 * @param a {*[]} Array to be grouped.
 * @param step {Number} Group size.
 *
 * @returns {Array}
 *
 * @memberOf f
 *
 * @this f
 *
 * @example
 * var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 * f.groupByStep(a, 3)
 * // [ [1, 2, 3], [4, 5, 6], [7, 8, 9], [10] ]
 *
 * var b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
 *     c = f.groupByStep(b, 2)
 * // [ [1, 2], [3, 4], [5, 6], [7, 8], [9, 10] ]
 */

f.groupBy = function (a, step) {

    this.lastArray = a.slice();

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

"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

/**
 * Created by apizzimenti on 9/2/16.
 */

/**
 * @author Anthony Pizzimenti
 *
 * @desc Returns truthy if the provided array has a member with the specified type.
 *
 * @param a {*[]} Array to be searched.
 * @param type {String} Typestring.
 * @param [recursive=false]
 *
 * @returns {boolean}
 */

f.hasType = function (a, type, recursive) {

    this.lastArray = a.splice();

    if (recursive === undefined) {
        recursive = false;
    }

    var contains = false;

    for (var i = 0; i < a.length; i++) {

        if (_typeof(a[i]) === type && !Array.isArray(a[i])) {
            contains = true;
            break;
        }

        if (Array.isArray(a[i]) && recursive) {
            contains = this.hasType(a[i], type, recursive);

            if (contains) {
                break;
            }
        } else if (Array.isArray(a[i]) && !recursive && type.toLowerCase() === "array") {
            contains = true;
            break;
        }
    }

    return contains;
};

"use strict";

/**
 * Created by apizzimenti on 5/8/16.
 */

/**
 * @author Anthony Pizzimenti
 *
 * @desc Deletes value(s) from the specified index or list of indices in place.
 *
 * @param a {*[]} Array to have index removed.
 * @param index {Number | Number[]} index or list of indices to be deleted
 *
 * @throws RangeError
 * @returns {Array}
 *
 * @memberOf f
 *
 * @this f
 *
 * @example
 * var a = [1, 2, 3, 4, 5];
 * f.removeIndex(a, 2)
 * // [ 1, 2, 4, 5 ]
 *
 * var b = [1, 2, 3, 4, 5];
 * f.removeIndex(b, [0, 1, 2]);
 * // [ 4, 5 ]
 *
 *
 * var c = [1, 2, 3, 4, 5],
 *     d = f.removeIndex(c, 2);
 * // [ 1, 2, 4, 5 ]
 */

f.removeIndex = function (a, index) {

    this.lastArray = a.slice();

    var indices = Array.isArray(index) ? index : [index],
        greatest_val = quicksort(indices, 0, indices.length - 1)[indices.length - 1];

    if (indices.length > a.length || greatest_val > a.length - 1) {

        throw new RangeError();
    } else {

        var amount_gone = 0;

        for (var i = 0; i < indices.length; i++) {
            var curr_index = indices[i] - amount_gone,
                length = a.length;

            for (var k = curr_index; k < length - 1; k++) {
                a[k] = a[k + 1];
            }

            delete a[length - 1];
            a.length = length - 1;
            amount_gone++;
        }
    }

    return a;
};

"use strict";

/**
 * Created by apizzimenti on 5/8/16.
 */

/**
 * @author Anthony Pizzimenti
 *
 * @desc Deletes all specified value(s) in an array.
 *
 * @param a {*[]} Array to have value removed.
 * @param value {Number | Array} value or list of values to be deleted
 *
 * @throws ReferenceError
 *
 * @returns {Array}
 *
 * @memberOf f
 *
 * @this f
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

"use strict";

/**
 * Created by apizzimenti on 4/4/16.
 */

/**
 * @author Anthony Pizzimenti
 *
 * @desc compartmentalized swap method for _quicksort
 *
 * @param array {Array} array to have values swapped
 * @param first {Number} index of lower value
 * @param second {Number} index of higher value
 */

function _swap(array, first, second) {
    var temp = array[first];
    array[first] = array[second];
    array[second] = temp;
}

/**
 * @author Anthony Pizzimenti
 *
 * @desc sorts partitions of inputted array
 * @param array {Array} array (or partition) to be sorted
 * @param l {Number} lower index
 * @param r {Number} upper index
 *
 * @returns {Number}
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
 * @author Anthony Pizzimenti
 *
 * @desc an implementation of quicksort used in removeIndex() to sort the array of indices
 *
 * @see removeIndex()
 *
 * @param array {Array} array to be sorted
 * @param l {Number} leftmost index in current sort range
 * @param r {Number} rightmost index in current sort range
 *
 * @returns {Array}
 */

function quicksort(array, l, r) {

    var index;

    if (array.length > 1) {

        index = _partition(array, l, r);

        if (l < index - 1) {
            quicksort(array, l, index - 1);
        }

        if (index < r) {
            quicksort(array, index, r);
        }
    }

    return array;
}
