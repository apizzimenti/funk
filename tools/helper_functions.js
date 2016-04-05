/**
 * Created by apizzimenti on 4/4/16.
 */

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
