/**
 * Created by apizzimenti on 9/2/16.
 */

/**
 * @author Anthony Pizzimenti
 *
 * @desc Intakes the provided array, sorts it, and checks its end indices for blank, undefined, or null members.
 *
 * @param a {*[]} Array to be searched.
 *
 * @returns {boolean} Does the array contain any blank, undefined, or null members?
 *
 * @memberOf f
 *
 * @this f
 */

f.containsBlank = function (a) {
    
    this.throwError(a);
    this.lastArray = a.slice();
    
    var blank = false;
    
    if (a.length < 23) {
        a.sort();
    } else {
        a = quicksort(a, 0, a.length - 1);
    }
    
    if (a[0] === "" || a[a.length - 1] === null || a[a.length - 1] === undefined) {
        blank = true;
    }
    
    return blank;
};
