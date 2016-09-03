/**
 * Created by apizzimenti on 9/3/16.
 */

/**
 * @author Anthony Pizzimeti
 *
 * @desc Sorts the elements of the array and groups them in place. Does not apply typechecking, so values will be
 * coerced.
 *
 * @param a {Array} Array to be grouped.
 *
 * @returns {*}
 */

f.groupByValue = function (a) {
    
    this.throwError(a);
    
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
};
