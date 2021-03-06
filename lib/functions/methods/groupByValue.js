/**
 * Created by apizzimenti on 9/3/16.
 */

var _throwError = require("./throwError"),
    quicksort = require("../../structures").quicksort;

/**
 * @author Anthony Pizzimeti
 * @desc Sorts the elements of the array and groups them in place. Does not apply typechecking, so values will be coerced.
 * @param {Array} a Array to be grouped.
 * @returns {Array} Array grouped by individual values.
 * @memberof methods
 * @todo implement in O(n) complexity with a while loop
 */
function groupByValue (a) {

    _throwError(a);

    if (a.length > 23) {
        a = quicksort(a, 0, a.length - 1);
    } else {
        a = a.sort();
    }
    
    var i = 0,
        j = 0,
        refArray = [],
        refIndex = 0;
    
    for (i = 0; i < a.length; i++) {
        
        if (a[i] == a[i + 1]) {
            refArray.push(a[i]);
        } else {
            refArray.push(a[i]);
            a[refIndex] = refArray;
            refIndex++;
            
            if (i == a.length - 2 && refArray.length != 0) {
                a[refIndex] = [a[i + 1]];
                break;
            }
            
            refArray = [];
            
        }
    }
    
    for (j = 0; j < a.length; j++) {
        
        if (!Array.isArray(a[j])) {
            delete a[j];
            a.length--;
        }
    }
    
    return a;
}

module.exports = groupByValue;
