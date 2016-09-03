/**
 * Created by apizzimenti on 9/3/16.
 */

/**
 * @author Anthony Pizzimenti
 *
 * @desc Transforms the provided array to a doubly linked list.
 *
 * @param a {Array} Array to be transformed.
 *
 * @this f
 *
 * @returns {dList}
 */

f.dList = function (a) {
    
    var d = new dList();
    
    for (var i = 0; i < a.length; i++) {
        
        if (i === 0) {
            d.addToHead(a[i]);
        } else {
            d.addToTail(a[i]);
        }
    }
    
    return d;
};
