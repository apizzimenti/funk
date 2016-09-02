/**
 * Created by apizzimenti on 5/8/16.
 */

/**
 * @author Anthony Pizzimenti
 *
 * @desc Deletes value(s) from the specified index or list of indices in place.
 *
 * @param a {*[]} Array to have index removed.
 * @param index {Number | Number[]} index or list of indices to be deleted
 *
 * @throws RangeError
 * @returns {Array}
 *
 * @this f
 *
 * @example
 * var a = [1, 2, 3, 4, 5];
 * f.removeIndex(a, 2)
 * // [ 1, 2, 4, 5 ]
 *
 * var b = [1, 2, 3, 4, 5];
 * f.removeIndex(b, [0, 1, 2]);
 * // [ 4, 5 ]
 *
 *
 * var c = [1, 2, 3, 4, 5],
 *     d = f.removeIndex(c, 2);
 * // [ 1, 2, 4, 5 ]
 */

f.removeIndex = function (a, index) {
    
    this.lastArray = a.slice();
    
    var indices = Array.isArray(index) ? index : [index],
        greatest_val = quicksort(indices, 0, indices.length - 1)[indices.length - 1];
    
    if (indices.length > a.length || greatest_val > a.length - 1) {
        
        throw new RangeError();
        
    } else {
        
        var amount_gone = 0;
        
        for (var i = 0; i < indices.length; i++) {
            var curr_index = indices[i] - amount_gone,
                length = a.length;
            
            for (var k = curr_index; k < length - 1; k++) {
                a[k] = a[k + 1];
            }
            
            delete a[length - 1];
            a.length = length - 1;
            amount_gone++;
        }
    }
    
    return a;
};
