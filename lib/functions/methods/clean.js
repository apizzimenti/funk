/**
 * Created by apizzimenti on 11/12/16.
 */

/**
 * @author Anthony Pizzimenti
 *
 * @desc Removes all duplicates from the specified array.
 *
 * @param array {Array} Array to be cleaned.
 * @param check {boolean} Strict types with comparisons?
 *
 * @returns {Array}
 *
 * @this f
 *
 * @example
 *
 * var a = [1, 2, 3, 4, 5, "2", "3"];
 * f.clean(a)
 * // a = [1, "2", "3", 4, 5]
 *
 * var b = [1, 2, 3, 4, 5, "2", "3"];
 * f.clean(b, true);
 * // b = [1, "2", 2, 3, "3", 4, 5]
 */

f.clean = function (array, check) {
    
    // sort array so index checking is easier
    quicksort(array, 0, array.length - 1);
    
    // initialize indexer
    var i = 0;
    
    while (i < array.length) {
        
        if (f.equalWithCheck(a[i], a[i + 1], check)) {
            // if adjacent indices are the same, remove next element and don't increase index
            f.removeIndex(array, i + 1);
            continue;
        }
        
        i++;
    }
    
    return array;
};
