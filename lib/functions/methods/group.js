/**
 * Created by apizzimenti on 5/8/16.
 */

var _throwError = require("./throwError");

/**
 * @author Anthony Pizzimenti
 * @desc Groups the values of the array in place by step; groups array values into groups of size step.
 * @param {Array} a Array to be grouped.
 * @param {number} step Group size.
 * @returns {Array} Array grouped by step size.
 * @memberof methods
 */
function group (a, step) {

    _throwError(a);
    this.lastArray = a.slice();
    
    const right = a.length % step;
    const last_length = a.length - right;
    
    var step_array = [],
        last_array = [],
        index = 0,
        i, j, k;
    
    for (i = 0; i < last_length; i++) {
        
        step_array.push(a[i]);
        index = Math.floor((i + 1) / step) - 1;
        
        if ((i + 1) % step === 0) {
            
            a[index] = step_array;
            step_array = [];
        }
    }
    
    for (j = last_length; j < a.length; j++) {
        last_array.push(a[j]);
        delete a[j];
    }
    
    a.length = last_length;
    
    for (k = last_length - last_array.length; k < last_length; k++) {
        delete a[k];
    }
    
    a.length = a.length / step;
    
    if (last_array.length > 0) {
        a.push(last_array);
    }
    
    return a;
}

module.exports = group;
