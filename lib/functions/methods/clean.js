/**
 * Created by apizzimenti on 11/12/16.
 */

var quicksort = require("../../structures").quicksort,
    equalWithCheck = require("./equalWithCheck"),
    removeIndex = require("./removeIndex");

/**
 * @author Anthony Pizzimenti
 * @desc Removes all duplicates from the specified array.
 * @param {Array} array Array to be cleaned
 * @param {boolean} check Strict types with comparisons?
 * @returns {Array} Cleaned array.
 * @memberof methods
 */
function clean (array, check) {
    
    // sort array so index checking is easier
    quicksort(array, 0, array.length - 1);
    
    // initialize indexer
    var i = 0;
    
    while (i < array.length) {
        
        if (equalWithCheck(array[i], array[i + 1], check)) {
            // if adjacent indices are the same, remove next element and don't increase index
            removeIndex(array, i + 1);
            continue;
        }
        
        i++;
    }
    
    return array;
}

module.exports = clean;
