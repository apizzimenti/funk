#!/usr/bin/env node

/**
 * Created by apizzimenti on 4/2/16.
 */

/**
 * @ignore
 */

var h = require('./tools/helper_functions');

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

var removeIndex = function (index) {
    var indices = Array.isArray(index) ? index : [index],
        greatest_val = h._quicksort(indices, 0, indices.length - 1)[indices.length - 1];

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

var removeValue = function (value) {
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

/**
 * @summary Groups the values of the array by step; groups array values into groups of size step.
 *
 * @param step {Number} size of group
 *
 * @this {Array} current Array object
 *
 * @returns {Array}
 *
 * @since 1.1.6
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

var groupByStep = function (step) {

    const right = this.length % step,
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
