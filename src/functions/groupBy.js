/**
 * Created by apizzimenti on 5/8/16.
 */

/**
 * @summary Groups the values of the array in place by step; groups array values into groups of size step.
 *
 * @param a {*[]} Array to be grouped.
 * @param step {Number} Group size.
 *
 * @returns {Array}
 *
 * @example
 * var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 * groupByStep(a, 3)
 * // [ [1, 2, 3], [4, 5, 6], [7, 8, 9], [10] ]
 *
 * var b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
 *     c = groupByStep(b, 2)
 * // [ [1, 2], [3, 4], [5, 6], [7, 8], [9, 10] ]
 */

var groupBy = function (a, step) {
    
    const right = a.length % step,
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

f.groupBy
