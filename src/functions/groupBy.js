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
