#!/usr/bin/env node

/**
 * Created by apizzimenti on 4/2/16.
 */

function quicksort(array, l, r) {

    var index;

    if (array.length > 1) {

        index = partition(array, l, r);

        if (l < index - 1) {
            quicksort(array, l, index - 1);
        }

        if (index < r) {
            quicksort(array, index, r);
        }
    }

    return array;

}

function swap(array, first, second) {
    var temp = array[first];
    array[first] = array[second];
    array[second] = temp;
}

function partition(array, l, r) {
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
            swap(array, i, j);
            i++;
            j--;
        }
    }

    return i;

}
Array.prototype.removeIndex = function (index) {
    var indices = Array.isArray(index) ? index : [index],
        greatest_val = quicksort(indices, 0, indices.length - 1);

    if (indices.length > this.length || greatest_val[indices.length - 1] > this.length) {

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
};

Array.prototype.removeValue = function (value) {
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
};

module.exports = {
    removeIndex: Array.prototype.removeIndex,
    removeValue: Array.prototype.removeValue
};