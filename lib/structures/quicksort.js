/**
 * Created by apizzimenti on 4/4/16.
 */

/**
 * @author Anthony Pizzimenti
 * @desc Compartmentalized swap method for _quicksort.
 * @param {Array} array Array to have values swapped.
 * @param {number} first Index of lower value.
 * @param {number} second Index of higher value.
 * @returns {undefined}
 * @private
 */
function _swap (array, first, second) {
    var temp = array[first];
    array[first] = array[second];
    array[second] = temp;
}

/**
 * @author Anthony Pizzimenti
 * @desc Sorts partitions of inputted array.
 * @param {Array} partition Partition to be sorted.
 * @param {number} l Lower index.
 * @param {number} r Upper index.
 * @returns {number} End position of partition after sorting.
 * @private
 */
function _partition (partition, l, r) {

    var piv = partition[Math.floor((l + r) / 2)],
        i = l,
        j = r;

    while (i <= j) {

        while (partition[i] < piv) {
            i++;
        }

        while (partition[j] > piv) {
            j--;
        }

        if (i <= j) {
            _swap(partition, i, j);
            i++;
            j--;
        }
    }

    return i;
}


/**
 * @author Anthony Pizzimenti
 * @desc An implementation of quicksort.
 * @param {Array} array Array to be sorted.
 * @param {number} l Leftmost index in current sort range.
 * @param {number} r Rightmost index in current sort range.
 * @returns {Array} Sorted array.
 */
function quicksort (array, l, r) {
    
    if (r == undefined || l == undefined) {
        console.warn("Missing one or both sort boundaries.");
    }

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

module.exports = quicksort;
