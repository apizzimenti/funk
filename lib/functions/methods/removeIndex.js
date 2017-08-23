/**
 * Created by apizzimenti on 5/8/16.
 */

/**
 * @memberof methods
 */

var quicksort = require("../../structures").quicksort,
    _throwError = require("./throwError");

/**
 * @author Anthony Pizzimenti
 * @desc Deletes value(s) from the specified index or list of indices in place.
 * @param {Array} a Array to have index removed.
 * @param {number | number[]}index index or list of indices to be deleted
 * @throws RangeError
 * @returns {Array} Array with specified index removed.
 * @memberof methods
 */
function removeIndex (a, index) {
    
    _throwError(a);
    this.lastArray = a.slice();
    
    var indices = Array.isArray(index) ? index : [index],
        greatest_val = quicksort(indices, 0, indices.length - 1)[indices.length - 1],
        amount_gone, i, k, curr_index, length;
    
    if (indices.length > a.length || greatest_val > a.length - 1) {
        
        throw new RangeError();
        
    } else {
        
        amount_gone = 0;
        
        for (i = 0; i < indices.length; i++) {
            curr_index = indices[i] - amount_gone;
            length = a.length;
            
            for (k = curr_index; k < length - 1; k++) {
                a[k] = a[k + 1];
            }
            
            delete a[length - 1];
            a.length = length - 1;
            amount_gone++;
        }
    }
    
    return a;
}

module.exports = removeIndex;
